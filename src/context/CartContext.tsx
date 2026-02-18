'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    weight: string;
};

interface CartContextType {
    items: CartItem[];
    isDrawerOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, delta: number) => void;
    cartTotal: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [items, setItems] = useState<CartItem[]>([
        { id: '1', name: 'Amul Taaza Fresh Toned Milk', price: 52, image: '/images/Gemini_Generated_Image_w04n9iw04n9iw04n.png', quantity: 1, weight: '1 L' },
        { id: '13', name: 'Lays Magic Masala Chips', price: 20, image: '/images/Gemini_Generated_Image_w5pgr1w5pgr1w5pg.png', quantity: 2, weight: '50 g' }
    ]);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const addItem = (newItem: CartItem) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === newItem.id);
            if (existing) {
                return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { ...newItem, quantity: 1 }];
        });
        openDrawer();
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const updateQuantity = (id: string, delta: number) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + delta;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, isDrawerOpen, openDrawer, closeDrawer, addItem, removeItem, updateQuantity, cartTotal, itemCount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
