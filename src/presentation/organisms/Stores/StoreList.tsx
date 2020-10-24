import React, { useEffect, useState } from "react";
import { Box, Grid, List, ListItem } from "@chakra-ui/core";

import { Product, Store } from "../../../interfaces";

import Modal from "../../organisms/Modal";

import { StoreItem, ProductManager } from "./index";
import { getProducts } from "../../../domain/redux/reducers/shop";

const devStores: Store[] = [
  {
    id: 1,
    name: "Mi tienda",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Verdulería",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x220",
  },
  {
    id: 2,
    name: "Mi panadería",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Panadería",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x220",
  },
  {
    id: 3,
    name: "Mi taller",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Bicicletas",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x220",
  },
  {
    id: 4,
    name: "Mi taller",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Bicicletas",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x220",
  },
];

const StoreList = () => {
  const [availableProducts, setAvailableProducts] = useState([] as Product[]);

  useEffect(() => {
    setGlobalProducts();
  }, [availableProducts.length]);

  const setGlobalProducts = () => {
    getProducts().then(setAvailableProducts);
  };

  const [productManagerModal, setProductManager] = useState(null);

  return (
    <Box p="5">
      <Grid as={List} gridTemplateColumns="1fr 1fr" gridGap="15px">
        {devStores.map((store) => (
          <ListItem key={store.id}>
            <StoreItem store={store} manageProducts={setProductManager} />
          </ListItem>
        ))}
      </Grid>
      <Modal
        isOpen={!!productManagerModal}
        size="960px"
        onSave={() => setProductManager(null)}
        onClose={() => setProductManager(null)}
      >
        <ProductManager
          store={productManagerModal}
          availableProducts={availableProducts}
        />
      </Modal>
    </Box>
  );
};

export { StoreList };
