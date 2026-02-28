import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import Modal from './ui/Modal';
import ContactForm from './ui/ContactForm';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-4">
                    <AnimatePresence>
                        {isExpanded && (
                            <m.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                className="bg-[#0D1730] border border-white/10 border-l-4 border-l-[#FF6B35] p-4 rounded-xl shadow-2xl mb-2 w-68 backdrop-blur-md"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-bold text-white">¿Interesado?</h4>
                                    <button
                                        onClick={() => setIsExpanded(false)}
                                        className="p-0.5 rounded text-gray-500 hover:text-white transition-colors"
                                        aria-label="Cerrar"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                    Agenda una demostración personalizada de nuestra tecnología para tu ciudad.
                                </p>
                                <button
                                    onClick={() => { setIsExpanded(false); setShowModal(true); }}
                                    className="w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all duration-200"
                                >
                                    Contactar Ventas
                                </button>
                            </m.div>
                        )}
                    </AnimatePresence>

                    <m.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] text-white rounded-full shadow-lg hover:shadow-[#FF6B35]/40 transition-shadow"
                    >
                        {isExpanded ? <X size={24} /> : <MessageSquare size={24} />}
                    </m.button>

                    {/* Contact modal */}
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Contactar Ventas">
                        <ContactForm variant="demo" onSuccess={() => setShowModal(false)} />
                    </Modal>
                </div>
            )}
        </AnimatePresence>
    );
}
