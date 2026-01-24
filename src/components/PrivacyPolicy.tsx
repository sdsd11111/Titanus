import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
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
                        POLÍTICA DE <span className="text-titanus-yellow">PRIVACIDAD</span>
                    </h1>

                    <section className="space-y-4">
                        <p>En <em>titanusfitness.com</em>, respetamos tu privacidad y estamos comprometidos con la protección de tus datos personales conforme a la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador</strong>.</p>
                        <p>Esta política explica cómo recopilamos, usamos, almacenamos y protegemos tu información.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">1. Responsable del tratamiento de datos</h2>
                        <ul className="list-none space-y-2 ml-4">
                            <li>Responsable: <strong>Titanus Fitness</strong></li>
                            <li>Correo electrónico: <a href="mailto:titanusfitness@gmail.com" className="text-titanus-yellow hover:underline">titanusfitness@gmail.com</a></li>
                            <li>Sitio web: <a href="https://titanusfitness.com" className="text-titanus-yellow hover:underline">https://titanusfitness.com</a></li>
                            <li>Domicilio: Loja, Ecuador</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">2. Datos personales que recopilamos</h2>
                        <p>Podemos recopilar los siguientes datos cuando el usuario los proporciona voluntariamente:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Nombre y apellidos</li>
                            <li>Correo electrónico</li>
                            <li>Número telefónico</li>
                            <li>Mensajes o información enviada en formularios</li>
                            <li>Datos de navegación (IP, tipo de dispositivo, cookies, páginas visitadas)</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">3. Finalidad del tratamiento</h2>
                        <p>Los datos personales serán utilizados exclusivamente para:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Responder solicitudes, mensajes o consultas.</li>
                            <li>Gestionar membresías y servicios contratados.</li>
                            <li>Enviar información relacionada con entrenamientos y horarios.</li>
                            <li>Enviar contenido informativo o comercial solo si existe consentimiento expreso.</li>
                            <li>Mejorar la experiencia del usuario en el sitio web.</li>
                            <li>Cumplir obligaciones legales o contractuales.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">4. Base legal del tratamiento</h2>
                        <p>El tratamiento de datos se realiza conforme a:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>El consentimiento libre, informado, específico e inequívoco del titular.</li>
                            <li>La Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">5. Conservación de los datos</h2>
                        <p>Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir las finalidades para las que fueron recopilados o mientras exista una relación legal o contractual, y posteriormente serán eliminados o anonimizados de forma segura.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">6. Derechos de los titulares</h2>
                        <p>Como titular de datos personales, tienes derecho a:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Acceder a tus datos.</li>
                            <li>Rectificar o actualizar tu información.</li>
                            <li>Solicitar la eliminación de tus datos.</li>
                            <li>Oponerte al tratamiento.</li>
                            <li>Solicitar la portabilidad de tus datos.</li>
                            <li>Revocar tu consentimiento en cualquier momento.</li>
                        </ul>
                        <p>Para ejercer estos derechos, envía una solicitud al correo:<br />
                            📩 <a href="mailto:titanusfitness@gmail.com" className="text-titanus-yellow hover:underline">titanusfitness@gmail.com</a></p>
                        <p>La solicitud deberá incluir nombre completo y descripción clara del requerimiento.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">7. Transferencias y terceros</h2>
                        <p>Los datos podrán ser tratados por proveedores tecnológicos (como servicios de hosting, correo electrónico, CRM, automatización o analítica), únicamente para cumplir las finalidades descritas y bajo compromisos de confidencialidad y protección de datos.</p>
                        <p>No vendemos ni cedemos datos personales a terceros.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">8. Seguridad de la información</h2>
                        <p>Se aplican medidas técnicas y organizativas razonables para proteger los datos personales, tales como:</p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Certificados SSL.</li>
                            <li>Accesos restringidos.</li>
                            <li>Sistemas de protección y respaldo.</li>
                            <li>Plataformas seguras de almacenamiento.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">9. Uso de cookies</h2>
                        <p>Este sitio puede utilizar cookies para mejorar la experiencia de navegación y analizar el uso del sitio. El usuario puede configurar su navegador para rechazar o eliminar cookies.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-titanus-yellow pl-4">10. Cambios en esta política</h2>
                        <p>Nos reservamos el derecho de modificar esta política para adaptarla a cambios legales o mejoras internas. Toda actualización será publicada en esta misma página.</p>
                    </section>

                    <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
                        Fecha de última actualización: Enero 2026
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
