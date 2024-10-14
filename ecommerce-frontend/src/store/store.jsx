import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { clientReducer } from "./Reducers/clientReducer";
import { productReducer } from "./Reducers/productReducer";
import { cartReducer } from "./Reducers/cartReducer";
const reducer = combineReducers({
  product: productReducer,
  client: clientReducer,
  cart: cartReducer,
});
export const store = createStore(reducer, applyMiddleware(thunk));
