import { createStore, combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers({ cartReducer });
export const store = createStore(rootReducer);
