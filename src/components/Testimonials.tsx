import { motion } from 'framer-motion';
import { Star, Award, Shield, Quote } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
    date: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jorge Guaman",
        text: "Increíble gimnasio, gran variedad de máquinas y espacio. El ambiente en sí es muy agradable y amigable, respetan mucho lo ajeno y no se pierde nada.",
        rating: 5,
        date: "Hace 2 meses"
    },
    {
        id: 2,
        name: "Jose (Local Guide)",
        text: "Awesome gym! 🏋️ I considered this to be one of the best gyms in Loja. They have two floors with good machines. The staff is very knowledgeable.",
        rating: 5,
        date: "Hace 3 años"
    },
    {
        id: 3,
        name: "Juan Pablo Aguirre",
        text: "Gran lugar, buen ambiente, buenas máquinas y buenos coaches. Botones para llamar a los coaches que facilitan la experiencia.",
        rating: 5,
        date: "Hace 2 años"
    },
    {
        id: 4,
        name: "Jhonny Jara",
        text: "Lo mejor en gimnasios en Loja. Excelente atención y personal muy calificado con preparación internacional y gran experiencia.",
        rating: 5,
        date: "Hace 5 años"
    },
    {
        id: 5,
        name: "Monserrath Suarez",
        text: "El mejor gym de Loja, no sólo por sus máquinas sino por la calidad de entrenadores. ¡Totalmente recomendado!",
        rating: 5,
        date: "Hace un año"
    },
    {
        id: 6,
        name: "Marcelo Josue Orellana",
        text: "Bien equipado con maquinas modernas y hay un buen ambiente, siempre limpio y bien mantenido.",
        rating: 5,
        date: "Hace 3 años"
    },
    {
        id: 7,
        name: "Ciencia Libre",
        text: "Uno de los mejores gyms en los que he estado, entrenadores geniales, muy buen equipamiento. Espacio para funcional.",
        rating: 5,
        date: "Hace 5 años"
    }
];

const StarRating = ({ rating, size = 16 }: { rating: number, size?: number }) => {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={size}
                    className={i < rating ? "fill-titanus-yellow text-titanus-yellow" : "text-gray-600"}
                />
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <motion.div
            whileHover={{ y: -5, boxShadow: "0 0 20px rgba(255, 215, 0, 0.1)" }}
            className="flex-shrink-0 w-[350px] bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl mx-4 transition-all duration-300 group"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-titanus-yellow flex items-center justify-center text-black font-black text-xl relative overflow-hidden">
                    {/* Spartan Helmet Placeholder Icon Background */}
                    <Shield size={24} className="absolute inset-0 m-auto opacity-10 scale-150 rotate-12" />
                    <span className="relative z-10">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                    <h4 className="text-white font-bold uppercase tracking-tight">{testimonial.name}</h4>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{testimonial.date}</p>
                </div>
                <div className="ml-auto">
                    <Quote size={24} className="text-titanus-yellow/20 group-hover:text-titanus-yellow/40 transition-colors" />
                </div>
            </div>

            <StarRating rating={testimonial.rating} />

            <p className="mt-4 text-gray-400 text-sm leading-relaxed italic">
                "{testimonial.text}"
            </p>

            <div className="mt-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-titanus-yellow" />
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Reseña Verificada</span>
            </div>
        </motion.div>
    );
};

export const Testimonials = () => {
    return (
        <section className="bg-titanus-black py-24 relative overflow-hidden" id="community">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-titanus-yellow/5 rounded-full blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-titanus-yellow/5 rounded-full blur-[120px] -ml-48 -mb-48" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    {/* Badge of Ranking */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-titanus-yellow text-black px-4 py-1.5 rounded-full mb-8 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    >
                        <Award size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">#1 MEJOR CALIFICADO EN LOJA</span>
                    </motion.div>

                    {/* Authority Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-6xl md:text-8xl font-display font-black text-white italic leading-none">4.8</span>
                            <div className="flex flex-col items-start">
                                <StarRating rating={5} size={24} />
                                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">/ 5 ESTRELLAS</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm md:text-lg font-medium max-w-md">
                            Basado en <span className="text-white font-bold">146+ opiniones reales</span> de Google en Loja. Nuestra comunidad respalda la calidad Titanus.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden py-10">
                {/* Gradients to fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-titanus-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-titanus-black to-transparent z-10" />

                <div className="flex">
                    {/* Double content for seamless loop */}
                    <motion.div
                        animate={{ x: [0, -100 * testimonials.length - 200] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="flex"
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                            <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Footer Identity Banner */}
            <div className="container mx-auto px-4 mt-20 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="py-12 border-y border-white/5"
                >
                    <span className="text-4xl md:text-7xl font-display font-black text-white/10 uppercase italic tracking-tighter hover:text-titanus-yellow/20 transition-colors cursor-default select-none">
                        #YOSOYTITANUS | #GUERREROMODERNO
                    </span>
                </motion.div>
            </div>
        </section>
    );
};
