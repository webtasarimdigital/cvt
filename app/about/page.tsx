"use client";

import { useLanguage } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import { FaTruck, FaShip, FaPlane, FaTrain, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-32 pb-10 md:pt-40 md:pb-16 bg-[#1b2e38] text-white">
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

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-[#1b2e38] mb-12 text-center">{t.services.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Road */}
                        <Link href="/services/road" className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image src="/road_transport_highway.png" alt={t.services.road} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-cvt-cyan p-3 rounded-lg w-fit mb-3 text-white group-hover:-translate-y-2 transition-transform duration-300">
                                    <FaTruck size={24} />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">{t.services.road}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {t.services.viewDetail} <FaArrowRight className="inline ml-1" size={10} />
                                </p>
                            </div>
                        </Link>

                        {/* Sea */}
                        <Link href="/services/sea" className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image src="/ocean_transport_ship.png" alt={t.services.sea} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-cvt-cyan p-3 rounded-lg w-fit mb-3 text-white group-hover:-translate-y-2 transition-transform duration-300">
                                    <FaShip size={24} />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">{t.services.sea}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {t.services.viewDetail} <FaArrowRight className="inline ml-1" size={10} />
                                </p>
                            </div>
                        </Link>

                        {/* Air */}
                        <Link href="/services/air" className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image src="/air_transport_flight.png" alt={t.services.air} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-cvt-cyan p-3 rounded-lg w-fit mb-3 text-white group-hover:-translate-y-2 transition-transform duration-300">
                                    <FaPlane size={24} />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">{t.services.air}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {t.services.viewDetail} <FaArrowRight className="inline ml-1" size={10} />
                                </p>
                            </div>
                        </Link>

                        {/* Rail */}
                        <Link href="/services/rail" className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Image src="/rail_transport_train.png" alt={t.services.rail} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-cvt-cyan p-3 rounded-lg w-fit mb-3 text-white group-hover:-translate-y-2 transition-transform duration-300">
                                    <FaTrain size={24} />
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">{t.services.rail}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {t.services.viewDetail} <FaArrowRight className="inline ml-1" size={10} />
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
