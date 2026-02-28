import { motion } from 'framer-motion';
import { Smartphone, Database, BarChart3, Brain, ArrowRight } from 'lucide-react';
import { useAudience } from '../context/AudienceContext';

const EcosystemGrid = () => {
  const { content } = useAudience();
  const highlightId = content.ecosystemHighlight;
  const modules = [
    {
      id: 'app',
      icon: Smartphone,
      title: 'SYREIAX APP',
      gradient: 'from-[#FF6B35] to-[#FF8C61]',
      description: 'Reporta emergencias desde cualquier canal: WhatsApp, app nativa, botón IoT o sensores automáticos',
      features: [
        'Multi-canal (5+ fuentes)',
        'Geolocalización automática',
        'Validación IA en <2 seg'
      ]
    },
    {
      id: 'core',
      icon: Database,
      title: 'SYREIAX CORE (ERP)',
      gradient: 'from-[#1A535C] to-[#2D6A75]',
      description: 'Cerebro operativo que gestiona RRHH, inventarios, finanzas y despacho en tiempo real',
      features: [
        'ERP completo integrado',
        'Trazabilidad blockchain',
        'Dashboard unificado'
      ]
    },
    {
      id: 'dashboard',
      icon: BarChart3,
      title: 'SYREIAX DASHBOARD',
      gradient: 'from-[#4ECDC4] to-[#6FE0D7]',
      description: 'Comando y control para operadores con 4 modos adaptativos según confianza de IA',
      features: [
        'Sistema HYDRA (IA+Humano)',
        'Métricas en tiempo real',
        'Decisiones en 1.8 seg'
      ]
    },
    {
      id: 'ia',
      icon: Brain,
      title: 'SIREIA+ IA',
      gradient: 'from-[#9D4EDD] to-[#C77DFF]',
      description: '5 algoritmos patentables que predicen, optimizan y aprenden de cada emergencia',
      features: [
        'Predicción 1-72 horas',
        '5 algoritmos únicos',
        'Aprendizaje continuo'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 md:py-24 bg-gradient-radial from-[#1A535C]/20 via-transparent to-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent mb-4">
            Ecosistema Integrado SYREIAX
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            4 módulos. 1 plataforma. Infinitas posibilidades.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {modules.map((module) => (
            <motion.div
              key={module.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 ${
                module.id === highlightId
                  ? 'border-[#4ECDC4]/60 ring-1 ring-[#4ECDC4]/30 shadow-lg shadow-[#4ECDC4]/10 scale-[1.02]'
                  : 'border-slate-700/50 hover:border-[#4ECDC4]/50'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${module.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <module.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{module.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {module.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-[#4ECDC4] rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => {
                  // Map module → tech tab
                  const tabMap: Record<string, string> = { app: 'irvd', core: 'satms', dashboard: 'hydra', ia: 'pce' };
                  const tabId = tabMap[module.id] || 'irvd';
                  window.dispatchEvent(new CustomEvent('switch-tech-tab', { detail: tabId }));
                  document.getElementById('tecnologia')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center text-[#FF6B35] font-semibold hover:text-[#E55A2B] transition-colors group-hover:underline"
              >
                Explorar módulo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemGrid;