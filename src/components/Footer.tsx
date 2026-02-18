'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Heart, Smartphone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#161a22] border-t border-[#2a3140] pt-16 pb-8 px-4 text-sm relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

                <div className="lg:col-span-2">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">Mukesh Departmental<span className="text-[#E11D2E]">.</span></h3>
                    <p className="text-[#b8c0cc] mb-6 leading-relaxed max-w-sm">
                        Experience the future of grocery shopping. Fresh produce, daily essentials, and premium products delivered in minutes.
                    </p>

                    <div className="flex gap-4 mb-8">
                        {/* Fake App Store Buttons */}
                        <div className="flex items-center gap-3">
                            <div className="bg-[#0f1115] border border-[#2a3140] text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#1c212b] transition-colors">
                                <Smartphone size={20} />
                                <div className="flex flex-col leading-none">
                                    <span className="text-[9px] uppercase font-medium text-gray-400">Download on the</span>
                                    <span className="text-sm font-bold">App Store</span>
                                </div>
                            </div>
                            <div className="bg-[#0f1115] border border-[#2a3140] text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-[#1c212b] transition-colors">
                                <div className="flex flex-col leading-none">
                                    <span className="text-[9px] uppercase font-medium text-gray-400">Get it on</span>
                                    <span className="text-sm font-bold">Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-[#2a3140] rounded-full flex items-center justify-center hover:bg-[#E11D2E] hover:text-white transition-all text-gray-400"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-[#2a3140] rounded-full flex items-center justify-center hover:bg-[#E11D2E] hover:text-white transition-all text-gray-400"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-[#2a3140] rounded-full flex items-center justify-center hover:bg-[#E11D2E] hover:text-white transition-all text-gray-400"><Twitter size={18} /></a>
                        <a href="#" className="w-10 h-10 bg-[#2a3140] rounded-full flex items-center justify-center hover:bg-[#E11D2E] hover:text-white transition-all text-gray-400"><Linkedin size={18} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-base">Company</h4>
                    <ul className="space-y-3 text-[#b8c0cc]">
                        <li><a href="/about" className="hover:text-[#E11D2E] transition-colors">About Us</a></li>
                        <li><a href="/careers" className="hover:text-[#E11D2E] transition-colors">Careers</a></li>
                        <li><a href="/blog" className="hover:text-[#E11D2E] transition-colors">Blog</a></li>
                        <li><a href="/partners" className="hover:text-[#E11D2E] transition-colors">Partner with us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-base">Support</h4>
                    <ul className="space-y-3 text-[#b8c0cc]">
                        <li><a href="/faq" className="hover:text-[#E11D2E] transition-colors">FAQs</a></li>
                        <li><a href="/terms" className="hover:text-[#E11D2E] transition-colors">Terms & Conditions</a></li>
                        <li><a href="/privacy" className="hover:text-[#E11D2E] transition-colors">Privacy Policy</a></li>
                        <li><a href="/refunds" className="hover:text-[#E11D2E] transition-colors">Refund Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6 text-base">Newsletter</h4>
                    <p className="text-[#b8c0cc] mb-4 text-xs">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <div className="flex flex-col gap-2">
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full pl-9 pr-4 py-2.5 bg-[#1c212b] border border-[#2a3140] rounded-lg text-sm outline-none focus:border-[#E11D2E] transition-all placeholder:text-gray-500 text-white"
                            />
                        </div>
                        <button className="w-full bg-[#E11D2E] text-white py-2.5 rounded-lg text-sm font-bold hover:bg-[#C2000B] transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-[#2a3140] flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Mukesh Departmental Store. All rights reserved.</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                    Made with <Heart size={12} className="text-[#E11D2E] fill-[#E11D2E]" /> in Lucknow
                </div>
            </div>
        </footer>
    );
}

