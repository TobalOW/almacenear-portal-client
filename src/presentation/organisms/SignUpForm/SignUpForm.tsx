import React, { useEffect } from "react";

import StepWizard from "react-step-wizard";
import { Box, Text, Heading } from "@chakra-ui/core";

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
      <Box p={4}>
        <Box textAlign="center">
          <Text>¡Ya estás más cerca de tus clientes!</Text>
          <Heading as="h1" my="3">
            <Text wordBreak={"break-word"} color={"red.500"}>
              AlmaceNear
            </Text>
          </Heading>
        </Box>

        <Box my="4" textAlign="left">
          <form>
            <StepWizard isHashEnabled={true} transitions={{}}>
              <BasicInfo hashKey="basic" />
              <SignUpSuccess hashKey="success" />
            </StepWizard>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm;
