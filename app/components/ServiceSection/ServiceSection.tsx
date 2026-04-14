import Link from "next/link";
import {
    FaTruckMoving,
    FaPlaneDeparture,
    FaDollyFlatbed,
    FaBoxOpen,
    FaPeopleCarry,
    FaBuilding,
    FaWarehouse,
    FaRecycle,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface Service {
    label: string;
    description: string;
    href: string;
    icon: IconType;
}

const services: Service[] = [
    {
        label: "Traslochi nazionali",
        description: "Traslochi in tutta Italia con personale qualificato",
        href: "/servizi/traslochi-nazionali",
        icon: FaTruckMoving,
    },
    {
        label: "Traslochi internazionali",
        description: "Servizio di trasloco verso qualsiasi destinazione estera",
        href: "/servizi/traslochi-internazionali",
        icon: FaPlaneDeparture,
    },
    {
        label: "Traslochi professionali",
        description: "Soluzioni su misura per ogni esigenza professionale",
        href: "/servizi/traslochi-professionali",
        icon: FaDollyFlatbed,
    },
    {
        label: "Traslochi di appartamenti",
        description: "Trasloco completo del tuo appartamento in sicurezza",
        href: "/servizi/traslochi-appartamenti",
        icon: FaBoxOpen,
    },
    {
        label: "Trasporto di pianoforti",
        description: "Trasporto specializzato per strumenti delicati",
        href: "/servizi/trasporto-pianoforti",
        icon: FaPeopleCarry,
    },
    {
        label: "Traslochi di uffici",
        description: "Trasloco aziendale rapido con minimo disagio",
        href: "/servizi/traslochi-uffici",
        icon: FaBuilding,
    },
    {
        label: "Depositi sorvegliati",
        description: "Custodia sicura 24/7 per i tuoi beni",
        href: "/servizi/depositi-sorvegliati",
        icon: FaWarehouse,
    },
    {
        label: "Smaltimento e discarica",
        description: "Ritiro e smaltimento di mobili e materiali",
        href: "/servizi/smaltimento",
        icon: FaRecycle,
    },
];

const ServiceSection = () => {
    return (
        <section className="py-12 px-4 md:py-20 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-[2px] mb-4 md:mb-6">
                    Traslochi Brandimarte Servizi
                </h2>
                <div className="w-16 h-1 bg-blue-link mx-auto rounded-full mb-10 md:mb-12" />

                {/* Intro */}
                <p className="text-blue-font text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <span className="font-[family-name:var(--font-bangers-nf)] text-blue-link">
                        Traslochi Brandimarte Srl
                    </span>{" "}
                    è una ditta specializzata nei traslochi professionali di qualsiasi tipo,
                    nei depositi sorvegliati 24 ore su 24, 7 giorni su 7, nello smaltimento
                    e discarica e molto altro ancora. Scegli uno dei nostri servizi o mettiti
                    in contatto con il nostro staff per avere informazioni in merito alle tue esigenze.
                </p>

                {/* Service cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.label}
                            href={service.href}
                            className="group w-full md:w-[calc(33.333%-1rem)] bg-white rounded-lg p-8 shadow-sm no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="flex flex-col items-center text-center gap-4">
                                <service.icon className="text-4xl text-blue-font/40 group-hover:text-blue-link transition-colors duration-300" />
                                <h3 className="text-lg font-bold text-blue-font">
                                    {service.label}
                                </h3>
                                <p className="text-blue-font/70 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
