import { Facebook, Instagram, MapPin, Clock, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <img
                                src="/images/logo.webp"
                                alt="Titanus Gym Logo"
                                className="h-12 w-auto object-contain"
                                width="48"
                                height="48"
                            />
                            <h3 className="font-display text-3xl italic text-white">
                                TITANUS<span className="text-titanus-yellow">.</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Forjando leyendas en Loja desde 2018. Únete a la comunidad más fuerte de la ciudad.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/titanusfitness/" target="_blank" rel="noopener noreferrer" aria-label="Visitar el Instagram de Titanus Gym" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-titanus-yellow hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/TitanusFitness/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Visitar el Facebook de Titanus Gym" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-titanus-yellow hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>                    </div>

                    {/* Locations */}
                    <div className="space-y-6">
                        <h4 className="font-display text-xl text-white tracking-wide">SEDES</h4>
                        <div className="space-y-4">
                            <div className="flex gap-3 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                                <MapPin className="text-titanus-yellow shrink-0" size={20} />
                                <div>
                                    <p className="font-bold text-white">Sede Principal (Sucursal Centro)</p>
                                    <p className="text-sm">Av. Orillas del Zamora y Segundo Puertas</p>
                                </div>                            </div>
                            <div className="flex gap-3 text-gray-400 group cursor-pointer hover:text-white transition-colors">
                                <MapPin className="text-titanus-yellow shrink-0" size={20} />
                                <div>
                                    <p className="font-bold text-white">Sucursal Sur</p>
                                    <p className="text-sm">Frente a la Universidad Nacional</p>
                                </div>                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="font-display text-xl text-white tracking-wide">HORARIOS</h4>
                        <div className="flex gap-3 text-gray-400">
                            <Clock className="text-titanus-yellow shrink-0" size={20} />
                            <div className="space-y-2">
                                <div>
                                    <p className="font-bold text-white">Lunes - Viernes</p>
                                    <p className="text-sm">05:00 AM - 10:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-bold text-white">Sábados</p>
                                    <p className="text-sm">08:00 AM - 05:00 PM</p>
                                </div>                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="font-display text-xl text-white tracking-wide">CONTACTO</h4>
                        <div className="flex gap-3 text-gray-400">
                            <Phone className="text-titanus-yellow shrink-0" size={20} />
                            <div className="space-y-1">
                                <p className="text-sm">+593 98 523 4389</p>
                                <p className="text-sm">info@titanus.com</p>
                            </div>                        </div>
                        <button className="w-full mt-4 py-3 bg-white/5 border border-white/10 text-white font-bold hover:bg-titanus-yellow hover:text-black hover:border-titanus-yellow transition-all uppercase text-sm tracking-widest">
                            Contáctanos
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-500">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 uppercase tracking-widest font-bold">
                        <a href="#about" className="hover:text-titanus-yellow">Nosotros</a>
                        <a href="#services" className="hover:text-titanus-yellow">Servicios</a>
                        <a href="#gallery" className="hover:text-titanus-yellow">Galería</a>
                        <a href="#location" className="hover:text-titanus-yellow">Ubicación</a>
                        <a href="#faq" className="hover:text-titanus-yellow">FAQ</a>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="mb-2 text-gray-500">Diseñado por <a href="https://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-titanus-yellow underline transition-colors">Cesar Reyes</a> | Titanus Gym 2026</p>
                        <p className="tracking-widest uppercase font-black text-white/20 italic">
                            ¡No decimos ser los mejores, solo lo demostramos!
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
