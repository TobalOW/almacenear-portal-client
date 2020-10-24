import { createSlice } from "@reduxjs/toolkit";

import { notify } from "../../../presentation/atoms/Toast";
import { axiosInstance } from "../../../utils";

// Slice
const slice = createSlice({
  name: "shop",
  initialState: {
    shop: null,
    shops: [],
    availableProducts: [],
  },
  reducers: {
    getShopById: ({ shops }) => (id = "") => {
      return shops.find((shop) => shop.id === id);
    },
  },
});

// Actions // dispatchers
// const { loginSuccess, logoutSuccess } = slice.actions;

export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/products");
    return data;
  } catch (_error) {
    notify("error", "Ocurrió un error al obtener los productos");
  }
};

export const getShops = async () => {
  try {
    const products = await axiosInstance.get("/shops");
    return products;
  } catch (_error) {
    notify("error", "Ocurrió un error al obtener tus almacenes");
  }
};

export default slice.reducer;
