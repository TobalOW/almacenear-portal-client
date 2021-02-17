import React from "react";
import { Button } from "@chakra-ui/core";

export default (props: any) => {
  const defaultOptions = {
    bg: "white",
    p: "10px 15px",
    rounded: "md",
    shadow: "sm",
  };
  const options = Object.assign(defaultOptions, props);
  const { children } = props;

  return <Button>{children}</Button>;
};
