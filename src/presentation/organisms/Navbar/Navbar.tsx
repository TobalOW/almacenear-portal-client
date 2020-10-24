import React from "react";
import { Flex, Link, Heading } from "@chakra-ui/core";

import Logo from "../../atoms/Logo";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px="30px"
      bg="red.500"
      width="100%"
      color="white"
      height="70px"
    >
      <Flex align="center" mr={5}>
        <Heading color="white" as="h1" size="lg" flex="">
          <Link href="/dashboard">
            <Flex align="center">
              <Logo size="sm" />
              <Heading as="h3" size="md" ml="5">
                Portal del Almacenero
              </Heading>
            </Flex>
          </Link>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Navbar;
