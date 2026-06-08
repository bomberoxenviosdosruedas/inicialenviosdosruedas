# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure and Architecture

This is a Next.js 16+ project with a PostgreSQL database managed by Prisma.

- `src/`: Core source code.
- `prisma/`: Database schema definitions and migrations.
- `src/generated/prisma/`: Prisma client generated outputs.

The database uses PostgreSQL and includes models for `Post`, `User`, `PriceRange` (for service distance-based pricing), and `SocialPost` (for tracking social media integrations).

## Common Tasks

### Development
- **Run development server:** `npm run dev`
- **Lint:** `npm run lint`

### Database
- **Generate Prisma Client:** `npm run db:generate`
- **Push changes to DB:** `npm run db:push`
- **Run migrations:** `npm run db:migrate`
- **Seed database:** `npm run db:seed`
