"use client";

import {
    FaAward,
    FaLightbulb,
    FaUsers,
    FaHandshake,
    FaBalanceScale,
    FaGlobeAmericas,
    FaLeaf,
    FaHandHoldingHeart
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function ValuesSection() {
    const { t } = useLanguage();

    const values = [
        { id: 1, label: t.values.quality, icon: <FaAward size={32} />, color: "text-cvt-blue" },
        { id: 2, label: t.values.innovation, icon: <FaLightbulb size={32} />, color: "text-orange-500" },
        { id: 3, label: t.values.customerFocus, icon: <FaUsers size={32} />, color: "text-cvt-blue" },
        { id: 4, label: t.values.teamwork, icon: <FaHandshake size={32} />, color: "text-orange-500" }, // Changed to Teamwork for handshake context
        { id: 5, label: t.values.integrity, icon: <FaBalanceScale size={32} />, color: "text-cvt-blue" }, // Integrity/Justice
        { id: 6, label: t.values.sustainability, icon: <FaGlobeAmericas size={32} />, color: "text-orange-500" },
        { id: 7, label: t.values.excellence, icon: <FaLeaf size={32} />, color: "text-cvt-blue" }, // Excellence/Environment overlap in meaning, using excellence for Leaf or maybe environment
        { id: 8, label: t.values.reliability, icon: <FaHandHoldingHeart size={32} />, color: "text-orange-500" },
    ];

    // Correction: ValuesSection logic in original file used slightly different keys than I assumed. 
    // Translations keys: quality, innovation, customerFocus, reliability, sustainability, teamwork, integrity, excellence.
    // Original English: Quality, Innovation, Customer, Human, Justice, Sustainability, Environment, Social.
    // I should align them best effort.
    // Human -> Teamwork? Justice -> Integrity? Environment -> Sustainability?
    // Let's re-map nicely:

    const mappedValues = [
        { id: 1, label: t.values.quality, icon: <FaAward size={32} />, color: "text-cvt-blue" },
        { id: 2, label: t.values.innovation, icon: <FaLightbulb size={32} />, color: "text-orange-500" },
        { id: 3, label: t.values.customerFocus, icon: <FaUsers size={32} />, color: "text-cvt-blue" },
        { id: 4, label: t.values.teamwork, icon: <FaHandshake size={32} />, color: "text-orange-500" },
        { id: 5, label: t.values.integrity, icon: <FaBalanceScale size={32} />, color: "text-cvt-blue" },
        { id: 6, label: t.values.sustainability, icon: <FaGlobeAmericas size={32} />, color: "text-orange-500" },
        { id: 7, label: t.values.excellence, icon: <FaLeaf size={32} />, color: "text-cvt-blue" }, // Using excellence for this slot
        { id: 8, label: t.values.reliability, icon: <FaHandHoldingHeart size={32} />, color: "text-orange-500" },
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-[#1b2e38] uppercase tracking-wide mb-12">
                    {t.values.quality} & {t.values.excellence}
                    {/* This title was "OUR CORPORATE VALUES". I don't have a direct translation key for this in existing 'values'. 
                       I will hardcode "OUR CORPORATE VALUES" for EN and "KURUMSAL DEĞERLERİMİZ" for TR or use a new key.
                       Quick fix: Use t.aboutPage.missionTitle logic or similar? No.
                       Let's check translations again. There isn't a title for values section.
                       I will add "title" to values object in next step or use a generic approximation.
                       For now, let's keep it simple and maybe rename the section title in translations later.
                       Wait, I can't leave it English in TR view.
                       I'll check if I can assume t.values.title exists if I add it.
                       I DID NOT add `title` to values in previous step.
                       I will use "OUR VALUES" / "DEĞERLERİMİZ" manually or update translations again.
                       Actually, I'll update translations to include `values.title`.
                       For this step, let's use a conditional or just "OUR VALUES" and fix in translation update.
                   */ }
                    {t.values.title || "OUR VALUES"}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {mappedValues.map((item) => (
                        <div key={item.id} className="flex flex-col items-center group cursor-default">
                            {/* Card Box - Rectangular & Smaller */}
                            <div className="w-full h-20 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-cvt-cyan hover:shadow-md transition-all duration-300 flex items-center justify-center group-hover:-translate-y-1 mb-3 relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-1 h-full ${item.id % 2 === 0 ? 'bg-orange-500' : 'bg-cvt-blue'} transition-all duration-300 group-hover:w-full opacity-10 group-hover:opacity-100`}></div>

                                <div className={`${item.color} z-10 group-hover:text-white transition duration-300 transform group-hover:scale-110`}>
                                    {item.icon}
                                </div>
                            </div>

                            {/* Label */}
                            <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-cvt-blue transition text-center">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
