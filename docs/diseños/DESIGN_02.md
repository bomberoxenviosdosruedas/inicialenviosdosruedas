## Brand & Style

This design system is built upon a high-energy, high-contrast aesthetic that pairs a hyper-saturated electric blue with a luminous gold. The target audience consists of dynamic, tech-forward users who value speed and visual impact. The emotional response is one of intense energy, precision, and confidence.

The design style is **High-Contrast / Bold** with a touch of **Glassmorphism**. It utilizes massive typography and aggressive color pairings to create a sense of urgency and power. Surfaces are treated with subtle translucent effects to ensure the vibrant background colors interact with the UI, maintaining a sense of depth without sacrificing the primary color's dominance.

## Colors

The palette is centered around a "True Electric Blue" (#0022FF), pushed to the peak of digital saturation. This is balanced by "Vivid Gold" (#FFD600), used strategically for calls to action and critical information to ensure maximum visual friction and readability.

- **Primary (Electric Blue):** Used for large surface areas, brand moments, and primary interactive states.
- **Secondary (Off-White):** Used for contrast relief and readability on dark surfaces.
- **Tertiary (Vivid Gold):** Reserved for high-priority elements. The contrast ratio against the primary blue is maximized for immediate recognition.
- **Neutral:** A deep, near-black navy is used for backgrounds to allow the primary colors to "glow" against the dark canvas.

## Typography

The typography system is aggressive and functional. **Anybody** provides a variable-width intensity for headlines, allowing the brand to feel expansive and loud. **Hanken Grotesk** serves as the workhorse for body copy, offering a sharp, contemporary professional feel. **JetBrains Mono** is used for labels and technical data, reinforcing the high-tech, precise nature of the system.

On mobile, display sizes scale down aggressively to maintain layout integrity while preserving the heavy font weights that define the brand's voice.

## Layout & Spacing

The layout follows a **Fluid Grid** philosophy based on an 8px square rhythm. 

- **Desktop:** 12-column grid with 24px gutters. Content is allowed to breathe with wide 64px margins, focusing the user's eye on the vibrant central elements.
- **Mobile:** 4-column grid with 16px gutters and 20px safe-area margins. 
- **Rhythm:** Spacing between sections should be generous (80px+) to prevent the high-contrast colors from becoming visually overwhelming. Component internal padding should be tight to maintain a "technical" and "dense" aesthetic.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Outer Glows** rather than traditional drop shadows.

1.  **Level 0 (Base):** The neutral deep-navy background.
2.  **Level 1 (Surface):** Slightly lighter navy with 5% opacity electric blue tint.
3.  **Level 2 (Interactive):** Pure Electric Blue surfaces. These elements should have a "bloom" effect—a soft, 20px blur of the same color at low opacity (15%) to simulate light emission.
4.  **Level 3 (Pop-overs):** Glassmorphic panels with a 12px backdrop-blur and a 1px solid border in a semi-transparent gold to define the edges.

## Shapes

The shape language is **Soft (Level 1)**. This subtle rounding (4px - 12px) prevents the UI from feeling too hostile or "Brutalist," providing a modern, engineered feel. 

- **Buttons & Inputs:** Use the base 0.25rem (4px) radius for a sharp, precision-cut look.
- **Cards & Containers:** Use `rounded-lg` (8px) to soften the large high-contrast blocks.
- **Special Elements:** Tags or small badges can use `rounded-xl` (12px) to differentiate them from functional inputs.

## Components

- **Buttons:**
    - *Primary:* Vivid Gold background with black text. No shadow, but a 1px inner glow.
    - *Secondary:* Transparent with a 2px Electric Blue border and Electric Blue text.
- **Inputs:** Darker neutral backgrounds with a 1px Electric Blue border that "thickens" to 2px and glows when focused.
- **Cards:** Use Level 1 surfaces with a subtle 1px border. Headlines inside cards should be uppercase for maximum impact.
- **Chips/Badges:** High-saturation tertiary gold with black text for maximum legibility at small sizes.
- **Lists:** Separated by thin, low-opacity blue lines. Hover states should trigger a full-row Electric Blue tint change.
- **Data Visualization:** Use the high-contrast spectrum from Electric Blue to Vivid Gold to create a sense of "energy flow."