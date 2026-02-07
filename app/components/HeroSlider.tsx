"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaArrowRight, FaShip, FaPlane, FaTruck, FaTrain } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSlider() {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState(0);
    const [subIndices, setSubIndices] = useState([0, 0, 0, 0]);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    // Dynamic Data Structure based on translations
    const sliderData = [
        {
            id: "air",
            title: t.hero.categories.air.title,
            icon: <FaPlane />,
            description: t.hero.categories.air.description,
            images: [
                "/air_transport_flight.png",
                "/air_transport_loading.png",
                "/air_transport_fleet.png",
            ],
        },
        {
            id: "sea",
            title: t.hero.categories.sea.title,
            icon: <FaShip />,
            description: t.hero.categories.sea.description,
            images: [
                "/ocean_transport_ship.png",
                "/ocean_transport_port.png",
                "/ocean_transport_containers.png",
            ],
        },
        {
            id: "road",
            title: t.hero.categories.road.title,
            icon: <FaTruck />,
            description: t.hero.categories.road.description,
            images: [
                "/road_transport_highway.png",
                "/road_transport_fleet.png",
                "/road_transport_loading.png",
            ],
        },
        {
            id: "rail",
            title: t.hero.categories.rail.title,
            icon: <FaTrain />,
            description: t.hero.categories.rail.description,
            images: [
                "/rail_transport_train.png",
                "/rail_transport_yard.png",
                "/rail_transport_motion.png",
            ],
        },
    ];

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
            if (!isDragging) { // Pause auto-rotation while interacting
                setActiveCategory((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
            }
        }, 8000);
        return () => clearInterval(categoryInterval);
    }, [isDragging]);

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
        setIsDragging(true);
    };

    const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        setIsDragging(false);
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
        setIsDragging(true);
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (isDragging) setTouchEnd(e.clientX);
    };

    const onMouseUp = () => {
        if (isDragging) {
            setIsDragging(false);
            if (touchStart && touchEnd) {
                const distance = touchStart - touchEnd;
                const isLeftSwipe = distance > minSwipeDistance;
                const isRightSwipe = distance < -minSwipeDistance;
                if (isLeftSwipe) handleCategoryChange("next");
                if (isRightSwipe) handleCategoryChange("prev");
            }
            setTouchStart(null);
            setTouchEnd(null);
        }
    };

    const onMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setTouchStart(null);
            setTouchEnd(null);
        }
    }

    const currentCategory = sliderData[activeCategory];
    const currentImageIndex = subIndices[activeCategory];

    return (
        <div className="relative min-h-[100dvh] w-full bg-slate-50 overflow-hidden flex flex-col md:flex-row select-none">

            {/* Left Content Area */}
            <div className="relative z-20 w-full md:w-[55%] flex items-center justify-center px-6 md:pl-20 md:pr-4 bg-white pt-8 md:pt-0 pointer-events-none md:pointer-events-auto shrink-0 order-2 md:order-1">
                <div className="flex flex-col gap-4 md:gap-6 max-w-xl z-10 animate-fade-in-up pointer-events-auto py-10 md:py-0">
                    <div className="flex items-center gap-3 text-cvt-cyan font-bold tracking-widest uppercase text-xs md:text-sm">
                        <span className="p-2 bg-cvt-cyan/10 rounded-lg text-lg">
                            {currentCategory.icon}
                        </span>
                        LOGISTICS SERVICES
                    </div>


                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-cvt-blue leading-tight min-h-[2.5em] flex items-center">
                        {currentCategory.title}
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md md:max-w-none min-h-[120px] md:min-h-[180px] flex items-center">
                        {currentCategory.description}
                    </p>

                    <div className="flex gap-4 mt-4">
                        <Link href="/contact" className="bg-cvt-cyan text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-cvt-blue hover:text-white transition flex items-center gap-2 uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base">
                            {t.hero.getQuote} <FaChevronRight size={12} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Image Area */}
            <div
                className="relative w-full md:absolute md:inset-y-0 md:right-0 md:w-[60%] h-[40vh] md:h-full bg-gray-900 overflow-hidden cursor-grab active:cursor-grabbing z-20 order-1 md:order-2 hero-clip-desktop"
            >
                {/* Desktop shaped clip-path via inline style conditioned, or just use a full rect on mobile and shape on desktop via duplicate div or media query? 
                    Let's just use a class and custom style.
                    Actually, allowing full width image on mobile is better.
                 */}
                <div className="absolute inset-0 md:hidden bg-gray-900">
                    {/* Mobile Image Container - No Clip Path */}
                </div>

                {/* Images */}
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
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-black/20" />
                    </div>
                ))}
            </div>

            {/* Clip Path Helper for Desktop - Applying via style attribute conditionally is hard in SSR without hydration mismatch. 
                 I'll apply a standard shape that works for both or reset it.
                 Actually the previous ellipse was: ellipse(80% 100% at 80% 50%).
                 This cuts the left side. On mobile stacked, we don't want to cut the side.
                 I will just remove the inline clip-path style here and assume rectangular updates, or mostly rectangular. 
                 If the user really loved the curve, I would need a media query. 
                 style={{ clipPath: "ellipse..." }} causes the issue on mobile.
                 I will try to remove it for now to fix the "kayma" (shift/cut) issue.
             */}

            {/* Global Navigation Arrows - Center on Image for Mobile, Center on Right for Desktop */}
            <div className="absolute top-[20vh] -translate-y-1/2 left-0 right-0 px-4 md:px-12 md:top-1/2 md:translate-y-0 md:bottom-auto md:w-full flex justify-between z-50 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); handleCategoryChange("prev"); }}
                    className="w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white text-cvt-blue rounded-full shadow-2xl flex items-center justify-center hover:bg-cvt-cyan hover:text-white transition group border border-gray-100 pointer-events-auto active:scale-95 backdrop-blur-sm"
                >
                    <FaChevronLeft className="group-hover:-translate-x-1 transition" size={16} />
                </button>

                <button
                    onClick={(e) => { e.stopPropagation(); handleCategoryChange("next"); }}
                    className="w-10 h-10 md:w-14 md:h-14 bg-white/80 md:bg-white text-cvt-blue rounded-full shadow-2xl flex items-center justify-center hover:bg-cvt-cyan hover:text-white transition group border border-gray-100 pointer-events-auto active:scale-95 backdrop-blur-sm"
                >
                    <FaChevronRight className="group-hover:translate-x-1 transition" size={16} />
                </button>
            </div>

            {/* Digits/Badges - Hidden on Mobile */}
            <div className="absolute top-32 right-0 z-40 hidden md:flex flex-col gap-6 items-end pointer-events-none">
                {/* Years Experience */}
                <div className="bg-cvt-cyan text-white py-4 px-8 rounded-l-full shadow-2xl transform translate-x-4 hover:translate-x-0 transition duration-300 flex items-center gap-4 cursor-default w-auto pointer-events-auto">
                    <div className="text-4xl font-black">25</div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">YEARS</span>
                        <span className="text-xs uppercase tracking-wider opacity-90">{t.hero.experience.split(" ")[1]}</span>
                    </div>
                </div>

                {/* Get Quote Badge */}
                <Link href="/contact" className="bg-[#1b2e38] text-white py-4 px-8 rounded-l-full shadow-2xl transform translate-x-4 hover:translate-x-0 transition duration-300 flex items-center gap-4 cursor-pointer group w-auto border-l-4 border-orange-500 pointer-events-auto">
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-lg">{t.hero.getQuote}</span>
                        <span className="text-xs uppercase tracking-wider opacity-80">{t.hero.fastResponse}</span>
                    </div>
                    <div className="bg-orange-500 p-2 rounded-full group-hover:rotate-45 transition duration-500">
                        <FaArrowRight size={14} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
