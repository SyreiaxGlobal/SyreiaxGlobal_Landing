🚀 PLAN DE IMPLEMENTACIÓN - LANDING PAGE SYREIAX GLOBAL
Basándome en tus respuestas, diseñaré una landing page multi-audiencia, optimizada para desarrollo con IA (Copilot), y enfocada en el mensaje cívico "Plataforma que salva vidas".

📊 DECISIONES TÉCNICAS ESTRATÉGICAS
STACK TECNOLÓGICO SELECCIONADO
Considerando que usarás IA Copilot y necesitas óptimo + fácil:
typescript✅ RECOMENDACIÓN FINAL: React + Vite + Tailwind CSS

RAZONES:
1. Vite → 10-20x más rápido que Create React App
2. Tailwind → Copilot escribe clases CSS automáticamente
3. Shadcn/ui → Componentes copy-paste (compatible con Copilot)
4. Framer Motion → Animaciones fluidas con prompts simples
5. React Router → Navegación multi-audiencia
Alternativas descartadas y por qué:

❌ Next.js → Más complejo para setup inicial con IA
❌ Astro → Menos compatible con Copilot (menos ejemplos en training data)
❌ WordPress → No cumple con imagen innovadora de SYREIAX


🎨 ESTRATEGIA DE DISEÑO SIN ASSETS VISUALES
Como NO tienes logo, paleta ni assets, usaremos:
SISTEMA DE DISEÑO GENERATIVO
css/* PALETA DE COLORES PROPUESTA (basada en las imágenes corporativas) */

Primary (Naranja/Emergencia): #FF6B35
Secondary (Verde/Resiliencia): #4ECDC4  
Accent (Azul/Tecnología): #1A535C
Dark (Profesional): #0A1128
Light (Claridad): #F7FFF7

