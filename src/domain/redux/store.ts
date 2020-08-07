import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers/RootReducer";

const store = configureStore({
  reducer: RootReducer,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducers/RootReducer", () => {
    const newRootReducer = RootReducer;
    store.replaceReducer(newRootReducer);
  });
}

export type AppDispatch = typeof store.dispatch;

export default store;
