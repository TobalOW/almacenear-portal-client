import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/core";

import { Product, Store } from "../../../interfaces";

import { StoreProductSingle } from "./index";

const testProducts: Product[] = [
  {
    title: "Mi producto",
    brand: "Mi Marca",
    weight: 1,
    unit: "Lt.",
    sku: 100200300,
    picture: "https://via.placeholder.com/200",
  },
  {
    title: "Algún Producto",
    brand: "Mi Marca",
    weight: 10,
    unit: "Kg.",
    sku: 200100300,
    picture: "https://via.placeholder.com/200",
  },
  {
    title: "Pantalla",
    brand: "LG",
    weight: 3.5,
    unit: "Kg.",
    sku: 300200100,
    picture: "https://via.placeholder.com/200",
  },
];

const StoreProducts = (props: any) => {
  const store: Store = props.store;
  const [storeProducts, setStoreProducts] = useState([] as Product[]);

  const productIsAlreadyAdded = (product: Product) => {
    return storeProducts.some(({ sku }) => sku === product.sku);
  };

  const addOrDeleteProduct = (product: Product) => {
    if (productIsAlreadyAdded(product)) {
      setStoreProducts([
        ...storeProducts.filter(({ sku }) => sku !== product.sku),
      ]);
      return;
    }

    setStoreProducts([...storeProducts, product]);
  };

  const addOrDeleteRenderer = (product: Product) => {
    const alreadyAdded = productIsAlreadyAdded(product);
    return (
      <Button
        type="button"
        bg={alreadyAdded ? "red.400" : "green.400"}
        color="white"
        size="xs"
        variant="ghost"
        width="full"
        rounded="md"
        onClick={() => addOrDeleteProduct(product)}
      >
        {alreadyAdded ? "Remover" : "Agregar"}
      </Button>
    );
  };

  const productManagementRenderer = (products: Product[]) => (
    <Flex as={List} direction="column">
      {products.map((product) => (
        <ListItem key={product.sku} bg="gray.200" p="10px 20px" mb="2" mx="1">
          <StoreProductSingle product={product} />
          {addOrDeleteRenderer(product)}
        </ListItem>
      ))}
    </Flex>
  );

  return (
    <Box as="section">
      <Box as="header" textAlign="center" mb="5">
        <Heading as="h5" fontSize="lg">
          Listado de Productos - {store?.name}
        </Heading>
        <Text fontSize="sm" color="gray.400">
          Agrega, modifica o elimina productos a tu almacen
        </Text>
      </Box>

      <Flex>
        <Box width="50%">
          <Heading size="sm" textAlign="center">
            Agrega productos
          </Heading>
          {productManagementRenderer(
            testProducts.filter((product) => !productIsAlreadyAdded(product))
          )}
        </Box>
        <Box width="50%">
          <Heading size="sm" textAlign="center">
            Productos en Stock
          </Heading>
          {!storeProducts.length && (
            <Text mt="2" textAlign="center">
              Aún no seleccionas productos. ¡Agrega el primero!
            </Text>
          )}
          {productManagementRenderer(storeProducts)}
        </Box>
      </Flex>
    </Box>
  );
};

export { StoreProducts };
