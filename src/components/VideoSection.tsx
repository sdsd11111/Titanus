import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, X, Zap, Box } from 'lucide-react';

export const VideoSection = () => {
    // State to handle device type for conditional video rendering
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        // Initial check
        checkMobile();

        // Add listener
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full py-12 md:py-24 bg-titanus-black overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="mb-12 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-black text-white italic uppercase tracking-tighter"
                    >
                        VIVE LA <span className="text-titanus-yellow text-glow-yellow">EXPERIENCIA</span> TITANUS
                    </motion.h2>
                </div>

                {/* Video Container with Frame Decor */}
                <div className="relative group rounded-2xl md:rounded-[2rem] overflow-hidden border-2 border-titanus-yellow/20 shadow-[0_0_50px_rgba(255,215,0,0.1)]">
                    {/* Frame Corners (Monitoring Screen Style) */}
                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-titanus-yellow z-20 opacity-50" />
                    <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-titanus-yellow z-20 opacity-50" />
                    <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-titanus-yellow z-20 opacity-50" />
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-titanus-yellow z-20 opacity-50" />

                    {/* Parallax Background Video */}
                    <div className="relative w-full aspect-[9/16] md:aspect-video md:h-[600px] overflow-hidden">
                        <motion.div
                            style={{ y: videoY }}
                            className="absolute inset-0 w-full h-[120%]"
                        >
                            {/* Desktop Video */}
                            {!isMobile && (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="hidden md:block w-full h-full object-cover grayscale opacity-40 brightness-50 contrast-125 will-change-transform"
                                >
                                    <source src="/images/video-ordenador.mp4" type="video/mp4" />
                                </video>
                            )}

                            {/* Mobile Video */}
                            {isMobile && (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="block md:hidden w-full h-full object-cover grayscale opacity-40 brightness-50 contrast-125 will-change-transform"
                                >
                                    <source src="/images/video-movil.mp4" type="video/mp4" />
                                </video>
                            )}
                        </motion.div>

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-titanus-black via-transparent to-titanus-black/40 z-10" />

                        {/* Content Superimposed */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl md:text-5xl font-display font-black text-white uppercase italic tracking-widest drop-shadow-2xl">
                                    MÁS QUE UN GYM,<br />
                                    <span className="text-titanus-yellow">UNA FAMILIA FITNESS</span>
                                </h3>

                                {/* Floating Play Button with Pulse */}
                                <div className="flex items-center justify-center relative">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute w-20 h-20 md:w-32 md:h-32 bg-titanus-yellow/20 rounded-full blur-xl"
                                    />
                                    <button
                                        onClick={() => setIsOpen(true)}
                                        className="relative w-16 h-16 md:w-24 md:h-24 bg-titanus-yellow text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,215,0,0.5)] z-30 group"
                                    >
                                        <Play size={32} className="ml-1 fill-black group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Badges */}
                        <div className="absolute top-10 left-10 z-30 hidden md:block">
                            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-titanus-yellow/30 px-4 py-2 rounded-lg">
                                <Box size={16} className="text-titanus-yellow" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest">2 Pisos de Puro Equipamiento</span>
                            </div>
                        </div>

                        <div className="absolute bottom-10 right-10 z-30 hidden md:block">
                            <a
                                href="https://wa.me/593985234389"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-titanus-yellow/30 px-4 py-2 rounded-lg hover:bg-black/80 hover:scale-105 transition-all cursor-pointer group"
                            >
                                <Zap size={16} className="text-titanus-yellow group-hover:text-white transition-colors" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-widest group-hover:text-titanus-yellow transition-colors">Tecnología: Asistencia Inmediata</span>
                            </a>
                        </div>

                        {/* Corner Hashtag */}
                        <div className="absolute top-10 right-10 z-30 opacity-20 pointer-events-none">
                            <span className="text-xl font-display font-bold text-white tracking-tighter">#YOSOYTITANUS</span>
                        </div>

                        {/* Bottom Caption */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full z-30 px-6 text-center">
                            <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-[0.2em] uppercase">
                                Instalaciones amplias, modernas y siempre en perfecto estado de mantenimiento
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Lightbox Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 z-[110] text-white hover:text-titanus-yellow transition-colors bg-white/10 p-2 rounded-full"
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full md:max-w-6xl md:aspect-video rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center h-[80vh] md:h-auto"
                        >
                            {/* Desktop Video Modal */}
                            {!isMobile && (
                                <div className="hidden md:block w-full h-full">
                                    <video
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain bg-black"
                                    >
                                        <source src="/images/video-ordenador.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            )}

                            {/* Mobile Video Modal */}
                            {isMobile && (
                                <div className="block md:hidden w-full h-full">
                                    <video
                                        controls
                                        autoPlay
                                        className="w-full h-full object-cover rounded-2xl bg-black"
                                    >
                                        <source src="/images/video-movil.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <style dangerouslySetInnerHTML={{
                __html: `
        .text-glow-yellow {
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
        }
      `}} />
        </section>
    );
};
