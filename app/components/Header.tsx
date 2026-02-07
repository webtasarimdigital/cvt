"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
    const { t, language, setLanguage } = useLanguage();

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-gray-800">
            {/* Top Bar - Dark Blue for contrast */}
            <div className="bg-[#1b2e38] text-white text-xs py-3 border-b border-white/10">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaFacebookF /></Link>
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaLinkedinIn /></Link>
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaYoutube /></Link>
                    </div>
                    <div className="flex gap-6 hidden md:flex">
                        <a href="tel:+905323039048" className="flex items-center gap-2 hover:text-cvt-cyan transition">
                            <FaPhone size={12} /> +90 532 303 90 48
                        </a>
                        <a href="mailto:cvt@cvtlogistics.com" className="flex items-center gap-2 hover:text-cvt-cyan transition">
                            <FaEnvelope size={12} /> cvt@cvtlogistics.com
                        </a>
                        <div className="flex gap-2 font-bold">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`cursor-pointer hover:text-cvt-cyan transition ${language === 'en' ? 'text-cvt-cyan' : 'text-white'}`}
                            >
                                EN
                            </button>
                            <span className="text-gray-500">|</span>
                            <button
                                onClick={() => setLanguage('tr')}
                                className={`cursor-pointer hover:text-cvt-cyan transition ${language === 'tr' ? 'text-cvt-cyan' : 'text-white'}`}
                            >
                                TR
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - White Background for clean logo integration */}
            <div className="bg-white shadow-md relative">
                <div className="container mx-auto px-4 py-0 flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link href="/" className="relative h-20 w-56">
                        <Image
                            src="/logo.png"
                            alt="CVT Logistics"
                            fill
                            className="object-contain"
                            priority
                        />
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-[#1b2e38]">
                        <Link href="/" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                            {t.header.home}
                        </Link>
                        <Link href="/about" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                            {t.header.about}
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                                {t.header.services} <FaChevronDown size={10} />
                            </button>
                            <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-xl overflow-hidden invisible group-hover:visible opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 border-t-4 border-cvt-cyan">
                                <Link href="/services/road" className="block px-6 py-4 hover:bg-slate-50 border-b border-gray-100 hover:text-cvt-cyan transition">
                                    {t.services.road}
                                </Link>
                                <Link href="/services/sea" className="block px-6 py-4 hover:bg-slate-50 border-b border-gray-100 hover:text-cvt-cyan transition">
                                    {t.services.sea}
                                </Link>
                                <Link href="/services/air" className="block px-6 py-4 hover:bg-slate-50 border-b border-gray-100 hover:text-cvt-cyan transition">
                                    {t.services.air}
                                </Link>
                                <Link href="/services/rail" className="block px-6 py-4 hover:bg-slate-50 hover:text-cvt-cyan transition">
                                    {t.services.rail}
                                </Link>
                            </div>
                        </div>

                        <Link href="/blog" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                            {t.header.blog}
                        </Link>
                        <Link href="/contact" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                            {t.header.contact}
                        </Link>
                    </nav>

                    {/* Quote Button */}
                    <Link
                        href="/contact"
                        className="hidden lg:block bg-cvt-cyan text-white px-8 py-3 rounded-full hover:bg-[#1b2e38] transition font-bold text-sm uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
                    >
                        {t.header.getQuote}
                    </Link>
                </div>
            </div>
        </header>
    );
}
