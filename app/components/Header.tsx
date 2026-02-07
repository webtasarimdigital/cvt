"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Header() {
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-gray-800">
            {/* Top Bar */}
            <div className="bg-[#1b2e38] text-white text-[10px] md:text-xs py-2 md:py-3 border-b border-white/10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
                    {/* Socials (Hidden on Mobile) */}
                    <div className="hidden md:flex gap-4">
                        <Link href="/contact" className="hover:text-cvt-cyan transition"><FaFacebookF /></Link>
                        <Link href="/contact" className="hover:text-cvt-cyan transition"><FaLinkedinIn /></Link>
                        <Link href="/contact" className="hover:text-cvt-cyan transition"><FaInstagram /></Link>
                        <Link href="/contact" className="hover:text-cvt-cyan transition"><FaYoutube /></Link>
                    </div>

                    {/* Contact Info & Language (Visible on Mobile) */}
                    <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-6 w-full md:w-auto justify-center md:justify-end items-center">
                        <a href="tel:+905323039048" className="flex items-center gap-1.5 hover:text-cvt-cyan transition whitespace-nowrap">
                            <FaPhone size={10} /> +90 532 303 90 48
                        </a>
                        <a href="mailto:cvt@cvtlogistics.com" className="flex items-center gap-1.5 hover:text-cvt-cyan transition whitespace-nowrap">
                            <FaEnvelope size={10} /> cvt@cvtlogistics.com
                        </a>

                        {/* Language Switcher */}
                        <div className="flex gap-2 font-bold ml-2 border-l border-white/20 pl-3">
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

            {/* Main Navigation */}
            <div className="bg-white shadow-md relative">
                <div className="container mx-auto px-4 py-0 flex justify-between items-center h-20 md:h-24">
                    {/* Logo - Smaller on mobile */}
                    <Link href="/" className="relative h-12 w-36 md:h-20 md:w-56 -ml-1 md:-ml-2">
                        <Image
                            src="/logo.png"
                            alt="CVT Logistics"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-[#1b2e38]">
                        <Link href="/" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                            {t.header.home}
                        </Link>
                        <Link href="/about" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                            {t.header.about}
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <Link href="/services" className="flex items-center gap-1 hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">
                                {t.header.services} <FaChevronDown size={10} />
                            </Link>
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

                    {/* Desktop Quote Button */}
                    <Link
                        href="/contact"
                        className="hidden lg:block bg-cvt-cyan text-white px-8 py-3 rounded-full hover:bg-[#1b2e38] transition font-bold text-sm uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
                    >
                        {t.header.getQuote}
                    </Link>

                    {/* Mobile Hamburger Menu Button */}
                    <button
                        className="md:hidden text-2xl text-[#1b2e38] p-2"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#1b2e38]/95 z-[60] transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-8 relative">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 text-white text-3xl hover:text-cvt-cyan transition"
                    >
                        <FaTimes />
                    </button>

                    <div className="mt-12 flex flex-col items-center gap-8">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="relative h-16 w-48 mb-6">
                            <Image src="/logo.png" alt="CVT Logistics" fill className="object-contain brightness-0 invert" />
                        </Link>

                        <nav className="flex flex-col items-center gap-6 text-xl font-bold text-white tracking-widest uppercase">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-cvt-cyan transition">
                                {t.header.home}
                            </Link>
                            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-cvt-cyan transition">
                                {t.header.about}
                            </Link>
                            <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-cvt-cyan transition">
                                {t.header.services}
                            </Link>
                            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-cvt-cyan transition">
                                {t.header.contact}
                            </Link>
                        </nav>

                        <div className="mt-8 pt-8 border-t border-white/10 w-full flex flex-col items-center gap-4">
                            <a href="tel:+905323039048" className="text-gray-300 hover:text-white flex items-center gap-2">
                                <FaPhone size={14} /> +90 532 303 90 48
                            </a>
                            <a href="mailto:cvt@cvtlogistics.com" className="text-gray-300 hover:text-white flex items-center gap-2">
                                <FaEnvelope size={14} /> cvt@cvtlogistics.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
