import type { Metadata } from "next";
import { FaBoxOpen } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import CarouselServices from "@/app/components/CarouselServices/CarouselServices";

export const metadata: Metadata = {
    title: "Traslochi Appartamenti | Traslochi Brandimarte Roma",
    description: "Trasloco completo di appartamenti a Roma. Smontaggio, imballaggio, trasporto e rimontaggio. Massima cura e protezione dei tuoi beni.",
};
import Footer from "@/app/components/Footer/Footer";

const TraslochiAppartamentiPage = () => {
    return (
        <div>
            <Header subtitle="Traslochi di appartamenti in sicurezza" />
            <main>
                <ServiceSingle
                    title="Traslochi di appartamenti"
                    icon={FaBoxOpen}
                    description={[
                        "Traslochi Brandimarte è specializzata nel trasloco completo di appartamenti di qualsiasi dimensione.",
                        "Ci occupiamo dello smontaggio e rimontaggio dei mobili, dell'imballaggio di oggetti fragili, del trasporto e del riposizionamento nella nuova casa.",
                        "Il nostro servizio include anche la fornitura di scatoloni e materiali per l'imballaggio, per rendere il tuo trasloco il più semplice possibile.",
                        "Trattiamo la tua casa con la massima cura e rispetto, proteggendo pavimenti, pareti e porte durante tutte le operazioni.",
                    ]}
                />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default TraslochiAppartamentiPage;
