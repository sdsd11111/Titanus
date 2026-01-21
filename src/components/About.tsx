import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Star, Trophy, Users, Bell } from 'lucide-react';

const CountUp = ({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                onUpdate: (latest) => setCount(latest),
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
};

export const About = () => {
    const stats = [
        {
            icon: <Star className="text-titanus-yellow" size={24} />,
            label: "Calificación",
            value: 4.8,
            suffix: "/5",
            decimals: 1,
            subtext: "146+ reseñas verificadas"
        },
        {
            icon: <Trophy className="text-titanus-yellow" size={24} />,
            label: "Ranking",
            value: 1,
            prefix: "#",
            decimals: 0,
            subtext: "Mejor Gimnasio de Loja"
        },
        {
            icon: <Users className="text-titanus-yellow" size={24} />,
            label: "Comunidad",
            value: 1200,
            suffix: "+",
            decimals: 0,
            subtext: "Miembros Activos"
        }
    ];

    return (
        <section className="bg-titanus-charcoal py-32 relative overflow-hidden" id="about">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Column 1: Image Wrapper (Multi-Image Composition) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        {/* Decorative Frame */}
                        <div className="absolute -inset-4 border-2 border-titanus-yellow/20 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-lg shadow-2xl z-20">
                            <div className="absolute inset-0 bg-gradient-to-t from-titanus-charcoal via-transparent to-transparent opacity-60 z-10" />
                            <img
                                src="/images/about-main.webp"
                                alt="Titanus Fitness Loja - Instalaciones"
                                className="w-full h-full object-cover min-h-[500px] grayscale brightness-75 hover:grayscale-0 transition-all duration-700 md:group-hover:scale-105 will-change-transform"
                                loading="lazy"
                                width="800"
                                height="600"
                            />
                        </div>

                        {/* Secondary Overlapping Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-10 -left-10 w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-8 border-titanus-charcoal shadow-2xl z-30 hidden sm:block"
                        >
                            <img
                                src="/images/about-secondary.webp"
                                alt="Entrenamiento Elite"
                                className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 will-change-transform"
                                loading="lazy"
                                width="400"
                                height="400"
                            />
                        </motion.div>

                        {/* Floating Badge (Differentiator) */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="absolute -top-6 -right-6 z-40 bg-titanus-yellow p-5 rounded-2xl shadow-[0_0_40px_rgba(255,215,0,0.4)]"
                        >
                            <div className="flex items-center gap-3 text-black">
                                <div className="bg-black/10 p-2 rounded-lg">
                                    <Bell size={24} className="animate-bounce" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-none mb-1 text-black/60">TECNOLOGÍA</p>
                                    <p className="text-sm font-black uppercase tracking-tight">Asistencia Inmediata</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Column 2: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-titanus-yellow font-black tracking-[0.4em] text-xs uppercase block mb-3">
                                Nuestra Identidad
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-[1] uppercase italic tracking-tighter">
                                Por qué somos el mejor
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                    gimnasio calificado de Loja.
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
                        >
                            Consolidados como el referente indiscutible del acondicionamiento físico en Loja. Con nuestras sedes estratégicas en el <span className="text-white font-black italic">Centro y Sur</span> de la ciudad, ofrecemos una experiencia de entrenamiento de élite para el guerrero moderno.
                        </motion.p>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.4 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-black/40 border border-white/5 p-5 rounded-2xl group hover:border-titanus-yellow/50 transition-all shadow-xl"
                                >
                                    <div className="mb-4 text-titanus-yellow group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-display font-black text-white italic tracking-tighter">
                                            {'prefix' in stat && stat.prefix}
                                            <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                        </p>
                                        <p className="text-[10px] font-black text-titanus-yellow uppercase tracking-[0.2em]">
                                            {stat.label}
                                        </p>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase">
                                            {stat.subtext}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Subtle Brand Watermark */}
                        <div className="pt-8 opacity-10 select-none">
                            <span className="text-5xl md:text-7xl font-display font-black text-white uppercase italic tracking-tighter">
                                #YOSOYTITANUS
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
