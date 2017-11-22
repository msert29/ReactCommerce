import {
  AddToCart,
  RemoveItemCart,
  UpdateExistingItemQuantity,
  RemoveSingleItemFromCart
} from "../config/ActionTypes";

const productState = {
  products: []
};

export const productsReducer = (state = productState, action) => {
  switch (action.type) {
    case AddToCart:
      return {
        products: [...state.products, action.product]
      };

    case RemoveItemCart:
      return {
        products: [
          ...state.products.slice(0, action.index),
          ...state.products.slice(action.index + 1)
        ]
      };

    case UpdateExistingItemQuantity:
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
