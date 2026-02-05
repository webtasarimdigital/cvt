"use client";

import {
    FaAward,
    FaLightbulb,
    FaUsers,
    FaHandshake,
    FaBalanceScale,
    FaGlobeAmericas,
    FaLeaf,
    FaHandHoldingHeart
} from "react-icons/fa";

const values = [
    { id: 1, label: "Quality", icon: <FaAward size={32} />, color: "text-cvt-blue" },
    { id: 2, label: "Innovation", icon: <FaLightbulb size={32} />, color: "text-orange-500" },
    { id: 3, label: "Customer", icon: <FaUsers size={32} />, color: "text-cvt-blue" },
    { id: 4, label: "Human", icon: <FaHandshake size={32} />, color: "text-orange-500" },
    { id: 5, label: "Justice", icon: <FaBalanceScale size={32} />, color: "text-cvt-blue" },
    { id: 6, label: "Sustainability", icon: <FaGlobeAmericas size={32} />, color: "text-orange-500" },
    { id: 7, label: "Environment", icon: <FaLeaf size={32} />, color: "text-cvt-blue" },
    { id: 8, label: "Social", icon: <FaHandHoldingHeart size={32} />, color: "text-orange-500" },
];

export default function ValuesSection() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-extrabold text-[#1b2e38] uppercase tracking-wide mb-12">
                    OUR CORPORATE VALUES
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {values.map((item) => (
                        <div key={item.id} className="flex flex-col items-center group cursor-default">
                            {/* Card Box - Rectangular & Smaller */}
                            <div className="w-full h-20 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-cvt-cyan hover:shadow-md transition-all duration-300 flex items-center justify-center group-hover:-translate-y-1 mb-3 relative overflow-hidden">
                                <div className={`absolute top-0 left-0 w-1 h-full ${item.id % 2 === 0 ? 'bg-orange-500' : 'bg-cvt-blue'} transition-all duration-300 group-hover:w-full opacity-10 group-hover:opacity-100`}></div>

                                <div className={`${item.color} z-10 group-hover:text-white transition duration-300 transform group-hover:scale-110`}>
                                    {item.icon}
                                </div>
                            </div>

                            {/* Label */}
                            <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider group-hover:text-cvt-blue transition text-center">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
