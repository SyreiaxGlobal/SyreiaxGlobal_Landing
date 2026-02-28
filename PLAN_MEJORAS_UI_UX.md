# Plan de Mejoras UI/UX — Landing Page SYREIAX GLOBAL

> **Fecha:** 27 de febrero de 2026  
> **Basado en:** Auditoría crítica UI/UX de todos los componentes del proyecto  
> **Nota actual del proyecto:** 6/10  
> **Nota objetivo:** 9/10  
> **Tiempo estimado total:** 5-7 días (4-6 horas/día)

---

## Resumen Ejecutivo

Se identificaron **18 problemas** clasificados en 3 niveles de severidad (4 críticos, 8 moderados, 6 menores). Este plan los resuelve en **5 fases secuenciales**, priorizando funcionalidad rota, accesibilidad, y credibilidad visual. Cada fase incluye tareas atómicas, archivos afectados, criterios de validación y mejores prácticas aplicadas.

### Principios Rectores

1. **Mobile-first** — Toda corrección se valida primero en 320px.
2. **Progressive Enhancement** — Funcionalidad base sin JS, enriquecida con animaciones.
3. **WCAG AA** — Contraste 4.5:1 mínimo, navegación por teclado, `prefers-reduced-motion`.
4. **Performance Budget** — LCP < 2.5s, CLS < 0.1, no animaciones infinitas en viewport visible.
5. **Zero Dead UI** — Si un botón existe, debe hacer algo. Si un selector existe, debe cambiar algo.

---

## Fase 0: Correcciones Inmediatas (Día 1 — ~2-3 horas)

> **Objetivo:** Eliminar bugs técnicos que impiden que el CSS se renderice correctamente y corregir errores de configuración base.

### Tarea 0.1 — Corregir `lang="en"` → `lang="es"`

