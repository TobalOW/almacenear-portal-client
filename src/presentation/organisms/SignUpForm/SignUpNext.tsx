import React from "react";

import { Button } from "@chakra-ui/core";

interface BasicInfo {
  nextStep: Function;
  label?: String;
  disabled?: Boolean;
}

const SignUpNextButton = (props: BasicInfo) => {
  const nextStep = props.nextStep as Function;
  const { disabled = false, label = "Siguiente" } = props;

  return (
    <Button
      type="button"
      isDisabled={!!disabled}
      onClick={() => nextStep()}
      width="full"
      mt={4}
      color="white"
      bg="red.400"
      _hover={{ bg: "red.500" }}
    >
      {label}
    </Button>
  );
};

export default SignUpNextButton;
