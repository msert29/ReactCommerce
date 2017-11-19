import {
  AddToCart,
  RemoveItemCart,
  AddSingleItemToCart,
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

export function AddSingleItemCart(index, product, quantity) {
  return {
    type: AddSingleItemToCart,
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

