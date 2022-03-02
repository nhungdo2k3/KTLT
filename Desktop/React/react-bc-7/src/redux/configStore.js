import { combineReducers, createStore } from "redux";
import { carDetailReducer } from "./carDetailReducer";
import { productDetailReducer } from "./productDetailReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  // Noi chua cac State
  carDetailReducer,
  productDetailReducer,
  cartReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
