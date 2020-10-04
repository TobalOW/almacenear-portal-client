import React, { useEffect } from "react";
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

const LoginForm = () => {
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
    >
      <Box as="section" p={4}>
        <Box as="header" textAlign="center">
          <Heading wordBreak={"break-word"} color={"red.500"}>
            AlmaceNear
          </Heading>

          <strong>Portal Almacenes</strong>
        </Box>

        <Box as="form" mt={8} textAlign="left">
          <FormControl>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              placeholder="Ejemplo: almacenes@ejemplo.com"
              isRequired={true}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="Ingresa tu contraseña"
              isRequired={true}
            />
          </FormControl>

          <Stack isInline justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox>Recuérdame</Checkbox>
            </Box>
            <Box>
              <Link color={`red.500`}>¿Olvidaste tu contaseña?</Link>
            </Box>
          </Stack>

          <Button type="button" width="full" my={4} color={"red.500"}>
            Iniciar sesión
          </Button>
          <Text textAlign="center">
            ¿Aún no tienes cuenta?
            <Link href="/signup">
              <Text as="span" ml="1" color={"blue.500"}>
                Regístrate
              </Text>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
