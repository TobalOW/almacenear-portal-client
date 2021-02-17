import React from "react";
import { Flex } from "@chakra-ui/core";
import Heading from "../../atoms/Heading";

export default (props: any) => {
  const { children } = props;

  return (
    <Flex
      as="header"
      bg="white"
      py="3"
      px="3"
      minHeight="100px"
      maxHeight="200px"
      width="full"
      direction={["column", "row"]}
      justifyContent="space-between"
      align="center"
    >
      <Heading title={props.title} mt="5" mb="3" />
      {children && <hr />}
      {children}
    </Flex>
  );
};
