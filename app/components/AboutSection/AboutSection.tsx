import {
    FaTruckMoving,
    FaPlaneDeparture,
    FaPlaneArrival,
    FaDollyFlatbed,
    FaBoxOpen,
    FaPeopleCarry,
    FaBuilding,
} from "react-icons/fa";
import ButtonQuote from "../ButtonQuote/ButtonQuote";

const services = [
    { label: "Traslochi nazionali", icon: FaTruckMoving },
    { label: "Traslochi internazionali", iconLeft: FaPlaneDeparture, iconRight: FaPlaneArrival },
    { label: "Traslochi professionali", icon: FaDollyFlatbed },
    { label: "Traslochi di appartamenti", icon: FaBoxOpen },
    { label: "Trasporto di pianoforti", icon: FaPeopleCarry },
    { label: "Traslochi di uffici", icon: FaBuilding },
];

const AboutSection = () => {
    return (
        <section className="bg-grey-bg py-12 px-4 md:py-20 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-wide mb-10 md:mb-16">
                    Traslochi a Roma, nazionali ed internazionali
                </h2>

                {/* Intro */}
                <p className="text-blue-font text-lg md:text-2xl leading-relaxed text-center mb-12">
                    L&apos;impresa{" "}
                    <span className="font-[family-name:var(--font-bangers-nf)] text-blue-link">
                        Brandimarte Traslochi
                    </span>{" "}
                    opera nel settore{" "}
                    <span className="font-bold text-green-font">da oltre 10 anni</span>{" "}
                    ed offre ai propri clienti vari tipologie di trasporti
                </p>

                {/* Services cards */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                    {services.map((service) => {
                        const IconLeft = "iconLeft" in service ? service.iconLeft : service.icon;
                        const IconRight = "iconRight" in service ? service.iconRight : service.icon;
                        return (
                            <div
                                key={service.label}
                                className="flex flex-col items-center gap-3 w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex gap-2 text-blue-link text-3xl">
                                    {IconLeft && <IconLeft />}
                                    {IconRight && IconRight !== IconLeft && <IconRight />}
                                </div>
                                <span className="text-blue-font text-sm md:text-base text-center font-medium">
                                    {service.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Content blocks */}
                <div className="text-blue-font text-lg md:text-xl leading-relaxed space-y-8 text-center">
                    <p>
                        Disponiamo inoltre di{" "}
                        <span className="font-bold text-green-font">depositi sorvegliati 24 ore su 24</span>
                    </p>

                    <p>
                        Il nostro personale è a vostra disposizione per soddisfare{" "}
                        <span className="underline decoration-double">qualunque esigenza</span>
                    </p>

                    <p className="font-bold text-green-font">
                        Affidati alla nostra professionalità ed esperienza.
                    </p>
                </div>

                {/* CTA */}
                <div className="my-14 py-10 text-center bg-white/60 rounded-xl">
                    <ButtonQuote
                        label="Chiamaci per un preventivo gratuito"
                        href="/preventivi"
                    />
                </div>

                {/* Closing text */}
                <p className="text-blue-font text-lg md:text-xl leading-relaxed text-center">
                    Verremo a casa vostra per un{" "}
                    <span className="font-bold text-green-font">sopralluogo gratuito e senza impegno</span>{" "}
                    in occasione del quale i nostri tecnici vi offriranno la loro consulenza
                </p>

                {/* Signature */}
                <div className="mt-14 flex flex-col items-end">
                    <hr className="w-48 border-blue-font/20 mb-4" />
                    <p className="text-4xl md:text-7xl font-[family-name:var(--font-great-vibes-nf)] text-blue-font">
                        Andrea Brandimarte
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
