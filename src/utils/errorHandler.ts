import type { Product } from "../models/Product.js";

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export function validateProduct(prod: Product) {
  if (prod.title.length < 15) {
    throw new ValidationError("Product title length should be less than 15");
  }
}

// try {
  
//   validateProduct(p1);
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.error("Validation Error:", error.message);
//   } else {
//     console.error("Unknown Error:", error.message);
//   }
// }
//  function handleError(error: Strin): void {
//   if (error instanceof AppError) {
//     console.error("Application Error:", error.getMessage());
//   } else {
//     console.error("Unexpected Error:", error);
//   }
// }
