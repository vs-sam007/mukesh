'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MapPin, Clock, CreditCard, ChevronRight, CheckCircle, Truck } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
    const [step, setStep] = useState(1);

    const steps = [
        { id: 1, title: 'Address', icon: MapPin },
        { id: 2, title: 'Delivery Slot', icon: Clock },
        { id: 3, title: 'Payment', icon: CreditCard },
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900 font-sans">
            <Navbar />

            <div className="pt-24 pb-10 px-4 max-w-4xl mx-auto">
                <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center justify-center gap-2 text-[#E11D2E] mb-8 shadow-sm">
                    <Truck size={20} className="animate-bounce" />
                    <span className="font-bold">Arriving in 38 minutes to Home</span>
                </div>

                <div className="flex justify-between items-center mb-10 relative px-4">
                    {/* Progress Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 rounded-full" />
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-[#E11D2E] transition-all duration-500 -z-10 rounded-full"
                        style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                    />

                    {steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                            <motion.div
                                animate={{
                                    backgroundColor: s.id <= step ? '#E11D2E' : '#F3F4F6',
                                    color: s.id <= step ? '#FFFFFF' : '#9CA3AF',
                                    scale: s.id === step ? 1.1 : 1,
                                    borderColor: s.id <= step ? '#E11D2E' : '#F3F4F6'
                                }}
                                className="w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all border-4"
                            >
                                {s.id < step ? <CheckCircle size={18} /> : <s.icon size={18} />}
                            </motion.div>
                            <span className={`text-xs font-bold ${s.id <= step ? 'text-[#E11D2E]' : 'text-gray-400'}`}>
                                {s.title}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Left: Steps Content */}
                    <div className="md:col-span-2 space-y-6">
                        {step === 1 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white border border-red-50 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><MapPin className="text-[#E11D2E]" /> Select Address</h2>
                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl border border-[#E11D2E] bg-red-50 cursor-pointer flex justify-between items-center shadow-sm">
                                        <div>
                                            <h4 className="font-bold text-gray-900">Home</h4>
                                            <p className="text-sm text-gray-500">Flat 402, Green Valley Apts, Gomti Nagar, Lucknow</p>
                                        </div>
                                        <div className="w-5 h-5 rounded-full border-2 border-[#E11D2E] flex items-center justify-center">
                                            <div className="w-2.5 h-2.5 bg-[#E11D2E] rounded-full" />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl border border-gray-100 hover:border-red-200 cursor-pointer bg-white hover:bg-gray-50 transition-all">
                                        <div>
                                            <h4 className="font-bold text-gray-900">Office</h4>
                                            <p className="text-sm text-gray-500">Tech Park, Sector 62, Noida</p>
                                        </div>
                                    </div>
                                    <button className="w-full py-3 border border-dashed border-red-200 rounded-xl text-[#E11D2E] font-bold text-sm hover:bg-red-50 transition-colors">
                                        + Add New Address
                                    </button>
                                </div>
                                <button onClick={() => setStep(2)} className="w-full mt-6 bg-gradient-to-r from-[#E11D2E] to-[#BE123C] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all">
                                    Confirm Address
                                </button>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white border border-red-50 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><Clock className="text-[#E11D2E]" /> Delivery Slot</h2>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 rounded-xl border border-[#E11D2E] bg-red-50 cursor-pointer text-center shadow-sm">
                                        <h4 className="font-bold text-[#E11D2E] text-lg">Instant</h4>
                                        <p className="text-xs text-gray-500">Delivery in 15 mins</p>
                                    </div>
                                    <div className="p-4 rounded-xl border border-gray-100 bg-white cursor-pointer text-center hover:border-red-200 hover:bg-gray-50 transition-all">
                                        <h4 className="font-bold text-gray-900 text-lg">Tomorrow</h4>
                                        <p className="text-xs text-gray-500">Morning 8 AM - 10 AM</p>
                                    </div>
                                </div>
                                <button onClick={() => setStep(3)} className="w-full mt-6 bg-gradient-to-r from-[#E11D2E] to-[#BE123C] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all">
                                    Proceed to Payment
                                </button>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-white border border-red-50 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900"><CreditCard className="text-[#E11D2E]" /> Payment Option</h2>
                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl border border-[#E11D2E] bg-red-50 cursor-pointer flex items-center gap-3">
                                        <div className="w-10 h-6 bg-white rounded flex items-center justify-center border border-gray-200"><span className="text-xs font-bold text-gray-900">UPI</span></div>
                                        <span className="font-bold text-gray-900">Google Pay / PhonePe (Recommended)</span>
                                    </div>
                                    <div className="p-4 rounded-xl border border-gray-100 bg-white cursor-pointer flex items-center gap-3 hover:bg-gray-50 transition-all">
                                        <CreditCard size={20} className="text-gray-500" />
                                        <span className="text-gray-900">Credit / Debit Card</span>
                                    </div>
                                    <div className="p-4 rounded-xl border border-gray-100 bg-white cursor-pointer flex items-center gap-3 hover:bg-gray-50 transition-all">
                                        <span className="text-gray-900">💵 Cash on Delivery</span>
                                    </div>
                                </div>
                                <button className="w-full mt-6 bg-gradient-to-r from-[#E11D2E] to-[#BE123C] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all shadow-md">
                                    Pay ₹347 & Place Order
                                </button>
                            </motion.div>
                        )}
                    </div>

                    {/* Right: Summary */}
                    <div className="h-fit bg-white border border-red-50 rounded-2xl p-6 sticky top-24 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Total MRP</span>
                                <span>₹420</span>
                            </div>
                            <div className="flex justify-between text-sm text-[#E11D2E]">
                                <span>Total Discount</span>
                                <span>-₹98</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Delivery Fee</span>
                                <span>₹15</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>Handling Fee</span>
                                <span>₹10</span>
                            </div>
                            <div className="h-px bg-gray-100 my-2" />
                            <div className="flex justify-between font-bold text-gray-900 text-lg">
                                <span>To Pay</span>
                                <span>₹347</span>
                            </div>
                        </div>
                        <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-xs text-gray-600">
                            You are saving <span className="text-[#E11D2E] font-bold">₹98</span> on this order!
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
