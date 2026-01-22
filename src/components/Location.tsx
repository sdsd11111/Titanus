import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';

const LocationCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative md:absolute md:top-8 md:right-8 z-10 w-full max-w-sm pointer-events-auto"
        >
            <div className="bg-titanus-black/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-titanus-yellow rounded-2xl text-black">
                        <MapPin size={24} />
                    </div>
                    <h2 className="text-2xl font-display font-black text-white uppercase italic tracking-tight">
                        Encuéntranos en <span className="text-titanus-yellow">Loja</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* Sede Centro */}
                    <div className="group cursor-default">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-sm font-black text-titanus-yellow uppercase tracking-widest">Sede Principal (Sucursal Centro)</h3>
                        </div>
                        <address className="not-italic text-gray-300 text-sm leading-relaxed mb-3">
                            Avenida Orillas del Zamora y Segundo Puertas,<br /> Código Postal 110108, Loja, Ecuador.
                        </address>                        <a
                            href="https://maps.app.goo.gl/SDWVsCtBEJQsnWxZ7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-white/50 hover:text-titanus-yellow transition-colors group"
                        >
                            Cómo llegar <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>

                    <div className="h-px w-full bg-white/5" />

                    {/* Sede Sur */}
                    <div className="group cursor-default">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                            <h3 className="text-sm font-black text-white uppercase tracking-widest">Sucursal Sur</h3>
                        </div>
                        <p className="text-gray-400 text-xs font-medium">Ubicada frente a la Universidad Nacional.</p>                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 text-gray-300">
                            <Clock size={18} className="text-titanus-yellow" />
                            <div className="text-xs">
                                <span className="font-bold text-white">Lun - Vie:</span> 05:00 AM - 10:00 PM <br />
                                <span className="font-bold text-white">Sáb:</span> 08:00 AM - 05:00 PM
                            </div>
                        </div>                        <div className="flex items-center gap-3 text-gray-300">
                            <Phone size={18} className="text-titanus-yellow" />
                            <span className="text-xs font-bold">+593 98 523 4389</span>
                        </div>                    </div>

                    <a
                        href="https://maps.app.goo.gl/SDWVsCtBEJQsnWxZ7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-6 bg-titanus-yellow hover:bg-yellow-500 text-black py-4 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95"
                    >
                        <Navigation size={20} />
                        Cómo llegar ahora
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export const Location = () => {
    return (
        <section className="relative w-full h-auto md:h-[700px] bg-titanus-black overflow-hidden flex flex-col md:block" id="location">
            {/* Official Google Maps Embed for Authenticity */}
            <div className="relative w-full h-[400px] md:absolute md:inset-0 md:h-full z-0 bg-gray-900">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31841.037287425057!2d-79.23795551061633!3d-3.9937496624526676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cb377afc847c77%3A0x8d9be2c757d43201!2sTitanus%20Fitness!5e0!3m2!1ses-419!2sec!4v1768930218525!5m2!1ses-419!2sec"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.8) invert(0.05)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                    className="hover:grayscale-0 transition-all duration-700"
                ></iframe>
            </div>

            {/* Floating Info Card */}
            <div className="hidden md:flex container mx-auto px-4 h-full relative pointer-events-none items-center justify-end">
                <LocationCard />
            </div>

            {/* Mobile: Relative positioned card below the map */}
            <div className="block md:hidden bg-titanus-black p-4 relative z-20">
                <LocationCard />
            </div>

            {/* Aesthetic Overlays to integrate map with dark theme */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] bg-gradient-to-r from-titanus-black/40 via-transparent to-titanus-black/40" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-titanus-black to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-titanus-black to-transparent pointer-events-none" />
        </section>
    );
};
