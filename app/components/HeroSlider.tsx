"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaShip, FaPlane, FaTruck, FaTrain } from "react-icons/fa";

// Data Structure
const sliderData = [
    {
        id: "air",
        title: "Air Transport",
        icon: <FaPlane />,
        description: "Cvtlog Logistics is a full service freight forwarder offering import and export services from/to Turkey. With an experience of over 25 years we will offer you innovative, competitive and cost effective logistics solutions.",
        images: [
            "/air_transport_flight.png",
            "/air_transport_loading.png",
            "/air_transport_fleet.png",
        ],
    },
    {
        id: "cargo",
        title: "Sea Transport",
        icon: <FaShip />,
        description: "Comprehensive sea freight solutions for global trade. Whether FCL or LCL, we ensure your goods reach their destination safely and on time.",
        images: [
            "/ocean_transport_ship.png",
            "/ocean_transport_port.png",
            "/ocean_transport_containers.png",
        ],
    },
    {
        id: "trucks",
        title: "Road Transport",
        icon: <FaTruck />,
        description: "Reliable road transport services across Europe and Asia. Our modern fleet ensures efficient and secure delivery of your cargo.",
        images: [
            "/road_transport_highway.png",
            "/road_transport_fleet.png",
            "/road_transport_loading.png",
        ],
    },
    {
        id: "train",
        title: "Rail Transport",
        icon: <FaTrain />,
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

    // Auto-rotate sub-images 
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

    // Auto-rotate Categories
    useEffect(() => {
        const categoryInterval = setInterval(() => {
            setActiveCategory((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
        }, 8000);
        return () => clearInterval(categoryInterval);
    }, []);

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
        <div className="relative h-screen w-full bg-slate-50 overflow-hidden flex flex-col md:flex-row">

            {/* Left Content Area */}
            <div className="relative z-20 w-full md:w-[45%] h-full flex items-center justify-center pl-8 md:pl-20 pr-4 bg-white">
                {/* Curve Overlap for Desktop */}
                <div className="absolute top-0 right-[-100px] h-full w-[200px] bg-white hidden md:block"
                    style={{ clipPath: "ellipse(60% 100% at 30% 50%)" }}></div>

                <div className="flex flex-col gap-6 max-w-lg z-10 animate-fade-in-up">
                    <div className="flex items-center gap-3 text-cvt-cyan font-bold tracking-widest uppercase text-sm">
                        <span className="p-2 bg-cvt-cyan/10 rounded-lg text-lg">
                            {currentCategory.icon}
                        </span>
                        LOGISTICS SERVICES
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-cvt-blue leading-tight">
                        {currentCategory.title}
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        {currentCategory.description}
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button className="bg-cvt-cyan text-cvt-dark px-8 py-4 rounded-sm font-bold hover:bg-cvt-blue hover:text-white transition flex items-center gap-2 uppercase tracking-wide">
                            Detailed Info <FaChevronRight size={12} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image Area */}
            <div className="relative w-full md:w-[65%] h-full bg-gray-900 overflow-hidden -ml-[10%] clip-path-slant md:clip-path-none">
                {currentCategory.images.map((img, idx) => (
                    <div
                        key={`${currentCategory.id}-${idx}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={currentCategory.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-black/40 md:via-transparent md:from-white/5" />
                    </div>
                ))}

                {/* Sub-Image Indicators (Dots on Image) */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
                    {currentCategory.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                const newIndices = [...subIndices];
                                newIndices[activeCategory] = idx;
                                setSubIndices(newIndices);
                            }}
                            className={`transition-all duration-300 rounded-full shadow-lg ${idx === currentImageIndex
                                    ? "bg-cvt-cyan w-10 h-3"
                                    : "bg-white/60 w-3 h-3 hover:bg-white"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Global Navigation Arrows (Edge to Edge) */}
            <button
                onClick={() => handleCategoryChange("prev")}
                className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-cvt-cyan hover:border-cvt-cyan transition shadow-lg group"
            >
                <FaChevronLeft className="group-hover:-translate-x-1 transition" size={20} />
            </button>

            <button
                onClick={() => handleCategoryChange("next")}
                className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-cvt-cyan hover:border-cvt-cyan transition shadow-lg group"
            >
                <FaChevronRight className="group-hover:translate-x-1 transition" size={20} />
            </button>


            {/* Modern Badges (Right Side) */}
            <div className="absolute top-1/3 right-0 z-40 hidden md:flex flex-col gap-4 items-end">
                {/* Years Experience */}
                <div className="bg-cvt-cyan text-cvt-dark py-4 px-6 rounded-l-lg shadow-xl transform translate-x-2 hover:translate-x-0 transition duration-300 flex items-center gap-4 cursor-default w-64">
                    <div className="text-4xl font-black">25</div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">YEARS</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">Of Experience</span>
                    </div>
                </div>

                {/* Get Quote */}
                <div className="bg-[#1b2e38] text-white py-4 px-6 rounded-l-lg shadow-xl transform translate-x-2 hover:translate-x-0 transition duration-300 flex items-center gap-4 cursor-pointer group w-64 border-l-4 border-orange-500">
                    <div className="bg-orange-500 p-2 rounded-full group-hover:rotate-45 transition duration-500">
                        <FaArrowRight size={16} />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">GET QUOTE</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">Fast Response</span>
                    </div>
                </div>
            </div>

            {/* Bottom Curve SVG to mimic Kinay if needed, or simple curve */}
            {/* We used a CSS clip-path simulation with the overlay div above for simplicity and cleanliness */}

        </div>
    );
}
