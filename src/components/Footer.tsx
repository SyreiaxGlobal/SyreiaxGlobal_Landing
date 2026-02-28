import { useState, type FormEvent } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { toast } from './ui/Toast';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSending, setIsSending] = useState(false);

    const handleNewsletter = (e: FormEvent) => {
        e.preventDefault();
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error('Por favor, introduce un email válido.');
            return;
        }
        setIsSending(true);
        // Simulate async (replace with real API)
        setTimeout(() => {
            setIsSending(false);
            setEmail('');
            toast.success('¡Te has suscrito correctamente!');
        }, 800);
    };

    return (
        <footer className="bg-gradient-to-t from-[#030511] to-[#050914] text-white pt-12 pb-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-6 pb-8">
                    {/* Brand + short */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#4ECDC4] flex items-center justify-center">
                                <span className="font-bold text-white">S</span>
                            </div>
                            <div>
                                <div className="text-lg font-bold tracking-tight">SYREIAX</div>
                                <div className="text-xs text-gray-400">Gestión de emergencias con IA</div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm mt-4 max-w-md">
                            Plataforma cívica que empodera gobiernos y servicios de emergencia con inteligencia predictiva y trazabilidad en tiempo real.
                        </p>
                        <div className="mt-4 sm:mt-6">
                            <label htmlFor="footer-newsletter" className="text-sm font-semibold text-gray-300 block mb-2">Suscríbete</label>
                            <form onSubmit={handleNewsletter} className="flex gap-2">
                                <input
                                    id="footer-newsletter"
                                    type="email"
                                    aria-label="Correo para suscripción"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 text-sm w-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]/30"
                                />
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    aria-label="Suscribirse"
                                    className="bg-[#4ECDC4] hover:bg-[#3dbdb5] text-[#0A1128] p-2 rounded-lg transition-colors flex items-center justify-center disabled:opacity-60"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                            <p className="text-xs text-gray-400 mt-2">Recibe noticias, actualizaciones de producto y eventos.</p>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-[#FF6B35]">Solución</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Para Gobiernos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Para Inversionistas</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Bomberos</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-[#4ECDC4]">Compañía</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Tecnología</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-[#9D4EDD]">Productos</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">App Ciudadana</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">SYREIAX CORE</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Dashboard IA</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-3 text-sm text-[#4ECDC4]">Legal & Contacto</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                            </ul>
                            <div className="mt-4">
                                <div className="flex items-center gap-3">
                                    <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#4ECDC4] transition-colors"><Twitter size={18} /></a>
                                    <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#4ECDC4] transition-colors"><Linkedin size={18} /></a>
                                    <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#4ECDC4] transition-colors"><Instagram size={18} /></a>
                                    <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#4ECDC4] transition-colors"><Facebook size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-6 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="text-sm text-gray-400">&copy; {new Date().getFullYear()} SYREIAX GLOBAL. Todos los derechos reservados.</div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="text-sm text-gray-300 hover:text-white underline-offset-2 hover:underline">Política de privacidad</a>
                        <span className="hidden sm:inline text-gray-500">•</span>
                        <a href="#" className="text-sm text-gray-300 hover:text-white underline-offset-2 hover:underline">Contactar ventas</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
