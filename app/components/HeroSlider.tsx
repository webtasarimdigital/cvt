"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

// Data Structure
const sliderData = [
    {
        id: "air",
        title: "Air Transport",
        description: "Cvtlog Logistics is a full service freight forwarder offering import and export services from/to Turkey. With an experience of over 25 years we will offer you innovative, competitive and cost effective logistics solutions.",
        images: [
            "/air_transport_flight.png", // Placeholder - need to map actual filenames
            "/air_transport_loading.png",
            "/air_transport_fleet.png",
        ],
    },
    {
        id: "cargo",
        title: "Cargo Transport",
        description: "Comprehensive sea freight solutions for global trade. Whether FCL or LCL, we ensure your goods reach their destination safely and on time.",
        images: [
            "/ocean_transport_ship.png",
            "/ocean_transport_port.png",
            "/ocean_transport_containers.png",
        ],
    },
    {
        id: "trucks",
        title: "Trucks Transport",
        description: "Reliable road transport services across Europe and Asia. Our modern fleet ensures efficient and secure delivery of your cargo.",
        images: [
            "/road_transport_highway.png",
            "/road_transport_fleet.png",
            "/road_transport_loading.png",
        ],
    },
    {
        id: "train",
        title: "Train Transport",
        description: "Eco-friendly and cost-effective rail transport solutions. Connecting major industrial hubs with seamless railway logistics.",
        images: [
            "/rail_transport_train.png",
            "/rail_transport_yard.png",
            "/rail_transport_motion.png",
        ],
    },
];

export default function HeroSlider() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [subIndices, setSubIndices] = useState([0, 0, 0, 0]);

    // Auto-rotate sub-images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setSubIndices((prev) => {
                const newIndices = [...prev];
                const currentCategoryTitle = sliderData[activeCategory].images;
                newIndices[activeCategory] = (newIndices[activeCategory] + 1) % currentCategoryTitle.length;
                return newIndices;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [activeCategory]);

    const handleCategoryChange = (direction: "prev" | "next") => {
        if (direction === "prev") {
            setActiveCategory((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
        } else {
            setActiveCategory((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
        }
    };

    const currentCategory = sliderData[activeCategory];
    const currentImageIndex = subIndices[activeCategory];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-white text-gray-800">

            {/* Right Side Image Area */}
            <div className="absolute top-0 right-0 w-full h-full md:w-[65%] z-0">
                {currentCategory.images.map((img, idx) => (
                    <div
                        key={`${currentCategory.id}-${idx}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Fallback for missing images during dev */}
                        <div className={`w-full h-full relative bg-gray-200`}>
                            <Image
                                src={img} // Note: These images need to be in public folder
                                alt={currentCategory.title}
                                fill
                                className="object-cover"
                                priority
                                onError={(e) => {
                                    // Fallback if image not found
                                    e.currentTarget.style.display = "none";
                                }}
                            />
                        </div>
                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
                    </div>
                ))}
            </div>

            {/* Curved Divider (SVG Overlay) */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-10 hidden md:block">
                <svg
                    viewBox="0 0 100 100"
                    className="absolute top-0 left-0 h-full w-auto max-w-[50%]"
                    preserveAspectRatio="none"
                    style={{ transform: "scaleX(1.5)" }}
                >
                    <path d="M0 0 V100 C60 100 80 0 0 0 Z" fill="white" />
                    {/* Attempting a generous curve: M0 0 (tl) V100 (bl) .. curve back to top */}
                    {/* Actually, let's try a standard curve shape */}
                </svg>
                {/* Better approach: A big white shape on the left */}
                <div className="absolute top-0 left-0 w-[45%] h-full bg-white transform skew-x-12 origin-top-left -translate-x-20 z-10 hidden lg:block"></div>
                <div className="absolute top-0 left-0 w-[40%] h-full bg-white z-10 hidden lg:block"></div>
                {/* The curve */}
                <div
                    className="absolute top-0 left-[40%] h-full w-[20vh] bg-white z-10 hidden lg:block"
                    style={{
                        borderRadius: "0 50% 50% 0 / 0 100% 100% 0",
                        transform: "scaleX(2)"
                    }}
                ></div>
            </div>


            {/* Content Area */}
            <div className="absolute inset-0 z-20 container mx-auto px-4 flex items-center">
                <div className="md:w-1/2 lg:w-2/5 flex flex-col gap-6 pt-20">
                    {/* Category Label */}
                    <h4 className="text-cvt-cyan font-bold tracking-widest uppercase text-sm border-b border-gray-200 pb-2 w-max text-shadow-sm md:text-shadow-none">
                        LOGISTICS SERVICES
                    </h4>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-cvt-blue leading-tight">
                        {currentCategory.title}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md bg-white/80 p-4 rounded-lg md:bg-transparent md:p-0">
                        {currentCategory.description}
                    </p>

                    {/* CTA */}
                    <div className="flex gap-4 mt-4">
                        <button className="bg-cvt-cyan text-cvt-dark px-8 py-3 rounded font-bold hover:bg-cvt-blue hover:text-white transition flex items-center gap-2">
                            DETAILED INFO <FaChevronRight size={12} />
                        </button>
                    </div>

                    {/* Slider Controls */}
                    <div className="mt-12 flex items-center gap-4">
                        <button
                            onClick={() => handleCategoryChange("prev")}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-cvt-cyan hover:border-cvt-cyan hover:text-white transition"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={() => handleCategoryChange("next")}
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-cvt-cyan hover:border-cvt-cyan hover:text-white transition"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Right Side Experience Circle */}
                <div className="absolute bottom-10 right-[25%] z-30 hidden md:flex flex-col items-center justify-center w-40 h-40 bg-cvt-cyan rounded-full text-white shadow-2xl animate-bounce-slow">
                    <span className="text-5xl font-bold">25</span>
                    <span className="text-xs uppercase font-semibold text-center leading-tight">Years<br />Experience</span>
                </div>

                {/* Right Side Offer Circle */}
                <div className="absolute bottom-10 right-10 z-30 flex flex-col items-center justify-center w-32 h-32 bg-orange-500 rounded-full text-white shadow-xl cursor-pointer hover:scale-110 transition">
                    <span className="text-4xl"><FaArrowRight className="-rotate-45" /></span>
                    <span className="text-xs font-bold text-center leading-tight mt-1">Get<br />Quote</span>
                </div>
            </div>

            {/* Sub-Image Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                {currentCategory.images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            const newIndices = [...subIndices];
                            newIndices[activeCategory] = idx;
                            setSubIndices(newIndices);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${idx === currentImageIndex
                                ? "bg-cvt-cyan w-8"
                                : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
}
