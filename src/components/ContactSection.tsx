import { m } from 'framer-motion';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-[#0A1128] to-[#050914] relative">
      {/* Subtle bg decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #4ECDC4 0%, transparent 50%), radial-gradient(circle at 70% 50%, #FF6B35 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            ¿Listo para transformar la gestión de emergencias?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Contáctanos para agendar una demostración personalizada o resolver tus dudas
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#FF6B35]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Email</h3>
                <a href="mailto:contacto@syreiax.global" className="text-gray-300 hover:text-[#4ECDC4] transition-colors text-sm">
                  contacto@syreiax.global
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#4ECDC4]/10 border border-[#4ECDC4]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#4ECDC4]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Ubicación</h3>
                <p className="text-gray-300 text-sm">Valledupar, Cesar — Colombia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#9D4EDD]/10 border border-[#9D4EDD]/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#9D4EDD]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">Horario de atención</h3>
                <p className="text-gray-300 text-sm">Lunes a Viernes, 8:00 AM – 6:00 PM (COT)</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-[#FF6B35] font-semibold">¿Eres gobierno o institución?</span> Solicita una demo institucional y te mostraremos cómo SYREIAX se adapta a tu operación en menos de 30 minutos.
              </p>
            </div>
          </m.div>

          {/* Quick Contact Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1.5">Nombre</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/40 focus:border-[#4ECDC4]/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/40 focus:border-[#4ECDC4]/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-org" className="block text-sm font-medium text-gray-300 mb-1.5">Organización <span className="text-gray-400">(opcional)</span></label>
                <input
                  id="contact-org"
                  type="text"
                  placeholder="Nombre de tu organización"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/40 focus:border-[#4ECDC4]/40 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1.5">Mensaje</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/40 focus:border-[#4ECDC4]/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white py-3 px-6 rounded-lg font-semibold text-sm overflow-hidden hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Enviar mensaje
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-400 text-center">
                Responderemos en menos de 24 horas hábiles
              </p>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
