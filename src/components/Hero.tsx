import { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { useAudience } from '../context/AudienceContext';
import Modal from './ui/Modal';
import ContactForm from './ui/ContactForm';

import heroBg0 from '../assets/hero-emergency-response.webp';
import heroBg1 from '../assets/hero-territorial.webp';
import heroBg2 from '../assets/hero-operations.webp';
import heroBg3 from '../assets/hero-city-resilience.webp';
import heroBg4 from '../assets/hero-firefighter-rescue.webp';

const BG_IMAGES = [heroBg0, heroBg1, heroBg2, heroBg3, heroBg4];
const BG_INTERVAL = 6000; // ms per slide

const Hero = () => {
  const { audience, content } = useAudience();
  const headlines = content.hero.headlines;
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const [currentBg, setCurrentBg] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const prevAudienceRef = useRef(audience);

  // Reset headline index when the audience changes
  useEffect(() => {
    if (prevAudienceRef.current !== audience) {
      setCurrentHeadline(0);
      prevAudienceRef.current = audience;
    }
  }, [audience]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  // Background carousel — pauses when reducedMotion is on
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BG_IMAGES.length);
    }, BG_INTERVAL);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* ── Background image carousel — all images stacked in DOM so the
            browser fetches them all immediately; only opacity animates (GPU) ── */}
        {BG_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden="true"
            // First image: high priority + sync decode so it paints on first frame
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding={i === 0 ? 'sync' : 'async'}
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: i === currentBg ? 1 : 0, willChange: 'opacity' }}
          />
        ))}

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0A1128]/65" />
        {/* Decorative blobs */}
        <div className={`hidden sm:block absolute top-0 right-0 sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/6 md:translate-x-1/3 ${!shouldReduceMotion ? 'animate-pulse-glow' : ''}`} />
        <div className="hidden sm:block absolute bottom-0 left-0 sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/6 md:-translate-x-1/3" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />

        {/* Radial sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1128]/30 to-[#0A1128]" />
      </div>

      {/* Slide indicator dots — above background, below content */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentBg(i)}
            aria-label={`Imagen de fondo ${i + 1}`}
            className={`rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
              i === currentBg
                ? 'w-6 h-2 bg-[#FF6B35]'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-secondary font-medium mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          {content.hero.badge}
        </m.div>

        {/* Rotating Headline */}
        <div className="min-h-[140px] md:h-48 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <m.h1
              key={`${audience}-${currentHeadline}`}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-5xl"
            >
              {headlines[currentHeadline]}
            </m.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {content.hero.subtitle.split(/sin Internet/i).length > 1 ? (
            <>
              {content.hero.subtitle.split(/sin Internet/i)[0]}
              <span className="text-secondary font-semibold">sin Internet</span>
              {content.hero.subtitle.split(/sin Internet/i)[1]}
            </>
          ) : (
            content.hero.subtitle
          )}
        </m.p>

        {/* CTA Buttons */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <m.button
            type="button"
            aria-label={content.hero.primaryCta}
            onClick={() => setShowDemoModal(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto sm:min-w-[260px] px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white font-bold text-base sm:text-lg shadow-[0_8px_30px_rgba(255,107,53,0.18)] hover:shadow-[0_18px_60px_rgba(255,107,53,0.28)] transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B35]/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight size={18} className="transform transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.06] to-transparent opacity-30 pointer-events-none" />
          </m.button>

          <m.button
            type="button"
            aria-label={content.hero.secondaryCta}
            onClick={() => setShowVideoModal(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full sm:w-auto sm:min-w-[220px] px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/30 transition-all flex items-center gap-4 backdrop-blur-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-white/10"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-all duration-200">
              <Play size={16} />
            </div>
            <span>{content.hero.secondaryCta}</span>
          </m.button>
        </m.div>
        {/* Improved: centered discover button under CTAs */}
        <m.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-8 flex justify-center"
        >
          <m.button
            onClick={() => window.scrollBy({ top: window.innerHeight - 120, behavior: 'smooth' })}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] text-sm text-white/90 uppercase tracking-wider font-semibold hover:scale-[1.04] transition-all"
            aria-label="Descubre más"
          >
            <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-colors">
              <m.div
                animate={shouldReduceMotion ? { y: 0 } : { y: [0, 6, 0] }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown size={18} />
              </m.div>
            </div>
            <span className="text-white/90">Descubre Más</span>
          </m.button>
        </m.div>
      </div>

      {/* Demo request modal */}
      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Solicitar Demo">
        <ContactForm variant="demo" onSuccess={() => setShowDemoModal(false)} />
      </Modal>

      {/* Video modal */}
      <Modal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} title="Cómo funciona SYREIAX">
        <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/10">
          <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-gray-400">
            <Play size={48} className="text-[#FF6B35]" />
            <p className="text-sm">Video de demostración próximamente</p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;