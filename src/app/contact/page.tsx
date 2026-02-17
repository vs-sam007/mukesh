'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

export default function ContactPage() {
    const [openPolicy, setOpenPolicy] = useState<number | null>(0);

    const policies = [
        {
            title: "Return & Refund Policy",
            content: "We have a 'Start-to-Finish' fresh guarantee. If you are not satisfied with the quality of vegetables or fruits, we offer a no-questions-asked replacement within 24 hours of delivery. For packaged items, returns are accepted only if the product is damaged or expired upon delivery. Refunds are processed to your original payment method within 5-7 business days."
        },
        {
            title: "Shipping & Delivery Policy",
            content: "We promise delivery within 30-60 minutes for all orders within Alambagh and surrounding areas (5km radius). Free delivery on orders above ₹199. For orders below ₹199, a nominal delivery fee of ₹15 applies. We operate from 8 AM to 10 PM daily."
        },
        {
            title: "Privacy Policy",
            content: "Mukesh Departmental Store respects your privacy. We only collect necessary information (Name, Address, Phone) to process your orders. We do not share your data with third-party advertisers. Your location data is used solely for delivery tracking purposes."
        },
        {
            title: "Terms & Conditions",
            content: "By using our website, you agree to our terms. Prices are subject to change without notice. We reserve the right to cancel orders due to stock unavailability. All disputes are subject to Lucknow jurisdiction. Images are for representation purposes only."
        }
    ];

    return (
        <main className="min-h-screen bg-dark text-text-primary font-sans">
            <Navbar />

            <div className="pt-24 pb-10 px-4 max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-display font-bold mb-10 text-center"
                >
                    Contact Us & <span className="text-green">Policies</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left: Store Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div className="bg-dark-card border border-white/5 rounded-3xl p-8 hover:border-green/30 transition-colors shadow-lg">
                            <h2 className="text-2xl font-bold mb-6 text-white">Mukesh Departmental Store</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center shrink-0 text-green">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Visit Us</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            565-KA/226-A, opposite Police Chowki Saraffa, <br />
                                            Amrudhi Bagh, Amrudhai Bag, Alambagh, <br />
                                            Lucknow, Uttar Pradesh 226005
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center shrink-0 text-blue-500">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Call Us</h3>
                                        <p className="text-text-secondary text-sm">094153 30844</p>
                                        <p className="text-xs text-text-secondary mt-1">Mon - Sun, 8:00 AM - 10:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center shrink-0 text-yellow-500">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Email Us</h3>
                                        <p className="text-text-secondary text-sm">support@mukeshstore.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Policies Accordion */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-white">Store Policies</h2>
                            <div className="space-y-3">
                                {policies.map((policy, idx) => (
                                    <div key={idx} className="bg-dark-card border border-white/5 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenPolicy(openPolicy === idx ? null : idx)}
                                            className="w-full flex justify-between items-center p-4 hover:bg-white/5 transition-colors text-left"
                                        >
                                            <span className="font-bold text-sm md:text-base text-white">{policy.title}</span>
                                            <ChevronDown
                                                size={18}
                                                className={`text-text-secondary transition-transform duration-300 ${openPolicy === idx ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                        <motion.div
                                            initial={false}
                                            animate={{ height: openPolicy === idx ? 'auto' : 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="p-4 pt-0 text-sm text-text-secondary leading-relaxed border-t border-white/5">
                                                {policy.content}
                                            </p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-dark-card border border-white/5 rounded-3xl p-8 h-fit sticky top-24"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-white">Send us a Message</h2>
                        <p className="text-text-secondary text-sm mb-6">Have a query? We will get back to you within 2 hours.</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-text-primary uppercase">Name</label>
                                    <input type="text" className="w-full bg-dark border border-white/10 rounded-xl p-3 text-sm focus:border-green outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-text-primary uppercase">Phone</label>
                                    <input type="tel" className="w-full bg-dark border border-white/10 rounded-xl p-3 text-sm focus:border-green outline-none transition-colors" placeholder="9876543210" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-text-primary uppercase">Email</label>
                                <input type="email" className="w-full bg-dark border border-white/10 rounded-xl p-3 text-sm focus:border-green outline-none transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-text-primary uppercase">Message</label>
                                <textarea className="w-full bg-dark border border-white/10 rounded-xl p-3 text-sm h-32 resize-none focus:border-green outline-none transition-colors" placeholder="How can we help you?" />
                            </div>

                            <button className="w-full bg-green text-dark font-bold py-3.5 rounded-xl hover:bg-green-hover transition-colors shadow-lg shadow-green/20">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
