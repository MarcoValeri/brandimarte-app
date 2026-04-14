import AboutSection from "./components/AboutSection/AboutSection";
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import QuoteSection from "./components/QuoteSection/QuoteSection";

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
                <Footer />
            </main>
        </div>
    )
}

export default HomePage;