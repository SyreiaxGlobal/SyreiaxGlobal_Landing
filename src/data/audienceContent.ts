// ─── Audience Content Data ───────────────────────────────────────────────────
// Single source of truth for all audience-specific copy across the landing page.
// Every section that varies by audience reads from here via AudienceContext.

export type AudienceId =
  | 'gobiernos'
  | 'inversionistas'
  | 'bomberos'
  | 'desarrolladores'
  | 'ciudadanos';

export interface HeroContent {
  headlines: string[];
  subtitle: string;
  badge: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface ProblemItem {
  title: string;
  desc: string;
}

export interface SolutionItem {
  title: string;
  desc: string;
}

export interface AudienceContent {
  hero: HeroContent;
  problems: ProblemItem[];
  solutions: SolutionItem[];
  /** Module id to visually highlight in EcosystemGrid */
  ecosystemHighlight: string;
  /** Card id to visually emphasise in MultiCTA (gov | invest | fire) */
  ctaHighlight: string;
}

// ─── Content Map ─────────────────────────────────────────────────────────────

export const audienceContent: Record<AudienceId, AudienceContent> = {
  gobiernos: {
    hero: {
      headlines: [
        'La plataforma cívica que salva vidas',
        '35% más rápido. 28% menos costos. 100% trazabilidad',
        'Transforma tu territorio en referente de resiliencia',
      ],
      subtitle:
        'Tecnología de emergencias que funciona sin Internet, predice riesgos y conecta territorios resilientes.',
      badge: 'Disponible ahora para Gobiernos y Cuerpos de Bomberos',
      primaryCta: 'Solicitar Demo Institucional',
      secondaryCta: 'Ver cómo funciona',
    },
    problems: [
      { title: 'Colapsan sin Internet', desc: 'Sistemas dependen 100% de conectividad' },
      { title: 'Falsas alarmas', desc: 'Sin validación inteligente, recursos desperdiciados' },
      { title: 'Decisiones lentas', desc: '4.5 min promedio, procesos manuales' },
      { title: 'Solo reactivos', desc: 'Sin capacidad predictiva, siempre tarde' },
      { title: 'Sin trazabilidad', desc: 'Ciudadanos no saben qué pasó con su reporte' },
    ],
    solutions: [
      { title: 'Funciona sin conectividad', desc: 'Modo offline-first con sincronización automática' },
      { title: 'Validación IA + Blockchain', desc: '95% reducción falsas alarmas' },
      { title: 'Despacho automático', desc: '1.8 seg con sistema HYDRA, 150% más rápido' },
      { title: 'Predicción 1-72h', desc: '5 algoritmos patentables, 87% precisión' },
      { title: 'Trazabilidad 100%', desc: 'Blockchain inmutable, app ciudadana en tiempo real' },
    ],
    ecosystemHighlight: 'core',
    ctaHighlight: 'gov',
  },

  inversionistas: {
    hero: {
      headlines: [
        'GovTech con moat técnico y social impact',
        '$800B mercado global. 5 patentes en trámite',
        'El SaaS que los gobiernos necesitan y no existe',
      ],
      subtitle:
        'Plataforma SaaS B2G con 5 algoritmos patentables, unit economics validados y un TAM de $800B en gestión de emergencias.',
      badge: 'Ronda Pre-Seed abierta — Investor Pack disponible',
      primaryCta: 'Descargar Investor Pack',
      secondaryCta: 'Ver métricas clave',
    },
    problems: [
      { title: 'Mercado fragmentado', desc: 'Sin líder tecnológico claro en GovTech LatAm' },
      { title: 'Soluciones legacy', desc: 'Incumbentes sin IA ni capacidad predictiva' },
      { title: 'Alto churn municipal', desc: 'Cambios de gobierno destruyen continuidad' },
      { title: 'Sin datos verificables', desc: 'Imposible auditar eficiencia en emergencias' },
      { title: 'Impacto no medible', desc: 'Falta de métricas ESG trazables' },
    ],
    solutions: [
      { title: 'Moat de 5 patentes', desc: 'Algoritmos únicos imposibles de replicar' },
      { title: 'Revenue recurrente', desc: 'SaaS B2G con contratos multianuales' },
      { title: 'Blockchain inmutable', desc: 'Datos sobreviven cambios de gobierno' },
      { title: 'Métricas en tiempo real', desc: 'Dashboard de KPIs operativos auditables' },
      { title: 'Impacto ESG certificable', desc: 'Reducción de 28% en costos de emergencia' },
    ],
    ecosystemHighlight: 'ia',
    ctaHighlight: 'invest',
  },

  bomberos: {
    hero: {
      headlines: [
        'IA que trabaja CON bomberos, no PARA bomberos',
        'De 4.5 minutos a 1.8 segundos en despacho',
        'Tu experiencia potenciada con tecnología',
      ],
      subtitle:
        'Herramientas de campo que funcionan sin señal, predicen riesgos y te dan superpoderes operativos.',
      badge: 'Piloto activo — Hardware IoT sin costo inicial',
      primaryCta: 'Unirse al Piloto',
      secondaryCta: 'Ver demo operativa',
    },
    problems: [
      { title: 'Colapsan sin Internet', desc: 'Radios y sistemas caen en zonas rurales' },
      { title: 'Falsas alarmas constantes', desc: '40% de salidas son innecesarias' },
      { title: 'Despacho manual lento', desc: '4.5 min promedio para asignar unidades' },
      { title: 'Cero predicción', desc: 'Siempre reaccionando, nunca anticipando' },
      { title: 'Equipos obsoletos', desc: 'Inventario y mantenimiento en papel' },
    ],
    solutions: [
      { title: 'Funciona offline', desc: 'Mesh network + sincronización automática' },
      { title: 'IA filtra falsas alarmas', desc: '95% de reducción, solo sales cuando importa' },
      { title: 'HYDRA despacha en 1.8s', desc: 'IA sugiere, tú decides — siempre en control' },
      { title: 'Predicción 1-72h', desc: 'Anticipa incendios y zonas de riesgo' },
      { title: 'Gestión digital integral', desc: 'Inventario, turnos y mantenimiento en tu móvil' },
    ],
    ecosystemHighlight: 'dashboard',
    ctaHighlight: 'fire',
  },

  desarrolladores: {
    hero: {
      headlines: [
        '5 algoritmos patentables. Stack moderno. Impacto real',
        'Construye sobre la plataforma que salva vidas',
        'Open API + Edge Computing + Blockchain = SYREIAX',
      ],
      subtitle:
        'Stack TypeScript end-to-end, 5 algoritmos de IA documentados, API REST + WebSocket y contribución open-source.',
      badge: 'Documentación técnica disponible — API en beta',
      primaryCta: 'Explorar Documentación',
      secondaryCta: 'Ver arquitectura',
    },
    problems: [
      { title: 'APIs cerradas', desc: 'Plataformas GovTech sin integraciones públicas' },
      { title: 'Sin edge computing', desc: 'Todo depende de cloud, latencia inaceptable' },
      { title: 'Algoritmos de caja negra', desc: 'IA no explicable, imposible auditar' },
      { title: 'Stacks legacy', desc: 'Java monolíticos que nadie quiere mantener' },
      { title: 'Sin comunidad', desc: 'Ecosistema cerrado, cero colaboración' },
    ],
    solutions: [
      { title: 'API REST + WebSocket', desc: 'Documentación OpenAPI, SDKs en TypeScript' },
      { title: 'Edge-first architecture', desc: 'Procesamiento local, sync inteligente' },
      { title: 'IA explicable (XAI)', desc: 'Cada decisión tiene trazabilidad completa' },
      { title: 'TypeScript end-to-end', desc: 'React + Node + Prisma, monorepo moderno' },
      { title: 'Contribución abierta', desc: 'Roadmap público, issues abiertos, RFC process' },
    ],
    ecosystemHighlight: 'ia',
    ctaHighlight: 'gov',
  },

  ciudadanos: {
    hero: {
      headlines: [
        'Reporta. Rastrea. Confía.',
        'Tu voz activa la respuesta en segundos',
        'Transparencia total en cada emergencia',
      ],
      subtitle:
        'Reporta emergencias desde WhatsApp o la app, recibe actualizaciones en tiempo real y verifica cada acción con blockchain.',
      badge: 'App ciudadana disponible — Descarga gratuita',
      primaryCta: 'Descargar App',
      secondaryCta: 'Ver cómo reportar',
    },
    problems: [
      { title: 'Líneas colapsadas', desc: 'Llamar al 123 puede tardar minutos' },
      { title: 'No sabes si te escucharon', desc: 'Cero confirmación tras reportar' },
      { title: 'Respuesta lenta', desc: 'Minutos que se sienten como horas' },
      { title: 'Sin transparencia', desc: 'No sabes qué pasó con tu reporte' },
      { title: 'Información desactualizada', desc: 'Noticias llegan tarde, rumores dominan' },
    ],
    solutions: [
      { title: 'Multi-canal instantáneo', desc: 'WhatsApp, app, web — reporta como prefieras' },
      { title: 'Confirmación inmediata', desc: 'Notificación push cuando tu reporte se valida' },
      { title: 'Respuesta en segundos', desc: 'IA despacha recursos en 1.8 seg' },
      { title: 'Trazabilidad blockchain', desc: 'Cada acción registrada, verificable por ti' },
      { title: 'Alertas en tiempo real', desc: 'Mapa de riesgos y notificaciones preventivas' },
    ],
    ecosystemHighlight: 'app',
    ctaHighlight: 'gov',
  },
};
