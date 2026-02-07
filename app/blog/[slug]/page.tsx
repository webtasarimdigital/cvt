"use client";

import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaArrowLeft, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useParams, notFound } from "next/navigation";

export default function BlogPost() {
    const { t } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    // Find post by slug
    // @ts-ignore
    const post = t.blog.posts?.find((p: any) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <div className="relative h-[50vh] w-full overflow-hidden mt-24 md:mt-0">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <span className="bg-cvt-cyan text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                            LOGISTICS INSIGHTS
                        </span>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-gray-300 text-sm">
                            <span className="flex items-center gap-2">
                                <FaCalendar className="text-cvt-cyan" /> {post.date}
                            </span>
                            <span>By CVT Logistics</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-cvt-cyan transition mb-8 font-bold text-sm">
                    <FaArrowLeft /> Back to Blog
                </Link>

                <article className="prose prose-lg max-w-none prose-headings:text-[#1b2e38] prose-a:text-cvt-cyan">
                    <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8 border-l-4 border-cvt-cyan pl-6 bg-slate-50 py-4 rounde-r-lg">
                        {post.excerpt}
                    </p>
                    <div className="text-gray-600 leading-loose space-y-6 whitespace-pre-line">
                        {post.content}
                    </div>
                </article>

                {/* Share */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <span className="font-bold text-gray-900">Share this article:</span>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition">
                            <FaFacebookF />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:scale-110 transition">
                            <FaTwitter />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition">
                            <FaLinkedinIn />
                        </button>
                    </div>
                </div>

            </div>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
