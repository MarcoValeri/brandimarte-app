import type { Metadata } from "next";
import AboutSection from "../components/AboutSection/AboutSection";
import AboutVideo from "../components/AboutVideo/AboutVideo";
import Carousel from "../components/Carousel/Carousel";
import CarouselServices from "../components/CarouselServices/CarouselServices";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
    title: "Chi Siamo | Traslochi Brandimarte Roma",
    description: "Scopri Traslochi Brandimarte: oltre 10 anni di esperienza nei traslochi a Roma. Personale qualificato, mezzi moderni e servizio professionale.",
};

const ChiSiamoPage = () => {
    return (
        <div>
            <Header subtitle="Chi Siamo" />
            <main>
                <AboutSection />
                <CarouselServices />
                <AboutVideo />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default ChiSiamoPage;