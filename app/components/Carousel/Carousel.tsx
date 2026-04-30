"use client";

import { useState, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import colosseoImg from "@/app/assets/images/colosseo-a-roma.jpg";
import carouselOne from "@/app/assets/images/carousel-one.jpg";
import carouselTwo from "@/app/assets/images/carousel-two.jpg";
import carouselThree from "@/app/assets/images/carousel-three.jpg";
import carouselFour from "@/app/assets/images/carousel-four.jpg";
import carouselFive from "@/app/assets/images/carousel-five.jpg";
import carouselSix from "@/app/assets/images/carousel-six.jpg";
import carouselSeven from "@/app/assets/images/carousel-seven.jpg";
import carouselEight from "@/app/assets/images/carousel-eight.jpg";
import carouselNine from "@/app/assets/images/carousel-nine.jpg";
import carouselTen from "@/app/assets/images/carousel-ten.jpg";
import carouselEleven from "@/app/assets/images/carousel-eleven.jpg";

interface Slide {
    src: StaticImageData;
    alt: string;
}

const slides: Slide[] = [
    { src: colosseoImg, alt: "Colosseo a Roma" },
    { src: carouselOne, alt: "Stanza durante il trasloco"},
    { src: carouselTwo, alt: "Stanza prima del trasloco"},
    { src: carouselThree, alt: "Persona che fa il trasloco"},
    { src: carouselFour, alt: "Cane dentro una scatola da trasloco"},
    { src: carouselFive, alt: "Scatole da trasloco"},
    { src: carouselSix, alt: "Coppia con in mano le scatole da trasloco"},
    { src: carouselSeven, alt: "Operai che effettuano un trasloco"},
    { src: carouselEight, alt: "Coppia durante il trasloco"},
    { src: carouselNine, alt: "Coppia che guarda nella scatola di un trasloco"},
    { src: carouselTen, alt: "Coppia che trasloca"},
    { src: carouselEleven, alt: "Stanza dopo il trasloco"},
    // Add more images here:
    // { src: importedImg, alt: "Description" },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const total = slides.length;

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % total);
    }, [total]);

    const prev = () => {
        setCurrent((prev) => (prev - 1 + total) % total);
    };

    useEffect(() => {
        if (total <= 1) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next, total]);

    return (
        <section className="relative w-full aspect-video overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.alt}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        index === current ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Navigation arrows — only show with multiple slides */}
            {total > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 backdrop-blur-sm rounded-full p-3 transition-colors duration-300 cursor-pointer"
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft className="text-xl text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 backdrop-blur-sm rounded-full p-3 transition-colors duration-300 cursor-pointer"
                        aria-label="Next slide"
                    >
                        <FaChevronRight className="text-xl text-white" />
                    </button>
                </>
            )}

            {/* Dots — only show with multiple slides */}
            {total > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                index === current
                                    ? "bg-white"
                                    : "bg-white/40 hover:bg-white/70"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Carousel;
