"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesSection() {
    const { t } = useLanguage();

    const services = [
        {
            id: "air",
            title: t.services.air,
            // @ts-ignore
            description: t.services.details.air.description,
            image: "/air_transport_flight.png",
            link: "/services/air"
        },
        {
            id: "sea",
            title: t.services.sea,
            // @ts-ignore
            description: t.services.details.sea.description,
            image: "/ocean_transport_ship.png",
            link: "/services/sea"
        },
        {
            id: "road",
            title: t.services.road,
            // @ts-ignore
            description: t.services.details.road.description,
            image: "/road_transport_highway.png",
            link: "/services/road"
        },
        {
            id: "rail",
            title: t.services.rail,
            // @ts-ignore
            description: t.services.details.rail.description,
            image: "/rail_transport_train.png",
            link: "/services/rail"
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1b2e38] mb-4">
                        {t.services.title}
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        {t.services.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link
                            href={service.link}
                            key={index}
                            className="group relative h-[450px] w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:shadow-2xl"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient - Default State (Light dark at bottom for title visibility) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-transparent" />

                            {/* Arrow Badge (Top Right) */}
                            <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:bg-cvt-cyan group-hover:scale-110">
                                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                            </div>

                            {/* Content Wrapper */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-24 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-cvt-cyan pl-4">
                                    {service.title}
                                </h3>

                                {/* Description (Hidden visibly until hover pushes everything up, opacity fades in) */}
                                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-4">
                                    {service.description}
                                </p>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
