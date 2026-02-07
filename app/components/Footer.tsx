"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#1b2e38] text-white pt-20 pb-10">
            <div className="container mx-auto px-4">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:col-span-1">
                        <div className="relative h-16 w-48 bg-white rounded-lg p-2">
                            <Image
                                src="/logo.png"
                                alt="CVT Logistics"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t.footer.about}
                        </p>
                        <div className="flex gap-4 mt-2">
                            <Link href="/contact" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaFacebookF /></Link>
                            <Link href="/contact" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaLinkedinIn /></Link>
                            <Link href="/contact" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaInstagram /></Link>
                            <Link href="/contact" className="bg-white/10 hover:bg-cvt-cyan p-3 rounded-full transition duration-300 text-white"><FaYoutube /></Link>
                        </div>
                    </div>

                    {/* Links Wrapper - Side by Side on Mobile & Desktop */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-12 lg:col-span-2 w-full">
                        {/* Services Column */}
                        <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-bold mb-6 text-white border-b-2 border-cvt-cyan inline-block pb-2">{t.footer.servicesTitle}</h3>
                            <ul className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">
                                <li>
                                    <Link href="/services/air" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.services.air}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/sea" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.services.sea}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/road" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.services.road}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/rail" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.services.rail}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Links Column */}
                        <div className="min-w-0">
                            <h3 className="text-lg md:text-xl font-bold mb-6 text-white border-b-2 border-cvt-cyan inline-block pb-2">{t.footer.quickLinksTitle}</h3>
                            <ul className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">
                                <li>
                                    <Link href="/" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.header.home}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.header.about}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.header.blog}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-cvt-cyan transition flex items-center gap-2 group whitespace-nowrap">
                                        <FaChevronRight className="text-[10px] text-cvt-cyan opacity-0 group-hover:opacity-100 transition-opacity" /> {t.header.contact}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-cvt-cyan inline-block pb-2">{t.footer.contactTitle}</h3>
                        <div className="flex flex-col gap-6 text-gray-400">
                            <div className="flex items-start gap-4">
                                <div className="bg-cvt-cyan/20 p-3 rounded-lg text-cvt-cyan mt-1">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">{t.footer.headOffice}</h4>
                                    <p className="text-sm">
                                        CVTLOG DIS TICARET LTD. STI.<br />
                                        {t.footer.address}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-cvt-cyan/20 p-3 rounded-lg text-cvt-cyan mt-1">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{t.footer.phone}</h4>
                                        <p className="text-sm">+90 532 303 90 48</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-cvt-cyan/20 p-3 rounded-lg text-cvt-cyan mt-1">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">{t.footer.email}</h4>
                                        <p className="text-sm">cvt@cvtlogistics.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>{t.footer.copyright}</p>
                </div>

            </div>
        </footer>
    );
}
