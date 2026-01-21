import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Ad {
    id: string;
    image: string;
    title: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    isActive: boolean;
    createdAt: number;
}

export const AdPopup = () => {
    const [activeAd, setActiveAd] = useState<Ad | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchAds = () => {
            try {
                const storedAds = localStorage.getItem('titanus_ads');
                if (storedAds) {
                    const ads: Ad[] = JSON.parse(storedAds);
                    // Get the most recent ACTIVE ad
                    const currentAd = ads.filter(a => a.isActive).sort((a, b) => b.createdAt - a.createdAt)[0];

                    if (currentAd) {
                        setActiveAd(currentAd);
                        // Slight delay for better UX
                        setTimeout(() => setIsVisible(true), 1500);
                    }
                }
            } catch (error) {
                console.error('Error fetching ads:', error);
            }
        };

        fetchAds();
    }, []);

    if (!activeAd) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    className="fixed bottom-6 left-4 z-[60] w-[180px] md:w-[320px]"
                >
                    <div className="relative group p-1 bg-gradient-to-br from-titanus-yellow to-yellow-600 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute -top-3 -right-3 bg-white text-black rounded-full p-1.5 shadow-xl hover:scale-110 transition-transform z-10 border border-titanus-yellow"
                        >
                            <X size={14} />
                        </button>

                        <div className="bg-titanus-black rounded-xl overflow-hidden">
                            <img
                                src={activeAd.image}
                                alt={activeAd.title}
                                className="w-full h-auto object-cover max-h-[110px] md:max-h-[250px]"
                            />
                            <div className="p-3 md:p-4">
                                <h4 className="text-white font-black text-[10px] md:text-sm uppercase italic mb-1 line-clamp-1">{activeAd.title}</h4>
                                <p className="text-gray-400 text-[9px] md:text-xs line-clamp-2 mb-3 leading-tight">{activeAd.description}</p>

                                {activeAd.ctaText && (
                                    <a
                                        href={activeAd.ctaLink || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-titanus-yellow text-black font-black text-[9px] md:text-xs text-center py-2 md:py-2.5 rounded-lg uppercase tracking-wider hover:bg-yellow-400 transition-colors"
                                    >
                                        {activeAd.ctaText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
