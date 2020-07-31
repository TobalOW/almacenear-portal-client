import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/core";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const LoginForm = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
        <AlertDescription>
          Your Chakra experience may be degraded.
        </AlertDescription>
        {/* <CloseButton position="absolute" right="8px" top="8px" /> */}
      </Alert>
    </ThemeProvider>
  );
};

export default LoginForm;
