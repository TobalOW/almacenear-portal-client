import React from "react";
import { Image } from "@chakra-ui/core";

type LogoSizes = "xs" | "sm" | "md" | "lg";
export default (props: any) => {
  const size: LogoSizes = props.size;

  const sizes = {
    lg: 150,
    md: 120,
    sm: 80,
    xs: 60,
  };

  return (
    <Image
      src="/logo.png"
      alt="Almacenear"
      title="Te damos la bienvenida a Almacenear"
      mx="auto"
      maxWidth={sizes[size || "md"] + "px"}
    />
  );
};
