import { FaRecycle } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import Footer from "@/app/components/Footer/Footer";

const SmaltimentoPage = () => {
    return (
        <div>
            <Header subtitle="Smaltimento e discarica professionale" />
            <main>
                <ServiceSingle
                    title="Smaltimento e discarica"
                    icon={FaRecycle}
                    description={[
                        "Traslochi Brandimarte offre un servizio completo di smaltimento e ritiro di mobili, elettrodomestici e materiali di ogni tipo.",
                        "Ci occupiamo del ritiro a domicilio, del trasporto e dello smaltimento presso centri autorizzati, nel pieno rispetto delle normative ambientali.",
                        "Il servizio è ideale in occasione di traslochi, ristrutturazioni o semplicemente quando hai bisogno di liberare spazio.",
                        "Pensiamo a tutto noi: tu devi solo indicarci cosa ritirare.",
                    ]}
                />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default SmaltimentoPage;
