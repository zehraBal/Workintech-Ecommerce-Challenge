import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./Reducers/productReducer";
import { clientReducer } from "./Reducers/clientReducer";
import { cartReducer } from "./Reducers/cartReducer";
const reducer = combineReducers({
  product: productReducer,
  client: clientReducer,
  cart: cartReducer,
});
export const store = createStore(reducer, applyMiddleware(thunk));
