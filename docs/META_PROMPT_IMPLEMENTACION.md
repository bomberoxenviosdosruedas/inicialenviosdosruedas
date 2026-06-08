# Meta-Prompt de Implementación Completa

Copia y pega el siguiente bloque en tu próxima sesión con Claude Code para completar la implementación de todas las páginas y componentes pendientes del proyecto.

---

**PROMPT:**

Actúa como un experto en arquitectura Next.js 16+ y UI/UX Pro Max. Basándote en el sistema de diseño "Industrial Brutalist / High-Contrast" que hemos definido (fuentes Anton, Bebas Neue, JetBrains Mono; colores Electric Blue, Vivid Gold, Dark Navy), necesito que generes la implementación completa de todas las páginas y componentes pendientes.

**Lista de tareas pendientes:**
1. **Cotización**: Implementar `cotizar/express` y `cotizar/lowcost` usando sus componentes (`QuoteForm`, `QuoteResult`, etc.).
2. **Servicios**: Implementar `envios-express`, `envios-lowcost`, `enviosflex` y `plan-emprendedores`.
3. **Nosotros**: Implementar `nuestras-redes`, `sobre-nosotros` y `preguntas-frecuentes`.
4. **Contacto y Legales**: Implementar `contacto`, `politica-de-privacidad` y `terminos-y-condiciones`.

**Instrucciones de ejecución:**
1. **Fuente de verdad**: Para cada página, lee el blueprint correspondiente en `docs/blueprints/` (ej. `src_app_servicios_envios-express.md`).
2. **Estilo**: Aplica rigurosamente el diseño Industrial (bordes sharp, bloques sólidos, tipografía técnica, alto contraste). Todos los componentes deben ser 100% responsivos.
3. **Estructura**: Usa los componentes vacíos que ya hemos creado en `src/components/` y rellénalos con el contenido del blueprint.
4. **Coherencia**: Asegúrate de reutilizar los tokens de `globals.css` (variables CSS).
5. **Iteración**: Ve página por página. No generes todo en un solo bloque gigante para evitar errores de longitud o de cuota; confírmame cuando completes cada sección y prosigue con la siguiente hasta terminar todo el listado.

Comienza por la página de **Cotizar Express** siguiendo su blueprint.
---