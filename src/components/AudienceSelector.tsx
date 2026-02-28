import { useCallback } from 'react';
import { m } from 'framer-motion';
import { Building2, TrendingUp, Flame, Code, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useAudience } from '../context/AudienceContext';
import type { AudienceId } from '../data/audienceContent';

const audiences: { id: AudienceId; label: string; icon: LucideIcon; target: string }[] = [
  { id: 'gobiernos', label: 'Gobiernos', icon: Building2, target: 'alcaldías, gobernaciones' },
  { id: 'inversionistas', label: 'Inversionistas', icon: TrendingUp, target: 'VCs, angels' },
  { id: 'bomberos', label: 'Bomberos', icon: Flame, target: 'operadores, comandantes' },
  { id: 'desarrolladores', label: 'Desarrolladores', icon: Code, target: 'tech community' },
  { id: 'ciudadanos', label: 'Ciudadanos', icon: Users, target: 'usuarios finales' },
];

const AudienceSelector = () => {
  const { audience: selectedAudience, setAudience } = useAudience();

  const handleSelect = useCallback(
    (id: AudienceId) => {
      setAudience(id);
      // Auto-scroll to the solution section so the user immediately sees the change
      const target = document.getElementById('solucion');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    [setAudience],
  );

  return (
    <div className="sticky top-18 z-40 bg-[#0A1128]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-3">
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2.5">Personaliza para tu rol</p>
        <div className="flex flex-wrap justify-center gap-3">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            const isActive = selectedAudience === aud.id;
            return (
              <m.button
                key={aud.id}
                onClick={() => handleSelect(aud.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/50'
                    : 'bg-transparent border border-[#4ECDC4]/30 text-gray-300 hover:bg-[#4ECDC4]/10 hover:border-[#4ECDC4] hover:text-white hover:scale-105'
                }`}
                whileHover={{ scale: !isActive ? 1.05 : 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{aud.label}</span>
              </m.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudienceSelector;