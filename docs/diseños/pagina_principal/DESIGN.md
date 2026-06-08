---
name: Envios Dosruedas
colors:
  surface: '#12131a'
  surface-dim: '#12131a'
  surface-bright: '#383941'
  surface-container-lowest: '#0d0e15'
  surface-container-low: '#1a1b22'
  surface-container: '#1e1f26'
  surface-container-high: '#292931'
  surface-container-highest: '#33343c'
  on-surface: '#e3e1ec'
  on-surface-variant: '#cdc7ab'
  inverse-surface: '#e3e1ec'
  inverse-on-surface: '#2f3038'
  outline: '#969178'
  outline-variant: '#4b4732'
  surface-tint: '#dec800'
  primary: '#fff8e0'
  on-primary: '#373100'
  primary-container: '#f5dd0a'
  on-primary-container: '#6c6100'
  inverse-primary: '#6a5f00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#faf7ff'
  on-tertiary: '#00139f'
  tertiary-container: '#d7d9ff'
  on-tertiary-container: '#3649ef'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fce41a'
  primary-fixed-dim: '#dec800'
  on-primary-fixed: '#201c00'
  on-primary-fixed-variant: '#504700'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bdc2ff'
  on-tertiary-fixed: '#000965'
  on-tertiary-fixed-variant: '#0b24d7'
  background: '#12131a'
  on-background: '#e3e1ec'
  surface-variant: '#33343c'
typography:
  display-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Bebas Neue
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.08em
  mono-label:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2.5rem
  gutter: 1.5rem
  margin: 2rem
---

## Brand & Style

This design system is engineered for a premium tech logistics brand that balances high-density industrial efficiency with the sophisticated aesthetic of a high-end design studio. The brand personality is clinical, precise, and authoritative, but evolves into a more aggressive, high-contrast visual language.

The visual direction follows a **High-Contrast Modernist** approach with a focus on impact and functional density. It prioritizes clarity and speed, evoking an emotional response of reliability and "calm under pressure." The UI utilizes deep, near-black zinc tones to create a sense of depth, punctuated by high-vibrancy neon accents and bold, condensed typography.

## Colors

The palette is anchored by a deep Zinc-950 background, ensuring a high-end feel that is softer and more sophisticated than pure black. 

- **Primary (Electric Yellow):** A high-visibility technical yellow (#f5dd0a) used for critical actions, status indicators, and highlights. It provides an energetic industrial feel.
- **Secondary (Crisp White):** Reserved for primary text and high-importance UI elements to ensure maximum legibility and contrast.
- **Tertiary (Cobalt Blue):** A deep, functional blue (#0923d6) used for secondary interactive states, links, or specific data visualizations.
- **Surface & Neutrals:** A range of Zinc grays creates hierarchy through tonal layering. Border colors should utilize a subtle $27272a to maintain structure.

## Typography

The typographic system uses a high-contrast pairing of fonts to reinforce the industrial-studio aesthetic.

- **Headlines (Anton):** A bold, condensed sans-serif used for high-impact displays and section headers. Use tight letter-spacing to create a strong vertical rhythm.
- **Body (Geist):** A modern, geometric sans-serif optimized for legibility in high-density data environments.
- **Labels (Bebas Neue):** All-caps styles with increased tracking are used for metadata, status tags, and industrial identifiers.
- **Readability:** High contrast (White on Zinc-950) is maintained for all body text. Secondary information uses Zinc-400 to de-emphasize non-critical data.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a 12-column grid system that maintains a maximum width of 1440px on desktop, while allowing background surfaces to bleed to the edges.

- **Density:** Spacing is compact to allow for large data sets typical of logistics tools. A 4px baseline grid ensures alignment across all components.
- **Mobile:** Margins shrink to 1rem (16px). Grids collapse to a single column, with high-priority data points surfaced in horizontal "scrollers" or compact cards.
- **Gaps:** Standardize on 24px (1.5rem) for major component gaps to prevent the UI from feeling claustrophobic despite high information density.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** rather than heavy shadows. The background is #09090b. 

- **Level 1 (Base):** Zinc-950 (#09090b).
- **Level 2 (Containers):** Zinc-900 (#18181b) with a 1px border of #27272a.
- **Level 3 (Popovers/Modals):** Zinc-800 (#27272a) with a subtle, low-opacity ambient shadow (Black, 40% opacity, 20px blur).

Interactive elements use high-contrast primary borders (#f5dd0a) or cobalt blue accents to indicate active states or focus.

## Shapes

The shape language is "Balanced Modern." A standard 8px (0.5rem) radius is applied to small components like buttons and inputs. Larger containers like cards use 16px (1rem) to create a softer, more premium aesthetic.

- **Buttons:** 8px corner radius.
- **Cards/Modules:** 16px corner radius.
- **Inputs:** 8px corner radius.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from interactive buttons.

## Components

- **Buttons:** Primary buttons are Solid Electric Yellow (#f5dd0a) with Black text and Anton typography. Secondary buttons are Outline Zinc-700 with White text. Ghost buttons are reserved for low-priority utility actions.
- **Input Fields:** Dark Zinc-900 backgrounds with 1px Zinc-800 borders. On focus, the border transitions to Electric Yellow with a subtle 2px glow.
- **Cards:** Utilize the Level 2 elevation (Zinc-900). Dividers between card content sections should be Zinc-800, 1px thick.
- **Chips/Status Tags:** Use Bebas Neue typography. Active statuses utilize a low-opacity background tint of the status color with a high-contrast solid border.
- **Data Tables:** High-density, no vertical borders. Horizontal borders only (Zinc-800). Header rows should use uppercase Bebas Neue typography.
- **Motion:** Subtle, fast transitions (150ms-200ms) for hover states and transitions. Use "Ease-Out" to simulate a high-performance, responsive engine.