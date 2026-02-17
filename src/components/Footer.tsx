'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-red-50 pt-16 pb-8 px-4 text-sm relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Mukesh Departmental<span className="text-[#E11D2E]"></span> Store</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                        Groceries delivered in minutes. Fresh produce, daily essentials, and more at your doorstep.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-gray-400 group"><Facebook size={18} className="group-hover:scale-110 transition-transform" /></a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all text-gray-400 group"><Instagram size={18} className="group-hover:scale-110 transition-transform" /></a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all text-gray-400 group"><Twitter size={18} className="group-hover:scale-110 transition-transform" /></a>
                        <a href="#" className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all text-gray-400 group"><Linkedin size={18} className="group-hover:scale-110 transition-transform" /></a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">Company</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="/about" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">About Us</a></li>
                        <li><a href="/contact" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">Contact Us</a></li>
                        <li><a href="/blog" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">Help & Support</h4>
                    <ul className="space-y-3 text-gray-500">
                        <li><a href="/contact" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">Return Policy</a></li>
                        <li><a href="/contact" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">Shipping Policy</a></li>
                        <li><a href="/contact" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">Privacy Policy</a></li>
                        <li><a href="/contact" className="hover:text-[#E11D2E] transition-colors hover:translate-x-1 block duration-200">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6 text-lg">Contact Info</h4>
                    <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                        565-KA/226-A, opposite Police Chowki Saraffa, Amrudhi Bagh, Amrudhai Bag, Alambagh, Lucknow, Uttar Pradesh 226005
                    </p>
                    <p className="text-[#E11D2E] font-bold mb-4 flex items-center gap-2">
                        <span>📞</span> +91 94153 30844
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        Made with <Heart size={12} className="text-[#E11D2E] fill-[#E11D2E]" /> in Lucknow
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 text-center text-gray-400 text-xs">
                <p>© {new Date().getFullYear()} Mukesh Departmental Store. All rights reserved.</p>
            </div>
        </footer>
    );
}
