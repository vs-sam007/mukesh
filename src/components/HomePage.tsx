'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OffersMarquee from '@/components/OffersMarquee';
import CategoryGrid from '@/components/CategoryGrid';
import DailyOffers from '@/components/DailyOffers';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewArrivals from '@/components/NewArrivals';
import BlogSection from '@/components/BlogSection';
import ReviewsSection from '@/components/ReviewsSection';
import AppDownload from '@/components/AppDownload';
import FlashDealPopup from '@/components/FlashDealPopup';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <main className="w-full bg-white min-h-screen relative font-sans text-gray-900 pb-10 overflow-x-hidden">
            <Navbar />
            <Hero />
            <OffersMarquee />
            <CategoryGrid />
            <FlashDealPopup />
            <DailyOffers />
            <FeaturedProducts />
            <NewArrivals />
            <BlogSection />
            <ReviewsSection />
            <AppDownload />
            <Footer />
        </main>
    );
}
