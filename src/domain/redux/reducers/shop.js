import { createSlice } from "@reduxjs/toolkit";

import { notify } from "../../../presentation/atoms/Toast";
import { axiosInstance } from "../../../utils";

// Slice
const slice = createSlice({
  name: "shop",
  initialState: {
    shop: null,
    shops: [],
  },
  reducers: {
    getShopById: ({ shops }) => (id = "") => {
      return shops.find((shop) => shop.id === id);
    },
  },
});

// Actions // dispatchers
// const { loginSuccess, logoutSuccess } = slice.actions;

const getProducts = () => {
  try {
    const products = axiosInstance.get("/products");
    return products;
  } catch (_error) {
    notify("error", "Ocurrió un error al obtener los productos");
  }
};

export { getProducts };
export default slice.reducer;
