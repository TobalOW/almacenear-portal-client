import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/core";

import { Product } from "../../../interfaces";

interface SingleProductProps {
  product: Product;
}

const StoreProductSingle = (props: SingleProductProps) => {
  const { product } = props;

  const singleProductDictionary = {
    brand: "Marca",
    weight: "Peso",
    sku: "SKU",
  };

  const renderProductData = () => {
    return Object.entries(singleProductDictionary).map(
      (entry: any[], index) => {
        const [key, value] = entry;

        return (
          <Box key={index}>
            <Text as="label" fontSize="14px" fontWeight="bold">
              {value}:
            </Text>
            <Text as="span" fontSize="14px" ml="5px">
              {product[key as keyof Product]}
            </Text>
          </Box>
        );
      }
    );
  };

  return (
    <Box>
      <Flex wrap="wrap">
        <Box width="50%">
          <strong>{product.title}</strong>
          {renderProductData()}
        </Box>
        <Box width="50%">
          <Image
            src="https://via.placeholder.com/100"
            alt={product.title}
            title={product.title}
            ml="auto"
            mr="0"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export { StoreProductSingle };
