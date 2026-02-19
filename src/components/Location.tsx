'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';

export default function Location() {
    return (
        <section className="py-16 px-4 bg-[#161a22] border-t border-[#2a3140]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 bg-[#1c212b] rounded-2xl p-6 shadow-sm border border-[#2a3140]">

                {/* Left Map */}
                <div className="w-full lg:w-2/3 h-[300px] lg:h-[400px] bg-[#0f1115] rounded-xl overflow-hidden relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283626601!2d80.9926!3d26.8500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTknMzMuNCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>

                {/* Right Info */}
                <div className="w-full lg:w-1/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Visit Our Store</h2>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="text-[#E11D2E] shrink-0" size={20} />
                                <p className="text-sm text-[#b8c0cc]">
                                    <strong>Departmental Store</strong><br />
                                    565-KA/226-A, Opposite Police Chowki Saraffa,<br />
                                    Amrudhi Bagh, Alambagh, Lucknow, UP 226005
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Clock className="text-[#E11D2E] shrink-0" size={20} />
                                <p className="text-sm text-[#b8c0cc]">
                                    <strong>Open Everyday</strong><br />
                                    9:00 AM - 10:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3 mt-8">
                        <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full py-3 bg-[#E11D2E] text-white rounded-lg font-bold hover:bg-[#C2000B] transition-colors">
                            <Phone size={18} /> Call Store
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors">
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-[#2a3140] border border-[#2a3140] text-gray-300 rounded-lg font-bold hover:bg-[#161a22] transition-colors">
                            <Navigation size={18} /> Get Directions
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
