"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsApp = () => {
        const text = `Name: ${formData.name}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
        window.open(`https://wa.me/905323039048?text=${text}`, "_blank");
    };

    const handleMailTo = () => {
        const subject = encodeURIComponent(formData.subject || "New Contact Request");
        const body = encodeURIComponent(`Name: ${formData.name}\nMessage: ${formData.message}`);
        window.open(`mailto:cvt@cvtlogistics.com?subject=${subject}&body=${body}`, "_blank");
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Header />

            {/* Page Header */}
            <div className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-[#1b2e38] text-white">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/network-connection-background_23-2148879892.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1b2e38]/80 to-[#1b2e38]/90 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-4">
                        {t.contact.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold text-cvt-blue mb-6 border-b pb-4">{t.contact.infoTitle}</h3>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-cvt-cyan/10 p-3 rounded-full text-cvt-cyan shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{t.contact.addressTitle}</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        CVTLOG DIS TICARET LTD. STI.<br />
                                        Cevizli Mah. Mustafa Kemal Cad.<br />
                                        Hukukcular Towers A Blok No:66 A , D.111<br />
                                        PK:34865 Kartal – Istanbul - Turkey
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-cvt-cyan/10 p-3 rounded-full text-cvt-cyan shrink-0">
                                    <FaPhone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{t.contact.phoneTitle}</h4>
                                    <p className="text-gray-600 font-medium">+90 532 303 90 48</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cvt-cyan/10 p-3 rounded-full text-cvt-cyan shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">{t.contact.emailTitle}</h4>
                                    <p className="text-gray-600 font-medium">cvt@cvtlogistics.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed - Using a Google Maps search link as placeholder since no API key */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 md:h-80 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.987728796859!2d29.176466912389146!3d40.92348397123984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5aeb6575199%3A0x6731998f4836f01!2sHukuk%C3%A7ular%20Towers!5e0!3m2!1str!2str!4v1707123456789!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cvt-cyan">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.contact.formTitle}</h3>
                        <p className="text-gray-500 mb-8">{t.contact.formSubtitle}</p>

                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.nameLabel}</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cvt-cyan focus:ring-2 focus:ring-cvt-cyan/20 outline-none transition"
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.subjectLabel}</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cvt-cyan focus:ring-2 focus:ring-cvt-cyan/20 outline-none transition"
                                    placeholder={t.contact.subjectPlaceholder}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">{t.contact.messageLabel}</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cvt-cyan focus:ring-2 focus:ring-cvt-cyan/20 outline-none transition resize-none"
                                    placeholder={t.contact.messagePlaceholder}
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128C7E] transition shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    <FaWhatsapp size={20} />
                                    {t.contact.sendWhatsapp}
                                </button>

                                <button
                                    onClick={handleMailTo}
                                    className="flex items-center justify-center gap-2 bg-cvt-blue text-white py-4 rounded-xl font-bold hover:bg-[#15232d] transition shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    <FaPaperPlane size={18} />
                                    {t.contact.sendEmail}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <WhatsAppButton />
            <Footer />
        </main>
    );
}
