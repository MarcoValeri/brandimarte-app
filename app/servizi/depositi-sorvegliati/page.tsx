import type { Metadata } from "next";
import { FaWarehouse } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import CarouselServices from "@/app/components/CarouselServices/CarouselServices";

export const metadata: Metadata = {
    title: "Depositi Sorvegliati | Traslochi Brandimarte Roma",
    description: "Depositi sorvegliati 24/7 a Roma. Videosorveglianza, controllo accessi e condizioni ottimali. Soluzioni a breve e lungo termine per i tuoi beni.",
};
import Footer from "@/app/components/Footer/Footer";

const DepositiSorvegliatiPage = () => {
    return (
        <div>
            <Header subtitle="Depositi sorvegliati 24 ore su 24" />
            <main>
                <ServiceSingle
                    title="Depositi sorvegliati"
                    icon={FaWarehouse}
                    description={[
                        "Traslochi Brandimarte mette a disposizione depositi sicuri e sorvegliati 24 ore su 24, 7 giorni su 7.",
                        "I nostri magazzini sono dotati di sistemi di allarme, videosorveglianza e controllo degli accessi per garantire la massima sicurezza dei tuoi beni.",
                        "Offriamo soluzioni di deposito a breve e lungo termine, ideali durante un trasloco, una ristrutturazione o semplicemente quando hai bisogno di spazio extra.",
                        "Ogni oggetto viene inventariato e conservato in condizioni ottimali di temperatura e umidità.",
                    ]}
                />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default DepositiSorvegliatiPage;
