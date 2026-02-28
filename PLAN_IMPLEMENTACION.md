# Plan de Implementación por Fases - Landing Page SYREIAX GLOBAL

## Resumen Ejecutivo
Este documento detalla el plan de implementación para desarrollar la landing page de SYREIAX GLOBAL, una plataforma cívica de gestión de emergencias. Basado en los documentos `context.md` y `ui.md`, el proyecto utiliza React + Vite + TypeScript + Tailwind CSS, con énfasis en diseño premium, accesibilidad WCAG AA y optimización para conversión multi-audiencia.

**Objetivos:**
- Crear una landing page lista para producción en 7-10 días.
- Destacar innovación tecnológica (5 algoritmos patentables), impacto social y diferenciación GovTech.
- Asegurar responsive design, animaciones fluidas y accesibilidad.

**Stack Tecnológico:**
- Frontend: React, Vite, TypeScript.
- Estilos: Tailwind CSS (paleta personalizada: #FF6B35, #4ECDC4, #1A535C, #0A1128).
- Animaciones: Framer Motion.
- Iconos: Lucide React.
- Componentes: Shadcn/ui (opcional para tabs/botones).
- Fuentes: Inter (headings/body), JetBrains Mono (código).

**Estructura de la Landing Page:**
1. Navbar + Hero (rotativo por audiencia).
2. Audience Selector (pills interactivos).
3. Problem/Solution (comparación dramática).
4. Ecosystem Modules (4 módulos grid).
5. Patentable Technology (tabs con algoritmos).
6. Roadmap Timeline (vertical interactiva).
7. Multi-CTA (diferenciado por rol).
8. Footer (completo con newsletter).
9. Floating CTA (sticky bonus).

**Tiempo Estimado:** 7-10 días (4-6 horas/día), asumiendo un desarrollador experimentado. Incluye iteraciones para ajustes.

---

## Fase 0: Configuración Inicial y Dependencias (1 Día)
**Objetivo:** Preparar el entorno de desarrollo, instalar dependencias y configurar el sistema de diseño base.

**Tareas Detalladas:**
- Verificar estructura del proyecto existente (package.json, vite.config.ts, etc.) y ejecutar `npm install`.
- Instalar librerías clave:
  - `npm install framer-motion lucide-react` (animaciones e iconos).
  - `npm install @shadcn/ui` (componentes reutilizables como tabs).
  - Agregar fuentes Google Fonts (Inter, JetBrains Mono) en `index.html`.
- Configurar Tailwind CSS:
  - Editar `tailwind.config.js` para extender paleta de colores personalizada.
  - Agregar gradientes y clases reutilizables.
- Configurar TypeScript y ESLint para consistencia.
- Crear estructura de carpetas: `src/components/` para secciones, `src/hooks/` para estado (e.g., selector de audiencia).
- Probar build inicial: `npm run dev` y verificar sin errores.

**Herramientas:** Terminal (npm), editor para configuración.
**Criterios de Validación:** Build exitoso, colores aplicados correctamente, servidor Vite funcional.
**Tiempo:** 4-6 horas.

---

## Fase 1: Navbar + Hero Section (Día 1)
**Objetivo:** Implementar cabecera y sección principal para capturar atención inmediata.

**Tareas Detalladas:**
- Crear `Navbar.tsx`: Navbar fijo con logo gradiente, enlaces (Solución, Tecnología, Roadmap, Contacto), CTA "Solicitar Demo", menú mobile hamburger.
- Crear `Hero.tsx`: Sección full-viewport con fondo gradiente animado, headline rotativo (3 mensajes cada 5s), subtítulo, dos CTAs (primario/secondary), indicador scroll.
- Integrar en `App.tsx` y preparar estado para selector de audiencia.
- Usar Framer Motion para animaciones (fade-in, rotación headlines, hover CTAs).

**Herramientas:** React + Tailwind + Framer Motion. Usar Copilot para código base; refinar con Prompt 1 de `ui.md`.
**Criterios de Validación:** Navbar sticky y funcional en mobile/desktop; animaciones <300ms; CTAs responden.
**Tiempo:** 4-6 horas.

---

## Fase 2: Audience Selector + Problem/Solution Section (Día 2)
**Objetivo:** Agregar interactividad para personalizar contenido y contrastar problemas vs. soluciones.

**Tareas Detalladas:**
- Crear `AudienceSelector.tsx`: Barra pills horizontal sticky con 5 audiencias (🏛️ Gobiernos, 💰 Inversionistas, 🚒 Bomberos, 👨‍💻 Desarrolladores, 👥 Ciudadanos), estados activo/hover, transiciones.
- Crear `ProblemSolution.tsx`: Grid 2 columnas con problemas (rojo) y soluciones (verde), divider animado, stagger entrada.
- Integrar estado global (useState/Context) para cambiar contenido dinámico.
- Usar Framer Motion para animaciones scroll-triggered.

**Herramientas:** React state + Tailwind + Framer Motion. Prompts 2 y 3 de `ui.md`.
**Criterios de Validación:** Selector cambia estado sin glitches; contenido actualiza; animaciones activan al 50% scroll; accesibilidad (navegación teclado).
**Tiempo:** 4-6 horas.

---

## Fase 3: Ecosystem Modules Grid (Día 3)
**Objetivo:** Mostrar los 4 módulos del ecosistema SYREIAX.

**Tareas Detalladas:**
- Crear `EcosystemGrid.tsx`: Grid 2x2 con tarjetas para SYREIAX App, CORE, Dashboard, SIREIA+ IA, incluyendo iconos, descripciones, CTAs.
- Aplicar hover effects, gradientes, responsive (1 columna mobile).
- Integrar después de Problem/Solution.

**Herramientas:** Tailwind + Lucide React. Prompt 4 de `ui.md`.
**Criterios de Validación:** Grid iguala alturas; hover funciona; mobile responsive.
**Tiempo:** 4-6 horas.

---

## Fase 4: Patentable Technology Section (Día 4)
**Objetivo:** Destacar los diferenciadores técnicos con showcase interactivo.

**Tareas Detalladas:**
- Crear `TechnologyTabs.tsx`: Tabs horizontales con contenido dividido (info + visual) para 5 algoritmos (IRVD, PCE, HYDRA, SATMS, AIR), métricas, badges.
- Incluir diagramas SVG/Mermaid simples.
- Animaciones fade entre tabs, contadores numéricos.

**Herramientas:** Shadcn/ui Tabs + Framer Motion. Prompt 5 de `ui.md`.
**Criterios de Validación:** Tabs cambian suavemente; métricas animadas; accesibilidad.
**Tiempo:** 4-6 horas.

---

## Fase 5: Roadmap Timeline (Día 5)
**Objetivo:** Visualizar progreso y futuro del proyecto.

**Tareas Detalladas:**
- Crear `RoadmapTimeline.tsx`: Línea vertical con milestones (Q1 2025 a 2027-2028), nodos pulsantes, tarjetas alternadas.
- Animaciones scroll-triggered, confetti en hover.

**Herramientas:** Tailwind + Framer Motion. Prompt 6 de `ui.md`.
**Criterios de Validación:** Timeline dibuja al scroll; responsive (mobile apilado).
**Tiempo:** 4-6 horas.

---

## Fase 6: Multi-CTA Section + Footer (Día 6)
**Objetivo:** Ofrecer CTAs diferenciados y cerrar con footer completo.

**Tareas Detalladas:**
- Crear `MultiCTA.tsx`: 3 tarjetas para gobiernos, inversionistas, bomberos, con gradientes, animaciones.
- Crear `Footer.tsx`: Newsletter, 4 columnas de enlaces, sociales, legales.
- Integrar formularios básicos (sin backend).

**Herramientas:** Tailwind + Lucide. Prompts 7 y 8 de `ui.md`.
**Criterios de Validación:** CTAs únicos por audiencia; footer completo y responsive.
**Tiempo:** 4-6 horas.

---

## Fase 7: Floating CTA + Testing y Optimización (Día 7)
**Objetivo:** Agregar CTA flotante y validar proyecto.

**Tareas Detalladas:**
- Crear `FloatingCTA.tsx`: Botón sticky con animaciones (pulse, slide-in).
- Testing:
  - Build: `npm run build` sin errores.
  - Responsive: Chrome DevTools (mobile/tablet/desktop).
  - Accesibilidad: Lighthouse/axe DevTools (WCAG AA).
  - Performance: Optimizar animaciones (<300ms), linters (ESLint).
  - Funcionalidad: Navegación, CTAs, estado audiencia.

**Herramientas:** Terminal, navegador. Prompt Bonus de `ui.md`.
**Criterios de Validación:** Build exitoso; Lighthouse >90; no errores consola; responsive perfecto.
**Tiempo:** 4-6 horas.

---

## Fase 8: Despliegue y Producción (Día 8-10, Opcional)
**Objetivo:** Poner en producción.

**Tareas Detalladas:**
- Build final: `npm run build`.
- Despliegue: Vercel/Netlify.
- Monitoreo: Verificar carga (<3s), analytics.
- Documentación: README.md con instrucciones.

**Herramientas:** Plataforma hosting.
**Criterios de Validación:** Sitio live y funcional.
**Tiempo:** 2-4 horas.

---

## Notas Finales
- **Iteraciones:** Después de cada fase, ejecutar `npm run dev` y ajustar. Usar v0.dev/Stitch para prototipar con prompts de `ui.md`.
- **Riesgos:** Animaciones pesadas → Optimizar CSS; accesibilidad → Revisar contrastes.
- **Colaboración:** Usar GitHub Copilot para acelerar código.
- **Próximos Pasos:** Iniciar con Fase 0. Ajustar plan si cambian requerimientos.

**Fecha de Creación:** 10 de febrero de 2026.