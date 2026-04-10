import Image from "next/image";
import NavContact from "../NavContact/NavContact";
import NavMenu from "../NavMenu/NavMenu";
import colosseoImg from "@/app/assets/images/colosseo-a-roma.jpg";

interface HeaderProps {
    subtitle?: string;
}

const Header = ({ subtitle = "Traslochi su Roma, nazionali ed internazionali" }: HeaderProps) => {
    return (
        <header className="relative">
            <NavContact />
            <NavMenu />
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src={colosseoImg}
                    alt="Colosseo a Roma"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center px-4">
                    <h1 className="font-[family-name:var(--font-great-vibes-nf)] text-5xl md:text-7xl text-white mb-4">
                        Traslochi Brandimarte
                    </h1>
                    <h2 className="text-xl md:text-2xl text-white/90 font-light">
                        {subtitle}
                    </h2>
                </div>
            </section>
        </header>
    );
};

export default Header;
