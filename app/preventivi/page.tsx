import type { Metadata } from "next";
import Carousel from "../components/Carousel/Carousel";
import CarouselServices from "../components/CarouselServices/CarouselServices";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuoteSection from "../components/QuoteSection/QuoteSection";

export const metadata: Metadata = {
    title: "Preventivi Gratuiti | Traslochi Brandimarte Roma",
    description: "Richiedi un preventivo gratuito per il tuo trasloco a Roma. Preventivo online, telefonico o via email. Sopralluogo gratuito e senza impegno.",
};

const PreventiviPage = () => {
    return (
        <div>
            <Header subtitle="Preventivi" />
            <main>
                <QuoteSection />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default PreventiviPage;