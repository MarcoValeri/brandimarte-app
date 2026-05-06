import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import ButtonQuote from "../ButtonQuote/ButtonQuote";

const contactOptions = [
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        description: "Scrivici su WhatsApp per una risposta rapida",
        detail: "+39.338.11.06.682",
        href: "https://wa.me/393381106682?text=Salve%2C%20vorrei%20informazioni%20sui%20vostri%20servizi.",
        iconColor: "text-[#25D366]",
        hoverBorder: "hover:border-[#25D366]",
    },
    {
        icon: FaPhone,
        label: "Telefono",
        description: "Chiamaci per parlare direttamente con il nostro staff",
        detail: "+39.338.11.06.682",
        href: "tel:+393381106682",
        iconColor: "text-[#2b579a]",
        hoverBorder: "hover:border-[#2b579a]",
    },
    {
        icon: FaEnvelope,
        label: "Email",
        description: "Inviaci un'email e ti risponderemo al più presto",
        detail: "traslochibrandimarte@gmail.com",
        href: "mailto:traslochibrandimarte@gmail.com?subject=Richiesta%20informazioni",
        iconColor: "text-blue-font",
        hoverBorder: "hover:border-blue-font",
    },
];

const ContactForm = () => {
    return (
        <section className="py-12 px-4 md:py-20 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-[2px] mb-4 md:mb-6">
                    Contattaci
                </h2>
                <div className="w-16 h-1 bg-blue-link mx-auto rounded-full mb-6" />
                <p className="text-center text-blue-font/70 mb-10 md:mb-14 text-lg max-w-2xl mx-auto">
                    Scegli il canale che preferisci per metterti in contatto con noi.
                    Siamo a tua disposizione per qualsiasi informazione o richiesta.
                </p>

                {/* Contact cards */}
                <div className="flex flex-col md:flex-row gap-6 mb-14">
                    {contactOptions.map((option) => (
                        <a
                            key={option.label}
                            href={option.href}
                            target={option.label === "WhatsApp" ? "_blank" : undefined}
                            className={`flex-1 flex flex-col items-center gap-4 bg-white rounded-xl p-8 shadow-sm border-2 border-transparent no-underline transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${option.hoverBorder}`}
                        >
                            <option.icon className={`text-5xl ${option.iconColor}`} />
                            <h3 className="text-xl font-bold text-blue-font">
                                {option.label}
                            </h3>
                            <p className="text-blue-font/60 text-center text-sm leading-relaxed">
                                {option.description}
                            </p>
                            <span className="font-bold text-blue-link text-sm">
                                {option.detail}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Preventivo CTA */}
                <div className="text-center bg-white/60 rounded-xl py-10 px-6">
                    <p className="text-blue-font text-lg mb-6">
                        Vuoi ricevere un preventivo gratuito e senza impegno?
                    </p>
                    <ButtonQuote
                        label="Richiedi un preventivo gratuito"
                        href="/preventivi/preventivo-gratuito"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
