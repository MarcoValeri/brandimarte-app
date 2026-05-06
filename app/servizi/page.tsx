import type { Metadata } from "next";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ServiceSection from "../components/ServiceSection/ServiceSection";

export const metadata: Metadata = {
    title: "Servizi | Traslochi Brandimarte Roma",
    description: "Tutti i servizi di Traslochi Brandimarte: traslochi nazionali, internazionali, uffici, appartamenti, trasporto pianoforti, depositi sorvegliati e smaltimento.",
};

const ServiziPage = () => {
    return (
        <div>
            <Header subtitle="Servizi" />
            <main>
                <ServiceSection />
                <Carousel />
            </main>
            <Footer />
        </div>
    )
}

export default ServiziPage;