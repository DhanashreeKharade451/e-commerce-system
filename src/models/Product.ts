const { calculateDiscount } = require("../utils/discountCalculator");
const { calculateTax } = require("../utils/taxCalculator");

class Product {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.category = data.category;
  }