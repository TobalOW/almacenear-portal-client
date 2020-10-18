import React, { useEffect } from "react";

import StepWizard from "react-step-wizard";
import { Box, Heading, Image } from "@chakra-ui/core";

import BasicInfo from "./SignUpBasicInfo";
import SignUpSuccess from "./SignUpSuccess";
// import SignUpProducts from "./SignUpProducts";

const SignUpForm = () => {
  useEffect(() => {
    document.title = "Formulario de Registro | Almacenear";
  }, []);

  return (
    <Box
      position="relative"
      width="full"
      maxWidth="500px"
      borderRadius="4"
      textAlign="center"
      boxShadow="lg"
      backgroundColor="white"
      mt="40"
    >
      <Box position="absolute" left="0" right="0" top="-200px">
        <Image
          src="https://via.placeholder.com/300x180"
          alt="Almacenear"
          title="Te damos la bienvenida a Almacenear"
          mx="auto"
        />
      </Box>

      <Box as="section" p="4" px="10">
        <Box as="header" textAlign="center">
          <Heading size="sm" py="5">
            Registro de Usuarios
          </Heading>
        </Box>

        <Box as="form" my="4" textAlign="left" px="6">
          <StepWizard isHashEnabled={true} transitions={{}}>
            <BasicInfo hashKey="basic" />
            <SignUpSuccess hashKey="success" />
          </StepWizard>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
