'use client';

import React from 'react';
import { MapPin, Star, Smartphone } from 'lucide-react';

export default function AppDownload() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-dark-card to-dark border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row relative">

                {/* Left: App Download Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green/10 text-green text-xs font-bold w-fit mb-6">
                        <Smartphone size={14} />
                        <span>Download the App</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                        Shop faster with the <br />
                        <span className="text-green">QuickKart App</span>
                    </h2>

                    <p className="text-text-secondary mb-8 max-w-md">
                        Get live order tracking, exclusive app-only deals, and 10-minute delivery promise. Experience the future of grocery shopping.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-3 bg-white text-dark px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors">
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732205.png" alt="Google Play" className="w-8 h-8" />
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold text-gray-500 leading-none">Get it on</span>
                                <span className="font-bold text-sm leading-tight">Google Play</span>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 bg-white/10 text-white border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/20 transition-colors">
                            <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="App Store" className="w-8 h-8 invert" />
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold text-gray-400 leading-none">Download on the</span>
                                <span className="font-bold text-sm leading-tight">App Store</span>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark bg-gray-700 overflow-hidden">
                                    <img src={`https://randomuser.me/api/portraits/thumb/men/${i + 20}.jpg`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-yellow-500">
                                <span className="font-bold text-white">4.8</span>
                                <Star size={14} className="fill-current" />
                                <Star size={14} className="fill-current" />
                                <Star size={14} className="fill-current" />
                                <Star size={14} className="fill-current" />
                                <Star size={14} className="fill-current" />
                            </div>
                            <p className="text-xs text-text-secondary">from 50k+ reviews</p>
                        </div>
                    </div>
                </div>

                {/* Right: Map Area */}
                <div className="flex-1 min-h-[300px] md:min-h-auto relative bg-dark-card/50">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8773950669145!2d80.9984950752538!3d26.843845976688222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be12a20e2eeb9%3A0xe5a363f8287513b1!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709848464646!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.8)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-80 hover:opacity-100 transition-opacity"
                    ></iframe>

                    <div className="absolute top-4 right-4 bg-dark/90 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 max-w-[200px]">
                        <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center shrink-0">
                            <MapPin size={20} className="text-green" />
                        </div>
                        <div>
                            <p className="text-xs text-text-secondary font-bold uppercase">Store Location</p>
                            <p className="text-sm font-bold text-white leading-tight">Alambagh, Lucknow</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
