import QuoteFree from "@/app/components/QuoteFree/QuoteFree";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const PreventivoGratuitoPage = () => {
    return (
        <div>
            <Header subtitle="Preventivo Gratuito"/>
            <main>
                <QuoteFree />
            </main>
            <Footer />
        </div>
    )
}

export default PreventivoGratuitoPage;