import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import BottomNav from "@/components/BottomNav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuickKart | Groceries in Minutes",
  description: "Fresh groceries delivered in 10-15 minutes. Fruits, vegetables, snacks, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased bg-dark text-text-primary font-sans overflow-x-hidden selection:bg-green selection:text-white" suppressHydrationWarning>
        <CartProvider>
          <CartDrawer />
          {children}
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
