# Design System de Envíos DosRuedas

> Categoría: Logística Profesional & E-commerce (Tech-Logistics)
> Estética Dark-Theme de plataforma en la nube, con retículas modulares, paneles oscuros translúcidos (glassmorphism) y fuerte jerarquía de datos orientada al rendimiento y precisión urbana.

## 1. Tema Visual y Atmósfera (Configuración Global)

Configuración base definida en `src/app/globals.css` y orquestada por el layout principal `src/app/layout.tsx`. El sistema utiliza Tailwind CSS a través de `@tailwindcss/postcss` configurado en `postcss.config.mjs`.

- **Estilo Visual:** Moderno, industrial-tecnológico, de plataforma corporativa. Tema oscuro (Dark Theme) predominante, gradientes sutiles para delimitar zonas (ej. `bg-gradient-to-t from-[#09090B]`), bordes técnicos (`border-zinc-800`), e interfaces que evocan software de monitoreo satelital.
- **Postura Cromática:** Azul corporativo, neutrales oscuros (Zinc), acentos de alerta (Amarillo/Rojo) y éxito (Verde).
- **Intención de Diseño:** Proyectar la solidez de una infraestructura de software combinada con la agilidad física del reparto urbano (Precisión en Movimiento).

## 2. Paleta de Colores (Tokens Globales)

Definidos en la configuración de Tailwind y variables globales:

- **Primary (Core Blue):** `#0C5CAB` — Utilizado para botones de acción principal, iconos clave y énfasis de marca.
- **Secondary (Dark Blue):** `#0A4A8A` — Estados de hover para interacciones primarias y gradientes.
- **Warning/Accent (Velocity Yellow):** `#F59E0B` — Utilizado para acciones de alta prioridad (Cotizaciones Express), etiquetas de "En tránsito" o atención inmediata.
- **Success (Green):** `#10B981` — Indicadores de entrega completada o planes económicos.
- **Danger (Red):** `#EF4444` — Indicadores de error o mensajes de alerta ("Conecta con nosotros").
- **Surface (Core Dark):** `#09090B` — El fondo global definido en `<main>` dentro de `layout.tsx`. Fondo absoluto para dar contraste.
- **Surface Muted:** `bg-zinc-900/50` o `bg-zinc-950` — Paneles superpuestos y tarjetas de servicio.
- **Text (Light):** `#FAFAFA` — Texto principal, garantizando máxima legibilidad sobre fondos oscuros.
- **Text Muted:** `text-zinc-400` / `text-zinc-300` — Para descripciones secundarias y copy de soporte.

## 3. Tipografía (Importada en globals.css / layout.tsx)

Sistema tipográfico enfocado en la lectura a distancia y la presentación de métricas:

- **Escala de fuentes:** Manejada fluidamente por Tailwind (text-xs a text-7xl).
- **Fuente Principal (Cuerpo/Datos):** `Geist` (Sans-serif) — Utilizada para descripciones de servicios, textos largos y números de seguimiento por su legibilidad técnica.
- **Fuente Display (Títulos de alto impacto):** `Anton` (Sans-serif, uppercase) — Utilizada en el `Hero` ("MENSAJERÍA Y LOGÍSTICA...") y títulos de sección (H2) para lectura instantánea.
- **Fuente Secundaria/Acento:** `Bebas Neue` (Cursive/Display) — Utilizada para etiquetas métricas, estados, e indicadores (ej. "PRECISIÓN EN MOVIMIENTO", "100% SEGURO").

## 4. Espaciado y Retícula (Grid System)

- **Retícula:** Basada en el sistema de Tailwind. Utilización constante de `container mx-auto px-6` definido en los layouts de sección para contener el contenido en anchos máximos consistentes.
- **Ritmo Vertical:** Separación estricta entre secciones usando clases como `py-24` o márgenes inferiores `mb-16` para los encabezados.
- **Composición de columnas:** Uso de CSS Grid (`grid-cols-1 md:grid-cols-3`) para catálogos de servicios, características ("Nuestra Visión") y footers.

## 5. Layout y Composición (`src/app/layout.tsx`)

- **Estructura Base:** El `RootLayout` envuelve toda la aplicación en un contenedor `<main>` con fondo oscuro (`bg-[#09090B]`) y texto claro (`text-[#FAFAFA]`).
- **Navegación y Cierre:** Incorporación semántica de componentes globales (`<Navbar />` fijado en la parte superior y `<Footer />` al final del documento).
- **Separación de responsabilidades:** El diseño prefiere bloques claros, separados por bordes técnicos (ej. `border-b border-zinc-800`), antes que sombras intensas.

## 6. Componentes

- **Botones:** - Primario: Fondo `#0C5CAB` con texto blanco, esquinas redondeadas estándar (`rounded-md`).
  - Acción Crítica (CTA): Fondo amarillo `#F59E0B` con texto oscuro (`text-zinc-950`).
  - Secundario: Bordes neutros (`border-zinc-700`) o transparentes con hover ligero.
- **Tarjetas (Cards):** Fondos traslúcidos (`bg-zinc-900/50`) o negros (`bg-[#09090B]`), bordes finos (`border-zinc-800`) que cambian al color primario en hover (`hover:border-[#0C5CAB]`).
- **Imágenes:** Optimizadas mediante `next/image` de Next.js, ocupando fondos completos con opacidades controladas (`opacity-20`, `mix-blend-overlay`) para no competir con el texto.

## 7. Movimiento e Interacción (Motion)

Orquestado principalmente vía cliente (`'use client';`) mediante Framer Motion:
- **Scroll Reveal:** Las secciones aparecen progresivamente ("fade-in-up") usando `initial={{ opacity: 0, y: 30 }}` y `whileInView={{ opacity: 1, y: 0 }}`.
- **Hover States:** Interacciones cortas (duration: 300ms). Escalado sutil en tarjetas (`hover:-translate-y-1` o `group-hover:scale-110` en imágenes).
- **Feedback Visual:** Transiciones suaves de opacidad e iluminación en bordes, indicando claramente la zona de interacción.

## 8. Voz y Tono de Marca

- **Tono:** Seguro, corporativo, literal, orientado a la acción y a la métrica ("Ventaja Injusta", "Precisión en movimiento", "Cotizar Envío").
- **Microcopy:** Directo y sin rellenos. Las etiquetas de interfaz priorizan la claridad técnica sobre el tono coloquial.
- **Mayúsculas (Uppercase):** Uso intensivo de mayúsculas en títulos y etiquetas (apoyado por fuentes como Anton y Bebas) para denotar autoridad.

## 9. Anti-patrones (Restricciones del Repositorio)

- **Evitar CSS tradicional en línea:** Toda configuración de estilos se maneja por clases utilitarias de Tailwind o en su defecto por plugins en el archivo `postcss.config.mjs`. El archivo `globals.css` solo debe contener directivas de `@tailwind` y fuentes importadas.
- **No introducir colores fuera de paleta:** Si se necesita un gris, utilizar la escala de `zinc` de Tailwind para mantener coherencia térmica con el fondo principal (`#09090B`).
- **No aplanar jerarquías:** Mantener siempre el contraste visual extremo: Títulos gigantes vs. Texto de soporte pequeño. 
- **No usar sombras difusas de colores vivos:** La estética *Tech-Logistics* requiere sombras oscuras o cortes duros (bordes), no efectos de brillo neón excesivo (Glow).a