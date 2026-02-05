"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#1b2e38] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6">
                        <div className="relative h-16 w-48 bg-white rounded-lg p-2">
                            {/* Logo placeholder - using the same logo but on a white tile for visibility if it's transparent, or just matching style */}
                            <Image
                                src="/logo.png"
                                alt="CVT Logistics"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            With over 25 years of experience, CVT Logistics offers innovative and cost-effective solutions for your global transport needs.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaFacebookF /></a>
                            <a href="#" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaLinkedinIn /></a>
                            <a href="#" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaInstagram /></a>
                            <a href="#" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaYoutube /></a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-cvt-cyan inline-block pb-2">Our Services</h3>
                        <ul className="flex flex-col gap-4 text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Air Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Sea Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Road Transport
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Rail Transport
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-cvt-cyan inline-block pb-2">Quick Links</h3>
                        <ul className="flex flex-col gap-4 text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Corporate
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Get a Quote
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-cvt-cyan transition flex items-center gap-2 group">
                                    <FaChevronRight className="text-xs text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-cvt-cyan inline-block pb-2">Contact Us</h3>
                        <div className="flex flex-col gap-6 text-gray-400">
                            <div className="flex items-start gap-4">
                                <div className="bg-cvt-cyan/20 p-3 rounded-lg text-cvt-cyan mt-1">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Head Office</h4>
                                    <p className="text-sm">Istanbul, Turkey</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cvt-cyan/20 p-3 rounded-lg text-cvt-cyan mt-1">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Phone</h4>
                                    <p className="text-sm">+90 212 355 06 00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cvt-cyan/20 p-3 rounded-lg text-cvt-cyan mt-1">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Email</h4>
                                    <p className="text-sm">cvt@cvtlogistics.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© 2024 CVT Logistics. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
