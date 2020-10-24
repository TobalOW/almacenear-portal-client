import React from "react";

import { Button } from "@chakra-ui/core";

interface BasicInfo {
  callback: Function;
  label?: String;
  disabled?: Boolean;
}

const SignUpNextButton = (props: BasicInfo) => {
  const callback = props.callback as Function;
  const { disabled = false, label = "Siguiente" } = props;

  return (
    <Button
      type="button"
      mt={4}
      bg="red.400"
      width="full"
      color="white"
      isDisabled={!!disabled}
      onClick={callback as any}
      _hover={{ bg: "red.500" }}
    >
      {label}
    </Button>
  );
};

export default SignUpNextButton;
