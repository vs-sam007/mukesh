import React from 'react';
import { Truck, ShieldCheck, CreditCard, RotateCcw } from 'lucide-react';

export default function TrustStrip() {
    return (
        <div className="bg-[#111827] text-white py-2 px-4 text-[10px] md:text-xs font-medium tracking-wide border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
                <div className="flex items-center gap-4 md:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap w-full md:w-auto justify-center md:justify-start">
                    <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                        <Truck size={12} className="text-[#E11D2E]" /> Free Delivery Above ₹499
                    </span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block" />
                    <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                        <RotateCcw size={12} className="text-[#E11D2E]" /> Easy Returns
                    </span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block" />
                    <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                        <ShieldCheck size={12} className="text-[#E11D2E]" /> Secure Payments
                    </span>
                    <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block" />
                    <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
                        <CreditCard size={12} className="text-[#E11D2E]" /> Cash on Delivery Available
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-4 text-xs text-gray-400">
                    <a href="/help" className="hover:text-white transition-colors">Help Center</a>
                    <a href="/track-order" className="hover:text-white transition-colors">Track Order</a>
                </div>
            </div>
        </div>
    );
}
