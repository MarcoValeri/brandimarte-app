import type { Metadata } from "next";
import QuoteFree from "@/app/components/QuoteFree/QuoteFree";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export const metadata: Metadata = {
    title: "Preventivo Gratuito Online | Traslochi Brandimarte Roma",
    description: "Calcola il tuo preventivo gratuito online per il trasloco. Compila il modulo e invia la richiesta su WhatsApp. Risposta rapida e senza impegno.",
};

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