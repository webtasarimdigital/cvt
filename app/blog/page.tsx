"use client";

import { useLanguage } from "../context/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaCalendar } from "react-icons/fa";

export default function BlogListing() {
    const { t } = useLanguage();

    // @ts-ignore
    const posts = t.blog.posts || [];

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Page Header */}
            <div className="bg-[#1b2e38] pt-40 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <Image src="/pattern.png" alt="pattern" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{t.blog.title}</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.blog.subtitle}</p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post: any) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-cvt-cyan/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wide flex items-center gap-2 shadow-sm">
                                    <FaCalendar size={10} /> {post.date}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#1b2e38] mb-4 leading-tight group-hover:text-cvt-cyan transition">
                                    {post.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <span className="flex items-center gap-2 text-cvt-cyan font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all">
                                    {t.blog.readMore} <FaChevronRight size={10} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
