import type { Metadata } from "next";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "@/app/components/Header/Header";
import ServiceSingle from "@/app/components/ServiceSingle/ServiceSingle";
import Carousel from "@/app/components/Carousel/Carousel";
import CarouselServices from "@/app/components/CarouselServices/CarouselServices";

export const metadata: Metadata = {
    title: "Trasporto Pianoforti | Traslochi Brandimarte Roma",
    description: "Trasporto specializzato di pianoforti a Roma e in tutta Italia. Operatori formati, attrezzature dedicate e massima sicurezza per il tuo strumento.",
};
import Footer from "@/app/components/Footer/Footer";

const TrasportoPianofortiPage = () => {
    return (
        <div>
            <Header subtitle="Trasporto specializzato di pianoforti" />
            <main>
                <ServiceSingle
                    title="Trasporto di pianoforti"
                    icon={FaPeopleCarry}
                    description={[
                        "Il trasporto di pianoforti richiede competenze specifiche e attrezzature dedicate. Traslochi Brandimarte offre un servizio specializzato per il trasporto sicuro del tuo strumento.",
                        "I nostri operatori sono formati per movimentare pianoforti verticali, a coda e a mezza coda, utilizzando carrelli speciali, cinghie professionali e protezioni imbottite.",
                        "Ogni trasporto viene pianificato in anticipo valutando accessi, scale, ascensori e qualsiasi ostacolo per garantire un'operazione sicura e senza danni.",
                        "Affidati a professionisti esperti per proteggere il tuo prezioso strumento.",
                    ]}
                />
                <CarouselServices />
                <Carousel />
            </main>
            <Footer />
        </div>
    );
};

export default TrasportoPianofortiPage;
