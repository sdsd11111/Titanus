import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-titanus-black text-gray-300 py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-titanus-yellow hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-sm">
                    <ArrowLeft size={16} /> Volver al inicio
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <h1 className="text-4xl md:text-5xl font-display font-black text-white uppercase italic tracking-tight mb-8">
                        TÉRMINOS Y <span className="text-titanus-yellow">CONDICIONES</span>
                    </h1>

                    <section className="space-y-4">
                        <p>Bienvenido a <em>titanusfitness.com</em>. Al acceder y utilizar este sitio web, aceptas cumplir los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, por favor no utilices este sitio.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">1. Identificación del responsable</h2>
                        <p>Este sitio web es operado por:</p>
                        <ul className="list-none space-y-2 ml-4">
                            <li><strong>Titanus Fitness</strong></li>
                            <li>Correo electrónico: <a href="mailto:titanusfitness@gmail.com" className="text-titanus-yellow hover:underline">titanusfitness@gmail.com</a></li>
                            <li>Sitio web: <a href="https://titanusfitness.com" className="text-titanus-yellow hover:underline">https://titanusfitness.com</a></li>
                            <li>Domicilio: Loja, Ecuador</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">2. Objeto del sitio web</h2>
                        <p>Este sitio tiene como finalidad brindar información sobre servicios de entrenamiento, instalaciones, horarios y membresías de Titanus Gym, así como permitir el contacto entre los usuarios y el gimnasio.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">3. Uso del sitio</h2>
                        <p>El usuario se compromete a utilizar este sitio de forma lícita, sin infringir derechos de terceros ni realizar actividades que puedan dañar, sobrecargar o deteriorar el funcionamiento del sitio.</p>
                        <p className="font-bold text-white">Queda prohibido:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Utilizar el sitio con fines fraudulentos.</li>
                            <li>Intentar acceder a sistemas, bases de datos o servidores sin autorización.</li>
                            <li>Recolectar datos de otros usuarios sin consentimiento.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">4. Propiedad intelectual</h2>
                        <p>Todos los contenidos de este sitio (textos, imágenes, videos, logotipos, marcas, estructura, diseño, código y materiales) son propiedad de Titanus Fitness o de sus respectivos titulares, y están protegidos por derechos de propiedad intelectual.</p>
                        <p>Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">5. Responsabilidad</h2>
                        <p>El titular no garantiza que el contenido esté libre de errores o sea completamente actualizado, aunque se compromete a realizar esfuerzos razonables para mantener información correcta.</p>
                        <p>El uso de la información publicada es responsabilidad exclusiva del usuario.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">6. Enlaces externos</h2>
                        <p>Este sitio puede contener enlaces a sitios de terceros. No se tiene control sobre ellos ni se asume responsabilidad sobre sus contenidos o políticas.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">7. Tratamiento de datos personales</h2>
                        <p>Los datos personales proporcionados por los usuarios a través de formularios, suscripciones o cualquier otro medio serán tratados conforme a la <em>Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador</em>.</p>
                        <p>El tratamiento se realizará únicamente con el consentimiento del titular y de acuerdo con lo establecido en nuestra <em>Política de Privacidad y Protección de Datos Personales</em>, la cual forma parte integral de estos Términos.</p>
                        <p>👉 Se recomienda leerla en: <Link to="/politicas" className="text-titanus-yellow hover:underline">/politicas</Link></p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">8. Modificaciones</h2>
                        <p>Titanus Fitness se reserva el derecho de modificar en cualquier momento estos Términos y Condiciones. Las modificaciones entrarán en vigor desde su publicación en el sitio web.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">9. Legislación aplicable</h2>
                        <p>Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia será resuelta conforme a la normativa ecuatoriana vigente.</p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
                        Fecha de última actualización: Enero 2026
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
