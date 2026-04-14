import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ButtonQuote from "../ButtonQuote/ButtonQuote";

const QuoteSection = () => {
    return (
        <section className="bg-grey-bg py-12 px-4 md:py-20 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-5xl mx-auto">
                {/* Section title */}
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-[2px] mb-4 md:mb-6">
                    Scegli il preventivo più adatto alle tue esigenze
                </h2>
                <div className="w-16 h-1 bg-blue-link mx-auto rounded-full mb-10 md:mb-16" />

                {/* Cards */}
                <div className="flex flex-wrap gap-6">
                    {/* Online quote */}
                    <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-font mb-4">
                            Preventivo online gratuito
                        </h3>
                        <p className="text-blue-font leading-relaxed mb-6">
                            Calcola ora il tuo preventivo online gratuitamente e senza impegno.
                            Uno strumento utile che{" "}
                            <span className="font-[family-name:var(--font-bangers-nf)] text-blue-link">
                                Traslochi Brandimarte
                            </span>{" "}
                            mette a tua disposizione.
                            Ti aiuterà a capire i costi per il tuo prossimo trasloco.
                        </p>
                        <div className="text-center">
                            <ButtonQuote />
                        </div>
                    </div>

                    {/* Phone quote */}
                    <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-font mb-4">
                            Preventivo telefonico gratuito
                        </h3>
                        <p className="text-blue-font leading-relaxed mb-6">
                            Contatta lo staff di{" "}
                            <span className="font-[family-name:var(--font-bangers-nf)] text-blue-link">
                                Traslochi Brandimarte
                            </span>{" "}
                            per un preventivo telefonico o su WhatsApp gratuito e senza impegno.
                            Seleziona una delle seguenti opzioni:
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+393381106682"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-grey-bg text-blue-font no-underline hover:shadow-sm transition-shadow duration-300"
                            >
                                <FaPhone className="text-xl text-[#000080]" />
                                <span className="font-bold text-green-font">+39.338.11.06.682</span>
                            </a>
                            <a
                                href="https://wa.me/+393381106682"
                                target="_blank"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-grey-bg text-blue-font no-underline hover:shadow-sm transition-shadow duration-300"
                            >
                                <FaWhatsapp className="text-xl text-[#25D366]" />
                                <span className="font-bold text-green-font">+39.338.11.06.682</span>
                            </a>
                        </div>
                    </div>

                    {/* Email quote */}
                    <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-font mb-4">
                            Preventivo via email gratuito
                        </h3>
                        <p className="text-blue-font leading-relaxed mb-6">
                            Contattaci via email per ricevere un preventivo
                            via posta elettronica gratuito e senza impegno.
                            Seleziona la seguente opzione:
                        </p>
                        <a
                            href="mailto:info@brandimarte.com"
                            target="_blank"
                            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-grey-bg text-blue-font no-underline hover:shadow-sm transition-shadow duration-300"
                        >
                            <FaEnvelope className="text-xl text-black" />
                            <span className="font-bold text-green-font">info@brandimarte.com</span>
                        </a>
                    </div>

                    {/* Questions */}
                    <div className="w-full md:w-[calc(50%-0.75rem)] bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl md:text-2xl font-bold text-blue-font mb-4">
                            Domandare è lecito
                        </h3>
                        <p className="text-blue-font leading-relaxed">
                            Domandare è lecito, rispondere è cortesia ed in questo caso è
                            anche il nostro lavoro.
                            Se qualcosa non ti è chiaro in merito ai nostri servizi, o se hai
                            una richiesta particolare, sentiti libero di contattarci tramite
                            uno dei nostri canali.
                        </p>
                        <div className="mt-8 flex flex-col items-end">
                            <hr className="w-48 border-blue-font/20 mb-4" />
                            <p className="text-3xl md:text-5xl font-[family-name:var(--font-great-vibes-nf)] text-blue-font">
                                Andrea Brandimarte
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
