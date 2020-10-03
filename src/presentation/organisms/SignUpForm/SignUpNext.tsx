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
      width="full"
      mt={4}
      color={"blue.500"}
      onClick={() => nextStep()}
    >
      {label}
    </Button>
  );
};

export default SignUpNextButton;
