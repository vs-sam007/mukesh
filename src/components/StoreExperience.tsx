'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function StoreExperience() {
    return (
        <section className="py-20 px-6 bg-[#0f1115] overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

                {/* Left Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 h-[500px] relative rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                        style={{ backgroundImage: "url('/images/Gemini_Generated_Image_gvnvgjgvnvgjgvnv.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                        <div className="text-white">
                            <h3 className="text-2xl font-bold mb-2">Visit Our Store</h3>
                            <p className="opacity-90">Experience the difference of shopping in a clean, organized, and friendly environment.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content/Map Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <span className="text-[#E11D2E] font-bold tracking-wider text-sm uppercase">Find Us</span>
                    <h2 className="text-4xl font-bold text-white mt-2 mb-6">Serving Alambagh Families</h2>

                    <p className="text-[#b8c0cc] mb-8 text-lg leading-relaxed">
                        Conveniently located in Amrudhi Bagh, we are your neighborhood's favourite stop for daily essentials. Ample parking space available.
                    </p>

                    <div className="bg-[#1c212b] p-2 rounded-[2rem] shadow-soft border border-[#2a3140]">
                        <div className="rounded-[1.5rem] overflow-hidden h-[300px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283626601!2d80.9926!3d26.8500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4MMKwNTknMzMuNCJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            />
                            <a
                                href="https://goo.gl/maps/xyz"
                                target="_blank"
                                className="absolute bottom-4 right-4 bg-[#161a22] text-white px-4 py-2 rounded-full font-bold text-sm shadow-md flex items-center gap-2 hover:bg-[#E11D2E] hover:text-white transition-colors"
                            >
                                <Navigation size={14} /> Open Maps
                            </a>
                        </div>
                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#2a3140] rounded-full flex items-center justify-center text-[#E11D2E] shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Departmental Store</h4>
                                    <p className="text-[#b8c0cc] text-sm mt-1">565-KA/226-A, Opposite Police Chowki Saraffa, Amrudhi Bagh, Alambagh, Lucknow, UP 226005</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
