import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "¿Cuáles son los horarios de atención en las sucursales Centro y Sur?",
        answer: "Atendemos de Lunes a Viernes de 5:00 AM a 10:00 PM. Los Sábados de 8:00 AM a 17:00 PM. Nuestras dos sedes mantienen la misma calidad y disponibilidadhoraria."
    },
    {
        question: "¿Qué incluyen las membresías de Titanus Fitness?",
        answer: "Nuestras membresías ($30/mes individual, $50/mes pareja) incluyen acceso total a nuestros dos pisos de maquinaria moderna, área funcional y la guía permanente de entrenadores certificados internacionalmente para asegurar tus resultados."
    },
    {
        question: "¿Cómo funciona el sistema de asistencia de entrenadores?",
        answer: "Somos innovadores en Loja: contamos con botones de llamado estratégicos integrados en las estaciones de máquinas. Al presionarlos, solicitas asistencia inmediata de nuestros coaches expertos para corregir técnica o recibir apoyo."
    },
    {
        question: "¿Dónde están ubicadas las sedes de Titanus Gym en Loja?",
        answer: "Para tu comodidad, contamos con dos ubicaciones estratégicas: Sede Centro (Av. Universitaria y Rocafuerte) y Sede Sur (Av. de los Paltas). Ambas cuentan con la mejor tecnología y ambiente para tu entrenamiento."
    },
    {
        question: "¿Qué disciplinas se pueden practicar en el gimnasio?",
        answer: "En Titanus Fitness puedes elegir entre Gimnasio (pesas), Bailoterapia, Calistenia y MMA. Todas nuestras disciplinas están incluidas en la experiencia de membresía para brindarte un entrenamiento integral."
    }
];

const AccordionItem = ({ item, isOpen, onClick, index }: { item: FAQItem; isOpen: boolean; onClick: () => void; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`mb-4 overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                ? 'bg-white/10 border-titanus-yellow/50 shadow-[0_0_30px_rgba(255,215,0,0.05)]'
                : 'bg-white/5 border-white/10 hover:border-titanus-yellow/30'
                }`}
        >
            <button
                onClick={onClick}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <span className={`text-lg md:text-xl font-bold tracking-tight uppercase transition-colors ${isOpen ? 'text-titanus-yellow' : 'text-white'}`}>
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    className={`ml-4 flex-shrink-0 p-1 rounded-full border ${isOpen ? 'border-titanus-yellow text-titanus-yellow' : 'border-white/20 text-white'}`}
                >
                    <Plus size={24} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0">
                            <div className="h-px w-full bg-white/5 mb-6" />
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-medium">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // JSON-LD for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="bg-titanus-black py-24 relative overflow-hidden" id="faq">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-titanus-yellow/5 blur-[120px] -translate-x-1/2 opacity-30 select-none pointer-events-none" />

            {/* SEO Schema Injection */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-titanus-yellow/10 border border-titanus-yellow/30 rounded-full mb-6"
                        >
                            <HelpCircle size={16} className="text-titanus-yellow" />
                            <span className="text-titanus-yellow text-xs font-black uppercase tracking-[0.3em]">Centro de Ayuda</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-display font-black text-titanus-yellow uppercase italic tracking-tighter mb-4"
                        >
                            PREGUNTAS <span className="text-white">FRECUENTES</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-lg md:text-xl font-medium"
                        >
                            Resuelve tus dudas sobre el <span className="text-white font-bold">mejor acondicionamiento físico en Loja</span> y únete a la familia Titanus.
                        </motion.p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                index={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                            />
                        ))}
                    </div>

                    {/* Bottom Branding */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 text-center"
                    >
                        <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em] select-none opacity-40">
                            #YOSOYTITANUS | LOJA - ECUADOR
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
