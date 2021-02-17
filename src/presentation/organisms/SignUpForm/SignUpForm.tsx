import React, { useEffect } from "react";

import StepWizard from "react-step-wizard";
import { Box, Heading } from "@chakra-ui/core";

import Logo from "../../atoms/Logo";

import BasicInfo from "./SignUpBasicInfo";
import SignUpSuccess from "./SignUpSuccess";

const SignUpForm = () => {
  useEffect(() => {
    document.title = "Formulario de Registro | Almacenear";
  }, []);

  return (
    <Box
      width="full"
      maxWidth="400px"
      borderRadius="4"
      textAlign="center"
      boxShadow="lg"
      backgroundColor="white"
      mt="40"
      px="3"
    >
      <Box as="section" position="relative">
        <Box position="absolute" left="0" right="0" top="-120px">
          <Logo />
        </Box>

        <Box as="header" textAlign="center">
          <Heading size="sm" pt="10">
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
