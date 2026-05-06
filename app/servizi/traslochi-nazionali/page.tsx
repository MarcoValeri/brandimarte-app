import type { Metadata } from "next";
import { FaTruckMoving } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import CarouselServices from "@/app/components/CarouselServices/CarouselServices";

export const metadata: Metadata = {
    title: "Traslochi Nazionali | Traslochi Brandimarte Roma",
    description: "Servizio di traslochi nazionali in tutta Italia. Imballaggio, trasporto e posizionamento. Preventivo gratuito con Traslochi Brandimarte.",
};
import Footer from "@/app/components/Footer/Footer";

const TraslochiNazionaliPage = () => {
    return (
        <div>
            <Header subtitle="Traslochi nazionali in tutta Italia" />
            <main>
                <ServiceSingle
                    title="Traslochi nazionali"
                    icon={FaTruckMoving}
                    description={[
                        "Traslochi Brandimarte offre un servizio di traslochi nazionali completo e professionale su tutto il territorio italiano.",
                        "Il nostro team di esperti si occupa di ogni fase del trasloco: dall'imballaggio accurato dei tuoi beni, al trasporto sicuro fino alla destinazione, allo scarico e al posizionamento dei mobili nella nuova abitazione.",
                        "Disponiamo di mezzi di trasporto di diverse dimensioni per adattarci a qualsiasi esigenza, dai piccoli traslochi ai grandi spostamenti.",
                        "Ogni trasloco viene pianificato nei minimi dettagli per garantire la massima efficienza e la totale sicurezza dei tuoi oggetti.",
                    ]}
                />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default TraslochiNazionaliPage;
