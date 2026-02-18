'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import Deals from '@/components/Deals';
import FeaturedProducts from '@/components/FeaturedProducts';
import SocialProof from '@/components/SocialProof';
import PromoBanner from '@/components/PromoBanner';
import WhyShop from '@/components/WhyShop';
import Location from '@/components/Location';
import ReviewsSection from '@/components/ReviewsSection';
import StoreExperience from '@/components/StoreExperience';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import FlashDealPopup from '@/components/FlashDealPopup';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-[#0f1115] pb-20 md:pb-0 font-sans text-white selection:bg-[#E11D2E]/20 selection:text-[#E11D2E]">
            <Navbar />
            <Hero />

            <div className="space-y-8 md:space-y-12">
                <CategoryGrid />
                <PromoBanner />
                <Deals />
                <FeaturedProducts />
                <SocialProof />
                <ReviewsSection />
                <WhyShop />
                <Location />
            </div>

            <Footer />

            <CartDrawer />
            <FlashDealPopup />
        </main>
    );
}
