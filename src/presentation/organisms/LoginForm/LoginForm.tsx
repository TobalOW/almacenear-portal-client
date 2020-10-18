import React, { useEffect } from "react";
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
  Image,
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
      position="relative"
    >
      <Box position="absolute" left="0" right="0" top="-200px">
        <Image
          src="https://via.placeholder.com/300x180"
          alt="Almacenear"
          title="Te damos la bienvenida a Almacenear"
          mx="auto"
        />
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

          <RouterLink to="/dashboard">
            <Button
              type="button"
              width="full"
              my="4"
              bg="red.500"
              color="white"
              shadow="md"
            >
              Iniciar sesión
            </Button>
          </RouterLink>
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
