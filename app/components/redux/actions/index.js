import {ADD_PRODUCT, REMOVE_PRODUCT} from '../../../config/constants'

export function addProduct (product) {
  return {
    type: ADD_PRODUCT,
    product: product
  }
}

export function removeProduct (product) {
  return {
    type: REMOVE_PRODUCT,
    product: product,
    index: 0
  }
}