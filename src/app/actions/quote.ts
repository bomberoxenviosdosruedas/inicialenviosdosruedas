"use server";

import { calculateQuote, QuoteResult } from "@/lib/pricing";
import { ServiceTypeEnum } from "@/generated/prisma/client";

export interface SafeQuoteRequest {
  origin: string;
  destination: string;
  serviceType: "EXPRESS" | "LOW_COST" | "PUNTO_DE_RETIRO";
}

export async function getQuoteAction(req: SafeQuoteRequest): Promise<{ success: boolean; data?: QuoteResult; error?: string }> {
  try {
    if (!req.origin || req.origin.trim() === "") {
      return { success: false, error: "El punto de origen es obligatorio." };
    }
    if (!req.destination || req.destination.trim() === "") {
      return { success: false, error: "El punto de destino es obligatorio." };
    }

    // Map string to database enum safely on the server side
    let dbServiceType: ServiceTypeEnum;
    if (req.serviceType === "EXPRESS") {
      dbServiceType = ServiceTypeEnum.EXPRESS;
    } else if (req.serviceType === "LOW_COST") {
      dbServiceType = ServiceTypeEnum.LOW_COST;
    } else {
      dbServiceType = ServiceTypeEnum.PUNTO_DE_RETIRO;
    }

    const quote = await calculateQuote({
      origin: req.origin,
      destination: req.destination,
      serviceType: dbServiceType
    });
    
    return { success: true, data: quote };
  } catch (error: any) {
    console.error("Error in getQuoteAction:", error);
    return { success: false, error: error?.message || "Error al calcular la cotización." };
  }
}
