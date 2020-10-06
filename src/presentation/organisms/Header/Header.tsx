import React from "react";
import { Box } from "@chakra-ui/core";
import Heading from "../../atoms/Heading";

export default (props: any) => {
  const { children } = props;

  return (
    <Box
      bg="white"
      py="3"
      px="3"
      minHeight="100px"
      maxHeight="200px"
      width="full"
    >
      <Heading title={props.title} mt="5" mb="3" />
      {children && <hr />}
      {children}
    </Box>
  );
};
