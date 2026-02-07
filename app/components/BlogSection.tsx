"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft, FaCalendar } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function BlogSection() {
    const { t } = useLanguage();

    // @ts-ignore
    const posts = t.blog.posts || [];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Header with Navigation */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-extrabold text-[#1b2e38] uppercase tracking-wide">
                        {t.blog.title}
                    </h2>
                    <div className="flex gap-2">
                        <Link href="/blog" className="px-6 py-2 border border-gray-300 rounded-full text-sm font-bold text-gray-600 hover:bg-cvt-cyan hover:border-cvt-cyan hover:text-white transition">
                            View All
                        </Link>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any) => (
                        <div key={post.id} className="group cursor-pointer">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative h-60 w-full rounded-xl overflow-hidden mb-6 shadow-md">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-cvt-cyan text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-2">
                                        <FaCalendar size={10} /> {post.date}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#1b2e38] mb-3 leading-snug group-hover:text-cvt-cyan transition">
                                    {post.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <span className="flex items-center gap-2 text-cvt-cyan font-bold text-sm uppercase tracking-wide hover:gap-3 transition-all">
                                    {t.blog.readMore} <FaChevronRight size={10} />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
