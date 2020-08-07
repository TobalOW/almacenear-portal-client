import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="red.500"
      width="100%"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading color="white" as="h1" size="lg" letterSpacing={"-.1rem"}>
          AlmaceNear
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
