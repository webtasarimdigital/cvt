"use client";

import Link from "next/link";
import { FaHome, FaTruck, FaNewspaper, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function MobileBottomNav() {
    const { t } = useLanguage();

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 md:hidden pb-safe">
            <div className="grid grid-cols-4 h-16">
                <Link href="/" className="flex flex-col items-center justify-center gap-1 text-[#1b2e38] hover:text-cvt-cyan transition">
                    <FaHome size={20} />
                    <span className="text-[10px] font-bold uppercase">{t.header.home}</span>
                </Link>
                <Link href="/services" className="flex flex-col items-center justify-center gap-1 text-[#1b2e38] hover:text-cvt-cyan transition">
                    <FaTruck size={20} />
                    <span className="text-[10px] font-bold uppercase">{t.header.services}</span>
                </Link>
                <Link href="/blog" className="flex flex-col items-center justify-center gap-1 text-[#1b2e38] hover:text-cvt-cyan transition">
                    <FaNewspaper size={20} />
                    <span className="text-[10px] font-bold uppercase">{t.header.blog}</span>
                </Link>
                <Link href="/contact" className="flex flex-col items-center justify-center gap-1 text-[#1b2e38] hover:text-cvt-cyan transition">
                    <FaEnvelope size={20} />
                    <span className="text-[10px] font-bold uppercase">{t.header.contact}</span>
                </Link>
            </div>
        </div>
    );
}
