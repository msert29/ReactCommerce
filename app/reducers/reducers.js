import { combineReducers } from 'redux'
import { AppRoutes } from '../config/Routes'
import { AddToCart, RemoveItemCart, AddSingleItemToCart, RemoveSingleItemFromCart } from '../config/ActionTypes'

const initialState = {
  nav: AppRoutes.router.getStateForAction(AppRoutes.router.getActionForPathAndParams('Home')),
  products: [],
  totalPrice: 0,
  deliveryEnabled: false,
  collectionEnabled: false
}

const navReducer = (state = initialState.nav, action) => {
  const nextState = AppRoutes.router.getStateForAction(action, state)
  return nextState || state
}

function CartReducer (state = initialState, action) {
  switch (action.type) {
    case AddToCart:
      return {
        ...state,
        products: [...state.products, action.product],
        totalPrice: action.totalPrice
      }

    case RemoveItemCart:
      return {
        ...state,
        products: [
          ...state.products.slice(0, action.index),
          ...state.products.slice(action.index + 1)
        ],
        totalPrice: action.totalPrice
      }

    case AddSingleItemToCart:
      return {
        ...state,
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              quantity: action.quantity
            })
          }
          return product
        }),
        totalPrice: action.totalPrice
      }

    case RemoveSingleItemFromCart:
      return {
        ...state,
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              quantity: action.quantity
            })
          }
          return product
        }),
        totalPrice: action.totalPrice
      }

    default:
      return state
  }
}

export const appReducer = combineReducers({
  nav: navReducer,
  cart: CartReducer
})
