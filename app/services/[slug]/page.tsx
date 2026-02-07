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

    const serviceSecondaryImages: Record<string, string[]> = {
        road: ["/road_transport_fleet.png", "/road_transport_loading.png"],
        sea: ["/ocean_transport_containers.png", "/ocean_transport_port.png"],
        air: ["/air_transport_loading.png", "/air_transport_fleet.png"],
        rail: ["/rail_transport_train.png", "/rail_transport_motion.png"],
    };

    const heroImage = heroImages[slug];
    const secondaryImages = serviceSecondaryImages[slug] || [];

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

            {/* Hero Section - Redesigned */}
            <div className="relative h-[80vh] w-full overflow-hidden flex items-end justify-start">
                <Image
                    src={heroImage}
                    alt={serviceData.title}
                    fill
                    className="object-cover transform scale-105"
                    priority
                />

                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b2e38]/90 via-[#1b2e38]/20 to-transparent"></div>

                {/* Stylish Content Box - Glassmorphism */}
                <div className="relative z-10 container mx-auto px-6 pb-20 md:pb-32">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-cvt-cyan"></span>
                            {t.services.title}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
                            {serviceData.title.split(' ').map((word: string, i: number) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h1>

                        <div className="h-2 w-32 bg-cvt-cyan rounded-full animate-width-expand delay-300"></div>
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

                        {/* Rendering Content with Embedded Images */}
                        {serviceData.content ? (
                            <div className="space-y-8">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {serviceData.content[0]}
                                </p>

                                {/* Chic Image Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {secondaryImages.map((img, idx) => (
                                        <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500">
                                            <Image
                                                src={img}
                                                alt={`${slug} detail ${idx}`}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {serviceData.content[1]}
                                </p>
                            </div>
                        ) : (
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {serviceData.description}
                            </p>
                        )}

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.services.keyFeatures}</h3>
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
                                <p className="text-gray-400">{t.services.ctaText}</p>
                            </div>
                            <Link
                                href="/contact"
                                className="relative z-10 bg-cvt-cyan text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cvt-cyan transition shadow-lg"
                            >
                                {t.services.ctaButton}
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
                                                {t.services.viewDetail} <FaArrowRight size={10} />
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
