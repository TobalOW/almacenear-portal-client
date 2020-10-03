/* @ts-disable */
import React from "react";
import { Box, Spinner } from "@chakra-ui/core";

interface Options {
  textAlign?: any;
  bg?: any;
  p?: any;
}

export default (props: Options) => {
  const defaultOptions: Options = {
    textAlign: "center",
    p: "2",
  };

  const options = Object.assign(defaultOptions, props);

  return (
    <Box {...options}>
      <Spinner></Spinner>
    </Box>
  );
};
