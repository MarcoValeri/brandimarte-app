import type { Metadata } from "next";
import {
    Great_Vibes,
    Noto_Serif_TC,
    Bangers,
    Goblin_One,
    Open_Sans,
} from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
    weight: "400",
    variable: "--font-great-vibes-nf",
    subsets: ["latin"],
});

const notoSerifTC = Noto_Serif_TC({
    weight: "400",
    variable: "--font-noto-serif-tc-nf",
    subsets: ["latin"],
});

const bangers = Bangers({
    weight: "400",
    variable: "--font-bangers-nf",
    subsets: ["latin"],
});

const goblinOne = Goblin_One({
    weight: "400",
    variable: "--font-goblin-one-nf",
    subsets: ["latin"],
});

const openSans = Open_Sans({
    variable: "--font-open-sans-nf",
    subsets: ["latin"],
});

const currentEnv = process.env.NEXT_PUBLIC_ENV;
const isDevEnv = currentEnv === "dev";

export const metadata: Metadata = {
    title: "Traslochi Brandimarte",
    description: "Brandimarte è una ditta di traslochi su Roma, nazionali e internazionali, dai piccoli ai grandi traslochi con l'opzione per il preventivo gratuito online",
    icons: {
        icon: "/images/traslochi-brandimarte-logo.png"
    },
    robots: {
        index: !isDevEnv,
        follow: !isDevEnv,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="it"
            className={`${greatVibes.variable} ${notoSerifTC.variable} ${bangers.variable} ${goblinOne.variable} ${openSans.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
