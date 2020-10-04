import React from "react";
import { Link } from "react-router-dom";
import { Flex, Heading, Text } from "@chakra-ui/core";

const NotFoundPage = () => {
  return (
    <Flex
      align="center"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="full"
    >
      <Heading>¡Lo sentimos!</Heading>
      <Heading size="lg" my="2">
        Esta página no existe :(
      </Heading>
      <Link to="/">
        <Text color="blue.400">Volver al inicio</Text>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;
