"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTruck, FaShip, FaPlane, FaTrain, FaArrowRight } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesPage() {
    const { t } = useLanguage();

    const services = [
        {
            id: "road",
            title: t.services.road, // "Road Transport"
            icon: <FaTruck className="text-4xl text-cvt-cyan" />,
            image: "/road_transport_highway.png",
            description: t.services.details.road.description,
            link: "/services/road"
        },
        {
            id: "sea",
            title: t.services.sea, // "Sea Transport"
            icon: <FaShip className="text-4xl text-cvt-cyan" />,
            image: "/ocean_transport_ship.png",
            description: t.services.details.sea.description,
            link: "/services/sea"
        },
        {
            id: "air",
            title: t.services.air, // "Air Transport"
            icon: <FaPlane className="text-4xl text-cvt-cyan" />,
            image: "/air_transport_flight.png",
            description: t.services.details.air.description,
            link: "/services/air"
        },
        {
            id: "rail",
            title: t.services.rail, // "Rail Transport"
            icon: <FaTrain className="text-4xl text-cvt-cyan" />,
            image: "/rail_transport_train.png",
            description: t.services.details.rail.description,
            link: "/services/rail"
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <div className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-[#1b2e38] text-white">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/road_transport_highway.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
                        {t.servicesPage.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.servicesPage.subtitle}
                    </p>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#1b2e38] mb-6 max-w-3xl mx-auto">
                        {t.servicesPage.introTitle}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                        {t.servicesPage.introText}
                    </p>
                    <div className="h-1 w-24 bg-cvt-cyan mx-auto mt-8 rounded-full"></div>
                </div>
            </section>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <Link
                            href={service.link}
                            key={idx}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 block border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2be8]/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-4 left-6 text-white z-10">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg inline-block text-white mb-2">
                                        {service.icon}
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-cvt-cyan transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3 mb-6">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-cvt-cyan font-bold uppercase text-sm tracking-wider group-hover:underline decoration-2 underline-offset-4">
                                    {t.services.readMore} <FaArrowRight />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
