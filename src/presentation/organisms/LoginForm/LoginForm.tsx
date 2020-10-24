import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Text,
  Heading,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
} from "@chakra-ui/core";

import { login } from "../../../domain/redux/reducers/user";

import Logo from "../../atoms/Logo";

const LoginForm = () => {
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  useEffect(() => {
    document.title = "Iniciar sesión | Almacenear";
  }, []);

  return (
    <Box
      borderWidth={1}
      px={4}
      width="full"
      maxWidth="500px"
      borderRadius={4}
      textAlign="center"
      boxShadow="lg"
      backgroundColor={"white"}
      position="relative"
    >
      <Box position="absolute" left="0" right="0" top="-120px">
        <Logo />
      </Box>

      <Box as="section" p={4}>
        <Box as="header" mt="4">
          <Heading as="h2" size="sm" textAlign="center" color="gray.600">
            Portal del Almacenero
          </Heading>
        </Box>

        <Box as="form" mt={8} textAlign="left">
          <FormControl>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              placeholder="Ejemplo: almacen@ejemplo.com"
              value={email}
              onChange={({ target }: any) => setEmail(target.value)}
              isRequired={true}
              size="sm"
              borderWidth="1"
              borderColor="gray.400"
              borderRadius="lg"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={({ target }: any) => setPassword(target.value)}
              isRequired={true}
              size="sm"
              borderWidth="1"
              borderColor="gray.400"
              borderRadius="lg"
            />
          </FormControl>

          <Stack isInline justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox>Recuérdame</Checkbox>
            </Box>
            <Box>
              <Link color={`red.400`}>¿Olvidaste tu contaseña?</Link>
            </Box>
          </Stack>

          <Button
            type="button"
            width="full"
            my="4"
            bg="red.500"
            color="white"
            shadow="md"
            onClick={() => login({ email, password })}
          >
            Iniciar sesión
          </Button>

          <Text textAlign="center">
            ¿Aún no tienes cuenta?
            <RouterLink to="/signup">
              <Text
                as="span"
                ml="1"
                display="block"
                color="yellow.400"
                fontWeight="bold"
              >
                Regístrate
              </Text>
            </RouterLink>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
