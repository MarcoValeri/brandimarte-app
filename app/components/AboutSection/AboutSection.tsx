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
        <section className="bg-grey-bg py-8 px-4 md:py-16 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-wide mb-8 md:mb-12">
                    Traslochi a Roma, nazionali ed internazionali
                </h2>

                <div className="text-blue-font text-lg md:text-2xl leading-relaxed">
                    <p>
                        L&apos;impresa{" "}
                        <span className="font-[family-name:var(--font-bangers-nf)] text-blue-link">
                            Brandimarte Traslochi
                        </span>{" "}
                        opera nel settore{" "}
                        <span className="font-bold text-green-font">da oltre 10 anni</span>{" "}
                        ed offre ai propri clienti vari tipologie di trasporti
                    </p>

                    <ul className="my-8 space-y-4">
                        {services.map((service) => {
                            const IconLeft = "iconLeft" in service ? service.iconLeft : service.icon;
                            const IconRight = "iconRight" in service ? service.iconRight : service.icon;
                            return (
                                <li key={service.label} className="flex items-center gap-3 list-none">
                                    {IconLeft && <IconLeft className="text-blue-link text-xl" />}
                                    <span>{service.label}</span>
                                    {IconRight && <IconRight className="text-blue-link text-xl" />}
                                </li>
                            );
                        })}
                    </ul>

                    <p>
                        Disponiamo inoltre di{" "}
                        <span className="font-bold text-green-font">depositi sorvegliati 24 ore su 24</span>
                    </p>

                    <p className="mt-6">
                        Il{" "}
                        <span className="font-bold text-green-font">nostro personale è a vostra disposizione</span>{" "}
                        per soddisfare{" "}
                        <span className="underline decoration-double">qualunque esigenza</span>
                    </p>

                    <p className="mt-6">
                        <span className="font-bold text-green-font">
                            Affidati alla nostra professionalità ed esperienza.
                        </span>
                    </p>

                    <div className="my-8 text-center">
                        <ButtonQuote
                            label="Chiamaci per un preventivo gratuito"
                            href="/preventivi"
                        />
                    </div>

                    <p>
                        Verremo a casa vostra per un{" "}
                        <span className="font-bold text-green-font">sopralluogo gratuito e senza impegno</span>{" "}
                        in occasione del quale i nostri tecnici vi offriranno la loro consulenza
                    </p>

                    <p className="mt-12 text-4xl md:text-7xl font-[family-name:var(--font-great-vibes-nf)] text-blue-font">
                        Andrea Brandimarte
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
