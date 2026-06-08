## Brand & Style
This design system embodies a high-performance, industrial aesthetic inspired by technical blueprints and athletic intensity. It is designed for maximum legibility and impact, utilizing a high-contrast palette to ensure clarity in fast-paced or data-heavy environments. 

The style is **Industrial Brutalism**: it rejects soft aesthetics in favor of raw, sharp edges, heavy borders, and structural grids. The UI should feel like a precision instrument—functional, unapologetic, and authoritative. Every element is built on a foundation of "form follows function," evoking an emotional response of reliability and urgency.

## Colors
The palette is restricted to a high-contrast triadic relationship to maintain a technical "Velocity" feel. 

- **Deep Royal Blue (#0c32a0):** Acts as the primary substrate. It provides a deep, stable environment for high-visibility data.
- **Velocity Yellow (#ffec00):** Reserved for primary actions, critical highlights, and interactive states. It should "pierce" through the blue background.
- **Pure White (#ffffff):** Used for primary typography and structural line work to ensure AA/AAA accessibility.

Avoid gradients, tints, or shades. Use opacity for secondary information rather than introducing new hex codes.

## Typography
Typography is utilized as a structural element. 
- **Anton** is the "Impact" face. Use it for massive, uppercase headlines that command attention. 
- **Archivo Narrow** provides the "Technical" backbone. Its condensed nature allows for high data density without sacrificing readability.

All headers should be uppercase. Technical data and labels should utilize increased letter-spacing to enhance the blueprint aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** model based on an 8px technical rhythm. 

- **Technical Grid:** Backgrounds should feature a subtle 8px or 16px grid overlay (1px strokes at 5-10% opacity) to reinforce the blueprint feel.
- **Margins & Gutters:** Use a strict 12-column system for desktop with 16px gutters. Mobile scales to a 4-column system with 16px margins.
- **Density:** Elements should be tightly packed but aligned to the grid, prioritizing information density over "breathability."

## Elevation & Depth
Depth is created through **Structural Layering** and **High-Contrast Outlines** rather than shadows.

1.  **Base Layer:** Solid Deep Royal Blue with a subtle technical grid.
2.  **Raised Elements:** Defined by a 1px or 2px Pure White or Velocity Yellow border. 
3.  **No Soft Shadows:** Depth is binary. An element is either on the base or "cut out" of the surface.
4.  **Interaction Depth:** When an element is pressed or active, it should invert (e.g., Yellow background with Blue text) to show state change instantly.

## Shapes
The shape language is strictly **Sharp**. 
- Corner radius is 0px across all components (Buttons, Cards, Inputs).
- Use 45-degree angled corners (chamfers) sparingly for "Status Tags" or "Tabs" to reinforce the industrial hardware aesthetic.
- Dividers should be solid 1px or 2px lines.

## Components
- **Buttons:** Solid Velocity Yellow background with Blue Anton text for Primary. Outline White with White text for Secondary. All buttons use 0px radius.
- **Inputs:** Blue background with a 1px White bottom border or full 1px White frame. Labels are always Archivo Narrow in uppercase.
- **Data Cards:** 1px White border, no fill change from the background. Headers within cards should have a solid White or Yellow "Title Bar" with Blue text.
- **Technical Chips:** Small, rectangular tags with solid borders. Use Velocity Yellow for active "Running" states.
- **Status Indicators:** Use geometric icons (Squares, Triangles, Diamonds) instead of soft circles.
- **Scrollbars:** Custom thin, 4px square-edge tracks in Velocity Yellow to ensure they are visible against the dark blue.