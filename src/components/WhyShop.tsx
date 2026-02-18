'use client';

import React from 'react';
import { Clock, Tag, RotateCcw, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: <Clock size={32} className="text-[#E11D2E]" />,
        title: "Superfast Delivery",
        desc: "Get your order delivered in minutes."
    },
    {
        icon: <Tag size={32} className="text-[#E11D2E]" />,
        title: "Best Prices & Offers",
        desc: "Cheaper than your local supermarket."
    },
    {
        icon: <RotateCcw size={32} className="text-[#E11D2E]" />,
        title: "Easy Returns",
        desc: "Not satisfied? Return at your doorstep."
    },
    {
        icon: <ShieldCheck size={32} className="text-[#E11D2E]" />,
        title: "Secure Payments",
        desc: "100% secure payment gateways."
    }
];

export default function WhyShop() {
    return (
        <section className="py-16 px-4 bg-[#161a22]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-white">Why Shop With Us?</h2>
                    <p className="text-[#b8c0cc] mt-2">We promise quality, speed, and satisfaction.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-[#1c212b] border border-[#2a3140] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-red-900/10">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-[#b8c0cc] text-sm leading-relaxed max-w-[200px]">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
