import React, { useEffect } from "react";

import StepWizard from "react-step-wizard";
import { Box, Heading } from "@chakra-ui/core";

import BasicInfo from "./SignUpBasicInfo";
import SignUpSuccess from "./SignUpSuccess";
// import SignUpProducts from "./SignUpProducts";

const SignUpForm = () => {
  useEffect(() => {
    document.title = "Formulario de Registro | Almacenear";
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
          <Heading as="h1" my="3" wordBreak="break-word" color="red.500">
            AlmaceNear
          </Heading>
          <p>¡Ya estás más cerca de tus clientes!</p>
        </Box>

        <Box as="form" my="4" textAlign="left">
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
