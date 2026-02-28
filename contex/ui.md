🎨 PROMPTS OPTIMIZADOS PARA v0.dev/STITCH - SYREIAX GLOBAL
Estrategia de Diseño UI/UX Basada en Mejores Prácticas

📐 SISTEMA DE DISEÑO BASE (Usar en TODOS los prompts)
PALETA DE COLORES SYREIAX GLOBAL:
- Primary (Emergencia/Acción): #FF6B35
- Secondary (Resiliencia/Éxito): #4ECDC4
- Accent (Tecnología/Confianza): #1A535C
- Dark (Profesional): #0A1128
- Light (Claridad): #F7FFF7
- Gradiente Hero: linear-gradient(135deg, #FF6B35 0%, #4ECDC4 100%)
- Gradiente Cards: linear-gradient(180deg, #1A535C 0%, #0A1128 100%)

TIPOGRAFÍA:
- Headings: Inter Bold (font-bold)
- Body: Inter Regular (font-normal)
- Code/Data: JetBrains Mono

PRINCIPIOS UX:
- Mobile-first responsive
- Accesibilidad WCAG AA mínimo
- Animaciones sutiles (< 300ms)
- Espaciado consistente (múltiplos de 4px)
- Contraste mínimo 4.5:1 para texto

🚀 PROMPT 1: NAVBAR + HERO SECTION
Create a modern landing page navbar and hero section with these specifications:

NAVBAR:
- Fixed top, blur background (backdrop-blur-md bg-slate-900/80)
- Logo placeholder on left (text "SYREIAX GLOBAL" with orange-to-teal gradient)
- Navigation links: Solución, Tecnología, Roadmap, Contacto
- CTA button "Solicitar Demo" with #FF6B35 background
- Mobile: hamburger menu with slide-in animation
- Height: 72px desktop, 64px mobile
- Shadow: subtle bottom shadow on scroll

HERO SECTION:
- Full viewport height (min-h-screen)
- Animated gradient background from #FF6B35 (top-left) to #4ECDC4 (bottom-right)
- Subtle particle animation or geometric shapes in background (optional)
- Centered content with max-w-6xl container

HERO CONTENT:
- Animated rotating headline (3 messages, fade transition every 5 seconds):
  1. "La plataforma cívica que salva vidas"
  2. "35% más rápido. 28% menos costos. 100% trazabilidad"
  3. "IA que trabaja CON bomberos, no PARA bomberos"
- Subtitle (text-xl): "Tecnología de emergencias que funciona sin Internet, predice riesgos y conecta territorios resilientes"
- Two CTA buttons:
  - Primary: "Solicitar Demo" (#FF6B35, white text, hover lift effect)
  - Secondary: "Ver Video" (outline style with play icon, #4ECDC4 border)
- Scroll indicator at bottom (animated bounce)

ANIMATIONS:
- Headline: fade-in-up on load, smooth transitions between messages
- CTAs: scale on hover (1.05), subtle shadow
- Background: slow gradient shift animation

RESPONSIVE:
- Desktop: content centered, buttons side-by-side
- Tablet: stack buttons vertically, reduce headline size
- Mobile: full-width buttons, smaller padding

Use Tailwind CSS, Framer Motion for animations, and Lucide React icons. Make it feel premium and trustworthy (GovTech aesthetic).

🎯 PROMPT 2: AUDIENCE SELECTOR
Create an interactive audience selector component with these requirements:

LAYOUT:
- Horizontal pill navigation bar
- Sticky position below navbar (top-20 on scroll)
- Background: semi-transparent dark (#0A1128/90 with backdrop-blur)
- Full-width container with centered pills (max-w-5xl)

PILLS (5 total):
1. "🏛️ Gobiernos" - target: alcaldías, gobernaciones
2. "💰 Inversionistas" - target: VCs, angels
3. "🚒 Bomberos" - target: operadores, comandantes
4. "👨‍💻 Desarrolladores" - target: tech community
5. "👥 Ciudadanos" - target: usuarios finales

PILL DESIGN:
- Default state: 
  - Background: transparent
  - Border: 1px solid #4ECDC4/30
  - Text: #F7FFF7/70
  - Padding: px-6 py-3
  - Rounded: full
- Active state:
  - Background: #FF6B35
  - Border: none
  - Text: white (font-semibold)
  - Shadow: glow effect (0 0 20px rgba(255,107,53,0.5))
- Hover state (non-active):
  - Background: #4ECDC4/10
  - Border: #4ECDC4
  - Scale: 1.05
  - Cursor: pointer

INTERACTIONS:
- Click to activate (only one active at a time)
- Smooth transition between states (200ms ease-in-out)
- Active pill slides indicator line below (animated)
- Changes content section below (emit event or use state)

RESPONSIVE:
- Desktop: all pills visible, equal spacing
- Tablet: scroll horizontally if needed (overflow-x-auto with custom scrollbar)
- Mobile: stack vertically OR scroll horizontally with snap points

ACCESSIBILITY:
- Keyboard navigation (tab, arrow keys)
- ARIA labels for screen readers
- Focus visible outline (#4ECDC4)

Use React state management, Tailwind CSS, and smooth transitions. The component should feel like a premium filter interface.

📊 PROMPT 3: PROBLEM/SOLUTION SECTION
Create a compelling problem-solution comparison section with these specifications:

STRUCTURE:
- Section background: #0A1128 (dark)
- Container: max-w-7xl, padding y-24
- Heading: "El desafío que nadie ha resuelto... hasta ahora"

LAYOUT:
- Two-column grid (lg:grid-cols-2)
- Left column: PROBLEMS (red theme)
- Right column: SOLUTIONS (green theme)
- Center divider: animated vertical line with "vs" badge

LEFT COLUMN (PROBLEMS):
- Title: "Sistemas tradicionales" (text-red-400)
- 5 problem cards with:
  - Red X icon (Lucide XCircle, #EF4444)
  - Bold problem statement
  - Brief explanation (text-sm text-gray-400)
  - Subtle red border-left accent

PROBLEMS LIST:
1. ❌ Colapsan sin Internet (sistemas dependen 100% de conectividad)
2. ❌ Falsas alarmas (sin validación inteligente, recursos desperdiciados)
3. ❌ Decisiones lentas (4.5 min promedio, procesos manuales)
4. ❌ Solo reactivos (sin capacidad predictiva, siempre tarde)
5. ❌ Sin trazabilidad (ciudadanos no saben qué pasó con su reporte)

RIGHT COLUMN (SOLUTIONS):
- Title: "SYREIAX GLOBAL" (gradient text #FF6B35 to #4ECDC4)
- 5 solution cards matching problems:
  - Green checkmark icon (Lucide CheckCircle2, #4ECDC4)
  - Bold solution statement
  - Metric/proof (text-sm with number highlight)
  - Subtle teal border-left accent

SOLUTIONS LIST:
1. ✅ Validación IA + Blockchain (95% reducción falsas alarmas)
2. ✅ Despacho automático (1.8 seg con sistema HYDRA, 150% más rápido)
3. ✅ Predicción 1-72h (5 algoritmos patentables, 87% precisión)
4. ✅ Trazabilidad 100% (blockchain inmutable, app ciudadana en tiempo real)

CENTER DIVIDER:
- Vertical dashed line (#4ECDC4/20)
- Animated badge "VS" at center
- Pulse animation on scroll into view

ANIMATIONS:
- Stagger entrance: cards appear one by one (100ms delay each)
- Scroll-triggered: activate when section 50% visible
- Hover: cards lift slightly with shadow

RESPONSIVE:
- Desktop: side-by-side comparison
- Tablet/Mobile: stack vertically (problems first, divider horizontal, then solutions)

Use Framer Motion for scroll animations, Lucide icons, and Tailwind CSS. Make the contrast dramatic but professional.

🧩 PROMPT 4: ECOSYSTEM MODULES GRID
Create a 4-module ecosystem showcase grid with these specifications:

SECTION:
- Background: subtle radial gradient from #1A535C (center) to #0A1128 (edges)
- Container: max-w-7xl, padding y-24
- Heading: "Ecosistema Integrado SYREIAX" (gradient text)
- Subheading: "4 módulos. 1 plataforma. Infinitas posibilidades."

GRID LAYOUT:
- 2x2 grid on desktop (grid-cols-2 gap-8)
- 1 column on mobile
- Equal height cards (aspect-ratio: 1/1 or min-h-[400px])

CARD DESIGN (for each module):
- Background: dark gradient card (bg-gradient-to-br from-slate-800/50 to-slate-900/80)
- Backdrop blur: backdrop-blur-sm
- Border: 1px solid rgba(78,205,196,0.2)
- Rounded: xl
- Padding: 8
- Hover state: 
  - Border color: #4ECDC4 (full opacity)
  - Lift effect (translateY -4px)
  - Glow shadow (0 8px 32px rgba(78,205,196,0.3))

CARD CONTENT STRUCTURE:
1. Icon container (top):
   - Size: 64px circle
   - Background: gradient matching module color
   - Icon: white, size 32px
   - Animated pulse on card hover

2. Title (h3):
   - Font: Inter Bold, text-2xl
   - Color: #F7FFF7
   - Margin-top: 6

3. Description (p):
   - Font: Inter Regular, text-base
   - Color: #F7FFF7/70
   - Line-height: relaxed
   - Max 2 lines, truncate with ellipsis

4. Key features (ul):
   - 3 bullet points max
   - Icon: small checkmark (#4ECDC4)
   - Text: text-sm, #F7FFF7/60

5. CTA link:
   - "Explorar módulo" with arrow icon
   - Color: #FF6B35
   - Hover: underline + arrow moves right

MODULES DATA:

MODULE 1 - SYREIAX APP:
- Icon: Smartphone (Lucide)
- Gradient: #FF6B35 to #FF8C61
- Description: "Reporta emergencias desde cualquier canal: WhatsApp, app nativa, botón IoT o sensores automáticos"
- Features:
  • Multi-canal (5+ fuentes)
  • Geolocalización automática
  • Validación IA en <2 seg

MODULE 2 - SYREIAX CORE (ERP):
- Icon: Database (Lucide)
- Gradient: #1A535C to #2D6A75
- Description: "Cerebro operativo que gestiona RRHH, inventarios, finanzas y despacho en tiempo real"
- Features:
  • ERP completo integrado
  • Trazabilidad blockchain
  • Dashboard unificado

MODULE 3 - SYREIAX DASHBOARD:
- Icon: BarChart3 (Lucide)
- Gradient: #4ECDC4 to #6FE0D7
- Description: "Comando y control para operadores con 4 modos adaptativos según confianza de IA"
- Features:
  • Sistema HYDRA (IA+Humano)
  • Métricas en tiempo real
  • Decisiones en 1.8 seg

MODULE 4 - SIREIA+ IA:
- Icon: Brain (Lucide)
- Gradient: #9D4EDD to #C77DFF
- Description: "5 algoritmos patentables que predicen, optimizan y aprenden de cada emergencia"
- Features:
  • Predicción 1-72 horas
  • 5 algoritmos únicos
  • Aprendizaje continuo

ANIMATIONS:
- Grid stagger: cards appear sequentially (150ms delay)
- Icon: rotate 360° on card hover
- CTA arrow: slide-right animation on hover

RESPONSIVE:
- Desktop: 2x2 grid, equal heights
- Tablet: 2 columns, allow height variation
- Mobile: 1 column, cards maintain aspect ratio

Use Framer Motion, Lucide React icons, and Tailwind CSS. Each card should feel like a premium product showcase.

🔬 PROMPT 5: PATENTABLE TECHNOLOGY SECTION
Create an interactive tabbed showcase for 5 patentable algorithms with these specifications:

SECTION:
- Background: #0A1128 with subtle dot pattern overlay
- Container: max-w-7xl, padding y-24
- Badge above heading: "Tecnología Protegida" (small, #FF6B35 bg, white text, pill shape)
- Heading: "Algoritmos Patentables" (text-5xl, gradient #FF6B35 to #4ECDC4)
- Subheading: "Innovaciones técnicas que nos diferencian de cualquier sistema existente"

TABS COMPONENT:
- Layout: horizontal tabs at top (Shadcn/ui Tabs or custom)
- Tab style:
  - Default: text-gray-400, border-bottom 2px transparent
  - Active: text-white, border-bottom #FF6B35, font-semibold
  - Hover: text-gray-200, border-bottom #4ECDC4/50
- Responsive: scroll horizontally on mobile with snap points

TAB CONTENT LAYOUT (for each algorithm):
- Split view: 60% left (info), 40% right (visual)
- Left side:
  1. Algorithm name (h3, text-3xl, gradient text)
  2. "Patente en trámite" badge (small, outlined, #4ECDC4)
  3. One-sentence description (text-xl, text-gray-300)
  4. "Por qué es único" section:
     - 3-4 bullet points with checkmarks
     - Text: text-gray-400
  5. Key metric card:
     - Large number (text-6xl, #FF6B35)
     - Label below
     - Example: "94.7% tasa de éxito"
- Right side:
  - Simplified diagram or flowchart (can be SVG or mermaid)
  - OR animated visualization (abstract representation)
  - Fallback: large icon with gradient background

ALGORITHMS DATA:

TAB 1 - IRVD (Índice de Riesgo Vital Dinámico):
- Icon: Activity (Lucide)
- Description: "Prioriza emergencias por vidas detectadas automáticamente con IA, no por tipo o llegada"
- Unique points:
  • Detección anónima de siluetas (privacy-preserving)
  • Scoring multi-dimensional (vida + contexto + histórico)
  • Priorización ética automática
- Metric: "+47% precisión vs. sistemas tradicionales"
- Visual: flowchart showing image → detection → scoring → priority

TAB 2 - PCE (Predictor de Cascada de Emergencias):
- Icon: GitBranch (Lucide)
- Description: "Predice emergencias secundarias que se desencadenarán del evento primario"
- Unique points:
  • Grafo de dependencias de emergencias
  • Modelo probabilístico bayesiano
  • Alertas preventivas 1-72h
- Metric: "87% precisión predictiva"
- Visual: tree diagram showing primary event → secondary events

TAB 3 - HYDRA (Hybrid Decision & Resource Allocation):
- Icon: Users (Lucide)
- Description: "IA que trabaja CON operadores humanos, decidiendo cuándo confiar o pedir validación"
- Unique points:
  • 4 modos adaptativos según confianza
  • Metacognición artificial (IA que sabe cuándo no sabe)
  • Aprendizaje de validaciones humanas
- Metric: "94.7% tasa de éxito, 1.8 seg decisión"
- Visual: human + AI collaboration diagram

TAB 4 - SATMS (Sistema de Alerta Temprana Multi-Señal):
- Icon: Radar (Lucide)
- Description: "Fusiona 7+ fuentes (clima, IoT, satélites, redes sociales) para predecir emergencias"
- Unique points:
  • Detección de anomalías multi-sensor
  • Fusión bayesiana de señales
  • Alertas hasta 72h anticipadas
- Metric: "7 fuentes integradas en tiempo real"
- Visual: radial diagram showing different data sources → central processing

TAB 5 - AIR (Asignador Inteligente de Recursos):
- Icon: Route (Lucide)
- Description: "Optimiza qué unidad despachar, con qué recursos, por qué ruta en <1 segundo"
- Unique points:
  • Optimización multi-objetivo en tiempo real
  • Considera 15+ restricciones simultáneas
  • Rutas dinámicas con hidrantes
- Metric: "<1 seg optimización completa"
- Visual: map with routes, units, and resources

INTERACTIONS:
- Smooth fade transition between tabs (300ms)
- Tab switch: content slides in from right
- Scroll spy: auto-switch tabs as user scrolls (optional)

ANIMATIONS:
- Numbers count up on tab switch
- Visual diagrams fade in with stagger
- Badge subtle pulse animation

RESPONSIVE:
- Desktop: side-by-side layout
- Tablet: 50/50 split maintained
- Mobile: stack vertically (info first, visual below)

Use Shadcn/ui Tabs, Framer Motion, Lucide icons, and consider using Mermaid for diagrams or custom SVG. Make it feel like a technical whitepaper come to life.

🗺️ PROMPT 6: ROADMAP TIMELINE
Create an interactive vertical timeline roadmap with these specifications:

SECTION:
- Background: radial gradient from #1A535C/20 (center) to transparent
- Container: max-w-5xl, padding y-24
- Heading: "Hoja de Ruta" (text-5xl, centered)
- Subheading: "De piloto local a plataforma continental" (text-xl, text-gray-400)

TIMELINE STRUCTURE:
- Vertical line down center (#4ECDC4/30, 4px width)
- Milestone nodes on line (circles, 20px diameter)
- Cards alternate left/right (zigzag pattern)
- Connector line from node to card (dashed)

MILESTONE NODES:
- Past: filled circle, #6B7280 (gray)
- Current: pulsing circle, #FF6B35 (orange) with animated ring
- Future: outlined circle, #4ECDC4 (teal)

CARD DESIGN:
- Background: gradient dark card (slate-800/80 to slate-900/80)
- Border: 1px solid based on status (gray/orange/teal)
- Rounded: lg
- Padding: 6
- Max-width: 400px
- Shadow: subtle, increases on hover

CARD CONTENT:
1. Header:
   - Quarter/Year (small text, status color)
   - Status badge: "Completado ✓" | "En Proceso 🔄" | "Planeado 📅"
2. Title: Phase name (text-2xl, font-bold, white)
3. Description: 2-3 sentences (text-gray-400)
4. Key deliverables: bulleted list (3-4 items max)
5. Metrics (if completed): small stat cards inline

PHASES DATA:

PHASE 1 - Q1 2025 (PAST):
- Status: Completado ✓
- Title: "Validación Técnica & Protección IP"
- Description: "Desarrollo de documentación completa, búsqueda de prior art y solicitud de patentes para tecnologías core"
- Deliverables:
  • Especificación técnica 15K+ palabras
  • Búsqueda prior art en SIC/WIPO
  • Solicitud 5 patentes (HYDRA, IRVD, PCE, etc.)
  • Registro marca SYREIAX GLOBAL
- Metrics: "5 patentes solicitadas, TRL 4-5 alcanzado"

PHASE 2 - Q2 2025 (CURRENT):
- Status: En Proceso 🔄
- Title: "Piloto Valledupar"
- Description: "Implementación en 1 estación de bomberos con 100+ emergencias reales para validación operativa"
- Deliverables:
  • Setup infraestructura (AWS/Azure)
  • Desarrollo MVP (App + CORE + Dashboard)
  • Capacitación 10 operadores
  • Despliegue 50 botones IoT + 5 gateways LoRa
- Metrics: "1 estación, 100+ emergencias, 3 meses validación"

PHASE 3 - Q3-Q4 2025 (FUTURE):
- Status: Planeado 📅
- Title: "Escalamiento Departamental Cesar"
- Description: "Expansión a 15 municipios del Cesar con integración UNGRD y gobernación"
- Deliverables:
  • 15 estaciones conectadas
  • Centro de comando departamental
  • Integración sistemas legacy
  <!-- removed: Red LoRa 500+ nodos -->
- Target: "15 municipios, 50K+ ciudadanos alcanzados"

PHASE 4 - 2026 (FUTURE):
- Status: Planeado 📅
- Title: "Plataforma Nacional Colombia"
- Description: "Expansión a 3 departamentos adicionales con reconocimiento UNGRD como estándar"
- Deliverables:
  • 4 departamentos operativos
  • Alianzas SENA, universidades
  • Módulos GREEN, MED, SECURE
  • API pública v1
- Target: "50+ municipios, 500K+ ciudadanos"

PHASE 5 - 2027-2028 (FUTURE):
- Status: Planeado 📅
- Title: "Expansión Latinoamérica"
- Description: "Presencia en México, Chile, Perú con adaptaciones locales y alianzas regionales"
- Deliverables:
  • 3 países operativos
  • Alianzas OPS, BID, UNDRR
  • Marketplace de módulos
  • Certificaciones ISO/NFPA
- Target: "200+ municipios Latam, 2M+ usuarios"

INTERACTIONS:
- Scroll animation: cards fade in as they enter viewport
- Stagger: alternate cards appear with 100ms delay
- Hover: card lifts, border glows
- Current phase: subtle pulsing animation

ANIMATIONS:
- Timeline line draws from top as user scrolls
- Nodes pop in sequentially
- Connector lines draw from node to card
- Current node has continuous pulse

RESPONSIVE:
- Desktop: zigzag layout (alternating sides)
- Tablet: same but smaller cards
- Mobile: all cards on right side of timeline

SPECIAL EFFECTS:
- Progress indicator: show % complete (1/5 phases done)
- Animated confetti on hover over completed phases (subtle)

Use Framer Motion for scroll-triggered animations, Lucide icons for badges, and make the timeline feel like a journey narrative.

📞 PROMPT 7: MULTI-CTA SECTION
Create a differentiated multi-audience CTA section with these specifications:

SECTION:
- Background: dark with subtle noise texture (#0A1128)
- Container: max-w-7xl, padding y-24
- Heading: "Comienza Ahora" (text-5xl, centered, gradient text)
- Subheading: "Elige tu camino según tu rol" (text-xl, text-gray-400)

LAYOUT:
- 3-column grid (lg:grid-cols-3, gap-8)
- Equal height cards (stretch to tallest)
- Mobile: stack vertically

CTA CARD DESIGN:
- Background: gradient card specific to audience
- Border: 2px solid matching audience color
- Rounded: xl
- Padding: 8
- Hover: lift effect + glow shadow
- Transition: smooth 300ms

CARD STRUCTURE:
1. Icon/Emoji (top, large - 64px)
2. Audience label (small caps, audience color, font-semibold)
3. Value proposition (h3, text-2xl, white, bold)
4. Benefits list (3-4 items):
   - Checkmark icon (audience color)
   - Short benefit (text-gray-300)
5. CTA Button:
   - Full width
   - Background: audience color
   - White text
   - Icon: arrow-right
   - Hover: darken + slide arrow

CARDS DATA:

CARD 1 - GOBIERNOS/INSTITUCIONES:
- Icon: 🏛️ Building2 (Lucide)
- Color theme: #FF6B35 (orange)
- Gradient: from-orange-600/20 to-orange-900/20
- Label: "PARA GOBIERNOS"
- Value prop: "Transforma tu territorio en referente de resiliencia"
- Benefits:
  • Demo personalizada institucional
  • Análisis de necesidades territorial
  • Plan de implementación 90 días
  • Soporte gubernamental dedicado
- CTA: "Solicitar Demo Institucional" → Opens Calendly/Form
- Sub-CTA: "Descargar Caso de Negocio (PDF)"

CARD 2 - INVERSIONISTAS:
- Icon: 💰 TrendingUp (Lucide)
- Color theme: #4ECDC4 (teal)
- Gradient: from-teal-600/20 to-teal-900/20
- Label: "PARA INVERSIONISTAS"
- Value prop: "GovTech con moat técnico y social impact"
- Benefits:
  • Pitch deck + Financial model
  • 5 patentes en trámite
  • Piloto validado con métricas
  • Mercado $2.3B+ (Latam GovTech)
- CTA: "Descargar Investor Pack" → Form (name, email, fund name)
- Sub-CTA: "Agendar Due Diligence Call"

CARD 3 - BOMBEROS/OPERADORES:
- Icon: 🚒 Flame (Lucide)
- Color theme: #9D4EDD (purple)
- Gradient: from-purple-600/20 to-purple-900/20
- Label: "PARA BOMBEROS"
- Value prop: "Únete al piloto y mejora tu operación hoy"
- Benefits:
  • Capacitación completa incluida
  • Hardware IoT sin costo inicial
  • Soporte técnico 24/7
  • Dashboard operativo personalizado
- CTA: "Unirse al Piloto" → Form (nombre estación, municipio, contacto)
- Sub-CTA: "Ver Demo del Sistema"

BELOW CARDS:
- Divider line (subtle, gray)
- Small text: "¿Eres desarrollador, investigador o ciudadano interesado?"
- Link: "Explora otras formas de participar" → Footer links

ACCESSIBILITY:
- Each card has distinct color (not just color-coded)
- Icons reinforce meaning
- Focus states visible
- Keyboard navigable

ANIMATIONS:
- Cards appear with stagger (200ms delay each)
- Hover: scale 1.02, shadow intensifies
- Button hover: arrow slides right 4px
- On click: button shows loading state

RESPONSIVE:
- Desktop: 3 equal columns
- Tablet: 2 columns (2 top, 1 bottom centered)
- Mobile: stack vertically, maintain card order

MICRO-INTERACTIONS:
- Confetti on button click (subtle, 3 pieces max)
- Success toast after form submission
- CTA button shows checkmark on hover ("Lista para ti →")

Use Framer Motion, Lucide icons, and ensure each CTA feels like a distinct journey tailored to the audience. The cards should feel like VIP invitations.

📰 PROMPT 8: FOOTER
Create a comprehensive footer with newsletter signup and multi-column links:

FOOTER STRUCTURE:
- Background: #0A1128 (darkest)
- Border-top: 1px solid #4ECDC4/20
- Padding: y-16

LAYOUT (4-column grid + newsletter):
- Top section: Newsletter signup (full-width)
- Middle section: 4 columns of links
- Bottom section: Legal + social + brand

NEWSLETTER SECTION:
- Background: gradient card (slate-800/50 to slate-900/50)
- Rounded: xl
- Padding: 8
- Max-width: 3xl, centered
- Content:
  1. Icon: Mail (Lucide, #4ECDC4)
  2. Heading: "Mantente informado" (text-2xl, white)
  3. Subheading: "Recibe actualizaciones del proyecto, casos de éxito y webinars exclusivos"
  4. Form:
     - Email input (large, #F7FFF7 bg, dark text)
     - Submit button (#FF6B35, "Suscribirse", arrow icon)
     - Inline validation
     - Privacy note: "Nunca compartimos tu email. Política de privacidad."

LINK COLUMNS:

COLUMN 1 - PRODUCTO:
- Heading: "Producto" (text-sm, uppercase, #4ECDC4)
- Links (text-gray-400, hover: white):
  • Características
  • Tecnología
  • Módulos
  • Integraciones
  • Roadmap
  • Casos de uso

COLUMN 2 - RECURSOS:
- Heading: "Recursos"
- Links:
  • Documentación técnica
  • API Reference
  • Whitepaper (PDF)
  • Blog
  • Webinars
  • FAQs

COLUMN 3 - EMPRESA:
- Heading: "Empresa"
- Links:
  • Sobre nosotros
  • Equipo
  • Alianzas
  • Prensa
  • Carreras
  • Contacto

COLUMN 4 - LEGAL:
- Heading: "Legal"
- Links:
  • Términos de servicio
  • Política de privacidad
  • Cookies
  • Cumplimiento normativo
  • Seguridad
  • Licencias

BOTTOM SECTION:
- Left: Logo + tagline
  - Logo: "SYREIAX GLOBAL" (gradient text)
  - Tagline: "Tecnología que responde, conecta y transforma" (text-gray-500, text-sm)
  - Copyright: "© 2025 SYREIAX GLOBAL. Todos los derechos reservados."

- Center: Trust badges (optional)
  - "Patentes en trámite" badge
  - "ISO 27001 ready" badge
  - "UNGRD aliado potencial" badge

- Right: Social links
  - Icons only (Lucide): Linkedin, Twitter, Github, Youtube
  - Color: #4ECDC4
  - Size: 24px
  - Hover: scale + #FF6B35 color

RESPONSIVE:
- Desktop: 4 columns side-by-side
- Tablet: 2 columns, 2 rows
- Mobile: stack vertically, newsletter first

ACCESSIBILITY:
- All links keyboard accessible
- Focus visible states
- Email validation with helpful errors

Use Tailwind CSS and ensure the footer feels comprehensive yet organized. It should be the "source of truth" for all site links.

🎯 BONUS: FLOATING CTA BUTTON (Sticky)
Create a floating sticky CTA button with these specs:

POSITION:
- Fixed bottom-right (bottom-8, right-8)
- Z-index: 50 (above all content except modals)
- Hidden on scroll up, shows on scroll down

BUTTON DESIGN:
- Size: large pill (px-8 py-4)
- Background: #FF6B35
- Text: "Hablar con un experto" + phone icon
- Shadow: large glow (0 8px 32px rgba(255,107,53,0.4))
- Rounded: full
- Font: semibold, white text

INTERACTIONS:
- Hover: scale 1.05, shadow intensifies, phone icon shakes
- Click: opens contact modal or Calendly
- Mobile: smaller size, text truncates to just icon

ANIMATIONS:
- Entrance: slide-in from right + fade
- Pulse: subtle scale animation every 5 seconds
- On hover: stop pulse, show tooltip "Respuesta en <24h"

STATES:
- Default: visible
- Scrolled to footer: hide (user can see footer CTAs)
- Modal open: hide temporarily

Use Framer Motion for animations and make it feel helpful, not intrusive. Should complement the multi-CTA section without competing.

📋 CHECKLIST DE USO
Para cada prompt:

✅ Copia el prompt completo en v0.dev o Stitch
✅ Verifica colores (#FF6B35, #4ECDC4, #1A535C, #0A1128)
✅ Ajusta contenido si tienes datos más específicos
✅ Solicita variaciones si el primer resultado no es perfecto
✅ Integra componentes en tu proyecto Vite + React
✅ Prueba responsive en mobile/tablet/desktop
✅ Valida accesibilidad con Lighthouse/axe DevTools


🚀 ORDEN RECOMENDADO DE IMPLEMENTACIÓN
Día 1: Prompt 1 (Navbar + Hero)
Día 2: Prompt 2 (Audience Selector) + Prompt 3 (Problem/Solution)
Día 3: Prompt 4 (Ecosystem Grid)
Día 4: Prompt 5 (Patentable Tech)
Día 5: Prompt 6 (Roadmap)
Día 6: Prompt 7 (Multi-CTA) + Prompt 8 (Footer)
Día 7: Prompt Bonus (Floating CTA) + Testing + Deploy