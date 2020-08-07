import { combineReducers } from "@reduxjs/toolkit";

const RootReducer = combineReducers({});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
