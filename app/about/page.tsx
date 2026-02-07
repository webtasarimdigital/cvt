"use client";

import { useLanguage } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative py-24 bg-[#1b2e38] text-white">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/ocean_transport_ship.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
                        {t.aboutPage.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.aboutPage.subtitle}
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-[#1b2e38] mb-6">
                                {t.aboutPage.introTitle}
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {t.aboutPage.introText}
                            </p>
                            <div className="flex gap-4">
                                <div className="h-2 w-20 bg-cvt-cyan rounded-full"></div>
                                <div className="h-2 w-10 bg-cvt-blue rounded-full"></div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/road_transport_fleet.png"
                                alt="CVT Logistics Fleet"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold text-cvt-cyan mb-4">{t.aboutPage.missionTitle}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t.aboutPage.missionText}
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold text-cvt-blue mb-4">{t.aboutPage.visionTitle}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t.aboutPage.visionText}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Placeholder for functionality) */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#1b2e38] mb-8">{t.aboutPage.teamTitle}</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        {t.aboutPage.teamText}
                    </p>
                    {/* Could add team member cards here if photos provided later */}
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
