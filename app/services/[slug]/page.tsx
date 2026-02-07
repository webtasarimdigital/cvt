"use client";

import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useParams, notFound } from "next/navigation";

export default function ServiceDetail() {
    const { t } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    // Validate slug
    const validSlugs = ["road", "sea", "air", "rail"];
    if (!validSlugs.includes(slug)) {
        notFound();
    }

    // Get current service details
    // @ts-ignore - dynamic access
    const serviceData = t.services.details[slug];

    // Map slugs to images (using the ones we generated)
    const heroImages: Record<string, string> = {
        road: "/service-road.png",
        sea: "/service-sea.png",
        air: "/service-air.png",
        rail: "/service-rail.png",
    };

    const heroImage = heroImages[slug];

    // Navigation items for "Other Services"
    const otherServices = validSlugs
        .filter(s => s !== slug)
        .map(s => {
            // @ts-ignore
            const sData = t.services.details[s];
            return {
                id: s,
                title: sData.title,
                image: heroImages[s],
                link: `/services/${s}`
            };
        });

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <Image
                    src={heroImage}
                    alt={serviceData.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="container mx-auto">
                        <span className="bg-cvt-cyan text-white px-4 py-1 rounded text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                            {t.services.title}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 max-w-3xl leading-tight">
                            {serviceData.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-cvt-cyan pl-6">
                            {t.services.subtitle}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {serviceData.description}
                        </p>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {serviceData.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <FaCheckCircle className="text-cvt-cyan flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-[#1b2e38] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-cvt-cyan/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2">{t.hero.getQuote}</h3>
                                <p className="text-gray-400">Ready to move your cargo? Get a fast quote today.</p>
                            </div>
                            <Link
                                href="/contact"
                                className="relative z-10 bg-cvt-cyan text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cvt-cyan transition shadow-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar / Quick Nav */}
                    <div className="hidden lg:block">
                        <div className="sticky top-32 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b">{t.services.otherServicesTitle}</h3>
                            <div className="flex flex-col gap-4">
                                {otherServices.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={service.link}
                                        className="group flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-100"
                                    >
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 group-hover:text-cvt-cyan transition">{service.title}</h4>
                                            <span className="text-xs text-gray-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                View Detail <FaArrowRight size={10} />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Other Services (Mobile/Bottom) */}
            <div className="bg-gray-50 py-16 lg:hidden">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl font-bold text-center mb-8">{t.services.otherServicesTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherServices.map((service) => (
                            <Link
                                key={service.id}
                                href={service.link}
                                className="group block relative h-64 rounded-xl overflow-hidden shadow-md"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h4 className="text-white font-bold text-xl">{service.title}</h4>
                                    <div className="h-1 w-12 bg-cvt-cyan mt-2 group-hover:w-full transition-all duration-300"></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
