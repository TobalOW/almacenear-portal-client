import React, { useState } from "react";
import { Box, Grid, List, ListItem } from "@chakra-ui/core";

import { Store } from "../../../interfaces";

import Modal from "../../organisms/Modal";

import { StoreItem, StoreProducts } from "./index";

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
  const [storeProductsModal, setStoreProducts] = useState(undefined);

  return (
    <Box p="5">
      <Grid as={List} gridTemplateColumns="1fr 1fr" gridGap="15px">
        {devStores.map((store) => (
          <ListItem key={store.id}>
            <StoreItem store={store} manageProducts={setStoreProducts} />
          </ListItem>
        ))}
      </Grid>
      <Modal
        isOpen={storeProductsModal}
        size="960px"
        onSave={() => setStoreProducts(undefined)}
        onClose={() => setStoreProducts(undefined)}
      >
        <StoreProducts store={storeProductsModal} />
      </Modal>
    </Box>
  );
};

export { StoreList };
