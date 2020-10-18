import React from "react";
import { Flex, List, ListItem } from "@chakra-ui/core";

import { StoreItem } from "./StoreItem";

interface Store {
  id: number;
  name: string;
  address: string;
  rut: string;
  type: string;
  patente: string;
  giro: string;
  picture: string;
}

const devStores: Store[] = [
  {
    id: 1,
    name: "Mi tienda",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Verdulería",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x300",
  },
  {
    id: 2,
    name: "Mi panadería",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Panadería",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x300",
  },
  {
    id: 3,
    name: "Mi taller",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Bicicletas",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x300",
  },
  {
    id: 4,
    name: "Mi taller",
    address: "Almirante Zegers 123",
    rut: "12.345.678-9",
    type: "Bicicletas",
    patente: "Placeholder",
    giro: "Placeholder",
    picture: "https://via.placeholder.com/500x300",
  },
];

const StoreList = () => {
  return (
    <Flex as={List} wrap="wrap" justifyContent="space-around">
      {devStores.map((store) => (
        <ListItem key={store.id} my="2">
          <StoreItem store={store} />
        </ListItem>
      ))}
    </Flex>
  );
};

export { StoreList };
