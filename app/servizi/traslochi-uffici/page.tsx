import { FaBuilding } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import CarouselServices from "@/app/components/CarouselServices/CarouselServices";
import Footer from "@/app/components/Footer/Footer";

const TraslochiUfficiPage = () => {
    return (
        <div>
            <Header subtitle="Traslochi di uffici rapidi e organizzati" />
            <main>
                <ServiceSingle
                    title="Traslochi di uffici"
                    icon={FaBuilding}
                    description={[
                        "Traslochi Brandimarte offre un servizio dedicato al trasloco di uffici e attività commerciali, minimizzando i tempi di fermo della tua azienda.",
                        "Ci occupiamo dello smontaggio e rimontaggio di scrivanie, armadi e arredi, del trasporto sicuro di apparecchiature informatiche e documenti riservati.",
                        "Pianifichiamo il trasloco nei weekend o in orari serali per ridurre al minimo l'impatto sulla tua attività lavorativa.",
                        "Il nostro team lavora con rapidità e precisione per permetterti di riprendere l'operatività il prima possibile.",
                    ]}
                />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default TraslochiUfficiPage;
