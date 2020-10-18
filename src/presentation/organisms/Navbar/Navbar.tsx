import React from "react";
import { Flex, Link, Heading, Image } from "@chakra-ui/core";

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
      maxHeight="75px"
    >
      <Flex align="center" mr={5}>
        <Heading color="white" as="h1" size="lg" flex="">
          <Link href="/dashboard">
            <Flex align="center">
              <Image
                src="https://via.placeholder.com/300x180"
                alt="Almacenear"
                title="Bienvenido a Almacenear"
                maxHeight="60px"
                p="5px"
              />
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
