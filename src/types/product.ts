export interface ProductProps {
    id: string;
    title: string;
    price: string;
    originalPrice: string;
    weight: string;
    image: string;
    discount?: string;
    time?: string;
    rating?: number;
    isNew?: boolean;
}
