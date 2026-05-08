"use client";

import Link from "next/link";
import {
    FaBuilding,
    FaMapMarkerAlt,
    FaPhone,
    FaWhatsapp,
    FaTty,
    FaEnvelope,
    FaAt,
    FaInfoCircle,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";

const days = [
    { label: "Lunedì", hours: "8 - 20", jsDay: 1 },
    { label: "Martedì", hours: "8 - 20", jsDay: 2 },
    { label: "Mercoledì", hours: "8 - 20", jsDay: 3 },
    { label: "Giovedì", hours: "8 - 20", jsDay: 4 },
    { label: "Venerdì", hours: "8 - 20", jsDay: 5 },
    { label: "Sabato", hours: "8 - 20", jsDay: 6 },
    { label: "Domenica", hours: "chiuso", jsDay: 0 },
];

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Servizi", href: "/servizi" },
    { label: "Preventivi", href: "/preventivi" },
    { label: "Contatti", href: "/contatti" },
];

const Footer = () => {
    const today = new Date().getDay();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-blue-font text-white/90">
            <div className="flex flex-col md:flex-row">
                {/* Business info */}
                <div className="flex-1 p-8 text-center md:text-left md:border-r md:border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4">Traslochi Brandimarte</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaBuilding className="text-blue-300" />
                            <span>Traslochi Brandimarte</span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-red-400" />
                            <a href="https://maps.app.goo.gl/seLBTG8NjYCNo8VC9" target="_blank" className="text-white/90 no-underline hover:text-white transition-colors duration-200" aria-label="Google Maps">
                                Via F. M. Poggioli 58 - 00139 Roma
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaPhone className="text-blue-300" />
                            <a href="tel:+393381106682" className="text-white/90 no-underline hover:text-white transition-colors duration-200" aria-label="Phone number">
                                +39.338.11.06.682
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaWhatsapp className="text-[#25D366]" />
                            <a href="https://wa.me/+393381106682" target="_blank" className="text-white/90 no-underline hover:text-white transition-colors duration-200" aria-label="WhatsApp">
                                +39.338.11.06.682
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaTty className="text-purple-300" />
                            <a href="tel:+390687132237" className="text-white/90 no-underline hover:text-white transition-colors duration-200" aria-label="Landline">
                                +39.06.87.13.22.37
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaEnvelope className="text-white/70" />
                            <a href="mailto:traslochibrandimarte@gmail.com" target="_blank" className="text-white/90 no-underline hover:text-white transition-colors duration-200" aria-label="Email">
                                traslochibrandimarte@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaAt className="text-yellow-300" />
                            <a href="mailto:brandimarte.andrea@pec.it" target="_blank" className="text-white/90 no-underline hover:text-white transition-colors duration-200" aria-label="PEC email">
                                Pec: brandimarte.andrea@pec.it
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaInfoCircle className="text-sky-300" />
                            <span>PI 15929701009</span>
                        </li>
                    </ul>
                </div>

                {/* Timetable + Quick Links */}
                <div className="flex-1 p-8 text-center md:text-left border-t md:border-t-0 md:border-r border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4">Siamo aperti</h3>
                    <ul className="space-y-2 text-sm">
                        {days.map((day) => (
                            <li
                                key={day.label}
                                className={`py-1 px-2 rounded ${
                                    today === day.jsDay
                                        ? "bg-white/10 font-bold text-white"
                                        : ""
                                }`}
                            >
                                {day.label}: {day.hours}
                            </li>
                        ))}
                        <li className="mt-3 py-1 px-2 rounded bg-white/10 font-bold text-white">
                            Su appuntamento: 24/7
                        </li>
                    </ul>
                </div>

                {/* Social + Quick nav */}
                <div className="flex-1 p-8 text-center border-t md:border-t-0 border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4">Seguici su</h3>
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://www.facebook.com/traslochibrandimarte79" target="_blank" aria-label="Facebook" className="flex items-center gap-2 text-white/80 no-underline hover:text-white transition-colors duration-200">
                            <FaFacebook className="text-2xl text-[#1877F2]" />
                            <span className="text-sm">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/traslochi__brandimarte" target="_blank" aria-label="Instagram" className="flex items-center gap-2 text-white/80 no-underline hover:text-white transition-colors duration-200">
                            <FaInstagram className="text-2xl text-[#E4405F]" />
                            <span className="text-sm">Instagram</span>
                        </a>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-4">Link rapidi</h3>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    scroll={true}
                                    className="text-sm text-white/70 no-underline hover:text-white transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Powered by */}
            <div className="py-6 px-8 text-center border-t border-white/10 bg-black/20">
                <p className="text-sm text-white/60">
                    Made with{" "}
                    <span className="text-red-400">♥</span>{" "}
                    in London by{" "}
                    <a
                        href="https://devmarco.com/"
                        target="_blank"
                        className="text-white font-bold no-underline hover:text-white/80 transition-colors duration-200"
                    >
                        Marco Valeri
                    </a>
                    {" "} — © {year} - All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
