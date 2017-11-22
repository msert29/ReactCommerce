import {
  AddToCart,
  RemoveItemCart,
  UpdateExistingItemQuantity,
  RemoveSingleItemFromCart
} from "../config/ActionTypes";

export function AddCart(product) {
  return {
    type: AddToCart,
    product,
  };
}

export function RemoveCart(index, product) {
  return {
    type: RemoveItemCart,
    index,
    product,
  };
}

export function UpdateExistingItemQuantityCart(index, product, quantity) {
  return {
    type: UpdateExistingItemQuantity,
    index,
    product,
    quantity,
  };
}

export function RemoveSingleItemCart(index, product, quantity) {
  return {
    type: RemoveSingleItemFromCart,
    index,
    product,
    quantity,
  };
}

