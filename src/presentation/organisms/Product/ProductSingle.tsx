import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/core";

import { Product } from "../../../interfaces";

interface SingleProductProps {
  product: Product;
}

const ProductSingle = (props: SingleProductProps) => {
  const { product } = props;

  /**
   * @var singleProductDictionary
   * @description Describe which attributes from Product should be visible
   */
  const singleProductDictionary = {
    description: "Descripción",
    brand: "Marca",
    sku: "SKU",
    measurementUnit: "Medida",
  };

  const renderProductData = () => {
    return Object.entries(singleProductDictionary).map(
      (entry: any[], index) => {
        const [key, value] = entry;

        return (
          <Text as="p" fontSize="14px" key={index}>
            <strong>{value}:</strong>
            <Text as="span" fontSize="14px" title={value} ml="5px">
              {product[key as keyof Product]}
            </Text>
          </Text>
        );
      }
    );
  };

  return (
    <Box>
      <Flex wrap="wrap">
        <Box width="calc(100% - 100px)">
          <Text
            as="h4"
            isTruncated
            display="block"
            fontWeight="bold"
            title={product.description}
          >
            {product.description}
          </Text>
          {renderProductData()}
        </Box>
        <Box width="100px">
          <a href={product.imageUrl} target="_blank" rel="noopener noreferrer">
            <Image
              src={product.imageUrl}
              alt={product.sku}
              title={product.description}
              ml="auto"
              mr="0"
              width="100px"
              minHeight="100px"
              bg="gray.200"
            />
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export { ProductSingle };
