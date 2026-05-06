import { FaDollyFlatbed } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import Footer from "@/app/components/Footer/Footer";

const TraslochiProfessionaliPage = () => {
    return (
        <div>
            <Header subtitle="Traslochi professionali su misura" />
            <main>
                <ServiceSingle
                    title="Traslochi professionali"
                    icon={FaDollyFlatbed}
                    description={[
                        "Il nostro servizio di traslochi professionali è pensato per chi cerca una soluzione completa e personalizzata.",
                        "Dalla consulenza iniziale alla pianificazione dettagliata, ogni aspetto del trasloco viene gestito dal nostro personale qualificato.",
                        "Utilizziamo attrezzature professionali e materiali di imballaggio di alta qualità per garantire la massima protezione dei tuoi beni durante il trasporto.",
                        "Offriamo soluzioni flessibili per adattarci a qualsiasi tempistica e budget.",
                    ]}
                />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default TraslochiProfessionaliPage;
