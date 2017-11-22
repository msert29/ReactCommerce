import { combineReducers } from "redux";
import { productsReducer } from "./ProductReducer";
import { navReducer } from "./NavigationReducer";


export const appReducer = combineReducers({
  nav: navReducer,
  products: productsReducer
  // cartAccumulator: cartProductPriceCountReducer
});
