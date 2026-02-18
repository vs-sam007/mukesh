'use client';

import React from 'react';
import { Star, Users, PackageCheck, Heart } from 'lucide-react';

export default function SocialProof() {
    return (
        <section className="py-12 bg-[#161a22] border-y border-[#2a3140]">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#1c212b] rounded-full flex items-center justify-center shadow-sm mb-4">
                        <Star className="text-yellow-400 fill-current" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">4.8/5</h3>
                    <p className="text-[#b8c0cc] text-sm">Customer Rating</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#1c212b] rounded-full flex items-center justify-center shadow-sm mb-4">
                        <Users className="text-[#E11D2E]" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">10,000+</h3>
                    <p className="text-[#b8c0cc] text-sm">Happy Customers</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#1c212b] rounded-full flex items-center justify-center shadow-sm mb-4">
                        <PackageCheck className="text-green-500" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">5,000+</h3>
                    <p className="text-[#b8c0cc] text-sm">Products Available</p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-[#1c212b] rounded-full flex items-center justify-center shadow-sm mb-4">
                        <Heart className="text-pink-500 fill-current" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Trusted</h3>
                    <p className="text-[#b8c0cc] text-sm">by Families Daily</p>
                </div>

            </div>
        </section>
    );
}
