import {AddToCart, RemoveItemCart, AddSingleItemToCart, RemoveSingleItemFromCart} from '../config/ActionTypes'

export function AddCart (product, totalPrice) {
  return {
    type: AddToCart,
    product,
    totalPrice
  }
}

export function RemoveCart (index, product, totalPrice) {
  return {
    type: RemoveItemCart,
    index,
    product,
    totalPrice
  }
}

export function AddSingleItemCart (index, product, quantity, totalPrice) {
  return {
    type: AddSingleItemToCart,
    index,
    product,
    quantity,
    totalPrice
  }
}

export function RemoveSingleItemCart (index, product, quantity, totalPrice) {
  return {
    type: RemoveSingleItemFromCart,
    index,
    product,
    quantity,
    totalPrice
  }
}