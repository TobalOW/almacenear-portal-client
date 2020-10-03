import React, { Fragment, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Link,
  Checkbox,
} from "@chakra-ui/core";

import GoToNextButton from "./SignUpNext";

import getRandom from "../../../utils/get-random";

interface BasicInfo {
  hashKey: string;
  nextStep?: Function;
}

const SignUpBasicInfo = (props: BasicInfo) => {
  const nextStep = props.nextStep as Function;

  const [tos, setTos] = useState(false);
  const toggleTos = () => setTos(!tos);

  const getExample = () => {
    const examples = [
      { name: "Panadería Don Pedro", email: "panaderia@ejemplo.com" },
      { name: "Carpintería María", email: "carpinteria@ejemplo.com" },
      { name: "Pastelería Providencia", email: "pasteleria@ejemplo.com" },
    ];

    return examples[getRandom(0, examples.length)];
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [example, _setExample] = useState(getExample);

  return (
    <Fragment>
      <FormControl>
        <FormLabel>¿Cómo se llama tu tienda?</FormLabel>
        <Input type="text" placeholder={example.name} />
      </FormControl>

      <FormControl my="4">
        <FormLabel>Ingresa tu nombre</FormLabel>
        <Input type="email" placeholder="Ejemplo: Pedro Pérez" />
      </FormControl>

      <FormControl my="4">
        <FormLabel>Ingresa tu correo electrónico</FormLabel>
        <Input type="email" placeholder={example.email} />
      </FormControl>

      <FormControl>
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" placeholder="Ingresa tu contraseña" />
      </FormControl>

      <Box mt="3">
        <Checkbox onChange={toggleTos}>
          Acepto los
          <Link m="1" color={`red.500`}>
            Términos de Servicio
          </Link>
        </Checkbox>
      </Box>

      <GoToNextButton
        nextStep={() => nextStep()}
        label={"Comenzar"}
        disabled={!tos}
      />
    </Fragment>
  );
};

export default SignUpBasicInfo;
