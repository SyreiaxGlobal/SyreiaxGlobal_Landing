import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Flame, ArrowRight } from 'lucide-react';
import Modal from './ui/Modal';
import ContactForm, { type FormVariant } from './ui/ContactForm';
import { useAudience } from '../context/AudienceContext';

// Static color style maps — Tailwind cannot resolve dynamically interpolated classes.
const colorStyles: Record<string, { bg: string; topLine: string; focusRing: string }> = {
  gov: {
    bg: 'bg-[#FF6B35]',
    topLine: 'via-[#FF6B35]/50',
    focusRing: 'focus:ring-[#FF6B35]',
  },
  invest: {
    bg: 'bg-[#4ECDC4]',
    topLine: 'via-[#4ECDC4]/50',
    focusRing: 'focus:ring-[#4ECDC4]',
  },
  fire: {
    bg: 'bg-[#9D4EDD]',
    topLine: 'via-[#9D4EDD]/50',
    focusRing: 'focus:ring-[#9D4EDD]',
  },
};

const cards = [
  {
    id: 'gov',
    icon: Building2,
    label: 'PARA GOBIERNOS',
    title: 'Transforma tu territorio en referente de resiliencia',
    features: [
      'Demo personalizada institucional',
      'Análisis de necesidades territorial',
      'Plan de implementación 90 días',
    ],
    cta: 'Solicitar Demo Institucional'
  },
  {
    id: 'invest',
    icon: TrendingUp,
    label: 'PARA INVERSIONISTAS',
    title: 'GovTech con moat técnico y social impact',
    features: [
      'Pitch deck + Financial model',
      '5 patentes en trámite',
      'Piloto validado con métricas',
    ],
    cta: 'Descargar Investor Pack'
  },
  {
    id: 'fire',
    icon: Flame,
    label: 'PARA BOMBEROS',
    title: 'Únete al piloto y mejora tu operación hoy',
    features: [
      'Capacitación completa incluida',
      'Hardware IoT sin costo inicial',
      'Soporte técnico 24/7',
    ],
    cta: 'Unirse al Piloto'
  }
];

const formVariantMap: Record<string, FormVariant> = {
  gov: 'demo',
  invest: 'investor',
  fire: 'pilot',
};

const formTitleMap: Record<FormVariant, string> = {
  demo: 'Solicitar Demo Institucional',
  investor: 'Descargar Investor Pack',
  pilot: 'Unirse al Piloto',
};

const MultiCTA = () => {
  const { content } = useAudience();
  const highlightId = content.ctaHighlight;
  const [activeForm, setActiveForm] = useState<FormVariant | null>(null);

  // Sort cards so highlighted one comes first on mobile
  const sortedCards = [...cards].sort((a, b) => {
    if (a.id === highlightId) return -1;
    if (b.id === highlightId) return 1;
    return 0;
  });

  return (
    <section className="py-12 md:py-24 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#4ECDC4] bg-clip-text text-transparent">Comienza Ahora</h2>
          <p className="text-xl text-gray-400 mt-3">Elige tu camino según tu rol</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {sortedCards.map((card) => {
            const Icon = card.icon;
            const styles = colorStyles[card.id];
            const isHighlighted = card.id === highlightId;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -8 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  isHighlighted ? 'ring-2 ring-[#FF6B35]/50 shadow-lg shadow-[#FF6B35]/10 scale-[1.02]' : ''
                }`}
              >
                {/* Background with gradient glow */}
                <div className={`absolute inset-0 ${styles.bg} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`} />
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent ${styles.topLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-6 md:p-8 border border-white/5 bg-[#0A1128]/40 backdrop-blur-sm h-full flex flex-col rounded-2xl">
                  {/* Header */}
                  <div className="flex flex-col gap-6 mb-6">
                    <div className={`w-14 h-14 rounded-lg flex items-center justify-center text-white ${styles.bg} shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <div className="inline-block text-xs font-bold tracking-widest uppercase mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        {card.label}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {card.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300/80 text-sm md:text-base group-hover:text-gray-200 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${styles.bg}`} />
                        <span className="leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <button
                      onClick={() => setActiveForm(formVariantMap[card.id])}
                      className={`w-full group/btn relative overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A1128] ${styles.focusRing}`}
                    >
                      <div className={`absolute inset-0 ${styles.bg} opacity-100`} />
                      <div className="relative bg-[#0A1128] hover:bg-transparent rounded-[7px] px-6 py-3.5 transition-colors duration-200">
                        <div className="flex items-center justify-center gap-2 text-white font-semibold">
                          <span>{card.cta}</span>
                          <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-gray-400">
          <p>¿Eres desarrollador, investigador o ciudadano interesado? <a href="#footer" className="text-[#4ECDC4] underline">Explora otras formas de participar</a></p>
        </div>

        {/* Modal for contact forms */}
        <Modal
          isOpen={activeForm !== null}
          onClose={() => setActiveForm(null)}
          title={activeForm ? formTitleMap[activeForm] : ''}
        >
          {activeForm && (
            <ContactForm variant={activeForm} onSuccess={() => setActiveForm(null)} />
          )}
        </Modal>
      </div>
    </section>
  );
};

export default MultiCTA;
