import type { Metadata } from "next";
import AboutSection from "./components/AboutSection/AboutSection";
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Carousel from "./components/Carousel/Carousel";
import CarouselServices from "./components/CarouselServices/CarouselServices";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";

export const metadata: Metadata = {
    title: "Traslochi Brandimarte | Traslochi a Roma, nazionali e internazionali",
    description: "Traslochi Brandimarte: ditta di traslochi a Roma con oltre 10 anni di esperienza. Traslochi nazionali, internazionali, depositi sorvegliati. Preventivo gratuito online.",
};

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <AboutSection />
                <CarouselServices />
                <AboutVideo />
                <QuoteSection />
                <Carousel />
                <ServiceSection />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;