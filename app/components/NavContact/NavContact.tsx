import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const NavContact = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 md:static">
            {/* Mobile: dark bar with icons + labels */}
            <div className="flex md:hidden items-center justify-center gap-8 bg-blue-font py-3 shadow-md">
                <a
                    href="tel:+393381106682"
                    aria-label="Chiama"
                    className="flex flex-col items-center gap-1 no-underline"
                >
                    <FaPhone className="text-xl text-white" />
                    <span className="text-[10px] text-white/80">Chiama</span>
                </a>
                <a
                    href="https://wa.me/+393381106682"
                    target="_blank"
                    aria-label="WhatsApp"
                    className="flex flex-col items-center gap-1 no-underline"
                >
                    <FaWhatsapp className="text-xl text-[#25D366]" />
                    <span className="text-[10px] text-white/80">WhatsApp</span>
                </a>
                <a
                    href="mailto:traslochibrandimarte@gmail.com"
                    target="_blank"
                    aria-label="Email"
                    className="flex flex-col items-center gap-1 no-underline"
                >
                    <FaEnvelope className="text-xl text-white" />
                    <span className="text-[10px] text-white/80">Email</span>
                </a>
            </div>

            {/* Desktop: full text bar */}
            <ul className="hidden md:flex items-center text-[1.2rem]">
                <li className="list-none p-4 text-[#000080]">
                    Preventivi e sopralluoghi gratuiti:
                </li>
                <li className="list-none p-4">
                    <a
                        href="tel:+393381106682"
                        aria-label="Telephone number"
                        className="text-blue-600 font-black no-underline"
                    >
                        +39.338.11.06.682
                    </a>
                </li>
                <li className="list-none p-4">
                    <a href="tel:+393381106682" aria-label="Phone icon">
                        <FaPhone className="text-[1.5rem] text-[#000080]" />
                    </a>
                </li>
                <li className="list-none p-4">
                    <a
                        href="https://wa.me/+393381106682"
                        target="_blank"
                        aria-label="Whatsapp icon"
                    >
                        <FaWhatsapp className="text-[1.5rem] text-[#25D366]" />
                    </a>
                </li>
                <li className="list-none p-4">
                    <a
                        href="mailto:traslochibrandimarte@gmail.com"
                        target="_blank"
                        aria-label="Email icon"
                    >
                        <FaEnvelope className="text-[1.5rem] text-black" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavContact;
