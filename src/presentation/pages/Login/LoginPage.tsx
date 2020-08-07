import LoginForm from "../../organisms/LoginForm/LoginForm";

import React from "react";
import { Flex } from "@chakra-ui/core";

const LoginPage = () => {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      backgroundColor={"red.500"}
    >
      <LoginForm />
    </Flex>
  );
};

export default LoginPage;
