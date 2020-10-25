import React, { useEffect, useState } from "react";
import { Box, Grid, List, ListItem } from "@chakra-ui/core";

import { Product, Store } from "../../../interfaces";

import Modal from "../../organisms/Modal";

import {
  getProducts,
  getShops,
  updateShopProducts,
} from "../../../domain/redux/reducers/shop";

import { StoreItem, ProductManager } from "./index";
import { requiredParam } from "../../../utils";
import Loader from "../../atoms/Loader";

const StoreList = () => {
  const [shops, setShops] = useState<Store[]>([]);
  const [managedStore, setProductManager] = useState<Store>();
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllShops().then(getAllProducts);
  }, [allProducts.length]);

  const getAllShops = () => {
    return getShops().then((response: Store[] = []) => {
      setShops(response);
    });
  };

  const getAllProducts = () => {
    return getProducts().then(setAllProducts);
  };

  const saveProducts = async (shop: Store = requiredParam()) => {
    const response = await updateShopProducts(shop, []);

    response && setProductManager(undefined);
  };

  return (
    <Box p="5">
      <Grid as={List} gridTemplateColumns={["1fr", "1fr 1fr"]} gridGap="15px">
        {!shops && <Loader />}
        {shops.map((shop) => (
          <ListItem key={shop.id}>
            <StoreItem store={shop} manageProducts={setProductManager} />
          </ListItem>
        ))}
      </Grid>
      <Modal
        isOpen={!!managedStore}
        size="960px"
        onSave={() => saveProducts(managedStore)}
        onClose={() => setProductManager(undefined)}
      >
        <ProductManager store={managedStore} allProducts={allProducts} />
      </Modal>
    </Box>
  );
};

export { StoreList };
