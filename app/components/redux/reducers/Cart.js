import {ADD_PRODUCT, REMOVE_PRODUCT} from '../../../config/constants'
const initialState = {
  products: []
}
const Cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product]
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products, ...state.products.slice(0, action.index).concat(state.products.slice(action.index + 1))
        ]
      }

    default:
      return state
  }
}

export default Cart