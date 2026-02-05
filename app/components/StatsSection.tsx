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
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000; // 2 seconds
            const incrementTime = Math.floor(duration / end);

            // For really small numbers, slow down a bit
            // For large numbers like 20 (which is 20k really, but logic handles raw number), it's fine.
            // If value is 20, end is 20. 

            const timer = setInterval(() => {
                start += 1;
                setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[index] = start;
                    return newCounts;
                });
                if (start >= end) clearInterval(timer);
            }, incrementTime > 0 ? incrementTime : 10);
        });

    }, [isVisible]);

    return (
        <section ref={sectionRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-6 group">
                            {/* Circular Design */}
                            <div className="relative w-48 h-48 flex items-center justify-center">
                                {/* Background Circle */}
                                <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="90"
                                        className="stroke-gray-100"
                                        strokeWidth="8"
                                        fill="transparent"
                                    />
                                    {/* Progress Circle - Animated */}
                                    <circle
                                        cx="96"
                                        cy="96"
                                        r="90"
                                        className={`stroke-current ${index % 2 === 0 ? 'text-cvt-cyan' : 'text-cvt-blue'} transition-all duration-[2000ms] ease-out`}
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={565} // 2 * PI * 90
                                        strokeDashoffset={isVisible ? 0 : 565}
                                        strokeLinecap="round"
                                    />
                                </svg>

                                {/* Inner Text */}
                                <div className="z-10 text-center flex flex-col items-center">
                                    <span className={`text-5xl font-extrabold ${stat.color}`}>
                                        {counts[index]}{stat.suffix}
                                    </span>
                                </div>
                            </div>

                            {/* Label outside circle matches reference somewhat, or we can put it insde. 
                                Reference has label to the right. Let's try inside/below for cleaner look or mimic reference strictly?
                                User Ref: Circle contains Number. Label is to the right. 
                                Let's adjust to match reference: Circle | Text 
                            */}
                            <div className="mt-6 text-xl font-bold text-gray-700 uppercase tracking-widest text-center">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
