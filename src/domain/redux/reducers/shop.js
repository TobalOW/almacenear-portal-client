import { createSlice } from "@reduxjs/toolkit";

import { axiosInstance, requiredParam } from "../../../utils";

import { notify } from "../../../presentation/atoms/Toast";

/**
 * @var slice
 * @description Handles shop management operations & requests
 */
const slice = createSlice({
  name: "shop",
  initialState: {
    shop: null,
    shops: [],
    allProducts: [],
  },
  reducers: {
    getShopById: ({ shops }) => (id = "") => {
      return shops.find((shop) => shop.id === id);
    },
  },
});

// Actions // dispatchers
// const { loginSuccess, logoutSuccess } = slice.actions;

/**
 * @method getProducts
 * @description Get all available products
 * @todo Optimize product search (e.g. by category)
 */
export const getProducts = async () => {
  try {
    const { data } = await axiosInstance.get("/products");
    return data;
  } catch (_error) {
    notify("error", "Ocurrió un error al obtener los productos");
  }
};

/**
 * @method getShops
 * @description List all shops
 */
export const getShops = async () => {
  try {
    const { data } = await axiosInstance.get("/shops");
    return data;
  } catch (error) {
    notify("error", "Ocurrió un error al obtener tus almacenes");
    throw new Error(error);
  }
};

/**
 * @method updateShopProducts
 * @description Update products from a specific shop, by ID
 * @param {Store} store Store to be updated
 * @param {Product[]} products New product list
 * @todo Update route & params
 */
export const updateShopProducts = async (
  shop = requiredParam(),
  products = requiredParam()
) => {
  try {
    const { status } = await axiosInstance.put(`/shop/products`, {
      shop,
      products,
    });

    if (status === 202) {
      notify("success", "Productos actualizados");
      return true;
    }

    throw new Error("Shop not updated", shop);
  } catch (_error) {
    notify("error", "Los productos no fueron actualizados");
  }
};

export default slice.reducer;
