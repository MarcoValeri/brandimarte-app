"use client";

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
    FaLinkedinIn,
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

const Footer = () => {
    const today = new Date().getDay();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-grey-bg text-blue-font">
            <div className="flex flex-col md:flex-row">
                {/* Business info */}
                <div className="flex-1 p-8 text-center md:text-left md:border-r md:border-white">
                    <ul className="space-y-2 text-[1.2rem]">
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaBuilding className="text-[#094ab2]" />
                            <span>Traslochi Brandimarte</span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaMapMarkerAlt className="text-[#d24726]" />
                            <a href="https://maps.app.goo.gl/seLBTG8NjYCNo8VC9" target="_blank" className="text-blue-font no-underline" aria-label="Google Maps">
                                Via Ferdinando Maria Poggioli 58 - 00139 Roma
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaPhone className="text-[#2b579a]" />
                            <a href="tel:+393381106682" className="text-blue-font no-underline" aria-label="Phone number">
                                +39.338.11.06.682
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaWhatsapp className="text-[#25D366]" />
                            <a href="https://wa.me/+393381106682" target="_blank" className="text-blue-font no-underline" aria-label="WhatsApp">
                                +39.338.11.06.682
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaTty className="text-[#80397b]" />
                            <a href="tel:+390687132237" className="text-blue-font no-underline" aria-label="Landline">
                                +39.06.87.13.22.37
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaEnvelope className="text-black" />
                            <a href="mailto:traslochibrandimarte@gmail.com" target="_blank" className="text-blue-font no-underline" aria-label="Email">
                                traslochibrandimarte@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaAt className="text-yellow-500" />
                            <a href="mailto:brandimarte.andrea@pec.it" target="_blank" className="text-blue-font no-underline" aria-label="PEC email">
                                Pec: brandimarte.andrea@pec.it
                            </a>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <FaInfoCircle className="text-[#19BBFE]" />
                            <span>PI 15929701009</span>
                        </li>
                    </ul>
                </div>

                {/* Timetable */}
                <div className="flex-1 p-8 text-center md:text-left border-t md:border-t-0 md:border-r border-white">
                    <h2 className="text-xl font-bold mb-4">Siamo aperti</h2>
                    <ul className="space-y-2 text-[1.2rem]">
                        {days.map((day) => (
                            <li
                                key={day.label}
                                className={today === day.jsDay ? "font-black" : ""}
                            >
                                {day.label}: {day.hours}
                            </li>
                        ))}
                        <li className="font-black mt-4">
                            Su appuntamento: 24 ore su 24 - 7 giorni su 7
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="flex-1 p-8 text-center border-t md:border-t-0 border-white">
                    <h2 className="text-xl font-bold mb-6">Seguici su</h2>
                    <ul className="flex justify-center gap-8">
                        <li>
                            <FaFacebook className="text-[2rem] text-[#1877F2] hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
                        </li>
                        <li>
                            <FaInstagram className="text-[2rem] text-[#E4405F] hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
                        </li>
                        <li>
                            <FaLinkedinIn className="text-[2rem] text-[#0A66C2] hover:opacity-80 transition-opacity duration-300 cursor-pointer" />
                        </li>
                    </ul>
                </div>
            </div>

            {/* Powered by */}
            <div className="p-8 text-center border-t border-white">
                <p>
                    Made with{" "}
                    <span className="text-[2rem] text-red-500">♥</span>{" "}
                    in London by{" "}
                    <span
                        className="text-[#123456] font-black no-underline"
                    >
                        Marco Valeri
                    </span>
                    {" "}- <span className="font-black">©</span> {year} - All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
