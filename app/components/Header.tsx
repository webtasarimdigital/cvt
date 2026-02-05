"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
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
                        <a href="tel:+902123550600" className="flex items-center gap-2 hover:text-cvt-cyan transition">
                            <FaPhone size={12} /> +90 212 355 06 00
                        </a>
                        <a href="mailto:cvt@cvtlogistics.com" className="flex items-center gap-2 hover:text-cvt-cyan transition">
                            <FaEnvelope size={12} /> cvt@cvtlogistics.com
                        </a>
                        <div className="flex gap-2">
                            <span className="cursor-pointer hover:text-cvt-cyan">EN</span> | <span className="cursor-pointer hover:text-cvt-cyan">TR</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation - White Background for clean logo integration */}
            <div className="bg-white shadow-md">
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
                    <nav className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wider text-[#1b2e38]">
                        <Link href="#" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">Corporate</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">Services</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">Our Companies</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">Online Transactions</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">Human Resources</Link>
                        <Link href="#" className="hover:text-cvt-cyan transition py-2 border-b-2 border-transparent hover:border-cvt-cyan">Contact</Link>
                    </nav>

                    {/* Quote Button */}
                    <Link
                        href="#"
                        className="hidden lg:block bg-cvt-cyan text-white px-8 py-3 rounded-full hover:bg-[#1b2e38] transition font-bold text-sm uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}
