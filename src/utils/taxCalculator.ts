
export  function calculateTax(price:number, category:string) {
  let taxRate = 0.0475; // default 4.75%
    if (category === "groceries") {
      taxRate = 0.03; // groceries tax
    }
    return price * taxRate;
  }

  console.log(calculateTax(100, "electronics")); // 4.75
  const tax = calculateTax(200, "groceries");
  console.log(tax);


// export function calculateTax(price, category) 