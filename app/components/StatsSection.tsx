"use client";

import { useEffect, useState, useRef } from "react";

const stats = [
    { label: "Years Experience", value: 25, suffix: "+", color: "text-cvt-blue" },
    { label: "Countries Served", value: 28, suffix: "+", color: "text-cvt-cyan" },
    { label: "Successful Deliveries", value: 20, suffix: "k+", color: "text-cvt-blue" },
];

export default function StatsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [counts, setCounts] = useState(stats.map(() => 0));
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 } // Lower threshold to ensure it triggers
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // ... (counter logic stays mostly same but ensure it runs)

    return (
        <section ref={sectionRef} className="py-8 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-2 group cursor-pointer">
                            {/* Circular Design */}
                            <div className="relative w-32 h-32 flex items-center justify-center">
                                {/* SVG Wrapper that rotates on hover */}
                                <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90 transition-transform duration-1000 group-hover:rotate-90">
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="58"
                                        className="stroke-gray-100"
                                        strokeWidth="4"
                                        fill="transparent"
                                    />
                                    {/* Progress Circle - Animated */}
                                    <circle
                                        cx="64"
                                        cy="64"
                                        r="58"
                                        className={`stroke-current ${index % 2 === 0 ? 'text-cvt-cyan' : 'text-cvt-blue'} transition-all duration-[2000ms] ease-out`}
                                        strokeWidth="4"
                                        fill="transparent"
                                        strokeDasharray={365} // 2 * PI * 58
                                        strokeDashoffset={isVisible ? 0 : 365} // Animate dashoffset to 0
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* Inner Text - Static (does not rotate) */}
                                <div className="z-10 text-center flex flex-col items-center">
                                    <span className={`text-3xl font-extrabold ${stat.color} transition-colors group-hover:scale-110 duration-300`}>
                                        {counts[index]}{stat.suffix}
                                    </span>
                                </div>
                            </div>

                            {/* Label outside circle */}
                            <div className="mt-3 text-sm font-bold text-gray-600 uppercase tracking-widest text-center group-hover:text-cvt-cyan transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
