import React from "react";

import { Button } from "@chakra-ui/core";

interface NextButton {
  callback: Function;
  label?: any;
  disabled?: Boolean;
}

export default (props: NextButton) => {
  const callback = props.callback as any;
  const { disabled = false, label = "Siguiente" } = props;

  return (
    <Button
      type="button"
      mt={4}
      variantColor="red"
      width="full"
      isDisabled={!!disabled}
      onClick={callback}
    >
      {label}
    </Button>
  );
};
