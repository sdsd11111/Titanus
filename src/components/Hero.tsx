import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MousePointerClick } from 'lucide-react';
import { WizardForm } from './WizardForm';

export const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // Listen for custom event to open modal from Header & check URL params
    useEffect(() => {
        const handleCustomOpen = () => setIsModalOpen(true);
        document.addEventListener('open-wizard-modal', handleCustomOpen);

        // Check for URL param ?participar=true or hash #formulario/#participar
        const checkUrlParams = () => {
            const params = new URLSearchParams(window.location.search);
            const hash = window.location.hash;

            if (params.get('participar') === 'true' ||
                hash === '#formulario' ||
                hash === '#participar') {
                setIsModalOpen(true);
            }
        };

        checkUrlParams();

        // Also listen for hash changes without reloading
        window.addEventListener('hashchange', checkUrlParams);

        return () => document.removeEventListener('open-wizard-modal', handleCustomOpen);
    }, []);

    // Modern Multi-Layer Parallax Config
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Layer 1: Background Image (Deep Zoom & Fade)
    const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.5]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);

    // Layer 2: Massive Text Background (Negative & Fast Parallax)
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    // Layer 3: Main Titles (Slow Negative Parallax)
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={heroRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    className="absolute inset-0 will-change-transform"
                    style={{
                        y: bgY,
                        scale: bgScale,
                        opacity: bgOpacity
                    }}
                >
                    <img
                        src="/images/hero-main.webp"
                        alt="High intensity workout"
                        className="w-full h-full object-cover brightness-[0.5] contrast-125 transition-all duration-700"
                        loading="eager"
                        fetchPriority="high"
                        width="1920"
                        height="1080"
                    />
                </motion.div>

                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-titanus-black via-transparent to-titanus-black/60 z-10" />
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 z-10" />

                {/* Dynamic Lighting Layer (Floating) */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.08)_0%,transparent_60%)] z-10 pointer-events-none"
                />
            </div>

            {/* Layer 2: Massive Background Text (The "Cinematic" Wall) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: textY }}
                    className="text-[25vw] font-display font-black text-white/[0.03] italic tracking-tighter leading-none select-none whitespace-nowrap will-change-transform"
                    aria-hidden="true"
                >
                    TITANUS TITANUS
                </motion.div>
            </div>

            {/* Promo Badge - Clickable */}
            <motion.div
                animate={{ rotate: [0, -5, 5, -3, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                onClick={handleOpenModal}
                className="absolute top-24 right-4 md:top-32 md:right-10 z-30 hidden md:flex flex-col items-center cursor-pointer"
            >
                <div className="bg-titanus-yellow text-black font-black text-xs md:text-sm px-4 py-2 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(255,215,0,0.6)] border-2 border-white rotate-12 hover:bg-yellow-400 transition-colors">
                    Promo: 2 Cupos Gratis
                </div>
            </motion.div>

            {/* Layer 3: Main Content Layer */}
            <motion.div
                style={{ y: titleY, opacity: titleOpacity }}
                className="relative z-30 container mx-auto px-4 pt-32 md:pt-20 text-center flex flex-col items-center [contain:layout_paint] min-h-[60vh] md:min-h-[80vh] flex items-center justify-center"
            >
                {/* Main Headline Group */}
                <div className="relative mb-6 min-h-[1em] md:min-h-[0.9em] flex items-center justify-center">
                    <div
                        className="text-7xl md:text-9xl lg:text-[13rem] font-display font-black tracking-tighter leading-[0.85] md:leading-none select-none relative flex flex-col items-center will-change-transform opacity-100"
                    >
                        {/* Stroke Effect Layer */}
                        <div className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_#FFD700] md:[-webkit-text-stroke:3px_#FFD700] translate-x-1 translate-y-1 md:translate-x-1.5 md:translate-y-1.5 opacity-40 will-change-transform" aria-hidden="true">
                            <span className="block md:inline">TITANUS</span>{' '}
                            <span className="block md:inline whitespace-nowrap">GYM</span>
                        </div>
                        {/* Main Text Layer */}
                        <div className="relative bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] will-change-transform">
                            <span className="block md:inline">TITANUS</span>{' '}
                            <span className="block md:inline whitespace-nowrap">GYM</span>
                        </div>
                    </div>
                </div>

                {/* Catchy H1 for SEO */}
                <h1
                    className="text-lg md:text-4xl lg:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 uppercase tracking-widest mb-2 md:mb-4 max-w-6xl opacity-100"
                >
                    EL #1 MEJOR GIMNASIO EN LOJA
                </h1>

                <h2
                    className="text-base md:text-4xl font-display font-black text-titanus-yellow uppercase mb-6 md:mb-10 tracking-[0.1em] drop-shadow-[0_0_20px_rgba(255,215,0,0.4)] opacity-100"
                >
                    TU TRANSFORMACIÓN COMIENZA AQUÍ
                </h2>

                {/* High Impact CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpenModal}
                    className="group relative bg-titanus-yellow text-black font-black text-lg md:text-2xl px-8 md:px-14 py-4 md:py-6 rounded-full uppercase tracking-[0.15em] shadow-[0_0_50px_rgba(255,215,0,0.3)] hover:shadow-[0_0_70px_rgba(255,215,0,0.5)] transition-all duration-500 flex items-center gap-4 overflow-hidden mt-8 md:mt-12"
                >
                    <span className="relative z-10 text-sm md:text-2xl font-black">¡Participa por un mes gratis!</span>
                    <MousePointerClick className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300" />

                    {/* Inner Glow/Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </motion.button>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 flex items-center gap-3 backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                    <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">
                        Sorteo Activo: Febrero 2026
                    </span>
                </motion.div>
            </motion.div>

            {/* Wizard Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) handleCloseModal();
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-transparent w-full max-w-lg relative"
                        >
                            <WizardForm onClose={handleCloseModal} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
