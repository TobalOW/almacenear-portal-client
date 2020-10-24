import React, { useState } from "react";

import { Virtuoso } from "react-virtuoso";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Skeleton,
  Text,
} from "@chakra-ui/core";

import { Product, Store } from "../../../interfaces";

import { ProductSingle } from "../Stores/index";

interface StoreProductsProps {
  store: Store | null;
  availableProducts: Product[];
}

export const ProductManager = (props: StoreProductsProps) => {
  const { store, availableProducts = [] } = props;

  const [storeProducts, setStoreProducts] = useState([] as Product[]);
  const [filteredProducts, setFilteredProducts] = useState(availableProducts);

  /**
   * @method filterProductsByName
   * @description Apply a name filter to both global products & store products
   * @param name Name to filter by
   */
  const filterProductsByName = (name = "") => {
    const regexp = new RegExp(name, "ig");
    const _filter = (products: Product[]) => {
      return products.filter(({ description }) => description.match(regexp));
    };

    setFilteredProducts(_filter(availableProducts));
    setStoreProducts(_filter(storeProducts));
  };

  /**
   * @method productIsAlreadyAdded
   * @description Check if a Product has been added from global Products to Store
   * @param {Product} search Product to check
   */
  const productIsAlreadyAdded = (search: Product) => {
    return storeProducts.some(({ sku }) => search.sku === sku);
  };

  /**
   * @method addOrDeleteProduct
   * @description Check if a Product currently exists in Store
   * @param {Product} product Product to be added/deleted
   */
  const addOrDeleteProduct = (product: Product) => {
    if (productIsAlreadyAdded(product)) {
      setStoreProducts([
        ...storeProducts.filter(({ sku }) => sku !== product.sku),
      ]);
      return;
    }

    setStoreProducts([...storeProducts, product]);
  };

  /**
   * @method addOrDeleteRenderer
   * @description Render the result from addOrDeleteProduct
   * @param {Product} product Product to be added/deleted
   */
  const addOrDeleteRenderer = (product: Product) => {
    const alreadyAdded = productIsAlreadyAdded(product);
    return (
      <Button
        type="button"
        variantColor={alreadyAdded ? "red" : "green"}
        size="xs"
        width="full"
        rounded="md"
        onClick={() => addOrDeleteProduct(product)}
      >
        {alreadyAdded ? "Remover" : "Agregar"}
      </Button>
    );
  };

  /**
   * @method productManagementRenderer
   * @description Render a virtual list containing global Products & Store products
   * @param {Product[]} products Product list to be rendered
   */
  const productManagementRenderer = (products: Product[]) => {
    return (
      <Virtuoso
        style={{
          background: "#F2F2F2",
          padding: "10px 0",
          margin: "0 auto 10px",
          height: "500px",
        }}
        totalCount={products.length}
        item={(index) => {
          const product = products[index];

          return (
            <Box key={product.sku} bg="#F2F2F2" p="10px 20px" mx="1">
              <ProductSingle product={product} />
              {addOrDeleteRenderer(product)}
            </Box>
          );
        }}
      />
    );
  };

  return (
    <Box as="section">
      <Box as="header" textAlign="center" mb="5">
        <Heading as="h5" fontSize="lg" mb="2">
          Listado de Productos - {store?.name}
        </Heading>
      </Box>

      <Flex>
        <Box width={1 / 2}>
          {/* Render products added to Store */}
          <Box as="header" mb="5" height="80px" textAlign="center">
            <Text as="p" fontSize="14px">
              Buscar productos
            </Text>
            <FormControl>
              <Input
                type="text"
                onChange={(e: any) => filterProductsByName(e.target.value)}
                placeholder="Ingresa tu búsqueda aquí"
                width="80%"
                mx="auto"
              />
            </FormControl>
          </Box>

          {!availableProducts.length &&
            [1, 2, 3].map((index) => {
              return <Skeleton height="100px" my="1" key={index} />;
            })}

          {!!availableProducts.length &&
            productManagementRenderer(filteredProducts)}
        </Box>
        <Box width={1 / 2}>
          {/* Render all filtered products */}
          <Flex
            as="header"
            height="80px"
            alignItems="flex-end"
            justifyContent="center"
            mb="5"
          >
            <Heading size="sm" textAlign="center">
              Productos en Stock
            </Heading>
          </Flex>
          {productManagementRenderer(storeProducts)}
        </Box>
      </Flex>
    </Box>
  );
};
