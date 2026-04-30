import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const NavContact = () => {
    return (
        <nav className="text-[1.2rem]">
            <ul className="flex items-center justify-center md:justify-start">
                <li className="hidden md:inline-block list-none p-4 text-[#000080]">
                    Preventivi e sopralluoghi gratuiti:
                </li>
                <li className="hidden md:inline-block list-none p-4">
                    <a
                        href="tel:+393381106682"
                        target="_blank"
                        aria-label="Telephone number"
                        className="text-blue-600 font-black no-underline"
                    >
                        +39.338.11.06.682
                    </a>
                </li>
                <li className="inline-block list-none p-4">
                    <a href="tel:+393381106682" aria-label="Phone icon">
                        <FaPhone className="text-[1.5rem] text-[#000080]" />
                    </a>
                </li>
                <li className="inline-block list-none p-4">
                    <a
                        href="https://wa.me/+393381106682"
                        target="_blank"
                        aria-label="Whatsapp icon"
                    >
                        <FaWhatsapp className="text-[1.5rem] text-[#25D366]" />
                    </a>
                </li>
                <li className="inline-block list-none p-4">
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
