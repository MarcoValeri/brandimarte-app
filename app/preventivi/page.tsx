import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import QuoteSection from "../components/QuoteSection/QuoteSection";

const PreventiviPage = () => {
    return (
        <div>
            <Header subtitle="Preventivi" />
            <main>
                <QuoteSection />
                <Carousel />
                <Footer />
            </main>
        </div>
    )
}

export default PreventiviPage;