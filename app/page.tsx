import AboutSection from "./components/AboutSection/AboutSection";
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <AboutSection />
                <AboutVideo />
                <QuoteSection />
                <Carousel />
                <ServiceSection />
                <Footer />
            </main>
        </div>
    )
}

export default HomePage;