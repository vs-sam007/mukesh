'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Aisles() {
    const containerRef = useRef<HTMLDivElement>(null);
    const aisleRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(aisleRef.current, {
                x: '-200%', // Move aisles horizontally based on scroll
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=200%',
                    scrub: 1,
                    pin: true,
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const categories = [
        { name: 'Fresh Produce', color: 'bg-green-100', img: '🥦' },
        { name: 'Dairy & Bakery', color: 'bg-yellow-100', img: '🥛' },
        { name: 'Snacks & Drinks', color: 'bg-red-100', img: '🍫' },
        { name: 'Household', color: 'bg-blue-100', img: '🧴' },
        { name: 'Personal Care', color: 'bg-purple-100', img: '🧼' },
    ];

    return (
        <div ref={containerRef} className="h-screen w-full overflow-hidden bg-slate-50 flex items-center relative">
            <div className="absolute top-10 left-10 z-10">
                <h2 className="text-4xl font-bold text-slate-800">Explore Our Aisles</h2>
                <p className="text-slate-500">Scroll to browse categories</p>
            </div>

            <div ref={aisleRef} className="flex gap-20 pl-20 w-[300vw]">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`w-[60vw] md:w-[40vw] h-[60vh] ${cat.color} rounded-3xl shadow-2xl flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-500`}
                        style={{
                            perspective: '1000px',
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${idx % 2 === 0 ? 5 : -5}deg)`
                        }}
                    >
                        <div className="text-9xl mb-8 drop-shadow-xl">{cat.img}</div>
                        <h3 className="text-3xl font-bold text-slate-800">{cat.name}</h3>
                        <button className="mt-8 px-6 py-3 bg-white text-slate-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                            View Products
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
