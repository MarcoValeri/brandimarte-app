import AboutSection from "./components/AboutSection/AboutSection";
import AboutVideo from "./components/AboutVideo/AboutVideo";
import Header from "./components/Header/Header";

const HomePage = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <AboutSection />
                <AboutVideo />
            </main>
        </div>
    )
}

export default HomePage;