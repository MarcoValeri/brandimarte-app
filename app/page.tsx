import AboutSection from "./components/AboutSection/AboutSection";
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuoteSection from "./components/QuoteSection/QuoteSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";

const HomePage = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <AboutSection />
                <AboutVideo />
                <QuoteSection />
                <ServiceSection />
                <Footer />
            </main>
        </div>
    )
}

export default HomePage;