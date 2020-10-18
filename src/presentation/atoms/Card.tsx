import React from "react";
import { Box } from "@chakra-ui/core";

export default (props: any) => {
  const defaultOptions = {
    as: "section",
    bg: "white",
    p: "10px 15px",
    rounded: "md",
    shadow: "sm",
  };
  const options = Object.assign(defaultOptions, props);
  const { children } = props;

  return <Box {...options}>{children}</Box>;
};