- **Archivo:** `index.html`
- **Problema:** Declara inglés pero todo el contenido es español. Afecta lectores de pantalla y SEO.
- **Acción:** Cambiar `<html lang="en">` por `<html lang="es">`.
- **Mejor práctica:** [WCAG 3.1.1 — Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

### Tarea 0.2 — Agregar `<meta name="theme-color">`

- **Archivo:** `index.html`
- **Acción:** Agregar `<meta name="theme-color" content="#0A1128">` en `<head>`.
- **Impacto:** Barra del navegador en mobile toma el color de la marca.

### Tarea 0.3 — Corregir clases Tailwind con valores de opacidad inválidos

- **Archivos:** `Footer.tsx`, `Hero.tsx`
- **Problema:** `bg-white/3`, `bg-white/6`, `border-white/8` no son válidos en Tailwind v3. Los valores de opacidad deben ser múltiplos de 5 (5,10,15...) o usar notación arbitraria `bg-white/[0.03]`.
- **Acciones:**
  - `bg-white/3` → `bg-white/[0.03]`
  - `bg-white/6` → `bg-white/[0.06]`
  - `border-white/8` → `border-white/[0.08]`
  - `from-white/6` → `from-white/[0.06]` (si existiera)
- **Mejor práctica:** Usar solo valores de opacidad estándar de Tailwind o notación de valor arbitrario con corchetes.

### Tarea 0.4 — Agregar `bg-gradient-radial` a Tailwind config

- **Archivos:** `tailwind.config.js`, `EcosystemGrid.tsx`, `RoadmapTimeline.tsx`
- **Problema:** `bg-gradient-radial` no existe en Tailwind por defecto.
- **Acción:** Extender la configuración de Tailwind:
  ```js
  // tailwind.config.js → theme.extend
  backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  },
  ```
- **Mejor práctica:** Extender Tailwind antes de usar utilidades personalizadas, nunca asumir que existen.

### Tarea 0.5 — Corregir clases Tailwind dinámicas rotas en MultiCTA

- **Archivo:** `MultiCTA.tsx`
- **Problema:** String interpolation con `${card.color.replace('bg-', '')}` genera clases como `via-[#FF6B35]/50` que Tailwind no puede purgar/generar en build.
- **Acción:** Reemplazar interpolación dinámica por un mapeo estático con clases completas pre-definidas:
  ```tsx
  const colorStyles = {
    gov: {
      topLine: 'via-[#FF6B35]/50',
      focusRing: 'focus:ring-[#FF6B35]',
    },
    invest: {
      topLine: 'via-[#4ECDC4]/50',
      focusRing: 'focus:ring-[#4ECDC4]',
    },
    fire: {
      topLine: 'via-[#9D4EDD]/50',
      focusRing: 'focus:ring-[#9D4EDD]',
    },
  };
  ```
- **Mejor práctica:** [Tailwind — Dynamic Class Names](https://tailwindcss.com/docs/content-configuration#dynamic-class-names): "Don't construct class names dynamically". Siempre usar clases completas y estáticas.

### Tarea 0.6 — Eliminar duplicación `postcss.config.js` / `postcss.config.cjs`

- **Archivos raíz:** `postcss.config.js`, `postcss.config.cjs`
- **Acción:** Verificar cuál está en uso por Vite (normalmente `.js` con `"type": "module"` en package.json). Eliminar el otro.
- **Mejor práctica:** Un solo archivo de configuración por herramienta. Evitar ambigüedad ESM/CJS.

### Tarea 0.7 — Eliminar duplicación de estilos CSS

- **Archivos:** `App.css`, `index.css`
- **Problema:** Ambos archivos definen `#root`, `min-height`, `scroll-behavior`, `overflow-x`. Fuentes de verdad duplicadas.
- **Acción:** Mover TODO a `index.css` (fuente única de estilos globales). Reducir `App.css` a solo estilos específicos de App si los hubiera, o eliminarlo y remover el import de `App.tsx`.
- **Mejor práctica:** Single Source of Truth para estilos globales. Un archivo CSS global + utilidades de Tailwind.

### Tarea 0.8 — Eliminar comentarios `// removed:` del código

- **Archivos:** `RoadmapTimeline.tsx`, `ProblemSolution.tsx`
- **Acción:** Eliminar líneas con `// removed:` que quedaron como artefactos de edición.
- **Mejor práctica:** El código de producción no debe tener comentarios de historial de cambios; eso es tarea de Git.

### Criterios de Validación Fase 0
- [ ] `npm run build` ejecuta sin errores ni warnings.
- [ ] DevTools → Elements: `<html lang="es">` presente.
- [ ] DevTools → Styles: todas las clases de Tailwind resuelven a CSS real (no clases huérfanas).
- [ ] Un solo `postcss.config` existe.
- [ ] Un solo archivo de estilos globales (`index.css`).

---

## Fase 1: Accesibilidad y Contraste (Día 1-2 — ~3-4 horas)

> **Objetivo:** Alcanzar conformidad WCAG AA completa.

### Tarea 1.1 — Auditar y corregir ratios de contraste

- **Herramienta:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) o Lighthouse Accessibility.
- **Problemas identificados y correcciones:**

| Clase actual | Color | Fondo | Ratio | Corrección |
|---|---|---|---|---|
| `text-gray-500` | #6b7280 | #0A1128 | ~3.6:1 ❌ | → `text-gray-400` (#9ca3af, ~5.1:1) |
| `text-[#1A535C]` (footer heading) | #1A535C | ~#050914 | ~2.1:1 ❌ | → `text-[#4ECDC4]` o `text-[#2D8F87]` |
| `text-[#F7FFF7]/70` (pills inactivas) | rgba opaco | #0A1128 | Variable ❌ | → `text-gray-300` (sólido, ~7.2:1) |
| `text-gray-600` (footer separador) | #4b5563 | #050914 | ~2.6:1 ❌ | → `text-gray-500` |

- **Archivos afectados:** `ProblemSolution.tsx`, `Footer.tsx`, `AudienceSelector.tsx`, `RoadmapTimeline.tsx`, `TechnologyTabs.tsx`
- **Mejor práctica:** WCAG 2.1 SC 1.4.3 — Texto normal requiere 4.5:1; texto grande (18px bold o 24px regular) requiere 3:1.

### Tarea 1.2 — Implementar `useReducedMotion` globalmente

- **Archivos:** `Hero.tsx`, `ProblemSolution.tsx`, `EcosystemGrid.tsx`, `TechnologyTabs.tsx`, `RoadmapTimeline.tsx`, `MultiCTA.tsx`, `FloatingCTA.tsx`
- **Problema:** Solo `Navbar.tsx` respeta `prefers-reduced-motion`. Los demás ejecutan animaciones sin importar preferencias del usuario.
- **Acción:** Crear un hook global o aplicar `useReducedMotion()` de Framer Motion en cada componente que anima:
  ```tsx
  const shouldReduceMotion = useReducedMotion();
  // Usar en variants: shouldReduceMotion ? {} : { opacity: 0, y: 20 }
  ```
- **Alternativa más limpia:** Envolver todo con un `MotionConfig` global en `App.tsx`:
  ```tsx
  import { MotionConfig, useReducedMotion } from 'framer-motion';

  function App() {
    const reduce = useReducedMotion();
    return (
      <MotionConfig reducedMotion="user">
        {/* ... componentes */}
      </MotionConfig>
    );
  }
  ```
- **Mejor práctica:** [WCAG 2.3.3 — Animation from Interactions](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html). Framer Motion soporta `reducedMotion="user"` nativamente en `MotionConfig`.

### Tarea 1.3 — Detener animación infinita del blob en Hero

- **Archivo:** `Hero.tsx`
- **Problema:** `animate-pulse-glow` corre indefinidamente en un div de 800px con blur, consumiendo GPU.
- **Acción:** Reemplazar `animate-pulse-glow` por una transición CSS que solo alterne 3 veces, o usar `animation-play-state: paused` cuando el usuario no está en viewport:
  ```css
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out 3; /* Solo 3 iteraciones */
  }
  ```
  O mejor: eliminar la animación del blob y dejarlo estático (el gradiente ya da suficiente vida visual).
- **Mejor práctica:** Las animaciones decorativas no deben consumir GPU infinitamente. Usar `will-change: opacity` si persiste.

### Tarea 1.4 — Reemplazar emojis por iconos Lucide en AudienceSelector

- **Archivo:** `AudienceSelector.tsx`
- **Problema:** Los emojis (🏛️💰🚒👨‍💻👥) se renderizan inconsistentemente entre plataformas (Windows vs macOS vs Android).
- **Acción:** Reemplazar por iconos de Lucide React que ya está instalado:
  ```tsx
  import { Building2, TrendingUp, Flame, Code, Users } from 'lucide-react';
  // 🏛️ → Building2, 💰 → TrendingUp, 🚒 → Flame, 👨‍💻 → Code, 👥 → Users
  ```
- **Mejor práctica:** Iconos SVG para consistencia cross-platform en UI profesional. Reservar emojis para copy/contenido editorial.

### Criterios de Validación Fase 1
- [ ] Lighthouse Accessibility ≥ 95.
- [ ] Todos los textos visibles pasan ratio 4.5:1 (verificar con axe DevTools).
- [ ] Con `prefers-reduced-motion: reduce` activado en OS, ninguna animación se reproduce.
- [ ] Blob del Hero no consume GPU después de 10 segundos.
- [ ] Todos los iconos del selector se ven idénticos en Chrome, Firefox, Safari.

---

## Fase 2: Funcionalidad Core — Audience Selector Dinámico (Día 2-3 — ~6-8 horas)

> **Objetivo:** Hacer funcional la propuesta de valor central: contenido dinámico según audiencia seleccionada. Esta es la fase más compleja y de mayor impacto.

### Tarea 2.1 — Definir estructura de datos por audiencia

- **Nuevo archivo:** `src/data/audienceContent.ts`
- **Acción:** Crear un objeto tipado con contenido específico para cada audiencia:
  ```tsx
  export type AudienceId = 'gobiernos' | 'inversionistas' | 'bomberos' | 'desarrolladores' | 'ciudadanos';

  export interface AudienceContent {
    hero: {
      headline: string;
      subtitle: string;
      primaryCTA: { label: string; action: string };
      secondaryCTA: { label: string; action: string };
    };
    problems: Array<{ title: string; desc: string }>;
    solutions: Array<{ title: string; desc: string }>;
    ecosystemHighlight: string; // ID del módulo a destacar
    technologyHighlight: string; // ID del algoritmo a destacar
  }

  export const audienceContent: Record<AudienceId, AudienceContent> = {
    gobiernos: { /* ... */ },
    inversionistas: { /* ... */ },
    bomberos: { /* ... */ },
    desarrolladores: { /* ... */ },
    ciudadanos: { /* ... */ },
  };
  ```
- **Mejor práctica:** Separar datos de presentación. Archivo de datos tipado facilita mantenimiento y futuras traducciones/CMS.

### Tarea 2.2 — Implementar Context API para estado de audiencia

- **Nuevo archivo:** `src/context/AudienceContext.tsx`
- **Problema actual:** El estado vive en `App.tsx` con `useState` y se pasa como prop solo a `AudienceSelector`. Ningún otro componente lo recibe.
- **Acción:** Crear un React Context que provea `selectedAudience` + `setSelectedAudience` a todo el árbol:
  ```tsx
  const AudienceContext = createContext<{
    audience: AudienceId;
    setAudience: (id: AudienceId) => void;
    content: AudienceContent;
  }>(/* ... */);
  ```
- **Mejor práctica:** Context API para estado que afecta múltiples componentes no relacionados jerárquicamente. Evitar prop drilling.

### Tarea 2.3 — Conectar secciones dinámicas al contexto

- **Archivos:** `Hero.tsx`, `ProblemSolution.tsx`, `EcosystemGrid.tsx`, `TechnologyTabs.tsx`, `MultiCTA.tsx`
- **Acción para cada componente:**
  1. Importar `useAudience()` hook del contexto.
  2. Obtener `content` del contexto.
  3. Renderizar datos desde `content` en lugar de datos hardcodeados.
  4. Envolver cambios de contenido con `AnimatePresence` para transiciones suaves.
- **Ejemplo para Hero:**
  ```tsx
  const { content } = useAudience();
  // headlines ahora vienen de content.hero.headline
  ```
- **Mejor práctica:** Animación de transición al cambiar audiencia (fade-out/fade-in con `key={audience}`) para que el usuario vea el cambio.

### Tarea 2.4 — Balancear Problemas vs Soluciones (5:5)

- **Archivo:** `ProblemSolution.tsx`
- **Problema:** 5 problemas vs 4 soluciones rompe la correspondencia visual.
- **Acción:** Restaurar la 5ª solución que falta. Según el contexto original:
  ```tsx
  { title: 'Funciona sin conectividad', desc: 'Operación offline con sincronización automática al reconectar' }
  ```
  O alternativamente, crear soluciones específicas por audiencia (5 problemas + 5 soluciones contextualizadas).
- **Mejor práctica:** Simetría visual en comparaciones lado a lado. Cada problema necesita su contraparte.

### Tarea 2.5 — Scroll automático al cambiar audiencia

- **Archivo:** `AudienceSelector.tsx`
- **Acción:** Al seleccionar una audiencia, hacer scroll suave a la primera sección dinámica:
  ```tsx
  const handleSelect = (id: AudienceId) => {
    setAudience(id);
    document.getElementById('solucion')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  ```
- **Mejor práctica:** Feedback inmediato al usuario de que su selección tuvo efecto. Sin scroll, el cambio puede pasar desapercibido si la sección está fuera de viewport.

### Criterios de Validación Fase 2
- [ ] Al seleccionar cada audiencia, el contenido de Hero, ProblemSolution, y MultiCTA cambia visiblemente.
- [ ] La transición entre audiencias es animada y suave (< 300ms).
- [ ] El EcosystemGrid destaca el módulo relevante para la audiencia seleccionada.
- [ ] Problema/Solución muestra 5:5 para todas las audiencias.
- [ ] El scroll automático posiciona la sección visible tras cambiar audiencia.
- [ ] No hay flash de contenido vacío durante la transición.

---

## Fase 3: Visuales y Contenido (Día 3-5 — ~8-10 horas)

> **Objetivo:** Elevar la calidad visual del proyecto con los elementos que le faltan para transmitir profesionalismo y completitud.

### Tarea 3.1 — Crear visualizaciones SVG para los 5 algoritmos

- **Archivo:** `TechnologyTabs.tsx` + nuevos archivos SVG
- **Problema:** La columna derecha (40% del espacio) muestra solo un icono + texto.
- **Acción:** Crear componentes SVG React para cada algoritmo:

  | Algoritmo | Visualización propuesta |
  |-----------|------------------------|
  | **IRVD** | Diagrama de flujo: Imagen → Detección siluetas → Scoring multi-dimensional → Prioridad (con nodos animados) |
  | **PCE** | Árbol de cascada: evento primario arriba → 3-4 eventos secundarios ramificándose con probabilidades |
  | **HYDRA** | Diagrama colaborativo: operador humano ↔ IA, con 4 modos adaptativos como nodos |
  | **SATMS** | Diagrama radial: 7 fuentes externas → procesamiento central → alerta |
  | **AIR** | Mapa simplificado con rutas, unidades y pins de recursos |

- **Implementación recomendada:** Componentes React inline SVG con Framer Motion para animar trazos (`pathLength`) al aparecer. Cada SVG max 200 líneas de código.
- **Alternativa rápida:** Si el tiempo es limitado, usar ilustraciones abstractas con divs, gradientes y íconos Lucide compuestos en layouts grid.
- **Mejor práctica:** SVG inline en React permite animación por propiedades (`stroke-dashoffset`, `opacity`). Más performante que canvas o imágenes.

### Tarea 3.2 — Actualizar el Roadmap a fechas reales (febrero 2026)

- **Archivo:** `RoadmapTimeline.tsx`
- **Problema:** Muestra "Q2 2025: En Proceso" cuando estamos en febrero 2026. Destruye credibilidad.
- **Acción:** Actualizar estados y fechas según la realidad del proyecto:

  | Fase | Estado actual (incorrecto) | Estado correcto (propuesto) |
  |------|---------------------------|----------------------------|
  | Q1 2025 | ✅ Completado | ✅ Completado |
  | Q2 2025 | 🔄 En Proceso | ✅ Completado |
  | Q3-Q4 2025 | 📅 Planeado | ✅ Completado o 🔄 En Proceso |
  | 2026 | 📅 Planeado | 🔄 En Proceso (actual) |
  | 2027-2028 | 📅 Planeado | 📅 Planeado |

  > **Nota:** Verificar con el equipo de SYREIAX los estados reales antes de publicar. Si no hay información, al menos marcar 2026 como "En Proceso" dado que es el año actual.
- **Mejor práctica:** El roadmap debe reflejar la realidad. Una timeline desactualizada es peor que no tener timeline. Considerar hacer los estados dinámicos basados en la fecha actual.

### Tarea 3.3 — Reemplazar favicon genérico de Vite

- **Archivos:** `public/`, `index.html`
- **Acción:**
  1. Crear un favicon SVG con la "S" gradiente del logo:
     ```svg
     <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#FF6B35"/>
           <stop offset="100%" stop-color="#4ECDC4"/>
         </linearGradient>
       </defs>
       <rect width="32" height="32" rx="8" fill="url(#g)"/>
       <text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle"
             font-family="Inter" font-weight="bold" font-size="20" fill="white">S</text>
     </svg>
     ```
  2. Guardarlo como `public/favicon.svg`.
  3. Actualizar `index.html`: `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`.
- **Mejor práctica:** Favicons SVG son escalables y soportan gradientes. Agregar también un `apple-touch-icon` PNG 180x180 para iOS.

### Tarea 3.4 — Corregir Timeline mobile (alineación)

- **Archivo:** `RoadmapTimeline.tsx`
- **Problema:** En `< md`, las cards tienen `ml-20` fijo y los nodos están a `left-8`, pero el zigzag `justify-start`/`justify-end` no aplica, creando inconsistencia.
- **Acción:** En mobile, TODAS las cards deben ir a la derecha del timeline:
  ```tsx
  className={`relative flex items-center ${
    // Mobile: siempre a la derecha. Desktop: alternar
    'justify-start md:' + (phase.position === 'left' ? 'justify-start' : 'justify-end')
  }`}
  ```
  Asegurar que `ml-20` sea suficiente para no solapar el nodo (verificar con `left-8` = 32px + nodo 24px + gap).
- **Mejor práctica:** El patrón zigzag solo funciona en pantallas amplias. En mobile, consistencia > creatividad.

### Tarea 3.5 — Mejorar el enlace "Contacto" en Navbar

- **Archivos:** `Navbar.tsx`
- **Problema:** `#contacto` apunta al `<footer id="contacto">`, lo cual no es una sección de contacto dedicada.
- **Opciones:**
  - **Opción A (rápida):** Renombrar a "Nosotros" y mantener el scroll al footer.
  - **Opción B (mejor):** Crear una sección de contacto mínima antes del footer con formulario.
  - **Opción C (pragmática):** Cambiar el id del footer a `#footer`, crear un mini-section `#contacto` con el newsletter ampliado y datos de contacto, y posicionar antes del footer.
- **Mejor práctica:** Un link de navegación debe llevar a una sección que cumpla la expectativa semántica de su etiqueta.

### Criterios de Validación Fase 3
- [ ] Cada algoritmo en TechnologyTabs muestra una visualización SVG o compuesta que ocupa al menos 50% de su columna.
- [ ] El roadmap refleja la realidad de 2026 (verificado con stakeholders).
- [ ] El favicon en la pestaña del navegador muestra la "S" gradiente.
- [ ] La timeline en mobile (< 768px) muestra todas las cards alineadas a la derecha sin solapamiento.
- [ ] El link "Contacto" lleva a una sección que contiene información de contacto.

---

## Fase 4: Conversión — CTAs Funcionales (Día 5-6 — ~4-6 horas)

> **Objetivo:** Que cada call-to-action del sitio lleve al usuario a una acción real. Sin esto, la landing page no convierte.

### Tarea 4.1 — Crear componente Modal reutilizable

- **Nuevo archivo:** `src/components/ui/Modal.tsx`
- **Acción:** Implementar un modal accesible con:
  - Trap de foco (keyboard trap dentro del modal).
  - Cierre con `Escape`, click en backdrop, o botón X.
  - `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
  - Animación de entrada/salida con `AnimatePresence`.
  - Prevención de scroll del body mientras está abierto.
- **Mejor práctica:** [WAI-ARIA Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/). Radix UI tiene `@radix-ui/react-dialog` que cumple todo esto — considerar instalarlo.

### Tarea 4.2 — Crear formularios de contacto por audiencia

- **Nuevo archivo:** `src/components/ui/ContactForm.tsx`
- **Acción:** 3 variantes de formulario según audiencia:

  | CTA | Formulario | Campos |
  |-----|-----------|--------|
  | Solicitar Demo Institucional | Demo Form | Nombre, Email, Cargo, Institución, País, Mensaje |
  | Descargar Investor Pack | Investor Form | Nombre, Email, Nombre del Fondo, Monto típico de inversión |
  | Unirse al Piloto | Pilot Form | Nombre, Email, Estación de bomberos, Municipio, Número de operadores |

- **Validación:** Client-side con HTML5 validation + mensajes personalizados. Sin backend por ahora, mostrar estado de éxito simulado.
- **Mejor práctica:** Formularios simples con pocos campos (5-7 max). Cada campo adicional reduce la tasa de conversión ~10%.

### Tarea 4.3 — Conectar todos los botones CTA a acciones

- **Archivos:** `Hero.tsx`, `MultiCTA.tsx`, `FloatingCTA.tsx`, `Navbar.tsx`
- **Mapeo de acciones:**

  | Botón | Acción |
  |-------|--------|
  | "Solicitar Demo Oficial" (Hero) | Abre Modal con Demo Form |
  | "Ver cómo funciona" (Hero) | Abre modal con video embed (YouTube/Vimeo) o placeholder |
  | "Solicitar Demo" (Navbar) | Abre Modal con Demo Form |
  | "Solicitar Demo Institucional" (MultiCTA) | Abre Modal con Demo Form |
  | "Descargar Investor Pack" (MultiCTA) | Abre Modal con Investor Form |
  | "Unirse al Piloto" (MultiCTA) | Abre Modal con Pilot Form |
  | "Contactar Ventas" (FloatingCTA) | Abre Modal con Demo Form |
  | "Explorar módulo" (EcosystemGrid) | Scroll a TechnologyTabs con tab relevante pre-seleccionado |
  | "Suscribirse" (Footer newsletter) | Validar email + mostrar toast de éxito |

- **Mejor práctica:** Cada interacción debe dar feedback inmediato al usuario (modal, scroll, toast). Nunca un click sin respuesta.

### Tarea 4.4 — Implementar Toast/Notification para feedback

- **Nuevo archivo:** `src/components/ui/Toast.tsx`
- **Acción:** Componente toast ligero para confirmar acciones (suscripción exitosa, formulario enviado).
- **Posición:** Bottom-center, auto-dismiss en 4 segundos.
- **Mejor práctica:** Feedback inmediato y no intrusivo. Use `role="status"` y `aria-live="polite"` para accesibilidad.

### Criterios de Validación Fase 4
- [ ] Cada botón CTA del sitio produce una acción visible (modal, scroll, o toast).
- [ ] Los modales son accesibles: navegar con Tab, cerrar con Escape, foco atrapado.
- [ ] Los formularios validan campos vacíos y emails inválidos con mensajes claros.
- [ ] El newsletter muestra toast de confirmación al enviar.
- [ ] "Explorar módulo" en Ecosystem scrollea a Technology con el tab correcto activo.

---

## Fase 5: Performance y Pulido Final (Día 6-7 — ~4-5 horas)

> **Objetivo:** Optimización de rendimiento, testing final y preparación para producción.

### Tarea 5.1 — Implementar lazy loading de secciones below-the-fold

- **Archivo:** `App.tsx`
- **Acción:** Las secciones que no son visibles en el primer viewport (todo excepto Navbar + Hero) deben cargarse con `React.lazy`:
  ```tsx
  const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
  const EcosystemGrid = lazy(() => import('./components/EcosystemGrid'));
  // etc.
  ```
  Envolver en `<Suspense fallback={<SectionSkeleton />}>`.
- **Mejor práctica:** Code splitting por componente para reducir bundle inicial. El Hero debe cargar instantáneamente; el resto puede esperar.

### Tarea 5.2 — Optimizar Framer Motion con `LazyMotion`

- **Archivo:** `App.tsx`
- **Acción:** Reemplazar imports de `motion` por `LazyMotion` + `domAnimation` para reducir bundle:
  ```tsx
  import { LazyMotion, domAnimation } from 'framer-motion';

  <LazyMotion features={domAnimation}>
    {/* ... */}
  </LazyMotion>
  ```
  En componentes individuales, usar `m` en lugar de `motion`:
  ```tsx
  import { m } from 'framer-motion';
  <m.div animate={{ opacity: 1 }}>
  ```
- **Impacto:** Reduce ~15-20KB del bundle de Framer Motion.
- **Mejor práctica:** [Framer Motion — Reduce Bundle Size](https://www.framer.com/motion/lazy-motion/).

### Tarea 5.3 — Auditoría Lighthouse completa

- **Herramienta:** Chrome DevTools → Lighthouse (mobile + desktop)
- **Objetivos mínimos:**

  | Métrica | Objetivo |
  |---------|---------|
  | Performance | ≥ 90 |
  | Accessibility | ≥ 95 |
  | Best Practices | ≥ 95 |
  | SEO | ≥ 95 |
  | LCP | < 2.5s |
  | CLS | < 0.1 |
  | FID/INP | < 200ms |

- **Acciones según resultados:** Optimizar imágenes (si se agregan), minificar CSS no utilizado, preload de fuentes críticas.

### Tarea 5.4 — Testing responsive en breakpoints clave

- **Herramienta:** Chrome DevTools Device Mode
- **Breakpoints a verificar:**

  | Dispositivo | Ancho | Verificar |
  |-------------|-------|-----------|
  | iPhone SE | 375px | Hero CTAs, AudienceSelector, Timeline |
  | iPhone 14 | 390px | Hero CTAs, AudienceSelector, Newsletter |
  | iPad | 768px | Grid Ecosystem, MultiCTA columns, Timeline zigzag |
  | iPad Pro | 1024px | Transición de layouts mobile → desktop |
  | Desktop | 1280px | Layout completo, Technology tabs split |
  | Wide | 1536px+ | Max-width containers, no stretching excesivo |

### Tarea 5.5 — Preload de fuentes críticas

- **Archivo:** `index.html`
- **Acción:** Agregar preload para Inter 700 (usado en el Hero):
  ```html
  <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7.woff2"
        as="font" type="font/woff2" crossorigin>
  ```
- **Impacto:** Elimina FOIT (Flash of Invisible Text) en el headline del Hero.
- **Mejor práctica:** Precargar solo la variante más crítica (1-2 archivos woff2 max).

### Tarea 5.6 — Agregar error boundary

- **Nuevo archivo:** `src/components/ErrorBoundary.tsx`
- **Acción:** Envolver la aplicación en un Error Boundary que muestre un fallback amigable en lugar de pantalla blanca:
  ```tsx
  class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError() { return { hasError: true }; }
    render() {
      if (this.state.hasError) return <FallbackUI />;
      return this.props.children;
    }
  }
  ```
- **Mejor práctica:** Nunca mostrar pantalla blanca al usuario. Un error boundary es obligatorio en producción.

### Criterios de Validación Fase 5
- [ ] Lighthouse Performance ≥ 90 en mobile.
- [ ] Lighthouse Accessibility ≥ 95.
- [ ] LCP < 2.5 segundos en 3G simulado.
- [ ] No hay FOIT visible al cargar la página.
- [ ] La página funciona en todos los breakpoints sin overflow horizontal.
- [ ] `npm run build` produce un bundle < 300KB gzipped.
- [ ] Un error en cualquier componente muestra fallback en lugar de pantalla blanca.

---

## Resumen de Archivos Nuevos a Crear

| Archivo | Fase | Propósito |
|---------|------|-----------|
| `src/data/audienceContent.ts` | 2 | Datos tipados de contenido por audiencia |
| `src/context/AudienceContext.tsx` | 2 | Context API para estado de audiencia global |
| `src/components/ui/Modal.tsx` | 4 | Modal accesible reutilizable |
| `src/components/ui/ContactForm.tsx` | 4 | Formularios de contacto por audiencia |
| `src/components/ui/Toast.tsx` | 4 | Notificaciones de feedback |
| `src/components/ErrorBoundary.tsx` | 5 | Error boundary para producción |
| `public/favicon.svg` | 3 | Favicon con logo SYREIAX |

## Resumen de Archivos a Modificar

| Archivo | Fases | Cambios principales |
|---------|-------|-------------------|
| `index.html` | 0, 3, 5 | lang, theme-color, favicon, preload fonts |
| `tailwind.config.js` | 0 | bg-gradient-radial |
| `index.css` | 0, 1 | Consolidar estilos, limitar animación pulse |
| `App.css` | 0 | Reducir/eliminar (mover a index.css) |
| `App.tsx` | 2, 5 | AudienceContext provider, lazy loading, MotionConfig, ErrorBoundary |
| `Navbar.tsx` | 3 | Corregir link Contacto, conectar CTA a modal |
| `Hero.tsx` | 0, 1, 2, 4 | Clases opacidad, reduced motion, contenido dinámico, CTAs a modal |
| `AudienceSelector.tsx` | 1, 2 | Iconos Lucide, scroll automático, Context API |
| `ProblemSolution.tsx` | 0, 1, 2 | Eliminar comentarios, contraste, 5:5 balance, contenido dinámico |
| `EcosystemGrid.tsx` | 0, 2 | bg-gradient-radial, highlight por audiencia |
| `TechnologyTabs.tsx` | 1, 3 | Contraste, visualizaciones SVG |
| `RoadmapTimeline.tsx` | 0, 1, 3 | Comentarios, contraste, fechas actualizadas, mobile fix |
| `MultiCTA.tsx` | 0, 1, 4 | Clases dinámicas fix, contraste, CTAs a modal |
| `Footer.tsx` | 0, 1, 4 | Opacidad classes, contraste heading, newsletter funcional |
| `FloatingCTA.tsx` | 1, 4 | Reduced motion, CTA a modal |

---

## Cronograma Visual

```
Día 1  ████████████████████  Fase 0 (bugs CSS/config) + Fase 1 (accesibilidad)
Día 2  ████████████████████  Fase 2 (Audience Selector dinámico — inicio)
Día 3  ████████████████████  Fase 2 (finalización) + Fase 3 (visuales — inicio)
Día 4  ████████████████████  Fase 3 (SVGs algoritmos + roadmap + favicon)
Día 5  ████████████████████  Fase 3 (fin) + Fase 4 (CTAs — modals + formularios)
Día 6  ████████████████████  Fase 4 (fin) + Fase 5 (performance)
Día 7  ████████████████████  Fase 5 (testing responsive + Lighthouse + pulido)
```

## Nota Objetivo Post-implementación

| Categoría | Antes | Después |
|-----------|-------|---------|
| Estructura / Arquitectura | 8/10 | 9/10 |
| UI Visual | 6/10 | 8.5/10 |
| UX Interactividad | 3/10 | 8.5/10 |
| Accesibilidad | 5/10 | 9/10 |
| Responsive | 6.5/10 | 9/10 |
| Contenido/Copy | 7/10 | 8.5/10 |
| Performance | 6/10 | 9/10 |
| SEO | 7/10 | 9/10 |
| **GLOBAL** | **6/10** | **9/10** |
