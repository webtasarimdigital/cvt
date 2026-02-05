"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const posts = [
    {
        id: 1,
        title: "Legal Issues and Solutions in Logistics Sector",
        image: "/air_transport_loading.png",
        excerpt: "Understanding the complex regulatory landscape of international air freight and how to navigate custom clearances efficiently.",
        date: "Feb 5, 2026"
    },
    {
        id: 2,
        title: "Key Criteria for Choosing a Logistics Partner",
        image: "/ocean_transport_containers.png",
        excerpt: "What to look for when selecting a shipping partner for your global supply chain needs. Reliability, cost, and speed.",
        date: "Feb 2, 2026"
    },
    {
        id: 3,
        title: "Sea Freight: Advantages and Global Trends",
        image: "/ocean_transport_ship.png",
        excerpt: "An in-depth look at why sea transport remains the backbone of global trade and current market trends affecting prices.",
        date: "Jan 28, 2026"
    },
    {
        id: 4,
        title: "Container Shipping Prices and Forecasts",
        image: "/rail_transport_train.png",
        excerpt: "Analyzing the fluctuations in container shipping rates and what to expect in the coming quarter for your logistics budget.",
        date: "Jan 20, 2026"
    }
];

export default function BlogSection() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header with Navigation */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-extrabold text-[#1b2e38] uppercase tracking-wide">
                        LATEST NEWS & BLOG
                    </h2>
                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-cvt-cyan hover:border-cvt-cyan hover:text-white transition">
                            <FaChevronLeft size={14} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-cvt-cyan hover:border-cvt-cyan hover:text-white transition">
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 shadow-md">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-cvt-cyan text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Blog
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#1b2e38] mb-3 leading-snug group-hover:text-cvt-cyan transition">
                                {post.title}
                            </h3>

                            <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <Link href="#" className="flex items-center gap-2 text-cvt-cyan font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
                                Read More <FaChevronRight size={10} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
