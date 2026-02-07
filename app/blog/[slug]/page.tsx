"use client";

import { useLanguage } from "../../context/LanguageContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useParams, notFound } from "next/navigation";

export default function BlogPost() {
    const { t, language } = useLanguage();
    const params = useParams();
    const slug = params.slug as string;

    // Find post by slug
    // @ts-ignore
    const post = t.blog.posts?.find((p: any) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // Filter out the current post
    // @ts-ignore
    const otherPosts = t.blog.posts?.filter((p: any) => p.id !== post.id) || [];

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

                {/* Related Posts */}
                {otherPosts.length > 0 && (
                    <div className="mt-20 pt-12 border-t border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">{language === 'tr' ? 'Diğer Yazılarımız' : 'Other Posts'}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {otherPosts.slice(0, 3).map((relatedPost) => (
                                <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.id} className="group cursor-pointer">
                                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                                                <span className="flex items-center"><FaCalendar className="mr-1.5 text-cvt-cyan" /> {relatedPost.date}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-cvt-cyan transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                                                {relatedPost.excerpt}
                                            </p>
                                            <span className="text-cvt-cyan text-sm font-bold flex items-center mt-auto">
                                                {t.blog.readMore} <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
