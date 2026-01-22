import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Check, MapPin, Calendar, Activity, Clock, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WizardFormProps {
    onClose?: () => void;
    isStandalone?: boolean;
}

export const WizardForm = ({ onClose, isStandalone = false }: WizardFormProps) => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    const [formData, setFormData] = useState({
        location: '',
        name: '',
        dob: '',
        whatsapp: '',
        interest: '',
        schedule: '',
        suggestions: ''
    });

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) return clearInterval(interval);
            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    };


    const handleSubmit = async () => {
        setFormState('submitting');

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormState('success');
                triggerConfetti();
            } else {
                alert('Hubo un error al enviar tus datos. Por favor intenta de nuevo.');
                setFormState('idle'); // Allow retry
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error de conexión. Revisa tu internet.');
            setFormState('idle');
        }
    };

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(c => c + 1);
        else handleSubmit();
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1: return !!formData.location;
            case 2: return !!formData.name && !!formData.dob;
            case 3: return !!formData.whatsapp && /^(\+593|09)\d{8}$/.test(formData.whatsapp);
            case 4: return !!formData.interest;
            case 5: return !!formData.schedule;
            default: return false;
        }
    };

    const stepVariants = {
        hidden: { x: 50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -50, opacity: 0 }
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
            if (formState === 'success') {
                setFormState('idle');
                setCurrentStep(1);
                setFormData({
                    location: '',
                    name: '',
                    dob: '',
                    whatsapp: '',
                    interest: '',
                    schedule: '',
                    suggestions: ''
                });
            }
        }
    };

    return (
        <div className={`bg-titanus-charcoal border border-white/10 w-full max-w-lg p-8 rounded-3xl shadow-2xl relative overflow-hidden ${isStandalone ? 'mx-auto' : ''}`}>
            {!isStandalone && onClose && (
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-20">
                    {/* SVG X Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            )}

            {/* Progress Bar */}
            {formState !== 'success' && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/5">
                    <motion.div
                        className="h-full bg-titanus-yellow shadow-[0_0_10px_rgba(255,215,0,0.5)]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            )}

            {formState === 'success' ? (
                <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                        <Check size={40} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tight mb-2">¡Solicitud Recibida!</h3>
                    <p className="text-gray-400 text-sm mb-6">Estamos revisando tu perfil. Te contactaremos si ganas.</p>
                    {onClose && <button onClick={handleClose} className="text-sm font-bold text-titanus-yellow hover:underline">Cerrar</button>}
                </div>
            ) : (
                <div className="mt-4">
                    <div className="mb-8 text-center">
                        <span className="text-titanus-yellow font-bold text-xs uppercase tracking-widest">Paso {currentStep} de {totalSteps}</span>
                        <h3 className="text-2xl font-display font-black text-white uppercase italic tracking-tight mt-1">
                            {currentStep === 1 && "¿Dónde te gustaría entrenar?"}
                            {currentStep === 2 && "Cuéntanos sobre ti"}
                            {currentStep === 3 && "¿Cómo te contactamos?"}
                            {currentStep === 4 && "¿Qué te apasiona más?"}
                            {currentStep === 5 && "Últimos detalles"}
                        </h3>
                    </div>

                    <div className="min-h-[220px]">
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && (
                                <motion.div key="step1" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-3">
                                    {['Centro', 'Sur'].map((loc) => (
                                        <label key={loc} className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${formData.location === loc ? 'bg-titanus-yellow text-black border-titanus-yellow' : 'bg-black/30 border-white/10 text-gray-400 hover:border-white/30'}`}>
                                            <input type="radio" name="location" value={loc} checked={formData.location === loc} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="hidden" />
                                            <MapPin className="mr-3" size={20} />
                                            <span className="font-bold uppercase tracking-wide">Sede {loc}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 2 && (
                                <motion.div key="step2" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Tu Nombre</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 text-white focus:border-titanus-yellow outline-none" placeholder="Ej. Juan Pérez" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Fecha de Nacimiento</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input type="date" value={formData.dob} onChange={(e) => setFormData({ ...formData, dob: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 text-white focus:border-titanus-yellow outline-none" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 3 && (
                                <motion.div key="step3" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">WhatsApp</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <input type="tel" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/[^0-9+]/g, '') })} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 text-white focus:border-titanus-yellow outline-none" placeholder="09XXXXXXXX" />
                                        </div>
                                        <p className="text-[10px] text-gray-500 ml-1">Debe ser un número válido de Ecuador.</p>
                                    </div>
                                </motion.div>
                            )}

                            {currentStep === 4 && (
                                <motion.div key="step4" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="grid grid-cols-2 gap-3">
                                    {['Bailoterapia', 'Gimnasio', 'Calistenia', 'MMA'].map((item) => (
                                        <label key={item} className={`flex flex-col items-center justify-center p-4 rounded-xl border cursor-pointer transition-all aspect-square ${formData.interest === item ? 'bg-titanus-yellow text-black border-titanus-yellow' : 'bg-black/30 border-white/10 text-gray-400 hover:border-white/30'}`}>
                                            <input type="radio" name="interest" value={item} checked={formData.interest === item} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="hidden" />
                                            <Activity size={24} className="mb-2" />
                                            <span className="font-bold uppercase text-[10px] tracking-wide text-center">{item}</span>
                                        </label>
                                    ))}
                                </motion.div>
                            )}

                            {currentStep === 5 && (
                                <motion.div key="step5" variants={stepVariants} initial="hidden" animate="visible" exit="exit" className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Horario Preferido</label>
                                        <div className="relative">
                                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                            <select value={formData.schedule} onChange={(e) => setFormData({ ...formData, schedule: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 text-white focus:border-titanus-yellow outline-none appearance-none">
                                                <option value="">Selecciona...</option>
                                                <option value="Mañana">Mañana</option>
                                                <option value="Tarde">Tarde</option>
                                                <option value="Noche">Noche</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase ml-1">Sugerencias (Opcional)</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-4 text-gray-500" size={18} />
                                            <textarea value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 h-24 text-white focus:border-titanus-yellow outline-none resize-none" placeholder="¿Algo más que debamos saber?" />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={nextStep}
                        disabled={!isStepValid() || formState === 'submitting'}
                        className="w-full bg-titanus-yellow text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/10 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {formState === 'submitting' ? 'Enviando...' : currentStep === totalSteps ? 'Finalizar Registro' : 'Siguiente'}
                    </button>
                </div>
            )}
        </div>
    );
};
