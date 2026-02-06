
export function calculateTax(price, category) {
  let taxRate = 0.0475; // default 4.75%

  if (category === "groceries") {
    taxRate = 0.03; // groceries tax
  }

  return price * taxRate;
}