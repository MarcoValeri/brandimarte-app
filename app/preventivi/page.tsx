import Carousel from "../components/Carousel/Carousel";
import CarouselServices from "../components/CarouselServices/CarouselServices";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuoteSection from "../components/QuoteSection/QuoteSection";

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