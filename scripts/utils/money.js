export function formatCurrency(priceCents) {
  return (priceCents / 100).toFixed(2);
}

export default formatCurrency() //with just 1 value without {}, otherwise, we use {}