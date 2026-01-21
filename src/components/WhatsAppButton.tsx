import { Phone } from 'lucide-react';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/593985234389"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2 group border-2 md:border-4 border-black/20"
            aria-label="Contactar por WhatsApp"
        >
            <Phone size={20} className="md:w-[28px] md:h-[28px]" fill="currentColor" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap text-xs md:text-base">
                098 523 4389
            </span>
        </a>
    );
};
