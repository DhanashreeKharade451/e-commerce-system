import { calculateDiscount } from "../utils/discountCalculator.ts";
import { calculateTax } from "../utils/taxCalculator.ts";

//import {fetchAPIData} from "../services/apiService";

export class Product {
    id: number;
    title: string;
  
    price: number;
    discountPercentage: number;
    
    
    category: string;
  
   
    constructor(id: number, title: string, price: number, discountPercentage: number, category: string ){
        this.id = id;
        this.title = title;
        this.price =price;
        this.discountPercentage = discountPercentage;
        this.category = category;
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

} 