import { combineReducers } from "redux";
import { AppRoutes } from "../config/Routes";
import {
  AddToCart,
  RemoveItemCart,
  AddSingleItemToCart,
  RemoveSingleItemFromCart
} from "../config/ActionTypes";

const initialState = {
  nav: AppRoutes.router.getStateForAction(
    AppRoutes.router.getActionForPathAndParams("Home")
  ),
  products: [],
  totalPrice: 0,
  totalItems: 0,
  deliveryEnabled: false,
  collectionEnabled: false
};

const initialCartState = {
  products: []
}


const navReducer = (state = initialState.nav, action) => {
  const nextState = AppRoutes.router.getStateForAction(action, state);
  return nextState || state;
};

function CartReducer(state = initialCartState, action) {
  switch (action.type) {
    case AddToCart:
      return {
        products: [...state.products, action.product],
      };

    case RemoveItemCart:
      return {
        products: [
          ...state.products.slice(0, action.index),
          ...state.products.slice(action.index + 1)
        ]
      };

    case AddSingleItemToCart:
      return {
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              quantity: action.quantity
            });
          }
          return product;
        })
      };

    case RemoveSingleItemFromCart:
      return {
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              quantity: action.quantity
            });
          }
          return product;
        })
      };

    default:
      return state;
  }
}

export const appReducer = combineReducers({
  nav: navReducer,
  cart: CartReducer,
});
