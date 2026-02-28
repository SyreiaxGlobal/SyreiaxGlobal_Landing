import { useState, useEffect } from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { Activity, GitBranch, Users, Radar, Route } from 'lucide-react';

/* ── SVG Visualization Components ── */

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.2, duration: 0.8, ease: 'easeInOut' as const }, opacity: { delay: i * 0.2, duration: 0.3 } }
  })
};

const fadeNode = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.4 }
  })
};

/** IRVD — Pipeline: Imagen → Detección siluetas → Scoring → Prioridad */
const IRVDVisual = () => {
  const nodes = [
    { label: 'Imagen', x: 50, y: 40, color: '#6b7280' },
    { label: 'Detección\nSiluetas', x: 170, y: 40, color: '#4ECDC4' },
    { label: 'Scoring\nMulti-dim', x: 290, y: 40, color: '#FF6B35' },
    { label: 'Prioridad', x: 410, y: 40, color: '#22c55e' },
  ];
  return (
    <div className="w-full aspect-[5/3] bg-slate-900/60 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center">
      <svg viewBox="0 0 480 100" className="w-full h-auto" role="img" aria-label="Diagrama de flujo IRVD">
        {/* Connecting arrows */}
        {[0, 1, 2].map(i => (
          <motion.line
            key={i}
            x1={nodes[i].x + 40}
            y1={nodes[i].y + 15}
            x2={nodes[i + 1].x - 10}
            y2={nodes[i + 1].y + 15}
            stroke="#4ECDC4"
            strokeWidth="2"
            strokeLinecap="round"
            variants={draw}
            initial="hidden"
            animate="visible"
            custom={i + 1}
          />
        ))}
        {/* Arrow heads */}
        {[1, 2, 3].map(i => (
          <motion.polygon
            key={`ah-${i}`}
            points={`${nodes[i].x - 10},${nodes[i].y + 10} ${nodes[i].x - 10},${nodes[i].y + 20} ${nodes[i].x - 2},${nodes[i].y + 15}`}
            fill="#4ECDC4"
            variants={fadeNode}
            initial="hidden"
            animate="visible"
            custom={i + 1}
          />
        ))}
        {/* Nodes */}
        {nodes.map((n, i) => (
          <motion.g key={i} variants={fadeNode} initial="hidden" animate="visible" custom={i}>
            <rect x={n.x - 10} y={n.y - 5} width="100" height="42" rx="8" fill={n.color} fillOpacity="0.15" stroke={n.color} strokeWidth="1.5" />
            {n.label.split('\n').map((line, li) => (
              <text key={li} x={n.x + 40} y={n.y + 15 + li * 14} textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}
        {/* Privacy badge */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={5}>
          <rect x="130" y="70" width="110" height="22" rx="11" fill="#4ECDC4" fillOpacity="0.1" stroke="#4ECDC4" strokeWidth="1" strokeDasharray="3 2" />
          <text x="185" y="84" textAnchor="middle" fill="#4ECDC4" fontSize="9" fontFamily="Inter, sans-serif">🔒 Privacy-preserving</text>
        </motion.g>
      </svg>
    </div>
  );
};

/** PCE — Cascade tree: primary event → secondary events with probabilities */
const PCEVisual = () => {
  const branches = [
    { label: 'Inundación', prob: '72%', y: 15, color: '#3b82f6' },
    { label: 'Corte eléctrico', prob: '58%', y: 60, color: '#f59e0b' },
    { label: 'Evacuación', prob: '41%', y: 105, color: '#ef4444' },
    { label: 'Colapso vial', prob: '33%', y: 150, color: '#8b5cf6' },
  ];
  return (
    <div className="w-full aspect-[5/3] bg-slate-900/60 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center">
      <svg viewBox="0 0 460 185" className="w-full h-auto" role="img" aria-label="Árbol de cascada PCE">
        {/* Root event */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={0}>
          <rect x="10" y="62" width="120" height="44" rx="10" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="1.5" />
          <text x="70" y="80" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">🔥 Incendio</text>
          <text x="70" y="95" textAnchor="middle" fill="#FF6B35" fontSize="9" fontFamily="Inter, sans-serif">Evento Primario</text>
        </motion.g>
        {/* Branches */}
        {branches.map((b, i) => (
          <motion.g key={i}>
            <motion.path
              d={`M130,84 C180,84 180,${b.y + 18} 220,${b.y + 18}`}
              fill="none"
              stroke={b.color}
              strokeWidth="1.5"
              variants={draw}
              initial="hidden"
              animate="visible"
              custom={i + 1}
            />
            <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={i + 1.5}>
              <rect x="220" y={b.y} width="140" height="36" rx="8" fill={b.color} fillOpacity="0.12" stroke={b.color} strokeWidth="1" />
              <text x="290" y={b.y + 22} textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif">
                {b.label}
              </text>
              {/* Probability badge */}
              <rect x="370" y={b.y + 6} width="50" height="24" rx="12" fill={b.color} fillOpacity="0.25" stroke={b.color} strokeWidth="1" />
              <text x="395" y={b.y + 22} textAnchor="middle" fill={b.color} fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">
                {b.prob}
              </text>
            </motion.g>
          </motion.g>
        ))}
        {/* Time indicator */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={6}>
          <rect x="155" y="155" width="90" height="22" rx="11" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="1" strokeDasharray="3 2" />
          <text x="200" y="169" textAnchor="middle" fill="#FF6B35" fontSize="9" fontFamily="Inter, sans-serif">⏱ 1-72h ahead</text>
        </motion.g>
      </svg>
    </div>
  );
};

/** HYDRA — Human ↔ AI collaboration with 4 adaptive modes */
const HYDRAVisual = () => {
  const modes = [
    { label: 'Autónomo', desc: 'Confianza alta', color: '#22c55e', angle: -40 },
    { label: 'Asistido', desc: 'Confianza media', color: '#4ECDC4', angle: -13 },
    { label: 'Supervisado', desc: 'Confianza baja', color: '#f59e0b', angle: 13 },
    { label: 'Manual', desc: 'IA incierta', color: '#ef4444', angle: 40 },
  ];
  return (
    <div className="w-full aspect-[5/3] bg-slate-900/60 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center">
      <svg viewBox="0 0 460 190" className="w-full h-auto" role="img" aria-label="Diagrama colaborativo HYDRA">
        {/* Human node */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={0}>
          <circle cx="80" cy="95" r="38" fill="#4ECDC4" fillOpacity="0.1" stroke="#4ECDC4" strokeWidth="1.5" />
          <text x="80" y="90" textAnchor="middle" fill="white" fontSize="22">👤</text>
          <text x="80" y="110" textAnchor="middle" fill="#4ECDC4" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">Humano</text>
        </motion.g>
        {/* Bidirectional arrow */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={1}>
          <motion.line x1="120" y1="95" x2="200" y2="95" stroke="white" strokeWidth="2" strokeDasharray="6 3" variants={draw} initial="hidden" animate="visible" custom={1} />
          <polygon points="196,89 204,95 196,101" fill="white" />
          <polygon points="124,89 116,95 124,101" fill="white" />
          <text x="160" y="85" textAnchor="middle" fill="gray" fontSize="8" fontFamily="Inter, sans-serif">feedback</text>
        </motion.g>
        {/* AI node */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={0}>
          <circle cx="240" cy="95" r="38" fill="#FF6B35" fillOpacity="0.1" stroke="#FF6B35" strokeWidth="1.5" />
          <text x="240" y="90" textAnchor="middle" fill="white" fontSize="22">🤖</text>
          <text x="240" y="110" textAnchor="middle" fill="#FF6B35" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">HYDRA</text>
        </motion.g>
        {/* Adaptive modes */}
        {modes.map((m, i) => {
          const endY = 30 + i * 42;
          return (
            <motion.g key={i}>
              <motion.path
                d={`M278,95 C320,95 340,${endY + 12} 360,${endY + 12}`}
                fill="none"
                stroke={m.color}
                strokeWidth="1.5"
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={i + 2}
              />
              <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={i + 2.5}>
                <rect x="360" y={endY} width="95" height="28" rx="6" fill={m.color} fillOpacity="0.15" stroke={m.color} strokeWidth="1" />
                <circle cx="372" cy={endY + 14} r="4" fill={m.color} />
                <text x="415" y={endY + 12} textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="Inter, sans-serif">{m.label}</text>
                <text x="415" y={endY + 23} textAnchor="middle" fill={m.color} fontSize="7" fontFamily="Inter, sans-serif">{m.desc}</text>
              </motion.g>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

/** SATMS — Radial diagram: 7 sources → central processing → alert */
const SATMSVisual = () => {
  const sources = [
    { label: 'Clima', emoji: '🌦️', angle: 0 },
    { label: 'IoT', emoji: '📡', angle: 51 },
    { label: 'Satélite', emoji: '🛰️', angle: 103 },
    { label: 'Social', emoji: '📱', angle: 154 },
    { label: 'Sísmico', emoji: '📊', angle: 206 },
    { label: 'Cámaras', emoji: '📷', angle: 257 },
    { label: 'Tráfico', emoji: '🚦', angle: 309 },
  ];
  const cx = 180, cy = 95, r = 72;
  return (
    <div className="w-full aspect-[5/3] bg-slate-900/60 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center">
      <svg viewBox="0 0 460 190" className="w-full h-auto" role="img" aria-label="Diagrama radial SATMS">
        {/* Source nodes + connecting lines */}
        {sources.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const sx = cx + r * Math.cos(rad);
          const sy = cy + r * Math.sin(rad);
          return (
            <motion.g key={i}>
              <motion.line
                x1={cx}
                y1={cy}
                x2={sx}
                y2={sy}
                stroke="#4ECDC4"
                strokeWidth="1"
                strokeOpacity="0.4"
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={i * 0.5}
              />
              <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={i * 0.3 + 0.5}>
                <circle cx={sx} cy={sy} r="20" fill="#4ECDC4" fillOpacity="0.08" stroke="#4ECDC4" strokeWidth="1" />
                <text x={sx} y={sy - 2} textAnchor="middle" fontSize="13">{s.emoji}</text>
                <text x={sx} y={sy + 12} textAnchor="middle" fill="#9ca3af" fontSize="7" fontFamily="Inter, sans-serif">{s.label}</text>
              </motion.g>
            </motion.g>
          );
        })}
        {/* Central processing */}
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={0}>
          <circle cx={cx} cy={cy} r="28" fill="#FF6B35" fillOpacity="0.15" stroke="#FF6B35" strokeWidth="2" />
          <text x={cx} y={cy - 3} textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">Fusión</text>
          <text x={cx} y={cy + 10} textAnchor="middle" fill="#FF6B35" fontSize="8" fontFamily="Inter, sans-serif">Bayesiana</text>
        </motion.g>
        {/* Output arrow + alert */}
        <motion.line x1={cx + 30} y1={cy} x2="350" y2={cy} stroke="#FF6B35" strokeWidth="2" variants={draw} initial="hidden" animate="visible" custom={4} />
        <motion.polygon points="348,89 356,95 348,101" fill="#FF6B35" variants={fadeNode} initial="hidden" animate="visible" custom={5} />
        <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={5}>
          <rect x="360" y="70" width="90" height="50" rx="10" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5" />
          <text x="405" y="90" textAnchor="middle" fill="white" fontSize="16">🚨</text>
          <text x="405" y="108" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="600" fontFamily="Inter, sans-serif">Alerta</text>
        </motion.g>
      </svg>
    </div>
  );
};

/** AIR — Map with routes, units and resource pins */
const AIRVisual = () => (
  <div className="w-full aspect-[5/3] bg-slate-900/60 rounded-xl border border-slate-700/50 p-4 flex items-center justify-center">
    <svg viewBox="0 0 460 190" className="w-full h-auto" role="img" aria-label="Mapa simplificado AIR">
      {/* Grid streets */}
      {[40, 80, 120, 160].map(y => (
        <motion.line key={`h${y}`} x1="30" y1={y} x2="430" y2={y} stroke="#1e293b" strokeWidth="1" variants={draw} initial="hidden" animate="visible" custom={0} />
      ))}
      {[80, 160, 240, 320, 400].map(x => (
        <motion.line key={`v${x}`} x1={x} y1="20" x2={x} y2="175" stroke="#1e293b" strokeWidth="1" variants={draw} initial="hidden" animate="visible" custom={0} />
      ))}
      {/* Optimal route */}
      <motion.path
        d="M80,160 L80,120 L160,120 L160,80 L320,80 L320,40 L400,40"
        fill="none"
        stroke="#4ECDC4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      {/* Fire unit (origin) */}
      <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={2}>
        <circle cx="80" cy="160" r="14" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="1.5" />
        <text x="80" y="164" textAnchor="middle" fontSize="14">🚒</text>
        <text x="80" y="182" textAnchor="middle" fill="#FF6B35" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">Unidad</text>
      </motion.g>
      {/* Emergency (destination) */}
      <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={3}>
        <circle cx="400" cy="40" r="14" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5">
          <animate attributeName="r" values="14;18;14" dur="2s" repeatCount="3" />
        </circle>
        <text x="400" y="44" textAnchor="middle" fontSize="14">🔥</text>
      </motion.g>
      {/* Hydrant pins */}
      {[
        { x: 160, y: 120 },
        { x: 320, y: 80 },
      ].map((p, i) => (
        <motion.g key={i} variants={fadeNode} initial="hidden" animate="visible" custom={i + 4}>
          <circle cx={p.x} cy={p.y} r="8" fill="#3b82f6" fillOpacity="0.25" stroke="#3b82f6" strokeWidth="1" />
          <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="9">💧</text>
        </motion.g>
      ))}
      {/* Legend */}
      <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={6}>
        <rect x="30" y="3" width="140" height="16" rx="4" fill="#0A1128" fillOpacity="0.8" />
        <text x="38" y="14" fill="#4ECDC4" fontSize="8" fontWeight="600" fontFamily="Inter, sans-serif">── Ruta óptima</text>
        <circle cx="110" cy="10" r="3" fill="#3b82f6" />
        <text x="118" y="14" fill="#9ca3af" fontSize="8" fontFamily="Inter, sans-serif">Hidrante</text>
      </motion.g>
      {/* Time badge */}
      <motion.g variants={fadeNode} initial="hidden" animate="visible" custom={7}>
        <rect x="330" y="155" width="100" height="26" rx="13" fill="#4ECDC4" fillOpacity="0.1" stroke="#4ECDC4" strokeWidth="1" />
        <text x="380" y="172" textAnchor="middle" fill="#4ECDC4" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">⚡ &lt;1 seg</text>
      </motion.g>
    </svg>
  </div>
);

const TechnologyTabs = () => {
  const [activeTab, setActiveTab] = useState('irvd');

  // Listen for external tab-switch requests (e.g. from EcosystemGrid)
  useEffect(() => {
    const handler = (e: Event) => {
      const tabId = (e as CustomEvent<string>).detail;
      if (tabId && typeof tabId === 'string') setActiveTab(tabId);
    };
    window.addEventListener('switch-tech-tab', handler);
    return () => window.removeEventListener('switch-tech-tab', handler);
  }, []);

  const algorithms = {
    irvd: {
      icon: Activity,
      name: 'IRVD (Índice de Riesgo Vital Dinámico)',
      badge: 'Patente en trámite',
      description: 'Prioriza emergencias por vidas detectadas automáticamente con IA, no por tipo o llegada',
      unique: [
        'Detección anónima de siluetas (privacy-preserving)',
        'Scoring multi-dimensional (vida + contexto + histórico)',
        'Priorización ética automática'
      ],
      metric: '+47% precisión vs. sistemas tradicionales',
      visual: 'flowchart'
    },
    pce: {
      icon: GitBranch,
      name: 'PCE (Predictor de Cascada de Emergencias)',
      badge: 'Patente en trámite',
      description: 'Predice emergencias secundarias que se desencadenarán del evento primario',
      unique: [
        'Grafo de dependencias de emergencias',
        'Modelo probabilístico bayesiano',
        'Alertas preventivas 1-72h'
      ],
      metric: '87% precisión predictiva',
      visual: 'tree'
    },
    hydra: {
      icon: Users,
      name: 'HYDRA (Hybrid Decision & Resource Allocation)',
      badge: 'Patente en trámite',
      description: 'IA que trabaja CON operadores humanos, decidiendo cuándo confiar o pedir validación',
      unique: [
        '4 modos adaptativos según confianza',
        'Metacognición artificial (IA que sabe cuándo no sabe)',
        'Aprendizaje de validaciones humanas'
      ],
      metric: '94.7% tasa de éxito, 1.8 seg decisión',
      visual: 'collaboration'
    },
    satms: {
      icon: Radar,
      name: 'SATMS (Sistema de Alerta Temprana Multi-Señal)',
      badge: 'Patente en trámite',
      description: 'Fusiona 7+ fuentes (clima, IoT, satélites, redes sociales) para predecir emergencias',
      unique: [
        'Detección de anomalías multi-sensor',
        'Fusión bayesiana de señales',
        'Alertas hasta 72h anticipadas'
      ],
      metric: '7 fuentes integradas en tiempo real',
      visual: 'radial'
    },
    air: {
      icon: Route,
      name: 'AIR (Asignador Inteligente de Recursos)',
      badge: 'Patente en trámite',
      description: 'Optimiza qué unidad despachar, con qué recursos, por qué ruta en <1 segundo',
      unique: [
        'Optimización multi-objetivo en tiempo real',
        'Considera 15+ restricciones simultáneas',
        'Rutas dinámicas con hidrantes'
      ],
      metric: '<1 seg optimización completa',
      visual: 'map'
    }
  };

  const renderVisual = (type: string) => {
    switch (type) {
      case 'flowchart':
        return <IRVDVisual />;
      case 'tree':
        return <PCEVisual />;
      case 'collaboration':
        return <HYDRAVisual />;
      case 'radial':
        return <SATMSVisual />;
      case 'map':
        return <AIRVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="tecnologia" className="py-24 bg-[#0A1128] relative">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #4ECDC4 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Tecnología Protegida
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent mb-4">
            Algoritmos Patentables
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovaciones técnicas que nos diferencian de cualquier sistema existente
          </p>
        </motion.div>

        <Tabs.Root value={activeTab} onValueChange={setActiveTab} className="w-full">
          <Tabs.List className="flex flex-nowrap overflow-x-auto justify-start md:justify-center gap-2 mb-8 md:mb-12 pb-2 md:pb-0 scrollbar-hide px-1">
            {Object.entries(algorithms).map(([key, algo]) => (
              <Tabs.Trigger
                key={key}
                value={key}
                className={`flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]/50 ${activeTab === key
                    ? 'bg-gradient-to-r from-[#FF6B35]/20 to-[#4ECDC4]/20 text-white border-b-2 border-[#FF6B35] shadow-inner'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border-b-2 border-transparent hover:border-[#4ECDC4]/50'
                  }`}
              >
                {algo.name.split(' ')[0]}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {Object.entries(algorithms).map(([key, algo]) => (
            <Tabs.Content key={key} value={key} className="focus:outline-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Left Side - Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">
                        {algo.name}
                      </h3>
                      <span className="bg-[#4ECDC4]/20 text-[#4ECDC4] px-3 py-1 rounded-full text-sm border border-[#4ECDC4]/30">
                        {algo.badge}
                      </span>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed">
                      {algo.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Por qué es único</h4>
                      <ul className="space-y-3">
                        {algo.unique.map((point, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-400">
                            <div className="w-2 h-2 bg-[#4ECDC4] rounded-full mt-2 flex-shrink-0"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                      <div className="text-6xl font-bold text-[#FF6B35] mb-2">
                        {algo.metric.split(' ')[0]}
                      </div>
                      <div className="text-gray-400">
                        {algo.metric.split(' ').slice(1).join(' ')}
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Visual */}
                  <div className="flex justify-center items-center">
                    <div className="w-full">
                      {renderVisual(algo.visual)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
};

export default TechnologyTabs;