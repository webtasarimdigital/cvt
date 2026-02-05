"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white">
            {/* Top Bar */}
            <div className="bg-cvt-blue/90 text-xs py-2 border-b border-white/10">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaFacebookF /></Link>
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaLinkedinIn /></Link>
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaInstagram /></Link>
                        <Link href="#" className="hover:text-cvt-cyan transition"><FaYoutube /></Link>
                    </div>
                    <div className="flex gap-6">
                        <a href="tel:+902123550600" className="flex items-center gap-2 hover:text-cvt-cyan transition">
                            <FaPhone /> +90 212 355 06 00
                        </a>
                        <a href="mailto:cvt@cvtlogistics.com" className="flex items-center gap-2 hover:text-cvt-cyan transition">
                            <FaEnvelope /> cvt@cvtlogistics.com
                        </a>
                        <div className="flex gap-2">
                            <span>EN</span> | <span>TR</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-[#1b2e38] backdrop-blur-md shadow-lg">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="relative h-12 w-48">
                        <Image
                            src="/logo.png"
                            alt="CVT Logistics"
                            fill
                            className="object-contain" // removed filter brightness-0 invert, relying on original logo colors or adjust if needed
                        />
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wide">
                        <Link href="#" className="hover:text-cvt-cyan transition">Corporate</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition">Services</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition">Our Companies</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition">Online Transactions</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition">Human Resources</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition">Contact</Link>
                    </nav>

                    {/* Quote Button */}
                    <Link
                        href="#"
                        className="bg-cvt-cyan text-cvt-dark px-6 py-2.5 rounded hover:bg-white transition font-bold text-sm uppercase"
                    >
                        Get a Quote →
                    </Link>
                </div>
            </div>
        </header>
    );
}
