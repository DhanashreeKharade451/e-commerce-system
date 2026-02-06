import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";
import { fetchAPIData } from "../services/apiService";
import {fetchAPIData} from "../services/apiService";

class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}   

displayDetails() {
    console.log(`Product: ${this.title}, Price: $${this.price}`);
}   

getPriceWithDiscount() {
    const discount = calculateDiscount(this.price, this.discountPercentage);
    return this.price - discount;
}

getPriceWithTax() {
    const tax = calculateTax(this.price, this.category);
    return this.price + tax;
}

