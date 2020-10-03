import React from "react";
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
      <Box p={4}>
        <Box textAlign="center">
          <Text>Portal Administrativo</Text>
          <Heading>
            <Text wordBreak={"break-word"} color={"red.500"}>
              AlmaceNear
            </Text>
          </Heading>
        </Box>

        <Box my={8} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Ingresa tu email" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input type="password" placeholder="Ingresa tu contraseña" />
            </FormControl>

            <Stack isInline justifyContent="space-between" mt={4}>
              <Box>
                <Checkbox>Recuérdame</Checkbox>
              </Box>
              <Box>
                <Link color={`red.500`}>¿Olvidaste tu contaseña?</Link>
              </Box>
            </Stack>

            <Button width="full" mt={4} color={"red.500"}>
              Ingresar
            </Button>
            <Link href="/signup">
              <Button type="button" width="full" mt={4} color={"blue.500"}>
                Regístrate
              </Button>
            </Link>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
