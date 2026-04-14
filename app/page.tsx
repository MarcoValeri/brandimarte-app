import AboutSection from "./components/AboutSection/AboutSection";
import Header from "./components/Header/Header";

const HomePage = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <AboutSection />
            </main>
        </div>
    )
}

export default HomePage;