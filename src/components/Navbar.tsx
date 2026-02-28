import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import Modal from './ui/Modal';
import ContactForm from './ui/ContactForm';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solución', id: 'solucion' },
    { label: 'Tecnología', id: 'tecnologia' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#0A1128]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent py-6'
        }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white/5 px-3 py-2 rounded">Saltar al contenido</a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary rounded-lg"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center border border-white/10">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight group-hover:to-white transition-all duration-300">
                SYREIAX
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-1" role="menubar" aria-label="Secciones">
              {navItems.map((item) => (
                <li key={item.id} role="none">
                  <a
                    role="menuitem"
                    href={`#${item.id}`}
                    className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-full"
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Large Screen CTA */}
          <div className="hidden md:block pl-8">
            <button
              onClick={() => setShowDemoModal(true)}
              className="group relative px-6 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 text-sm font-semibold text-white">
                Solicitar Demo
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="relative z-50 p-2 text-gray-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            id="mobile-menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full md:hidden bg-[#0A1128]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          >
            <div className="px-4 py-8 space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all active:scale-95"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <button
                  onClick={() => { setIsOpen(false); setShowDemoModal(true); }}
                  className="w-full bg-gradient-to-r from-primary to-[#FF8C61] text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Solicitar Demo
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Demo request modal */}
      <Modal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} title="Solicitar Demo">
        <ContactForm variant="demo" onSuccess={() => setShowDemoModal(false)} />
      </Modal>
    </nav>
  );
};

export default Navbar;