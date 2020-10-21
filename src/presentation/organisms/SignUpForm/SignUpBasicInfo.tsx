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

import { getRandom } from "../../../utils";

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
      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Ingresa tu correo electrónico
        </FormLabel>
        <Input
          type="email"
          placeholder={example.email}
          size="sm"
          isRequired={true}
          borderWidth="1"
          borderColor="gray.500"
          borderRadius="lg"
        />
      </FormControl>

      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Confirma tu correo electrónico
        </FormLabel>
        <Input
          type="email"
          placeholder={example.email}
          size="sm"
          isRequired={true}
          borderWidth="1"
          borderColor="gray.500"
          borderRadius="lg"
        />
      </FormControl>

      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Ingresa tu nombre
        </FormLabel>
        <Input
          type="email"
          placeholder="Ejemplo: Pedro Pérez"
          size="sm"
          isRequired={true}
          borderWidth="1"
          borderColor="gray.500"
          borderRadius="lg"
        />
      </FormControl>

      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Contraseña
        </FormLabel>
        <Input
          type="password"
          placeholder="Ingresa tu contraseña"
          size="sm"
          isRequired={true}
          borderWidth="1"
          borderColor="gray.500"
          borderRadius="lg"
        />
      </FormControl>

      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Confirma tu contraseña
        </FormLabel>
        <Input
          type="password"
          placeholder="Asegúrate que coincida"
          size="sm"
          isRequired={true}
          borderWidth="1"
          borderColor="gray.500"
          borderRadius="lg"
        />
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
        label="Registrar"
        disabled={!tos}
      />
    </Fragment>
  );
};

export default SignUpBasicInfo;
