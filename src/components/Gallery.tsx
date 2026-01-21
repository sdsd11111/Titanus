import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera } from 'lucide-react';

interface GalleryItem {
    id: number;
    category: 'Instalaciones' | 'Entrenamiento' | 'Maquinaria' | 'Comunidad';
    image: string;
    title: string;
    description: string;
    size: 'small' | 'medium' | 'large';
}

const galleryData: GalleryItem[] = [
    {
        id: 1,
        category: 'Instalaciones',
        image: '/images/gallery-facility.webp',
        title: 'Sede Centro - Piso 1',
        description: 'Área principal de maquinaria con equipamiento moderno de alta gama.',
        size: 'large'
    },
    {
        id: 2,
        category: 'Maquinaria',
        image: '/images/gallery-equipment.webp',
        title: 'Equipamiento de Élite',
        description: 'Máquinas en perfecto estado para un aislamiento muscular máximo.',
        size: 'medium'
    },
    {
        id: 3,
        category: 'Entrenamiento',
        image: '/images/gallery-weights.webp',
        title: 'Zona de Pesos Libres',
        description: 'Espacio diseñado para romper límites con mancuernas de alta calidad.',
        size: 'medium'
    },
    {
        id: 4,
        category: 'Entrenamiento',
        image: '/images/gallery-calisthenics.webp',
        title: 'Circuitos de Calistenia',
        description: 'Área funcional para el entrenamiento de fuerza y movilidad.',
        size: 'small'
    },
    {
        id: 5,
        category: 'Maquinaria',
        image: '/images/gallery-tech.webp',
        title: 'Tecnología Asistida',
        description: 'Sistema único de botones para asistencia inmediata de entrenadores.',
        size: 'large'
    },
    {
        id: 6,
        category: 'Comunidad',
        image: '/images/gallery-culture.webp',
        title: 'Cultura Fitness Loja',
        description: 'Comunidad Titanus unida por la pasión y la disciplina.',
        size: 'small'
    },
    {
        id: 7,
        category: 'Instalaciones',
        image: '/images/gallery-south.webp',
        title: 'Sede Sur - Estética Industrial',
        description: 'Ambiente motivador con vistas y amplitud excepcional.',
        size: 'medium'
    },
    {
        id: 8,
        category: 'Comunidad',
        image: '/images/gallery-couples.webp',
        title: 'Entrenamiento en Pareja',
        description: 'Fomentando el apoyo mutuo y el crecimiento conjunto en Loja.',
        size: 'medium'
    }
];

export const Gallery = () => {
    const [filter, setFilter] = useState<'All' | GalleryItem['category']>('All');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const categories = ['All', 'Instalaciones', 'Entrenamiento', 'Maquinaria', 'Comunidad'];

    const filteredData = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

    return (
        <section className="bg-titanus-black py-24 relative overflow-hidden" id="gallery">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-titanus-yellow/10 border border-titanus-yellow/30 px-4 py-2 rounded-full mb-6"
                    >
                        <Camera size={14} className="text-titanus-yellow" />
                        <span className="text-titanus-yellow text-xs font-black uppercase tracking-[0.3em]">Muro de Resultados</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-display font-black text-white uppercase italic tracking-tighter"
                    >
                        GALERÍA DE <span className="text-titanus-yellow">ALTO RENDIMIENTO</span>
                    </motion.h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat as any)}
                            className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 border-2 ${filter === cat
                                ? 'bg-titanus-yellow border-titanus-yellow text-black'
                                : 'bg-transparent border-white/10 text-gray-500 hover:border-titanus-yellow/50 hover:text-white'
                                }`}
                        >
                            {cat === 'All' ? 'TODOS' : cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-style Grid */}
                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence>
                        {filteredData.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-2xl border-2 border-transparent hover:border-titanus-yellow/50 transition-all duration-500"
                                onClick={() => setSelectedImage(item)}
                            >
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-20" />

                                {/* Actual Image */}
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                />

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 z-30 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="bg-titanus-yellow text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-display font-black text-white italic uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    <div className="mt-4 flex items-center justify-between">
                                        <p className="text-xs text-gray-300 font-medium max-w-[80%]">
                                            {item.description}
                                        </p>
                                        <div className="w-10 h-10 rounded-full bg-titanus-yellow flex items-center justify-center text-black">
                                            <Maximize2 size={18} />
                                        </div>
                                    </div>
                                </div>

                                {/* Indicator mark */}
                                <div className="absolute top-4 right-4 z-40 bg-black/60 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 bg-titanus-yellow rounded-full animate-pulse" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Brand Hashtag */}
                <div className="mt-20 text-center opacity-5 select-none pointer-events-none">
                    <span className="text-[10vw] font-display font-black text-white italic tracking-tighter">#YOSOYTITANUS</span>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-y-auto"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white hover:text-titanus-yellow transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full flex flex-col items-center gap-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative rounded-3xl overflow-hidden border-2 border-titanus-yellow shadow-[0_0_50px_rgba(255,215,0,0.2)] w-full">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />
                            </div>
                            <div className="text-center max-w-2xl px-4">
                                <span className="text-titanus-yellow font-black tracking-widest text-xs uppercase block mb-2 underline decoration-2 underline-offset-4">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-3xl md:text-5xl font-display font-black text-white italic uppercase mb-4">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
                                    {selectedImage.description}
                                </p>
                                <div className="mt-8 h-1 w-24 bg-titanus-yellow mx-auto rounded-full" />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
