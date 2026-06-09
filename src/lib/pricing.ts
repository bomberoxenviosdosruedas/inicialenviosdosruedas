import { prisma } from "./db";
import { ServiceTypeEnum } from "@/generated/prisma/client";

export interface QuoteRequest {
  origin: string;
  destination: string;
  serviceType: ServiceTypeEnum;
}

export interface QuoteResult {
  distanceKm: number;
  durationMin: number;
  price: number;
  serviceType: ServiceTypeEnum;
  originGeo?: { lat: number; lng: number };
  destinationGeo?: { lat: number; lng: number };
  routePoints?: [number, number][]; // lat, lng pairs for plotting on a map
}

// Fallback simulator for geocoding and routing within Mar del Plata
// Mar del Plata coordinates center: -38.0055, -57.5426
function getSimulatedRoute(origin: string, destination: string): {
  distanceKm: number;
  durationMin: number;
  originGeo: { lat: number; lng: number };
  destinationGeo: { lat: number; lng: number };
} {
  // Simple hashing function to generate consistent coordinates for a given address
  const hashString = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  // Base coordinates for MDP (Mar del Plata)
  const baseLat = -38.0055;
  const baseLng = -57.5426;

  // Generate offsets between -0.05 and +0.05 degrees (approx 5km radius)
  const hashO = hashString(origin);
  const latO = baseLat + ((hashO % 100) - 50) / 1000;
  const lngO = baseLng + (((hashO >> 3) % 100) - 50) / 1000;

  const hashD = hashString(destination);
  const latD = baseLat + ((hashD % 100) - 50) / 1000;
  const lngD = baseLng + (((hashD >> 3) % 100) - 50) / 1000;

  // Haversine distance
  const R = 6371; // Earth radius in km
  const dLat = ((latD - latO) * Math.PI) / 180;
  const dLng = ((lngD - lngO) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((latO * Math.PI) / 180) *
      Math.cos((latD * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distance = R * c;

  // Ensure distance is within a realistic range for MDP (e.g. 1.5 to 18 km)
  if (distance < 1.5) distance = 1.5 + (hashO % 15) / 10;
  distance = parseFloat(distance.toFixed(2));

  // 1 km takes about 2.5 minutes in traffic
  const duration = Math.round(distance * 2.5 + (hashO % 5));

  return {
    distanceKm: distance,
    durationMin: duration,
    originGeo: { lat: latO, lng: lngO },
    destinationGeo: { lat: latD, lng: lngD },
  };
}

export async function calculateQuote(req: QuoteRequest): Promise<QuoteResult> {
  const { origin, destination, serviceType } = req;

  // 1. Get distance and duration (simulated or via Google Maps API if available)
  let route = getSimulatedRoute(origin, destination);

  if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY !== "YOUR_API_KEY") {
    try {
      // In a real production build, you'd fetch from Google Maps Distance Matrix API:
      // const res = await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}+Mar+del+Plata&destinations=${encodeURIComponent(destination)}+Mar+del+Plata&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`);
      // const data = await res.json();
      // ... parse data
    } catch (e) {
      console.warn("Google Maps API failed, falling back to simulator:", e);
    }
  }

  // 2. Fetch the corresponding pricing rules from DB
  const priceRanges = await prisma.priceRange.findMany({
    where: {
      serviceType,
      isActive: true,
    },
  });

  if (priceRanges.length === 0) {
    throw new Error(`No active price ranges found for service type: ${serviceType}`);
  }

  // 3. Compute price based on distance
  let price = 0;
  const matchedRange = priceRanges.find(
    (r) =>
      route.distanceKm >= Number(r.distanciaMinKm) &&
      route.distanceKm <= Number(r.distanciaMaxKm)
  );

  if (matchedRange) {
    price = Number(matchedRange.precioRango);
  } else {
    // If distance is higher than maximum range (typically >= 10 km)
    // Find the range with the highest distanceMaxKm
    const highestRange = priceRanges.reduce((prev, current) =>
      Number(prev.distanciaMaxKm) > Number(current.distanciaMaxKm) ? prev : current
    );

    if (route.distanceKm >= Number(highestRange.distanciaMinKm)) {
      // It's in the 10+ range, so price is: distance * rate (precioRango)
      price = Math.round(route.distanceKm * Number(highestRange.precioRango));
    } else {
      // Fallback
      price = 5000;
    }
  }

  return {
    distanceKm: route.distanceKm,
    durationMin: route.durationMin,
    price,
    serviceType,
    originGeo: route.originGeo,
    destinationGeo: route.destinationGeo,
  };
}
