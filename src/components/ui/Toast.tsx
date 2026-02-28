import { useEffect, useState, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

export type ToastVariant = 'success' | 'error';

export interface ToastData {
  id: number;
  message: string;
  variant: ToastVariant;
}

// ─── Global imperative API ───────────────────────────────────────────────────

let addToastFn: ((message: string, variant?: ToastVariant) => void) | null = null;

export const toast = {
  success: (message: string) => addToastFn?.(message, 'success'),
  error: (message: string) => addToastFn?.(message, 'error'),
};

// ─── ToastProvider (mount once at root) ──────────────────────────────────────

let nextId = 0;

export default function ToastProvider() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback((message: string, variant: ToastVariant = 'success') => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { id, message, variant }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Register the global imperative function
  useEffect(() => {
    addToastFn = addToast;
    return () => { addToastFn = null; };
  }, [addToast]);

  return (
    <div
      aria-live="polite"
      role="status"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] flex flex-col-reverse items-center gap-3 pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastItem key={t.id} data={t} onDismiss={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}

// ─── Individual toast ────────────────────────────────────────────────────────

function ToastItem({ data, onDismiss }: { data: ToastData; onDismiss: (id: number) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(data.id), 4000);
    return () => clearTimeout(timer);
  }, [data.id, onDismiss]);

  const Icon = data.variant === 'success' ? CheckCircle : AlertCircle;
  const accent = data.variant === 'success' ? 'text-[#4ECDC4]' : 'text-[#FF6B35]';

  return (
    <m.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: 'spring', damping: 22, stiffness: 260 }}
      className="pointer-events-auto flex items-center gap-3 rounded-xl bg-[#0D1730] border border-white/10 shadow-2xl px-5 py-3 max-w-sm"
    >
      <Icon size={20} className={accent} />
      <span className="text-sm text-gray-200 leading-snug">{data.message}</span>
      <button
        onClick={() => onDismiss(data.id)}
        aria-label="Cerrar notificación"
        className="ml-2 p-1 rounded text-gray-500 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </m.div>
  );
}
