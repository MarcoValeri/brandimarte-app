"use client";

import Image from "next/image";
import NavContact from "../NavContact/NavContact";
import NavMenu from "../NavMenu/NavMenu";
import colosseoImg from "@/app/assets/images/colosseo-a-roma.jpg";
import { FaChevronDown } from "react-icons/fa";

interface HeaderProps {
    subtitle?: string;
}

const Header = ({ subtitle = "Traslochi su Roma, nazionali ed internazionali" }: HeaderProps) => {
    return (
        <header className="relative">
            <NavContact />
            <NavMenu />
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src={colosseoImg}
                    alt="Colosseo a Roma"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay — darker at bottom for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />

                {/* Text content with fade-in animation */}
                <div className="relative z-10 text-center px-4 animate-fade-in">
                    <h1 className="font-[family-name:var(--font-great-vibes-nf)] text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">
                        Traslochi Brandimarte
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white/90 font-normal drop-shadow-md">
                        {subtitle}
                    </h2>
                </div>

                {/* Scroll indicator */}
                <button
                    onClick={() => window.scrollBy({ top: window.innerHeight * 0.6, behavior: "smooth" })}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce bg-transparent border-none cursor-pointer"
                    aria-label="Scroll down"
                >
                    <FaChevronDown className="text-2xl text-white/70" />
                </button>
            </section>
        </header>
    );
};

export default Header;
