import AboutSection from "../components/AboutSection/AboutSection";
import AboutVideo from "../components/AboutVideo/AboutVideo";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const ChiSiamoPage = () => {
    return (
        <div>
            <Header subtitle="Chi Siamo" />
            <main>
                <AboutSection />
                <AboutVideo />
                <Carousel />
            </main>
            <Footer />
        </div>
    )
}

export default ChiSiamoPage;