import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <img
                        src="/images/logo.webp"
                        alt="Titanus Gym Logo"
                        className="h-7 md:h-10 w-auto object-contain"
                        width="40"
                        height="40"
                    />
                    <span className="font-display text-lg md:text-2xl tracking-tighter text-white italic">
                        TITANUS<span className="text-titanus-yellow">.</span>
                    </span>
                </div>

                {/* CTA Button - Visible on all screens */}
                <div className="flex items-center">
                    <button
                        onClick={() => document.dispatchEvent(new CustomEvent('open-wizard-modal'))}
                        aria-label="Participar en el sorteo de Titanus Gym"
                        className="
                            px-3 py-2 text-[9px] 
                            md:px-6 md:py-2 md:text-sm 
                            border-2 border-titanus-yellow text-titanus-yellow font-black tracking-widest 
                            hover:bg-titanus-yellow hover:text-black transition-all duration-300 
                            shadow-[0_0_10px_rgba(255,215,0,0.1)] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]
                            uppercase rounded-none whitespace-nowrap
                        "
                    >
                        Participar en Sorteo
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};
