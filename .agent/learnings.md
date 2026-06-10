# Project Learnings: Envíos Dos Ruedas

## Architecture
- Next.js 16.2.7 + React 19 environment.
- Tailwind CSS v4 configured via `@theme` in `globals.css`.
- Prisma 7.8.0 for PostgreSQL data management.

## Design System
- Industrial Brutalist aesthetic: Sharp corners, Deep Blue (#0c32a0), Velocity Gold (#ffec00), Technical White (#ffffff).
- Custom `glass-panel` utility and `brutalist-card` components.

## Verification
- Playwright captures 52 snapshots across 13 routes and 4 breakpoints.
- Routes: Home, Contacto, Express, Flex, Lowcost, Plan Emprendedores, Sobre Nosotros, FAQ, Redes, Terminos, Privacidad, Cotizar Express, Cotizar Lowcost.

## Key Patterns
- Colocated components in `src/components/` mirroring `src/app/` structure.
- Server components for root pages, client components for interactivity.
