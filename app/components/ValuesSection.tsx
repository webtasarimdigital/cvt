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

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {values.map((item) => (
                        <div key={item.id} className="flex flex-col items-center group">
                            {/* Label */}
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 group-hover:text-cvt-cyan transition">
                                {item.label}
                            </span>

                            {/* Card Box */}
                            <div className="w-full aspect-square bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 group-hover:border-cvt-cyan/30 group-hover:-translate-y-1">
                                <div className={`${item.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300`}>
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
