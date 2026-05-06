import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/393381106682?text=Salve%2C%20vorrei%20informazioni%20sui%20vostri%20servizi."
            target="_blank"
            aria-label="Contattaci su WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
            <FaWhatsapp className="text-3xl" />
        </a>
    );
};

export default WhatsAppButton;
