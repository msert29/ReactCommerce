import {AddToCart, RemoveItemCart, UpdateItemQuantity} from '../config/ActionTypes'

export function AddCart (product) {
  return {
    type: AddToCart,
    product
  }
}

export function RemoveCart (product, index) {
  return {
    type: RemoveItemCart,
    product,
    index
  }
}

export function UpdateQuantity (product, quantity) {
  return {
    type: UpdateItemQuantity,
    product,
    quantity
  }
}