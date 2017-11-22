import { minimumOrderFee } from "./constants";
import { createSelector } from "reselect";

const productsSelector = state => state.products.products;

export const totalItemCountSelector = createSelector(
  productsSelector,
  products => (products.reduce((total, product) => total + product.quantity, 0))
);

export const totalPriceSelector = createSelector(
  [productsSelector, totalItemCountSelector],
  (products, totalItems) => {
    if (totalItems <= 0) {
      return 0;
    }
    let total = products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return parseFloat(total.toFixed(2));
  }
);

export const deliverySelector = createSelector(
  totalPriceSelector,
  totalPrice => totalPrice >= minimumOrderFee
);

export const collectionSelector = createSelector(
  totalItemCountSelector,
  totalItems => totalItems >= 1
);
