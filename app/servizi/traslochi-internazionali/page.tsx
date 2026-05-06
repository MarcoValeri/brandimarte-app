import { FaPlaneDeparture } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import Footer from "@/app/components/Footer/Footer";

const TraslochiInternazionaliPage = () => {
    return (
        <div>
            <Header subtitle="Traslochi internazionali verso qualsiasi destinazione" />
            <main>
                <ServiceSingle
                    title="Traslochi internazionali"
                    icon={FaPlaneDeparture}
                    description={[
                        "Traslochi Brandimarte organizza traslochi internazionali verso qualsiasi destinazione nel mondo.",
                        "Ci occupiamo di tutte le pratiche doganali, della documentazione necessaria e della logistica del trasporto via terra, mare o aria.",
                        "Il nostro servizio internazionale include imballaggio professionale con materiali specifici per lunghe percorrenze, assicurazione completa e tracciamento della spedizione.",
                        "Affidati alla nostra esperienza per un trasloco internazionale senza pensieri.",
                    ]}
                />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default TraslochiInternazionaliPage;
