function calculateDiscount(price, percent) {
  return +(price * (percent / 100)).toFixed(2);
}

module.exports = { calculateDiscount };