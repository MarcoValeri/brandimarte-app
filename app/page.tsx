import NavContact from "./components/NavContact/NavContact";
import NavMenu from "./components/NavMenu/NavMenu";

const HomePage = () => {
    return (
        <div>
            <header>
                <NavContact />
                <NavMenu />
            </header>
        </div>
    )
}

export default HomePage;