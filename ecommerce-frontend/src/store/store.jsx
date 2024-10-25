import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { clientReducer } from "./reducers/clientReducer";
import { cartReducer } from "./reducers/cartReducer";
const reducer = combineReducers({
  product: productReducer,
  client: clientReducer,
  cart: cartReducer,
});
export const store = createStore(reducer, applyMiddleware(thunk));
