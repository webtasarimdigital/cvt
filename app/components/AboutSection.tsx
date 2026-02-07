"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">

                    {/* Left Column: Image Collage */}
                    <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px]">
                        {/* Decorative Dots Pattern */}
                        <div className="absolute top-0 left-0 w-48 h-48 opacity-20"
                            style={{ backgroundImage: "radial-gradient(#1b2e38 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>

                        {/* Bottom Blue Square Decoration */}
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cvt-cyan/20 -z-10"></div>

                        {/* Image 1: Top Left (Vertical) - Warehouse/Interior */}
                        <div className="absolute top-10 left-10 w-[40%] h-[45%] shadow-2xl z-10 border-4 border-white">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/road_transport_loading.png"
                                    alt="Warehouse Logistics"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Image 2: Top Right (Square) - Containers */}
                        <div className="absolute top-24 right-10 w-[35%] h-[30%] shadow-xl z-10 border-4 border-white">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/ocean_transport_containers.png"
                                    alt="Container Logistics"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Image 3: Bottom Full Horizontal - Truck Fleet */}
                        <div className="absolute bottom-10 right-10 left-20 h-[40%] shadow-2xl z-20 border-4 border-white">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/road_transport_fleet.png"
                                    alt="Logistics Fleet"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1b2e38] leading-tight text-left whitespace-pre-line">
                            <span className="text-cvt-cyan">{t.aboutSection.title}</span>
                        </h2>

                        <div className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed text-justify lg:text-left">
                            <p>
                                {t.aboutSection.description1}
                            </p>

                            <p className="text-sm border-l-4 border-cvt-cyan pl-4 italic">
                                {t.aboutSection.description2}
                            </p>
                        </div>

                        <div className="flex justify-end lg:justify-start">
                            <Link href="/about" className="group flex items-center gap-2 text-[#1b2e38] font-bold text-lg hover:text-cvt-cyan transition">
                                {t.aboutSection.button} <span className="bg-[#1b2e38] group-hover:bg-cvt-cyan text-white p-2 rounded-full transition"><FaChevronRight size={12} /></span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Side Color Bar */}
            <div className="absolute top-1/2 right-0 w-1 h-32 bg-cvt-cyan transform -translate-y-1/2 hidden lg:block"></div>
        </section>
    );
}
