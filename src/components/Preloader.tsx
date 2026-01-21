import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Find the loading screen from index.html and fade it out
        const staticLoader = document.getElementById('loading-screen');

        const timer = setTimeout(() => {
            if (staticLoader) {
                staticLoader.classList.add('fade-out');
            }
            // Give time for the index.html loader to fade out before unmounting
            setTimeout(() => {
                setIsVisible(false);
                document.body.style.overflow = 'auto';
            }, 500);
        }, 1500); // Minimum display time for branding

        return () => {
            clearTimeout(timer);
            if (staticLoader) staticLoader.remove();
        };
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] bg-titanus-black flex flex-col items-center justify-center"
                >
                    {/* Floating Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute w-[500px] h-[500px] bg-titanus-yellow/20 rounded-full blur-[100px]"
                    />

                    <div className="relative flex flex-col items-center">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src="/images/logo.webp"
                            alt="Titanus logo"
                            className="w-32 md:w-40 h-auto mb-8 drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                        />

                        {/* Animated Loader Bar */}
                        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-titanus-yellow to-transparent"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-gray-500 font-display font-medium uppercase tracking-[0.4em] text-[10px]"
                        >
                            Preparando tu evolución
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
