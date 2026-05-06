import { IconType } from "react-icons";
import ButtonQuote from "../ButtonQuote/ButtonQuote";

interface ServiceSingleProps {
    title: string;
    description: string[];
    icon: IconType;
}

const ServiceSingle = ({ title, description, icon: Icon }: ServiceSingleProps) => {
    return (
        <section className="py-12 px-4 md:py-20 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-3xl mx-auto">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <Icon className="text-5xl md:text-6xl text-blue-link" />
                </div>

                {/* Title */}
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-[2px] mb-4 md:mb-6">
                    {title}
                </h2>
                <div className="w-16 h-1 bg-blue-link mx-auto rounded-full mb-10 md:mb-14" />

                {/* Description */}
                <div className="text-blue-font text-lg md:text-xl leading-relaxed space-y-6">
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <ButtonQuote
                        label="Richiedi un preventivo gratuito"
                        href="/preventivi/preventivo-gratuito"
                    />
                </div>
            </div>
        </section>
    );
};

export default ServiceSingle;
