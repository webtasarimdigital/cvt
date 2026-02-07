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
        description: "Fast and reliable air freight solutions for time-sensitive cargo. We ensure your goods reach their global destinations safely and on schedule.",
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
        description: "Reliable road transport services across Europe and Asia. Our modern fleet ensures efficient and secure delivery of your cargo every time.",
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
        description: "Eco-friendly and cost-effective rail transport solutions. Connecting major industrial hubs with seamless railway logistics for your needs.",
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
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

    // Drag / Swipe Logic
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) handleCategoryChange("next");
        if (isRightSwipe) handleCategoryChange("prev");
    };

    const onMouseDown = (e: React.MouseEvent) => {
        setTouchEnd(null);
        setTouchStart(e.clientX);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (touchStart) setTouchEnd(e.clientX);
    };

    const onMouseUp = () => {
        if (!touchStart || !touchEnd) {
            setTouchStart(null);
            return;
        }
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) handleCategoryChange("next");
        if (isRightSwipe) handleCategoryChange("prev");
        setTouchStart(null);
        setTouchEnd(null);
    };

    const currentCategory = sliderData[activeCategory];
    const currentImageIndex = subIndices[activeCategory];

    return (
        <div className="relative h-screen w-full bg-slate-50 overflow-hidden flex flex-col md:flex-row select-none">

            {/* Left Content Area - Widened to 55% to push image right */}
            <div className="relative z-20 w-full md:w-[55%] h-full flex items-center justify-center pl-8 md:pl-20 pr-4 bg-white">
                <div className="flex flex-col gap-6 max-w-xl z-10 animate-fade-in-up pt-20">
                    <div className="flex items-center gap-3 text-cvt-cyan font-bold tracking-widest uppercase text-sm">
                        <span className="p-2 bg-cvt-cyan/10 rounded-lg text-lg">
                            {currentCategory.icon}
                        </span>
                        LOGISTICS SERVICES
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-cvt-blue leading-tight min-h-[1.2em]">
                        {currentCategory.title}
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed min-h-[4.5em]">
                        {currentCategory.description}
                    </p>

                    <div className="flex gap-4 mt-4">
                        <button className="bg-cvt-cyan text-white px-8 py-4 rounded-full font-bold hover:bg-cvt-blue hover:text-white transition flex items-center gap-2 uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Detailed Info <FaChevronRight size={12} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Image Area - Narrowed/Pushed Right */}
            {/* Reduced width to 55% and adjusted clip path to be less intrusive */}
            <div
                className="relative w-full md:w-[55%] h-full bg-gray-900 overflow-hidden -ml-[10%] md:-ml-0 pointer-events-none"
                style={{ clipPath: "ellipse(80% 100% at 80% 50%)" }}
            >
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
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                    </div>
                ))}

                {/* Sub-Image Indicators (Dots on Image) - Pointer events allowed for clicking */}
                <div className="absolute bottom-12 left-1/4 transform -translate-x-1/2 flex gap-3 z-30 pointer-events-auto">
                    {currentCategory.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent drag
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

            {/* Global Navigation Arrows */}
            {/* Added stopPropagation to prevent triggering drag when clicking arrows */}
            <div className="absolute top-1/2 w-full flex justify-between px-4 md:px-12 z-50 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); handleCategoryChange("prev"); }}
                    className="w-14 h-14 bg-white text-cvt-blue rounded-full shadow-2xl flex items-center justify-center hover:bg-cvt-cyan hover:text-white transition group border border-gray-100 pointer-events-auto transform hover:scale-110 active:scale-95"
                >
                    <FaChevronLeft className="group-hover:-translate-x-1 transition" size={20} />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); handleCategoryChange("next"); }}
                    className="w-14 h-14 bg-white text-cvt-blue rounded-full shadow-2xl flex items-center justify-center hover:bg-cvt-cyan hover:text-white transition group border border-gray-100 pointer-events-auto transform hover:scale-110 active:scale-95"
                >
                    <FaChevronRight className="group-hover:translate-x-1 transition" size={20} />
                </button>
            </div>

            {/* Modern Badges (Right Side) - Adjusted Position */}
            <div className="absolute top-32 right-0 z-40 hidden md:flex flex-col gap-6 items-end pointer-events-none">
                {/* Years Experience */}
                <div className="bg-cvt-cyan text-white py-4 px-8 rounded-l-full shadow-2xl transform translate-x-4 hover:translate-x-0 transition duration-300 flex items-center gap-4 cursor-default w-auto pointer-events-auto">
                    <div className="text-4xl font-black">25</div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">YEARS</span>
                        <span className="text-xs uppercase tracking-wider opacity-90">Experience</span>
                    </div>
                </div>

                {/* Get Quote */}
                <div className="bg-[#1b2e38] text-white py-4 px-8 rounded-l-full shadow-2xl transform translate-x-4 hover:translate-x-0 transition duration-300 flex items-center gap-4 cursor-pointer group w-auto border-l-4 border-orange-500 pointer-events-auto">
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">GET QUOTE</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">Fast Response</span>
                    </div>
                    <div className="bg-orange-500 p-2 rounded-full group-hover:rotate-45 transition duration-500">
                        <FaArrowRight size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
}
