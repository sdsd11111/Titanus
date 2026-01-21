import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Trash2, Upload, Plus, LogOut, Image as ImageIcon, Eye, EyeOff, Home } from 'lucide-react';

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

export const Admin = () => {
    // ... (state remains same)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [ads, setAds] = useState<Ad[]>([]);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ctaText, setCtaText] = useState('');
    const [ctaLink, setCtaLink] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem('titanus_admin_auth');
        if (auth === 'true') setIsAuthenticated(true);

        fetchAds();
    }, []);

    const fetchAds = () => {
        try {
            const storedAds = localStorage.getItem('titanus_ads');
            if (storedAds) {
                setAds(JSON.parse(storedAds));
            }
        } catch (error) {
            console.error('Error fetching ads:', error);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'TitanusGym' && password === 'Contraseña123.') {
            setIsAuthenticated(true);
            localStorage.setItem('titanus_admin_auth', 'true');
            setError('');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('titanus_admin_auth');
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const createAd = () => {
        if (!previewImage || !title || !description) return;

        const newAd: Ad = {
            id: crypto.randomUUID(),
            image: previewImage,
            title,
            description,
            ctaText,
            ctaLink,
            isActive: true,
            createdAt: Date.now()
        };

        try {
            const currentAds = JSON.parse(localStorage.getItem('titanus_ads') || '[]');
            const updatedAds = [newAd, ...currentAds];
            localStorage.setItem('titanus_ads', JSON.stringify(updatedAds));

            fetchAds();
            // Reset form
            setPreviewImage(null);
            setTitle('');
            setDescription('');
            setCtaText('');
            setCtaLink('');
        } catch (error) {
            console.error('Error creating ad:', error);
        }
    };

    const deleteAd = (id: string) => {
        try {
            const currentAds = JSON.parse(localStorage.getItem('titanus_ads') || '[]');
            const updatedAds = currentAds.filter((ad: Ad) => ad.id !== id);
            localStorage.setItem('titanus_ads', JSON.stringify(updatedAds));
            fetchAds();
        } catch (error) {
            console.error('Error deleting ad:', error);
        }
    };

    const toggleAdStatus = (id: string, currentStatus: boolean) => {
        try {
            const currentAds = JSON.parse(localStorage.getItem('titanus_ads') || '[]');
            const updatedAds = currentAds.map((ad: Ad) =>
                ad.id === id ? { ...ad, isActive: !currentStatus } : ad
            );
            localStorage.setItem('titanus_ads', JSON.stringify(updatedAds));
            fetchAds();
        } catch (error) {
            console.error('Error toggling ad status:', error);
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-titanus-black flex items-center justify-center p-4">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl w-full max-w-md backdrop-blur-md">
                    <h1 className="text-3xl font-display font-black text-white text-center mb-8 uppercase italic">Admin Panel</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Usuario</label>
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-titanus-yellow outline-none"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Contraseña</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-titanus-yellow outline-none"
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
                        <div className="flex gap-4">
                            <Link to="/" className="flex-1 bg-white/10 text-white font-bold uppercase py-4 rounded-xl hover:bg-white/20 transition-colors text-center">
                                Volver
                            </Link>
                            <button type="submit" className="flex-1 bg-titanus-yellow text-black font-black uppercase py-4 rounded-xl hover:bg-yellow-400 transition-colors">
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-titanus-black p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl font-display font-black text-white uppercase italic">Gestión de Anuncios</h1>
                    <div className="flex gap-4">
                        <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white font-bold uppercase text-xs tracking-widest bg-white/5 px-4 py-2 rounded-lg transition-colors">
                            <Home size={16} /> Volver al Inicio
                        </Link>
                        <button onClick={handleLogout} className="flex items-center gap-2 text-red-400 hover:text-red-300 font-bold uppercase text-xs tracking-widest bg-red-500/10 px-4 py-2 rounded-lg transition-colors">
                            <LogOut size={16} /> Salir
                        </button>
                    </div>
                </div>

                {/* Create Ad Section */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mb-8">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Plus size={20} className="text-titanus-yellow" /> Nuevo Anuncio
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image Upload Column */}
                        <div className="space-y-4">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Imagen del Anuncio</label>
                            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-titanus-yellow/50 transition-colors bg-black/30 overflow-hidden relative group">
                                {previewImage ? (
                                    <>
                                        <img src={previewImage} alt="Preview" className="h-full w-full object-cover rounded-xl" />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <p className="text-white text-sm font-bold">Cambiar Imagen</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400">
                                        <Upload className="w-8 h-8 mb-2" />
                                        <p className="text-sm font-medium">Click para subir imagen</p>
                                        <p className="text-xs text-gray-500">Recomendado: 600x600px</p>
                                    </div>
                                )}
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </label>
                            {previewImage && (
                                <button onClick={() => setPreviewImage(null)} className="text-red-400 text-xs hover:underline w-full text-center">Eliminar imagen</button>
                            )}
                        </div>

                        {/* Fields Column */}
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Título</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="Ej. ¡Oferta de Verano!"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-titanus-yellow outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Descripción</label>
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Ej. Inscríbete hoy y recibe..."
                                    rows={3}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-titanus-yellow outline-none resize-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Texto Botón (Opcional)</label>
                                    <input
                                        type="text"
                                        value={ctaText}
                                        onChange={e => setCtaText(e.target.value)}
                                        placeholder="Ej. Más Info"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-titanus-yellow outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase ml-1">Enlace (Opcional)</label>
                                    <input
                                        type="text"
                                        value={ctaLink}
                                        onChange={e => setCtaLink(e.target.value)}
                                        placeholder="Ej. https://wa.me/..."
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-titanus-yellow outline-none"
                                    />
                                    <p className="text-[10px] text-gray-500 mt-1 ml-1 leading-tight">
                                        Pro-tip: Usa <span className="text-titanus-yellow font-bold">#formulario</span> para abrir el registro aquí mismo.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={createAd}
                                    disabled={!previewImage || !title || !description}
                                    className="w-full bg-titanus-yellow disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-yellow-500/20"
                                >
                                    Publicar Anuncio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ads List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <ImageIcon size={20} className="text-titanus-yellow" /> Anuncios Activos
                    </h2>

                    {ads.length === 0 ? (
                        <div className="text-center py-12 text-gray-500 border border-white/5 rounded-2xl bg-white/5">
                            No hay anuncios creados.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ads.map((ad) => (
                                <div key={ad.id} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-all">
                                    <div className="h-48 w-full bg-black/50 relative">
                                        <img src={ad.image} alt="Ad" className="h-full w-full object-cover" />
                                        <div className="absolute top-2 right-2">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${ad.isActive ? 'bg-green-500 text-black' : 'bg-red-500 text-white'}`}>
                                                {ad.isActive ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 flex-1 flex flex-col">
                                        <h3 className="font-bold text-white text-lg mb-1">{ad.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">{ad.description}</p>

                                        <div className="flex gap-2 pt-4 border-t border-white/5">
                                            <button
                                                onClick={() => toggleAdStatus(ad.id, ad.isActive)}
                                                className={`flex-1 py-2 rounded-lg transition-colors font-bold text-xs uppercase flex items-center justify-center gap-2 ${ad.isActive ? 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20' : 'bg-green-500/10 text-green-500 hover:bg-green-500/20'}`}
                                            >
                                                {ad.isActive ? <><EyeOff size={14} /> Ocultar</> : <><Eye size={14} /> Mostrar</>}
                                            </button>
                                            <button
                                                onClick={() => deleteAd(ad.id)}
                                                className="px-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors"
                                                title="Eliminar"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
