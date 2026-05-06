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
            <div className="hidden lg:flex lg:items-center lg:justify-between">
                <div>
                    <Link
                        href="/"
                        className="font-[family-name:var(--font-great-vibes-nf)] text-[2rem] text-[#000080] no-underline hover:no-underline"
                    >
                        Traslochi Brandimarte
                    </Link>
                </div>

                <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                    {navLinks.map((link) => (
                        <li key={link.href} className="inline list-none text-base px-3">
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
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative z-40 flex flex-col justify-center gap-[5px] bg-transparent border-none cursor-pointer p-0"
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

                {/* Backdrop */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-20"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Slide-in menu */}
                <ul
                    className={`fixed left-0 top-0 w-full min-h-screen pt-[100px] pb-[50px] px-[40px] bg-gray-100 list-none antialiased transition-transform duration-500 z-30 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <li className="py-3 block">
                        <Link
                            href="/"
                            className="font-[family-name:var(--font-great-vibes-nf)] text-[2rem] text-[#000080] no-underline"
                            onClick={() => setIsOpen(false)}
                        >
                            Traslochi Brandimarte
                        </Link>
                    </li>

                    {navLinks.map((link) => (
                        <li key={link.href} className="py-3 block">
                            <Link
                                href={link.href}
                                className={`text-[20px] text-[#000080] no-underline hover:no-underline flex items-center gap-3 py-2 px-3 rounded-lg transition-colors duration-200 ${
                                    pathname === link.href
                                        ? "bg-blue-link/10 border-l-4 border-blue-link font-bold"
                                        : "hover:bg-gray-200"
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <li className="py-4 block" onClick={() => setIsOpen(false)}>
                        <ButtonQuote />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenu;
