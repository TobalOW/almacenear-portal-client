import React from "react";
import { Flex, Button } from "@chakra-ui/core";

const SideMenu = () => {
  return (
    <Flex
      as="nav"
      wrap="wrap"
      color="white"
      flexDirection="column"
      align={"space-around"}
      backgroundColor="red.500"
      height="full"
      width={1 / 5}
      py="100px"
      borderTop="1px"
    >
      <Flex paddingY="19px" justifyContent="center">
        <Button variant="link" width="50px" variantColor="red.500">
          Almacenes
        </Button>
      </Flex>
      <Flex paddingY="19px" justifyContent="center">
        <Button variant="link" width="50px" variantColor="red.500">
          Productos
        </Button>
      </Flex>
      <Flex paddingY="19px" justifyContent="center">
        <Button variant="link" width="50px" variantColor="red.500">
          Configuraciones
        </Button>
      </Flex>
    </Flex>
  );
};

export default SideMenu;
