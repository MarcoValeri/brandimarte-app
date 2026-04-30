"use client";

import { useState } from "react";
import { FaWhatsapp, FaTruckMoving, FaPlaneDeparture, FaDollyFlatbed, FaBoxOpen, FaPeopleCarry, FaBuilding, FaWarehouse, FaRecycle, FaEllipsisH } from "react-icons/fa";
import { IconType } from "react-icons";

interface ServiceOption {
    label: string;
    icon: IconType;
}

const serviceOptions: ServiceOption[] = [
    { label: "Traslochi nazionali", icon: FaTruckMoving },
    { label: "Traslochi internazionali", icon: FaPlaneDeparture },
    { label: "Traslochi professionali", icon: FaDollyFlatbed },
    { label: "Traslochi di appartamenti", icon: FaBoxOpen },
    { label: "Trasporto di pianoforti", icon: FaPeopleCarry },
    { label: "Traslochi di uffici", icon: FaBuilding },
    { label: "Depositi sorvegliati", icon: FaWarehouse },
    { label: "Smaltimento e discarica", icon: FaRecycle },
    { label: "Altro", icon: FaEllipsisH },
];

const initialForm = {
    nome: "",
    telefono: "",
    email: "",
    daDoce: "",
    dove: "",
    data: "",
    servizio: "",
    descrizione: "",
};

const QuoteFree = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const required = ["nome", "telefono", "daDoce", "dove", "servizio"];
        const newErrors: Record<string, boolean> = {};
        required.forEach((field) => {
            if (!form[field as keyof typeof form].trim()) {
                newErrors[field] = true;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const message = [
            `*Richiesta Preventivo Gratuito*`,
            ``,
            `*Nome:* ${form.nome}`,
            `*Telefono:* ${form.telefono}`,
            form.email ? `*Email:* ${form.email}` : null,
            `*Da:* ${form.daDoce}`,
            `*A:* ${form.dove}`,
            form.data ? `*Data prevista:* ${form.data}` : null,
            `*Servizio:* ${form.servizio}`,
            form.descrizione ? `\n*Dettagli:*\n${form.descrizione}` : null,
        ]
            .filter(Boolean)
            .join("\n");

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/393381106682?text=${encoded}`, "_blank");
    };

    const inputClass = (field: string) =>
        `w-full px-4 py-3 rounded-lg border ${
            errors[field] ? "border-red-500" : "border-gray-300"
        } text-blue-font bg-white focus:outline-none focus:ring-2 focus:ring-blue-link transition-colors duration-200`;

    return (
        <section className="py-12 px-4 md:py-20 md:px-8 font-[family-name:var(--font-noto-serif-tc-nf)]">
            <div className="max-w-3xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-2xl md:text-5xl uppercase font-bold text-blue-font tracking-[2px] mb-4 md:mb-6">
                    Preventivo gratuito
                </h2>
                <div className="w-16 h-1 bg-blue-link mx-auto rounded-full mb-6" />
                <p className="text-center text-blue-font/70 mb-10 md:mb-14 text-lg">
                    Compila il modulo e invia la tua richiesta direttamente su WhatsApp.
                    Ti risponderemo il prima possibile.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-10">
                    <div className="flex flex-wrap gap-5">
                        {/* Nome */}
                        <div className="w-full md:w-[calc(50%-0.625rem)]">
                            <label className="block text-blue-font font-medium mb-1">
                                Nome e Cognome *
                            </label>
                            <input
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                placeholder="Mario Rossi"
                                className={inputClass("nome")}
                            />
                        </div>

                        {/* Telefono */}
                        <div className="w-full md:w-[calc(50%-0.625rem)]">
                            <label className="block text-blue-font font-medium mb-1">
                                Telefono *
                            </label>
                            <input
                                type="tel"
                                name="telefono"
                                value={form.telefono}
                                onChange={handleChange}
                                placeholder="+39 333 1234567"
                                className={inputClass("telefono")}
                            />
                        </div>

                        {/* Email */}
                        <div className="w-full md:w-[calc(50%-0.625rem)]">
                            <label className="block text-blue-font font-medium mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="mario@esempio.it"
                                className={inputClass("email")}
                            />
                        </div>

                        {/* Data */}
                        <div className="w-full md:w-[calc(50%-0.625rem)]">
                            <label className="block text-blue-font font-medium mb-1">
                                Data prevista
                            </label>
                            <input
                                type="date"
                                name="data"
                                value={form.data}
                                onChange={handleChange}
                                className={inputClass("data")}
                            />
                        </div>

                        {/* Da dove */}
                        <div className="w-full md:w-[calc(50%-0.625rem)]">
                            <label className="block text-blue-font font-medium mb-1">
                                Da dove *
                            </label>
                            <input
                                type="text"
                                name="daDoce"
                                value={form.daDoce}
                                onChange={handleChange}
                                placeholder="Via Roma 1, Roma"
                                className={inputClass("daDoce")}
                            />
                        </div>

                        {/* Dove */}
                        <div className="w-full md:w-[calc(50%-0.625rem)]">
                            <label className="block text-blue-font font-medium mb-1">
                                Dove *
                            </label>
                            <input
                                type="text"
                                name="dove"
                                value={form.dove}
                                onChange={handleChange}
                                placeholder="Via Milano 10, Milano"
                                className={inputClass("dove")}
                            />
                        </div>

                        {/* Servizio */}
                        <div className="w-full">
                            <label className="block text-blue-font font-medium mb-3">
                                Tipo di servizio *
                            </label>
                            <div className={`flex flex-wrap gap-3 p-1 rounded-lg ${errors.servizio ? "ring-2 ring-red-500" : ""}`}>
                                {serviceOptions.map((opt) => (
                                    <button
                                        key={opt.label}
                                        type="button"
                                        onClick={() => {
                                            setForm({ ...form, servizio: opt.label });
                                            setErrors({ ...errors, servizio: false });
                                        }}
                                        className={`flex flex-col items-center gap-2 w-[calc(33.333%-0.5rem)] md:w-[calc(33.333%-0.5rem)] px-3 py-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                                            form.servizio === opt.label
                                                ? "border-blue-link bg-blue-link/10 shadow-sm"
                                                : "border-gray-200 bg-grey-bg hover:border-blue-link/40 hover:shadow-sm"
                                        }`}
                                    >
                                        <opt.icon
                                            className={`text-2xl transition-colors duration-200 ${
                                                form.servizio === opt.label
                                                    ? "text-blue-link"
                                                    : "text-blue-font/40"
                                            }`}
                                        />
                                        <span
                                            className={`text-xs md:text-sm text-center leading-tight transition-colors duration-200 ${
                                                form.servizio === opt.label
                                                    ? "text-blue-link font-bold"
                                                    : "text-blue-font/70"
                                            }`}
                                        >
                                            {opt.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Descrizione */}
                        <div className="w-full">
                            <label className="block text-blue-font font-medium mb-1">
                                Descrizione aggiuntiva
                            </label>
                            <textarea
                                name="descrizione"
                                value={form.descrizione}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Descrivi le tue esigenze..."
                                className={inputClass("descrizione")}
                            />
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="mt-8 w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1da851] text-white text-lg font-bold rounded-lg transition-colors duration-300 cursor-pointer"
                    >
                        <FaWhatsapp className="text-2xl" />
                        Invia su WhatsApp
                    </button>

                    <p className="text-center text-blue-font/50 text-sm mt-4">
                        * Campi obbligatori
                    </p>
                </form>
            </div>
        </section>
    );
};

export default QuoteFree;
