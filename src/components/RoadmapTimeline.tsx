import { m as motion } from 'framer-motion';
import { CheckCircle, Clock, MapPin } from 'lucide-react';

const RoadmapTimeline = () => {
  const phases = [
    {
      id: 'q1-2025',
      quarter: 'Q1 2025',
      title: 'Validación Técnica & Protección IP',
      description: 'Desarrollo de documentación completa, búsqueda de prior art y solicitud de patentes para tecnologías core',
      deliverables: [
        'Especificación técnica 15K+ palabras',
        'Búsqueda prior art en SIC/WIPO',
        'Solicitud 5 patentes (HYDRA, IRVD, PCE, etc.)',
        'Registro marca SYREIAX GLOBAL'
      ],
      metrics: '5 patentes solicitadas, TRL 4-5 alcanzado',
      status: 'completed',
      position: 'left'
    },
    {
      id: 'q2-2025',
      quarter: 'Q2 2025',
      title: 'Piloto Valledupar',
      description: 'Implementación en 1 estación de bomberos con 100+ emergencias reales para validación operativa',
      deliverables: [
        'Setup infraestructura (AWS/Azure)',
        'Desarrollo MVP (App + CORE + Dashboard)',
        'Capacitación 10 operadores',
        'Despliegue 50 botones IoT + 5 gateways LoRa'
      ],
      metrics: '1 estación, 100+ emergencias, 3 meses validación',
      status: 'completed',
      position: 'right'
    },
    {
      id: 'q3-q4-2025',
      quarter: 'Q3-Q4 2025',
      title: 'Escalamiento Departamental Cesar',
      description: 'Expansión a 15 municipios del Cesar con integración UNGRD y gobernación',
      deliverables: [
        '15 estaciones conectadas',
        'Centro de comando departamental',
        'Integración sistemas legacy',
      ],
      metrics: '15 municipios, 50K+ ciudadanos alcanzados',
      status: 'completed',
      position: 'left'
    },
    {
      id: '2026',
      quarter: '2026',
      title: 'Plataforma Nacional Colombia',
      description: 'Expansión a 3 departamentos adicionales con reconocimiento UNGRD como estándar',
      deliverables: [
        '4 departamentos operativos',
        'Alianzas SENA, universidades',
        'Módulos GREEN, MED, SECURE',
        'API pública v1'
      ],
      metrics: '50+ municipios, 500K+ ciudadanos',
      status: 'current',
      position: 'right'
    },
    {
      id: '2027-2028',
      quarter: '2027-2028',
      title: 'Expansión Latinoamérica',
      description: 'Presencia en México, Chile, Perú con adaptaciones locales y alianzas regionales',
      deliverables: [
        '3 países operativos',
        'Alianzas OPS, BID, UNDRR',
        'Marketplace de módulos',
        'Certificaciones ISO/NFPA'
      ],
      metrics: '200+ municipios Latam, 2M+ usuarios',
      status: 'planned',
      position: 'left'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Clock className="w-6 h-6 text-[#FF6B35]" />;
      default:
        return <MapPin className="w-6 h-6 text-[#4ECDC4]" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-gray-600 bg-gray-800/50';
      case 'current':
        return 'border-[#FF6B35] bg-[#FF6B35]/10';
      default:
        return 'border-[#4ECDC4] bg-[#4ECDC4]/10';
    }
  };

  return (
    <section id="roadmap" className="py-12 md:py-24 bg-gradient-radial from-[#1A535C]/20 via-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hoja de Ruta
          </h2>
          <p className="text-xl text-gray-400">
            De piloto local a plataforma continental
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#4ECDC4]/30 via-[#4ECDC4]/20 to-transparent h-full"></div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center justify-start ${phase.position === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Node */}
                <motion.div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${getStatusColor(phase.status)} flex items-center justify-center z-10`}
                  animate={phase.status === 'current' ? {
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(255, 107, 53, 0.7)',
                      '0 0 0 10px rgba(255, 107, 53, 0)',
                      '0 0 0 0 rgba(255, 107, 53, 0)'
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {getStatusIcon(phase.status)}
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`w-full max-w-md ml-16 sm:ml-20 md:ml-0 ${phase.position === 'left' ? 'md:mr-12' : 'md:ml-12'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border ${getStatusColor(phase.status)} rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${phase.status === 'completed' ? 'bg-gray-700 text-gray-300' :
                          phase.status === 'current' ? 'bg-[#FF6B35] text-white' :
                            'bg-[#4ECDC4] text-[#0A1128]'
                        }`}>
                        {phase.quarter}
                      </span>
                      <span className={`text-sm font-medium ${phase.status === 'completed' ? 'text-green-400' :
                          phase.status === 'current' ? 'text-[#FF6B35]' :
                            'text-[#4ECDC4]'
                        }`}>
                        {phase.status === 'completed' ? '✓ Completado' :
                          phase.status === 'current' ? '🔄 En Proceso' :
                            '📅 Planeado'}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{phase.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Deliverables clave:</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start">
                            <span className="text-[#4ECDC4] mr-2">•</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.metrics && (
                      <div className="text-sm text-gray-400 border-t border-slate-700/50 pt-3">
                        <strong className="text-white">Métricas:</strong> {phase.metrics}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-6 py-3">
              <span className="text-gray-400 text-sm">Progreso: </span>
              <span className="text-[#FF6B35] font-semibold">3/5 fases completadas</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;