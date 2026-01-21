import { motion } from 'framer-motion';
import { Dumbbell, Music, Activity, Zap as ZapIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay?: number;
    image?: string;
}

const ServiceCard = ({ title, description, icon, delay = 0, image }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-titanus-yellow/50 transition-all duration-300 aspect-square"
        >
            {/* Background Image Overlay */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 grayscale brightness-50 will-change-transform"
                        loading="lazy"
                        width="610"
                        height="762"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-titanus-black via-titanus-black/60 to-transparent" />
                </div>
            )}

            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-titanus-yellow/5 rounded-full blur-3xl group-hover:bg-titanus-yellow/10 transition-colors" />

            <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-8">
                <div className="inline-flex p-3 md:p-4 bg-titanus-yellow/10 rounded-2xl text-titanus-yellow group-hover:scale-110 group-hover:bg-titanus-yellow group-hover:text-black transition-all duration-300 w-fit">
                    {icon}
                </div>

                <div>
                    <h3 className="text-2xl md:text-4xl font-display font-black text-white uppercase italic tracking-wide mb-3 md:mb-4 drop-shadow-md">
                        {title}
                    </h3>
                    <p className="text-gray-100 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm">
                        {description}
                    </p>
                </div>

                {/* Decorative corner tag */}
                <div className="absolute top-4 right-4 opacity-5 pointer-events-none group-hover:opacity-20 transition-opacity">
                    <span className="text-xs font-black tracking-widest text-white italic underline decoration-titanus-yellow decoration-2">
                        TITANUS CORE
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export const Services = () => {
    const services = [
        {
            title: "Gimnasio",
            description: "Entrenamiento de fuerza con maquinaria de élite y pesos libres para desarrollar músculo y potencia.",
            icon: <Dumbbell size={40} />,
            image: "/images/service-gimnasio.webp"
        },
        {
            title: "Bailoterapia",
            description: "Sesiones de baile energéticas que combinan diversión, cardio y ritmo para quemar calorías.",
            icon: <Music size={40} />,
            image: "/images/service-bailoterapia.webp"
        },
        {
            title: "Calistenia",
            description: "Entrenamiento funcional con peso corporal para desarrollar fuerza, movilidad y control absoluto.",
            icon: <Activity size={40} />,
            image: "/images/service-calistenia.webp"
        },
        {
            title: "MMA",
            description: "Artes marciales mixtas para defensa personal, acondicionamiento extremo y disciplina mental.",
            icon: <ZapIcon size={40} />,
            image: "/images/service-mma.webp"
        }
    ];

    return (
        <section className="bg-titanus-black py-24 relative overflow-hidden" id="services">
            {/* Background Geometric Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(30deg, #FFD700 12%, transparent 12.5%, transparent 87%, #FFD700 87.5%, #FFD700), linear-gradient(150deg, #FFD700 12%, transparent 12.5%, transparent 87%, #FFD700 87.5%, #FFD700), linear-gradient(30deg, #FFD700 12%, transparent 12.5%, transparent 87%, #FFD700 87.5%, #FFD700), linear-gradient(150deg, #FFD700 12%, transparent 12.5%, transparent 87%, #FFD700 87.5%, #FFD700), linear-gradient(60deg, #FFD70077 25%, transparent 25.5%, transparent 75%, #FFD70077 75%, #FFD70077), linear-gradient(60deg, #FFD70077 25%, transparent 25.5%, transparent 75%, #FFD70077 75%, #FFD70077)', backgroundSize: '80px 140px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-titanus-yellow font-black tracking-[0.3em] text-xs uppercase block mb-4"
                    >
                        Experiencia 360°
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-black text-white uppercase italic leading-none tracking-tighter"
                    >
                        Nuestros <span className="text-titanus-yellow">Servicios</span>
                    </motion.h2>
                </div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            image={service.image}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Bottom Hashtag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] opacity-30 select-none">
                        #YOSOYTITANUS | #GUERREROMODERNO
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