Gradientes:
- Hero: linear-gradient(135deg, #FF6B35 0%, #4ECDC4 100%)
- Cards: linear-gradient(180deg, #1A535C 0%, #0A1128 100%)
```

### **TIPOGRAFÍA PROFESIONAL (Google Fonts)**
```
Headings: Inter Bold (moderna, institucional)
Body: Inter Regular (legible, profesional)
Monospace: JetBrains Mono (código/datos técnicos)
```

### **ICONOGRAFÍA**
- Lucide React (iconos modernos, gratis, 1000+ opciones)
- React Icons (complementarios)

---

## 🏗️ ARQUITECTURA DE INFORMACIÓN

### **ESTRUCTURA MULTI-AUDIENCIA**
```
LANDING PAGE PRINCIPAL (/)
├── Hero Dinámico (3 mensajes rotativos según audiencia)
├── Selector de Audiencia (pills interactivos)
│   ├── 🏛️ Gobiernos/Instituciones
│   ├── 💰 Inversionistas  
│   ├── 🚒 Bomberos/Operadores
│   ├── 👨‍💻 Desarrolladores/Academia
│   └── 👥 Ciudadanos
│
├── [SECCIÓN COMÚN] Problema → Solución
├── [SECCIÓN COMÚN] Ecosistema SYREIAX (4 módulos)
├── [SECCIÓN DINÁMICA] Contenido según audiencia seleccionada
├── [SECCIÓN COMÚN] Tecnología Patentable (diferenciadores)
├── [SECCIÓN COMÚN] Roadmap Visual
├── [SECCIÓN COMÚN] CTAs Diferenciados
└── Footer Completo
```

---

## 📝 COPYWRITING ESTRATÉGICO

### **MENSAJES CLAVE POR SECCIÓN**

#### **HERO (Mensaje Rotativo)**
```
Versión 1 (Institucional):
"La plataforma cívica que salva vidas"
Subtítulo: "Tecnología de emergencias que funciona sin Internet, 
            predice riesgos y conecta territorios resilientes"

Versión 2 (Impacto):
"35% más rápido. 28% menos costos. 100% trazabilidad."
Subtítulo: "Sistema inteligente de gestión de emergencias 
            validado en ambientes reales"

Versión 3 (Innovación):
"La primera IA latinoamericana que trabaja CON bomberos, no PARA bomberos"
Subtítulo: "Tecnología patentable con validación humana. 
            Porque las vidas no se deciden solas."
SECCIÓN PROBLEMA/SOLUCIÓN
markdown## El problema que nadie ha resuelto

❌ Sistemas 911 colapsan sin Internet
❌ Falsas alarmas saturan recursos críticos  
❌ Decisiones manuales toman 4.5 minutos promedio
❌ Sin predicción → solo reacción
❌ Ciudadanos reportan pero nunca saben qué pasó

## SYREIAX GLOBAL: La solución integral
 
✅ IA valida alertas + blockchain elimina duplicados
✅ Sistema HYDRA despacha en 1.8 segundos
✅ Predice emergencias 1-72 horas antes
✅ Trazabilidad 100% para ciudadanos e instituciones
```

#### **ECOSISTEMA (4 MÓDULOS PRINCIPALES)**
```
[MÓDULO 1] SYREIAX APP
🎯 Reporta emergencias desde cualquier canal
📱 WhatsApp, App nativa, Botón IoT, Sensores
🧠 IA clasifica y valida automáticamente

[MÓDULO 2] SYREIAX CORE (ERP)
⚙️ Cerebro operativo de la institución
👥 RRHH, inventarios, finanzas, despacho
🔗 Integra todos los procesos en tiempo real

[MÓDULO 3] SYREIAX DASHBOARD  
📊 Comando y control para operadores
🎯 4 modos adaptativos según confianza de IA
✅ Humano valida decisiones críticas (HYDRA)

[MÓDULO 4] SIREIA+ IA
🤖 5 algoritmos patentables únicos
🔮 Predicción, optimización, cascadas
💡 Aprende de cada emergencia real

💻 PLAN DE IMPLEMENTACIÓN CON IA COPILOT
SPRINT 1: SETUP Y ESTRUCTURA (DÍA 1-2)
bash# PASO 1: Crear proyecto con Vite
npm create vite@latest syreiax-landing -- --template react-ts
cd syreiax-landing

# PASO 2: Instalar dependencias core
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npm install framer-motion lucide-react react-router-dom

# PASO 3: Instalar Shadcn/ui (opcional pero recomendado)
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card tabs
```

**PROMPT PARA COPILOT:**
```
Crea la estructura base de carpetas para una landing page multi-audiencia:
- src/components/Hero
- src/components/Problem
- src/components/Ecosystem  
- src/components/Technology
- src/components/Roadmap
- src/components/CTA
- src/sections (carpetas por audiencia)
- src/assets
- src/styles

SPRINT 2: HERO DINÁMICO (DÍA 2-3)
PROMPT PARA COPILOT:
typescript// src/components/Hero/HeroSection.tsx

Crea un Hero component con:
1. Gradiente animado de fondo (naranja #FF6B35 a verde #4ECDC4)
2. 3 mensajes que rotan cada 5 segundos con Framer Motion
3. Botones CTA principales:
   - "Solicitar Demo" (primary)
   - "Ver Video" (secondary con ícono play)
4. Animación de fade-in al cargar
5. Responsive: stack vertical en mobile
6. Incluir partículas sutiles de fondo (opcional con react-particles)

Mensajes:
- "La plataforma cívica que salva vidas"
- "35% más rápido. 28% menos costos. 100% trazabilidad"  
- "IA que trabaja CON bomberos, no PARA bomberos"
CÓDIGO INICIAL (Copilot generará esto):
tsximport { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const messages = [
  {
    title: "La plataforma cívica que salva vidas",
    subtitle: "Tecnología de emergencias que funciona sin Internet, predice riesgos y conecta territorios resilientes"
  },
  {
    title: "35% más rápido. 28% menos costos. 100% trazabilidad",
    subtitle: "Sistema inteligente de gestión de emergencias validado en ambientes reales"
  },
  {
    title: "IA que trabaja CON bomberos, no PARA bomberos",
    subtitle: "Tecnología patentable con validación humana. Porque las vidas no se deciden solas"
  }
];

export default function HeroSection() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] overflow-hidden">
      {/* Contenido animado generado por Copilot */}
    </section>
  );
}

SPRINT 3: SELECTOR DE AUDIENCIA (DÍA 3)
PROMPT PARA COPILOT:
typescript// src/components/AudienceSelector.tsx

Crea un selector de audiencia con:
1. Pills horizontales con iconos (Lucide React)
2. Estado activo con fondo naranja #FF6B35
3. Hover con escala 1.05
4. Click cambia contenido dinámico abajo
5. Responsive: scroll horizontal en mobile

Audiencias:
- 🏛️ Gobiernos/Instituciones
- 💰 Inversionistas
- 🚒 Bomberos/Operadores  
- 👨‍💻 Desarrolladores
- 👥 Ciudadanos

SPRINT 4: ECOSISTEMA (DÍA 4-5)
PROMPT PARA COPILOT:
typescript// src/components/Ecosystem/EcosystemGrid.tsx

Crea grid de 4 cards para módulos del ecosistema:
1. Card con gradiente sutil (dark blue a black)
2. Icono animado al hover (rebote suave)
3. Título + descripción corta
4. Botón "Ver más" que expande detalles
5. Grid responsivo: 2x2 desktop, 1 columna mobile

Módulos:
1. SYREIAX APP (ícono: Smartphone)
2. SYREIAX CORE (ícono: Database)  
3. SYREIAX DASHBOARD (ícono: BarChart)
4. SIREIA+ IA (ícono: Brain)

SPRINT 5: TECNOLOGÍA PATENTABLE (DÍA 5-6)
PROMPT PARA COPILOT:
typescript// src/components/Technology/PatentableFeatures.tsx

Crea sección con tabs para 5 algoritmos patentables:
1. Tabs horizontales (Shadcn/ui Tabs)
2. Cada tab muestra:
   - Título del algoritmo
   - Diagrama simplificado (puedes usar Mermaid o imagen)
   - Beneficio clave (métrica)
   - Badge "Patente en trámite"

Algoritmos:
- IRVD: Índice de Riesgo Vital Dinámico (+47% precisión)
- PCE: Predictor de Cascada de Emergencias (1-72h anticipación)
- HYDRA: IA Híbrida con validación humana (94.7% éxito)
- SATMS: Alerta Temprana Multi-Señal (7 fuentes integradas)
- AIR: Asignador Inteligente de Recursos (<1s decisión)

SPRINT 6: ROADMAP VISUAL (DÍA 6)
PROMPT PARA COPILOT:
typescript// src/components/Roadmap/TimelineRoadmap.tsx

Crea timeline vertical con Framer Motion:
1. Línea central con puntos por fase
2. Cards alternados izquierda/derecha  
3. Animación scroll-triggered (aparecer al hacer scroll)
4. Colores: Pasado (gris), Presente (naranja), Futuro (verde)

Fases:
- Q1 2025: Validación técnica + Protección IP ✅
- Q2 2025: Piloto Valledupar (1 estación bomberos) 🔄
- Q3-Q4 2025: Escalamiento Cesar (15 municipios)
- 2026: Expansión nacional (3 departamentos)
- 2027-2028: Plataforma Latam (México, Chile, Perú)

SPRINT 7: CTAs DIFERENCIADOS (DÍA 7)
PROMPT PARA COPILOT:
typescript// src/components/CTA/MultiCTA.tsx

Crea sección con 3 CTAs principales:
1. Card por audiencia con:
   - Título específico
   - Beneficio clave
   - Botón de acción  
   - Fondo con gradiente sutil

CTAs:
1. PARA GOBIERNOS: "Solicitar Demo Institucional" → Calendly
2. PARA INVERSIONISTAS: "Descargar Pitch Deck" → Form
3. PARA BOMBEROS: "Unirse al Piloto" → Form de registro

Footer con formulario de newsletter simple
```

---

## 🎨 DISEÑO VISUAL SIN FIGMA

### **WIREFRAME TEXTUAL (Para Copilot)**
```
┌─────────────────────────────────────────────────────────┐
│                    NAVBAR                               │
│  Logo SYREIAX  |  Solución | Tecnología | Roadmap | CTA│
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                 HERO (Full Height)                      │
│                                                         │
│      [Gradiente Naranja → Verde con partículas]        │
│                                                         │
│           "La plataforma cívica que                     │
│                salva vidas"                             │
│                                                         │
│       Tecnología de emergencias que funciona sin        │
│       Internet, predice riesgos y conecta territorios   │
│                                                         │
│      [Botón: Solicitar Demo]  [Botón: Ver Video]      │
│                                                         │
│           ↓ Scroll para descubrir                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              SELECTOR DE AUDIENCIA                      │
│  [🏛️ Gobiernos] [💰 Inversores] [🚒 Bomberos]          │
│      [👨‍💻 Devs] [👥 Ciudadanos]                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              PROBLEMA → SOLUCIÓN                        │
│                                                         │
│  [Columna IZQ: Problemas con ❌]                       │
│  [Columna DER: Soluciones con ✅]                      │
│  [Imagen central: Comparativa antes/después]           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              ECOSISTEMA (Grid 2x2)                      │
│                                                         │
│  [APP]        [CORE ERP]                               │
│  [DASHBOARD]  [IA SIREIA+]                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         TECNOLOGÍA PATENTABLE (Tabs)                    │
│  [IRVD] [PCE] [HYDRA] [SATMS] [AIR]                   │
│                                                         │
│  [Contenido dinámico del tab seleccionado]             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              ROADMAP (Timeline)                         │
│  ●───●───●───●───● (2025→2028)                        │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              CTAs DIFERENCIADOS                         │
│  [Card Gobiernos] [Card Inversores] [Card Bomberos]   │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    FOOTER                               │
│  Logo | Links | Newsletter | Redes | Legal             │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 CRONOGRAMA DE IMPLEMENTACIÓN
```
DÍA 1: Setup + Hero (4-6 horas)
DÍA 2-3: Selector Audiencia + Problema/Solución (6-8 horas)
DÍA 4-5: Ecosistema + Tecnología (8-10 horas)
DÍA 6: Roadmap + CTAs (4-6 horas)  
DÍA 7: Footer + Optimización + Deploy (4-6 horas)

TOTAL: 7 días laborales (30-42 horas desarrollo)

📦 ENTREGABLES FINALES
Te prepararé ahora en archivos separados:

Código base del proyecto (estructura Vite + React)
Componentes principales (Hero, Ecosystem, Technology)
Configuración Tailwind con paleta SYREIAX
Prompts específicos para Copilot por componente
Guía de deployment (Vercel/Netlify)


✅ SIGUIENTE ACCIÓN
¿Quieres que proceda con la creación de los archivos de código?
Selecciona:

A) Sí, dame el código completo del proyecto base ahora
B) Primero muéstrame un prototipo visual (diseño en HTML/CSS simple)
C) Dame solo los prompts optimizados para Copilot (tú escribes el código)
D) Todas las anteriores en secuencia

Responde A, B, C o D y empiezo la generación inmediata. 🚀necesito que hagas los promtp para stich, utilizando las mejores practicas de disñeo ui y ux, la paleta de colores del  proyecto. eres un experto en pormt para interfaces. vas hacer el promt para cada uno de los modulos20:42🎨 PROMPTS OPTIMIZADOS PARA v0.dev/STITCH - SYREIAX GLOBAL
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

¿Quieres que ajuste algún prompt o necesitas versiones adicionales para otros componentes (testimonios, métricas, equipo, etc.)? 🎨crea ahora el plan de implementacion  de desarrollo de este proyecto en un documento .md. para que la ia lo ejecute de laa mejor manera20:46📘 PLAN DE IMPLEMENTACIÓN - LANDING PAGE SYREIAX GLOBAL
Documento de Ejecución para Desarrollo con IA
Versión: 1.0
Fecha: Febrero 2025
Proyecto: Landing Page Corporativa SYREIAX GLOBAL
Stack: React + Vite + Tailwind CSS + Framer Motion
Desarrollador: IA Copilot / Cursor / v0.dev

📋 ÍNDICE

Información del Proyecto
Requisitos Previos
Configuración Inicial
Sistema de Diseño
Estructura de Archivos
Plan de Desarrollo por Sprints
Componentes Detallados
Integración y Testing
Optimización y Deploy
Checklist de Validación


1. INFORMACIÓN DEL PROYECTO
1.1 Descripción General
Objetivo: Crear una landing page corporativa multi-audiencia para SYREIAX GLOBAL que comunique efectivamente:

Propuesta de valor (plataforma cívica que salva vidas)
Ecosistema tecnológico (4 módulos integrados)
Innovación patentable (5 algoritmos únicos)
Roadmap de crecimiento (local a continental)
CTAs diferenciados por audiencia

Audiencias Target:

🏛️ Gobiernos e Instituciones (alcaldías, gobernaciones, UNGRD)
💰 Inversionistas (VCs, angels, fondos de impacto)
🚒 Bomberos y Operadores (usuarios finales del sistema)
👨‍💻 Desarrolladores y Academia (comunidad técnica)
👥 Ciudadanos (usuarios de la app móvil)

Diferenciadores Clave:

Opera sin Internet
IA híbrida con validación humana (sistema HYDRA)
Blockchain para trazabilidad
Predicción de emergencias 1-72h
5 algoritmos patentables

1.2 Requisitos de Negocio
Conversiones Esperadas:

Gobiernos: Solicitud de demo institucional
Inversionistas: Descarga de pitch deck
Bomberos: Registro para piloto
Desarrolladores: Acceso a documentación
Ciudadanos: Descarga de app (futura)

Métricas de Éxito:

Tasa de conversión > 3%
Tiempo en sitio > 3 minutos
Scroll depth > 70%
Lighthouse Score > 90
Accesibilidad WCAG AA


2. REQUISITOS PREVIOS
2.1 Software Necesario
bash# Verificar instalaciones (ejecutar en terminal)
node --version  # Debe ser >= 18.0.0
npm --version   # Debe ser >= 9.0.0
git --version   # Debe estar instalado
Si no tienes Node.js:

Descargar desde: https://nodejs.org/
Versión recomendada: LTS (Long Term Support)

2.2 Herramientas de Desarrollo
Editor de Código:

VS Code (recomendado) con extensiones:

ES7+ React/Redux/React-Native snippets
Tailwind CSS IntelliSense
ESLint
Prettier
Copilot (GitHub Copilot)



Navegadores para Testing:

Chrome/Edge (desktop + DevTools mobile)
Firefox (testing alternativo)
Safari (si estás en Mac)

2.3 Cuentas Necesarias

 GitHub (para control de versiones)
 Vercel/Netlify (para deploy gratuito)
 Figma (opcional, para diseño)
 Calendly (para CTAs de demo)


3. CONFIGURACIÓN INICIAL
3.1 Crear Proyecto Base
bash# PASO 1: Crear proyecto con Vite
npm create vite@latest syreiax-landing -- --template react-ts

# PASO 2: Entrar al directorio
cd syreiax-landing

# PASO 3: Instalar dependencias base
npm install

# PASO 4: Verificar que funciona
npm run dev
# Debe abrir en http://localhost:5173
3.2 Instalar Dependencias del Proyecto
bash# Tailwind CSS (estilos)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Framer Motion (animaciones)
npm install framer-motion

# React Router (navegación)
npm install react-router-dom

# Lucide React (iconos)
npm install lucide-react

# Utilidades adicionales
npm install clsx tailwind-merge

# React Hook Form (formularios)
npm install react-hook-form

# Zod (validación)
npm install zod @hookform/resolvers
3.3 Configurar Tailwind CSS
Archivo: tailwind.config.js
javascript/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta SYREIAX GLOBAL
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FF8C61',
          dark: '#E65520',
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          light: '#6FE0D7',
          dark: '#3AB7AE',
        },
        accent: {
          DEFAULT: '#1A535C',
          light: '#2D6A75',
          dark: '#0F3940',
        },
        dark: {
          DEFAULT: '#0A1128',
          light: '#1A2642',
          lighter: '#2A3A5C',
        },
        light: {
          DEFAULT: '#F7FFF7',
          dark: '#E8F5E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #FF6B35 0%, #4ECDC4 100%)',
        'gradient-card': 'linear-gradient(180deg, #1A535C 0%, #0A1128 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
3.4 Configurar Estilos Globales
Archivo: src/index.css
css@tailwind base;
@tailwind components;
@tailwind utilities;

/* Importar fuente Inter de Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-dark text-light font-sans antialiased;
    font-feature-settings: 'cv11', 'ss01';
    font-variation-settings: 'opsz' 32;
  }

  html {
    scroll-behavior: smooth;
  }

  /* Scrollbar personalizado */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-dark-light;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-secondary rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-secondary-light;
  }
}

@layer components {
  /* Gradiente de texto reutilizable */
  .gradient-text {
    @apply bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent;
  }

  /* Botón primario estándar */
  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded-full font-semibold 
           hover:bg-primary-dark hover:scale-105 
           transition-all duration-300 
           shadow-lg hover:shadow-xl hover:shadow-primary/50;
  }

  /* Botón secundario */
  .btn-secondary {
    @apply border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold
           hover:bg-secondary hover:text-dark
           transition-all duration-300;
  }

  /* Card genérica */
  .card {
    @apply bg-gradient-to-br from-dark-light to-dark 
           border border-secondary/20 
           rounded-xl p-6
           hover:border-secondary hover:shadow-lg hover:shadow-secondary/20
           transition-all duration-300;
  }

  /* Sección con padding estándar */
  .section {
    @apply py-24 px-4;
  }

  /* Container centrado */
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

@layer utilities {
  /* Animación de entrada con fade */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Blur backdrop para modales */
  .backdrop-blur-custom {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
}
3.5 Configurar ESLint y Prettier (Opcional pero Recomendado)
Archivo: .eslintrc.cjs
javascriptmodule.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
}
Archivo: .prettierrc
json{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}

4. SISTEMA DE DISEÑO
4.1 Paleta de Colores
typescript// src/constants/colors.ts

export const COLORS = {
  // Principales
  primary: '#FF6B35',      // Naranja - Emergencia/Acción
  secondary: '#4ECDC4',    // Teal - Resiliencia/Tecnología
  accent: '#1A535C',       // Azul oscuro - Confianza
  dark: '#0A1128',         // Negro azulado - Fondo
  light: '#F7FFF7',        // Blanco roto - Texto
  
  // Variaciones
  primaryLight: '#FF8C61',
  primaryDark: '#E65520',
  secondaryLight: '#6FE0D7',
  secondaryDark: '#3AB7AE',
  
  // Grises
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Estados
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;
4.2 Tipografía
typescript// src/constants/typography.ts

export const TYPOGRAPHY = {
  // Headings
  h1: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
  h2: 'text-5xl md:text-6xl font-bold leading-tight',
  h3: 'text-4xl md:text-5xl font-bold leading-tight',
  h4: 'text-3xl md:text-4xl font-bold leading-tight',
  h5: 'text-2xl md:text-3xl font-semibold leading-tight',
  h6: 'text-xl md:text-2xl font-semibold leading-tight',
  
  // Body
  bodyLg: 'text-xl leading-relaxed',
  body: 'text-base leading-relaxed',
  bodySm: 'text-sm leading-relaxed',
  
  // Labels
  label: 'text-sm font-medium uppercase tracking-wide',
  caption: 'text-xs text-gray-400',
  
  // Code
  code: 'font-mono text-sm bg-dark-light px-2 py-1 rounded',
} as const;
4.3 Espaciado
typescript// src/constants/spacing.ts

export const SPACING = {
  section: 'py-24 px-4',         // Padding vertical de secciones
  container: 'max-w-7xl mx-auto', // Container centrado
  gap: {
    xs: 'gap-2',
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  },
} as const;
4.4 Componentes Reutilizables
typescript// src/constants/components.ts

export const COMPONENTS = {
  button: {
    primary: 'bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/50',
    secondary: 'border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-dark transition-all duration-300',
    outline: 'border border-light/20 text-light px-6 py-3 rounded-full font-semibold hover:bg-light/10 transition-all duration-300',
  },
  card: {
    default: 'bg-gradient-to-br from-dark-light to-dark border border-secondary/20 rounded-xl p-6 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300',
    flat: 'bg-dark-light rounded-xl p-6',
    elevated: 'bg-gradient-to-br from-dark-light to-dark rounded-xl p-8 shadow-2xl',
  },
  badge: {
    primary: 'bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold',
    secondary: 'bg-secondary text-dark px-3 py-1 rounded-full text-xs font-semibold',
    outline: 'border border-secondary text-secondary px-3 py-1 rounded-full text-xs font-semibold',
  },
} as const;
```

---

## 5. ESTRUCTURA DE ARCHIVOS

### 5.1 Árbol de Directorios
```
syreiax-landing/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── og-image.png
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Container.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingCTA.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── AudienceSelector.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── Ecosystem.tsx
│   │   │   ├── Technology.tsx
│   │   │   ├── Roadmap.tsx
│   │   │   └── MultiCTA.tsx
│   │   └── ui/
│   │       ├── Tabs.tsx
│   │       ├── Modal.tsx
│   │       └── Form.tsx
│   ├── constants/
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── components.ts
│   │   └── content.ts
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useMediaQuery.ts
│   │   └── useIntersectionObserver.ts
│   ├── utils/
│   │   ├── cn.ts (classnames utility)
│   │   └── analytics.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── .env.example
├── .eslintrc.cjs
├── .prettierrc
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
5.2 Crear Estructura de Carpetas
bash# Ejecutar desde la raíz del proyecto
mkdir -p src/assets/{images,icons}
mkdir -p src/components/{common,layout,sections,ui}
mkdir -p src/constants
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/types

6. PLAN DE DESARROLLO POR SPRINTS
SPRINT 0: Configuración (DÍA 0) ✅
Duración: 2-3 horas
Tareas:

 Crear proyecto con Vite
 Instalar todas las dependencias
 Configurar Tailwind CSS
 Configurar ESLint y Prettier
 Crear estructura de carpetas
 Configurar Git y primer commit

Comandos:
bashgit init
git add .
git commit -m "Initial project setup with Vite + React + Tailwind"
git branch -M main
# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/syreiax-landing.git
git push -u origin main
Validación:

 npm run dev funciona sin errores
 Tailwind CSS aplica estilos correctamente
 Hot reload funciona


SPRINT 1: Componentes Base y Navbar (DÍA 1)
Duración: 6-8 horas
Tarea 1.1: Crear Utilidades Base
Archivo: src/utils/cn.ts
typescriptimport { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
Archivo: src/constants/content.ts
typescriptexport const SITE_CONFIG = {
  name: 'SYREIAX GLOBAL',
  tagline: 'Tecnología que responde, conecta y transforma',
  description: 'Sistema de Respuesta ante Emergencias Inteligente y Automatizado con Conexión Global',
  url: 'https://syreiax.global',
  email: 'contacto@syreiax.global',
  social: {
    linkedin: 'https://linkedin.com/company/syreiax',
    twitter: 'https://twitter.com/syreiax',
    github: 'https://github.com/syreiax',
    youtube: 'https://youtube.com/@syreiax',
  },
} as const;

export const HERO_MESSAGES = [
  {
    title: 'La plataforma cívica que salva vidas',
    subtitle: 'Tecnología de emergencias que funciona sin Internet, predice riesgos y conecta territorios resilientes',
  },
  {
    title: '35% más rápido. 28% menos costos. 100% trazabilidad',
    subtitle: 'Sistema inteligente de gestión de emergencias validado en ambientes reales',
  },
  {
    title: 'IA que trabaja CON bomberos, no PARA bomberos',
    subtitle: 'Tecnología patentable con validación humana. Porque las vidas no se deciden solas',
  },
] as const;

export const AUDIENCES = [
  { id: 'governments', label: 'Gobiernos', icon: '🏛️', color: 'primary' },
  { id: 'investors', label: 'Inversionistas', icon: '💰', color: 'secondary' },
  { id: 'firefighters', label: 'Bomberos', icon: '🚒', color: 'accent' },
  { id: 'developers', label: 'Desarrolladores', icon: '👨‍💻', color: 'primary' },
  { id: 'citizens', label: 'Ciudadanos', icon: '👥', color: 'secondary' },
] as const;
Tarea 1.2: Crear Componentes Comunes
Archivo: src/components/common/Button.tsx
typescriptimport { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-primary/50',
      secondary: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-dark',
      outline: 'border border-light/20 text-light hover:bg-light/10',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
Archivo: src/components/common/Container.tsx
typescriptimport { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)} {...props}>
      {children}
    </div>
  );
}
Archivo: src/components/common/Card.tsx
typescriptimport { cn } from '@/utils/cn';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'flat' | 'elevated';
  children: React.ReactNode;
}

export function Card({ variant = 'default', children, className, ...props }: CardProps) {
  const variants = {
    default: 'bg-gradient-to-br from-dark-light to-dark border border-secondary/20 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20',
    flat: 'bg-dark-light',
    elevated: 'bg-gradient-to-br from-dark-light to-dark shadow-2xl',
  };
  
  return (
    <div
      className={cn('rounded-xl p-6 transition-all duration-300', variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}
Tarea 1.3: Crear Navbar
Archivo: src/components/layout/Navbar.tsx
typescriptimport { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { cn } from '@/utils/cn';
import { SITE_CONFIG } from '@/constants/content';

const NAV_LINKS = [
  { href: '#solution', label: 'Solución' },
  { href: '#technology', label: 'Tecnología' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contact', label: 'Contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark/80 backdrop-blur-md shadow-lg shadow-primary/10'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">
              {SITE_CONFIG.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              
                key={link.href}
                href={link.href}
                className="text-light/70 hover:text-light transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Solicitar Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-light p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-light/10">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                
                  key={link.href}
                  href={link.href}
                  className="text-light/70 hover:text-light transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button size="md" className="w-full mt-2">
                Solicitar Demo
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
Validación Sprint 1:

 Navbar se muestra correctamente
 Navbar cambia estilo al hacer scroll
 Menú móvil funciona correctamente
 Gradiente del logo se ve correctamente
 Links navegan a secciones (aunque aún no existan)


SPRINT 2: Hero Section (DÍA 1-2)
Duración: 4-6 horas
Tarea 2.1: Crear Hook de Animación
Archivo: src/hooks/useScrollAnimation.ts
typescriptimport { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}
Tarea 2.2: Crear Hero Section
Archivo: src/components/sections/Hero.tsx
typescriptimport { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { HERO_MESSAGES } from '@/constants/content';

export function Hero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % HERO_MESSAGES.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentMessage = HERO_MESSAGES[currentMessageIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow" />
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Animated Headline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessageIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {currentMessage.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {currentMessage.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button size="lg" variant="primary">
              Solicitar Demo
            </Button>
            <Button size="lg" variant="outline">
              <Play size={20} />
              Ver Video
            </Button>
          </motion.div>

          {/* Message Indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {HERO_MESSAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMessageIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentMessageIndex
                    ? 'w-8 bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                )}
                aria-label={`Go to message ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="text-white/60" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
Validación Sprint 2:

 Hero ocupa pantalla completa (min-h-screen)
 Mensajes rotan cada 5 segundos con animación suave
 Indicadores de mensaje funcionan al hacer click
 Botones CTA visibles y con hover effects
 Scroll indicator anima correctamente
 Responsive en mobile/tablet/desktop


SPRINT 3: Audience Selector + Problem/Solution (DÍA 2-3)
Duración: 6-8 horas
Tarea 3.1: Audience Selector
Archivo: src/components/sections/AudienceSelector.tsx
typescriptimport { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { AUDIENCES } from '@/constants/content';

export function AudienceSelector() {
  const [activeAudience, setActiveAudience] = useState(AUDIENCES[0].id);

  return (
    <section className="sticky top-20 z-40 bg-dark/90 backdrop-blur-md border-b border-secondary/20 py-4">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {AUDIENCES.map((audience) => (
            <motion.button
              key={audience.id}
              onClick={() => setActiveAudience(audience.id)}
              className={cn(
                'px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300',
                'border flex items-center gap-2',
                activeAudience === audience.id
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-transparent border-secondary/30 text-light/70 hover:border-secondary hover:bg-secondary/10'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{audience.icon}</span>
              <span>{audience.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
Tarea 3.2: Problem/Solution Section
Archivo: src/components/sections/ProblemSolution.tsx
typescriptimport { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const PROBLEMS = [
  {
    title: 'Colapsan sin Internet',
    description: 'Sistemas dependen 100% de conectividad celular',
  },
  {
    title: 'Falsas alarmas saturan recursos',
    description: 'Sin validación inteligente, 40% de recursos desperdiciados',
  },
  {
    title: 'Decisiones lentas',
    description: '4.5 minutos promedio, procesos manuales',
  },
  {
    title: 'Solo reactivos',
    description: 'Sin capacidad predictiva, siempre llegan tarde',
  },
  {
    title: 'Sin trazabilidad',
    description: 'Ciudadanos no saben qué pasó con su reporte',
  },
];

const SOLUTIONS = [
  // (removed: 'Opera offline' solution entry)
  {
    title: 'Validación IA + Blockchain',
    description: '95% reducción de falsas alarmas con sistema HYDRA',
    metric: '94.7% precisión',
  },
  {
    title: 'Despacho automático',
    description: '1.8 segundos vs 4.5 minutos tradicional',
    metric: '150% más rápido',
  },
  {
    title: 'Predicción 1-72h',
    description: '5 algoritmos patentables, anticipación inteligente',
    metric: '87% precisión',
  },
  {
    title: 'Trazabilidad 100%',
    description: 'Blockchain inmutable, app ciudadana tiempo real',
    metric: '100% auditable',
  },
];

export function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="section bg-dark">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            El desafío que nadie ha resuelto...{' '}
            <span className="gradient-text">hasta ahora</span>
          </h2>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Los sistemas tradicionales fallan donde más se necesitan. SYREIAX redefine las reglas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* PROBLEMS */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <XCircle size={28} />
              Sistemas Tradicionales
            </h3>
            <div className="space-y-4">
              {PROBLEMS.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-dark-light rounded-lg border-l-4 border-red-500/50"
                >
                  <h4 className="font-semibold text-light mb-1">{problem.title}</h4>
                  <p className="text-sm text-light/60">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-6 flex items-center gap-2">
              <CheckCircle2 size={28} className="text-secondary" />
              SYREIAX GLOBAL
            </h3>
            <div className="space-y-4">
              {SOLUTIONS.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-dark-light to-dark rounded-lg border-l-4 border-secondary"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-light mb-1">{solution.title}</h4>
                      <p className="text-sm text-light/60">{solution.description}</p>
                    </div>
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded ml-2 whitespace-nowrap">
                      {solution.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* VS Badge */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-primary text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
          >
            VS
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
Validación Sprint 3:

 Audience selector sticky funciona
 Pills cambian de estado al hacer click
 Problem/Solution en dos columnas en desktop
 Animaciones stagger funcionan al entrar en viewport
 Badge "VS" se muestra en desktop
 Responsive en mobile (stack vertical)


SPRINT 4: Ecosystem Grid (DÍA 3-4)
Duración: 6-8 horas
Archivo: src/components/sections/Ecosystem.tsx
typescriptimport { motion } from 'framer-motion';
import { Smartphone, Database, BarChart3, Brain, ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const MODULES = [
  {
    id: 'app',
    icon: Smartphone,
    title: 'SYREIAX APP',
    description: 'Reporta emergencias desde cualquier canal: WhatsApp, app nativa, botón IoT o sensores automáticos',
    features: [
      'Multi-canal (5+ fuentes)',
      'Geolocalización automática',
      'Validación IA en <2 seg',
    ],
    gradient: 'from-[#FF6B35] to-[#FF8C61]',
  },
  {
    id: 'core',
    icon: Database,
    title: 'SYREIAX CORE',
    subtitle: 'ERP',
    description: 'Cerebro operativo que gestiona RRHH, inventarios, finanzas y despacho en tiempo real',
    features: [
      'ERP completo integrado',
      'Trazabilidad blockchain',
      'Dashboard unificado',
    ],
    gradient: 'from-[#1A535C] to-[#2D6A75]',
  },
  {
    id: 'dashboard',
    icon: BarChart3,
    title: 'SYREIAX DASHBOARD',
    description: 'Comando y control para operadores con 4 modos adaptativos según confianza de IA',
    features: [
      'Sistema HYDRA (IA+Humano)',
      'Métricas en tiempo real',
      'Decisiones en 1.8 seg',
    ],
    gradient: 'from-[#4ECDC4] to-[#6FE0D7]',
  },
  {
    id: 'ia',
    icon: Brain,
    title: 'SIREIA+ IA',
    description: '5 algoritmos patentables que predicen, optimizan y aprenden de cada emergencia',
    features: [
      'Predicción 1-72 horas',
      '5 algoritmos únicos',
      'Aprendizaje continuo',
    ],
    gradient: 'from-[#9D4EDD] to-[#C77DFF]',
  },
];

export function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="solution" className="section relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ecosistema Integrado{' '}
              <span className="gradient-text">SYREIAX</span>
            </h2>
            <p className="text-xl text-light/70 max-w-3xl mx-auto">
              4 módulos. 1 plataforma. Infinitas posibilidades.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MODULES.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="group h-full hover:-translate-y-2">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-light mb-2">
                    {module.title}
                    {module.subtitle && (
                      <span className="text-base text-secondary ml-2">
                        ({module.subtitle})
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-light/70 mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-light/60"
                      >
                        <span className="text-secondary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  
                    href={`#${module.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors group-hover:gap-3 transition-all duration-300"
                  >
                    <span className="font-semibold">Explorar módulo</span>
                    <ArrowRight size={16} />
                  </a>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
Validación Sprint 4:

 Grid 2x2 en desktop, 1 columna en mobile
 Cards iguales en altura
 Iconos con gradiente específico por módulo
 Hover effects funcionan (lift + scale icon)
 Animación stagger al entrar en viewport
 Links "Explorar módulo" cambian gap al hover