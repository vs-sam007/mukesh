'use client';

import React from 'react';
import { ShieldCheck, Tag, ThumbsUp, Truck, Clock } from 'lucide-react';

const features = [
    { icon: ShieldCheck, title: "Genuine Products", desc: "100% Authentic sourced directly." },
    { icon: Tag, title: "Best Prices", desc: "Lower prices than other markets." },
    { icon: Truck, title: "Home Delivery", desc: "Free delivery within 2km radius." },
    { icon: ThumbsUp, title: "Trusted Service", desc: "Serving Alambagh since 1990." },
    { icon: Clock, title: "Quick Billing", desc: "Fast checkout service everyday." },
];

export default function Features() {
    return (
        <section className="bg-white border-b border-slate-100 py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 md:flex-1 min-w-[200px]">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                            <f.icon size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-navy">{f.title}</h4>
                            <p className="text-xs text-slate-500">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
