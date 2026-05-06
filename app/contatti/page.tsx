import Carousel from "../components/Carousel/Carousel";
import CarouselServices from "../components/CarouselServices/CarouselServices";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

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