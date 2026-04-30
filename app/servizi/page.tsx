import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ServiceSection from "../components/ServiceSection/ServiceSection";

const ServiziPage = () => {
    return (
        <div>
            <Header subtitle="Servizi" />
            <main>
                <ServiceSection />
                <Carousel />
                <Footer />
            </main>
        </div>
    )
}

export default ServiziPage;