'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';

export default function Location() {
    return (
        <section className="py-16 px-4 bg-slate-100 border-t border-slate-200">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">

                {/* Left Map */}
                <div className="w-full lg:w-2/3 h-[300px] lg:h-[400px] bg-slate-200 rounded-xl overflow-hidden relative">
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
                        <h2 className="text-2xl font-bold text-navy mb-4">Visit Our Store</h2>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="text-green-600 shrink-0" size={20} />
                                <p className="text-sm text-slate-600">
                                    <strong>Mukesh Departmental Store</strong><br />
                                    565-KA/226-A, Opposite Police Chowki Saraffa,<br />
                                    Amrudhi Bagh, Alambagh, Lucknow, UP 226005
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Clock className="text-green-600 shrink-0" size={20} />
                                <p className="text-sm text-slate-600">
                                    <strong>Open Everyday</strong><br />
                                    9:00 AM - 10:00 PM
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3 mt-8">
                        <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full py-3 bg-navy text-white rounded-lg font-bold hover:bg-slate-800 transition-colors">
                            <Phone size={18} /> Call Store
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors">
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                        <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors">
                            <Navigation size={18} /> Get Directions
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
