import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// slices
import user from "./reducers/user";
import shop from "./reducers/shop";

// reduce
const reducer = combineReducers({ user, shop });
const store = configureStore({ reducer });

export default store;
