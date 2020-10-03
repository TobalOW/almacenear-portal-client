import SignUpForm from "../../organisms/SignUpForm/SignUpForm";

import React from "react";
import { Flex } from "@chakra-ui/core";

const SignUpPage = () => {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      backgroundColor={"red.500"}
    >
      <SignUpForm />
    </Flex>
  );
};

export default SignUpPage;
