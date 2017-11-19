import { minimumOrderFee } from "./constants";
export function getTotalItemCount(products) {
  if (!products.length) return 0;
  else return products.reduce((total, product) => total + product.quantity, 0);
}

export function getTotalPrice(products) {
  if (!products.length) return 0;
  else
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
}

export function checkDeliveryEnabled(products) {
  let totalPrice = products.reduce((total, product) => total + product.price *  product.quantity, 0);
  return totalPrice >= minimumOrderFee
}

export function checkCollectionEnabled(products) {
  return products.length >= 1;
}