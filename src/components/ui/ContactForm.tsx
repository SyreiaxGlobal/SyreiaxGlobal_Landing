import { useState, type FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

// ─── Form Types ──────────────────────────────────────────────────────────────

export type FormVariant = 'demo' | 'investor' | 'pilot';

interface FieldDef {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const formConfig: Record<FormVariant, { title: string; subtitle: string; fields: FieldDef[]; submitLabel: string }> = {
  demo: {
    title: 'Solicitar Demo Institucional',
    subtitle: 'Completa tus datos y nuestro equipo te contactará en menos de 48 horas.',
    submitLabel: 'Enviar Solicitud',
    fields: [
      { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Ej: María García', required: true },
      { name: 'email', label: 'Email institucional', type: 'email', placeholder: 'correo@institucion.gov', required: true },
      { name: 'role', label: 'Cargo', type: 'text', placeholder: 'Ej: Director de Protección Civil' },
      { name: 'institution', label: 'Institución', type: 'text', placeholder: 'Ej: Gobierno Municipal de…', required: true },
      { name: 'country', label: 'País', type: 'text', placeholder: 'Ej: Colombia', required: true },
      { name: 'message', label: 'Mensaje (opcional)', type: 'textarea', placeholder: '¿Algo que debamos saber?' },
    ],
  },
  investor: {
    title: 'Descargar Investor Pack',
    subtitle: 'Accede al pitch deck, financial model y métricas de tracción.',
    submitLabel: 'Solicitar Acceso',
    fields: [
      { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Ej: Carlos López', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'correo@fondo.com', required: true },
      { name: 'fund', label: 'Fondo / Firma', type: 'text', placeholder: 'Ej: Acme Ventures', required: true },
      { name: 'ticket', label: 'Ticket típico de inversión', type: 'text', placeholder: 'Ej: $200K – $1M' },
    ],
  },
  pilot: {
    title: 'Unirse al Piloto',
    subtitle: 'Tu estación puede ser de las primeras en probar SYREIAX. Sin costo.',
    submitLabel: 'Postular Estación',
    fields: [
      { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Ej: Juan Rodríguez', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com', required: true },
      { name: 'station', label: 'Estación de bomberos', type: 'text', placeholder: 'Ej: Estación Central Nº3', required: true },
      { name: 'municipality', label: 'Municipio / Ciudad', type: 'text', placeholder: 'Ej: Medellín', required: true },
      { name: 'operators', label: 'Número de operadores', type: 'number', placeholder: 'Ej: 45' },
    ],
  },
};

// ─── Accent colors per variant ───────────────────────────────────────────────

const accentMap: Record<FormVariant, { ring: string; bg: string; hover: string }> = {
  demo: { ring: 'focus:ring-[#FF6B35]/40', bg: 'bg-[#FF6B35]', hover: 'hover:bg-[#e55a2b]' },
  investor: { ring: 'focus:ring-[#4ECDC4]/40', bg: 'bg-[#4ECDC4]', hover: 'hover:bg-[#3dbdb5]' },
  pilot: { ring: 'focus:ring-[#9D4EDD]/40', bg: 'bg-[#9D4EDD]', hover: 'hover:bg-[#8a3dcc]' },
};

// ─── Component ───────────────────────────────────────────────────────────────

interface ContactFormProps {
  variant: FormVariant;
  onSuccess?: () => void;
}

export default function ContactForm({ variant, onSuccess }: ContactFormProps) {
  const { title, subtitle, fields, submitLabel } = formConfig[variant];
  const accent = accentMap[variant];
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async send (replace with real API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => onSuccess?.(), 2000);
    }, 1200);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <m.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center py-10 text-center gap-4"
        >
          <div className={`w-16 h-16 rounded-full ${accent.bg} flex items-center justify-center`}>
            <CheckCircle size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">¡Enviado correctamente!</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Nuestro equipo revisará tu solicitud y te contactará pronto.
          </p>
        </m.div>
      ) : (
        <m.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
          </div>

          {fields.map((field) =>
            field.type === 'textarea' ? (
              <div key={field.name}>
                <label htmlFor={`cf-${field.name}`} className="block text-sm font-medium text-gray-300 mb-1">
                  {field.label}
                </label>
                <textarea
                  id={`cf-${field.name}`}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={3}
                  className={`w-full rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 ${accent.ring} transition-shadow resize-none`}
                />
              </div>
            ) : (
              <div key={field.name}>
                <label htmlFor={`cf-${field.name}`} className="block text-sm font-medium text-gray-300 mb-1">
                  {field.label}
                </label>
                <input
                  id={`cf-${field.name}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`w-full rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 ${accent.ring} transition-shadow`}
                />
              </div>
            )
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 rounded-lg ${accent.bg} ${accent.hover} text-white font-semibold py-3 text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1730] ${accent.ring}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando…
              </>
            ) : (
              <>
                <Send size={16} />
                {submitLabel}
              </>
            )}
          </button>
        </m.form>
      )}
    </AnimatePresence>
  );
}
