import React, { Fragment, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Link,
  Checkbox,
} from "@chakra-ui/core";

import { signup } from "../../../domain/redux/reducers/user";

import { getRandom } from "../../../utils";

import GoToNextButton from "./SignUpNext";

interface BasicInfo {
  hashKey: string;
  callback?: Function;
}

const SignUpBasicInfo = (props: BasicInfo) => {
  // TOS Hooks
  const [tos, setTos] = useState(false);
  const toggleTos = () => setTos(!tos);

  // Form hooks
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getExample = () => {
    const examples = [
      { name: "Panadería Don Pedro", email: "panaderia@ejemplo.com" },
      { name: "Carpintería María", email: "carpinteria@ejemplo.com" },
      { name: "Pastelería Providencia", email: "pasteleria@ejemplo.com" },
    ];

    return examples[getRandom(0, examples.length)];
  };

  const [example] = useState(getExample);

  return (
    <Fragment>
      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Ingresa tu correo electrónico
        </FormLabel>
        <Input
          type="email"
          placeholder={example.email}
          value={email}
          onChange={({ target }: any) => setEmail(target.value)}
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
          value={emailConfirm}
          onChange={({ target }: any) => setEmailConfirm(target.value)}
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
          placeholder="Ejemplo: Pedro"
          value={firstName}
          onChange={({ target }: any) => setFirstName(target.value)}
          size="sm"
          isRequired={true}
          borderWidth="1"
          borderColor="gray.500"
          borderRadius="lg"
        />
      </FormControl>

      <FormControl mb="4">
        <FormLabel fontWeight="regular" color="gray.500">
          Ingresa tu apellido
        </FormLabel>
        <Input
          type="email"
          placeholder="Ejemplo: Pérez"
          value={lastName}
          onChange={({ target }: any) => setLastName(target.value)}
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
          value={password}
          onChange={({ target }: any) => setPassword(target.value)}
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
          value={passwordConfirm}
          onChange={({ target }: any) => setPasswordConfirm(target.value)}
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
        callback={signup({ email, firstName, lastName, password })}
        label="Registrar"
        disabled={!tos}
      />
    </Fragment>
  );
};

export default SignUpBasicInfo;
