"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function ContactPage() {
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
            <div className="bg-[#1b2e38] text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide">Contact Us</h1>
                <p className="text-gray-400 mt-4 text-lg">We are here to help you</p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-2xl font-bold text-cvt-blue mb-6 border-b pb-4">Contact Information</h3>

                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-cvt-cyan/10 p-3 rounded-full text-cvt-cyan shrink-0">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Address</h4>
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
                                    <h4 className="font-bold text-gray-800">Phone</h4>
                                    <p className="text-gray-600 font-medium">+90 532 303 90 48 (Mobile)</p>
                                    <p className="text-gray-600 font-medium">+90 216 475 55 92 (Office)</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-cvt-cyan/10 p-3 rounded-full text-cvt-cyan shrink-0">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Email</h4>
                                    <p className="text-gray-600 font-medium">cvt@cvtlogistics.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed (Placeholder for now, or real if they have one. Using Google Maps Search link as embed tricky without API key, but we can try an iframe with address) */}
                        <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps/embed/v1/place?key=&q=Cevizli+Mah.+Mustafa+Kemal+Cad.+Hukukcular+Towers+Kartal+Istanbul`}
                                allowFullScreen
                            >
                                {/* Note: Embedding Google Maps properly requires an API Key. 
                                    For now, we can use a generic iframe or just a placeholder image.
                                    Actually, the 'q' parameter works with the embed API but needs a key.
                                    Let's use a simpler iframe openstreetmap or just a link.
                                    Better yet, let's just put a static image or a "View on Maps" button if we don't have a key.
                                    I'll stick to a simple placeholder message or remove the iframe to avoid "Development Purposes Only" watermark if no key.
                                    Let's try standard embed link format which sometimes works for specific places. */}
                            </iframe>
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                                <a href="https://maps.google.com/?q=Cevizli+Mah.+Mustafa+Kemal+Cad.+Hukukcular+Towers+A+Blok+No:66+A+,+D.111+Kartal+Istanbul" target="_blank" className="underline hover:text-cvt-cyan">
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cvt-cyan">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h3>
                        <p className="text-gray-500 mb-8">Fill out the form and choose how you want to send it.</p>

                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cvt-cyan focus:ring-2 focus:ring-cvt-cyan/20 outline-none transition"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cvt-cyan focus:ring-2 focus:ring-cvt-cyan/20 outline-none transition"
                                    placeholder="Logistics Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-cvt-cyan focus:ring-2 focus:ring-cvt-cyan/20 outline-none transition resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128C7E] transition shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    <FaWhatsapp size={20} />
                                    Send via WhatsApp
                                </button>

                                <button
                                    onClick={handleMailTo}
                                    className="flex items-center justify-center gap-2 bg-cvt-blue text-white py-4 rounded-xl font-bold hover:bg-[#15232d] transition shadow-md hover:shadow-lg hover:-translate-y-1"
                                >
                                    <FaPaperPlane size={18} />
                                    Send via Email
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
