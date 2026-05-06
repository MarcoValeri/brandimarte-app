import type { Metadata } from "next";
import Carousel from "../components/Carousel/Carousel";
import CarouselServices from "../components/CarouselServices/CarouselServices";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
    title: "Contatti | Traslochi Brandimarte Roma",
    description: "Contatta Traslochi Brandimarte: telefono, WhatsApp, email. Siamo a tua disposizione per preventivi gratuiti e informazioni sui nostri servizi di trasloco a Roma.",
};

const ContattiPage = () => {
    return (
        <div>
            <Header subtitle="Contatti" />
            <main>
                <ContactForm />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default ContattiPage;