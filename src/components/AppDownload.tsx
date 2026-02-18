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
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-3.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" /></svg>
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] uppercase font-bold text-gray-500 leading-none">Get it on</span>
                                <span className="font-bold text-sm leading-tight">Google Play</span>
                            </div>
                        </button>

                        <button className="flex items-center gap-3 bg-white/10 text-white border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/20 transition-colors">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
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
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green/30 to-green/10 text-white text-xs font-bold">{['A', 'R', 'S', 'P'][i - 1]}</div>
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
