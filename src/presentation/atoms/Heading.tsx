import React from "react";
import { Heading } from "@chakra-ui/core";

export default (props: any) => {
  const defaultOptions = {
    size: "lg",
    as: "h2",
    title: "<<Header>>",
    color: "gray.600",
  };
  const options = Object.assign(defaultOptions, props);

  return <Heading {...options}>{options.title}</Heading>;
};
