"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ButtonQuote from "@/app/components/ButtonQuote/ButtonQuote";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi siamo" },
    { href: "/preventivi", label: "Preventivi" },
    { href: "/servizi", label: "Servizi" },
    { href: "/contatti", label: "Contatti" },
];

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="relative font-[family-name:var(--font-open-sans-nf)] p-8 bg-gray-100">
            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:justify-between">
                <div>
                    <Link
                        href="/"
                        className="font-[family-name:var(--font-great-vibes-nf)] text-[2rem] text-[#000080] no-underline hover:no-underline"
                    >
                        Brandimarte
                    </Link>
                </div>

                <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                    {navLinks.map((link) => (
                        <li key={link.href} className="inline list-none text-[1.2rem] px-4">
                            <Link
                                href={link.href}
                                className={`relative text-[#000080] no-underline transition-colors duration-300 hover:text-blue-link after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-blue-link after:transition-all after:duration-300 after:ease-in-out ${
                                    pathname === link.href
                                        ? "text-blue-link after:w-full"
                                        : "after:w-0 hover:after:w-full"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ButtonQuote />
            </div>

            {/* Mobile hamburger menu */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-10 flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-0"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    <span
                        className={`block w-[33px] h-[4px] bg-[#000080] rounded transition-transform duration-500 origin-[4px_0px] ${
                            isOpen ? "rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block w-[33px] h-[4px] bg-[#000080] rounded transition-all duration-500 ${
                            isOpen ? "opacity-0 scale-[0.2]" : ""
                        }`}
                    />
                    <span
                        className={`block w-[33px] h-[4px] bg-[#000080] rounded transition-transform duration-500 origin-[4px_100%] ${
                            isOpen ? "-rotate-45 translate-y-px" : ""
                        }`}
                    />
                </button>

                <ul
                    className={`absolute w-[90%] left-0 top-0 pt-[125px] pb-[50px] px-[50px] bg-gray-100 list-none antialiased origin-[0%_0%] transition-transform duration-500 z-5 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <li className="py-[10px] text-[22px] block">
                        <Link
                            href="/"
                            className="font-[family-name:var(--font-great-vibes-nf)] text-[2rem] text-[#000080] no-underline"
                            onClick={() => setIsOpen(false)}
                        >
                            Traslochi Brandimarte
                        </Link>
                    </li>

                    {navLinks.map((link) => (
                        <li key={link.href} className="py-[10px] text-[22px] block">
                            <Link
                                href={link.href}
                                className={`text-[#000080] no-underline hover:no-underline ${
                                    pathname === link.href
                                        ? "underline decoration-blue-600"
                                        : ""
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <li className="py-[10px] text-[22px] block" onClick={() => setIsOpen(false)}>
                        <ButtonQuote />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenu;
