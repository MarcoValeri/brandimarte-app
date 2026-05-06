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
    href: string;
    icon: IconType;
}

const services: Service[] = [
    { label: "Traslochi nazionali", href: "/servizi/traslochi-nazionali", icon: FaTruckMoving },
    { label: "Traslochi internazionali", href: "/servizi/traslochi-internazionali", icon: FaPlaneDeparture },
    { label: "Traslochi professionali", href: "/servizi/traslochi-professionali", icon: FaDollyFlatbed },
    { label: "Traslochi di appartamenti", href: "/servizi/traslochi-appartamenti", icon: FaBoxOpen },
    { label: "Trasporto di pianoforti", href: "/servizi/trasporto-pianoforti", icon: FaPeopleCarry },
    { label: "Traslochi di uffici", href: "/servizi/traslochi-uffici", icon: FaBuilding },
    { label: "Depositi sorvegliati", href: "/servizi/depositi-sorvegliati", icon: FaWarehouse },
    { label: "Smaltimento e discarica", href: "/servizi/smaltimento", icon: FaRecycle },
];

const CarouselServices = () => {
    return (
        <section className="py-10 md:py-16 overflow-hidden bg-grey-bg">
            <h2 className="text-center text-xl md:text-3xl uppercase font-bold text-blue-font tracking-[2px] mb-8">
                I nostri servizi
            </h2>

            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-grey-bg to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-grey-bg to-transparent z-10 pointer-events-none" />

                {/* Scrolling track */}
                <div className="flex animate-marquee hover:[animation-play-state:paused]">
                    {/* Duplicate the list for seamless loop */}
                    {[...services, ...services].map((service, index) => (
                        <Link
                            key={`${service.label}-${index}`}
                            href={service.href}
                            className="shrink-0 w-48 md:w-56 mx-3 flex flex-col items-center gap-3 bg-white rounded-lg p-6 shadow-sm no-underline hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <service.icon className="text-3xl text-blue-font/40" />
                            <span className="text-blue-font text-sm md:text-base text-center font-medium">
                                {service.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* View all services button */}
            <div className="text-center mt-8">
                <Link
                    href="/servizi"
                    className="inline-block px-6 py-3 text-blue-link font-bold no-underline border-2 border-blue-link rounded-lg hover:bg-blue-link hover:text-white transition-colors duration-300"
                >
                    Scopri tutti i servizi
                </Link>
            </div>
        </section>
    );
};

export default CarouselServices;
