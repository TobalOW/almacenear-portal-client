import React, { Fragment } from "react";

import { FormControl, FormLabel, Input } from "@chakra-ui/core";

import GoToNextButton from "./SignUpNext";

const SignUpProducts = (props: any) => {
  return (
    <Fragment>
      <FormControl>
        <FormLabel>¿Cóssssmo se llama tu tienda?</FormLabel>
        <Input
          type="text"
          placeholder="Ejemplo: Panadería Don Pedro"
          isRequired={true}
        />
      </FormControl>

      <FormControl my="4">
        <FormLabel>Ingresa tu correo electrónico</FormLabel>
        <Input
          type="email"
          placeholder="Ejemplo: panaderia@ejemplo.com"
          isRequired={true}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Contraseña</FormLabel>
        <Input
          type="password"
          placeholder="Ingresa tu contraseña"
          isRequired={true}
        />
      </FormControl>

      <GoToNextButton nextStep={props.nextStep} />
    </Fragment>
  );
};

export default SignUpProducts;
