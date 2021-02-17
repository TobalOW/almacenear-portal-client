import { Box } from "@chakra-ui/core";
import React from "react";
import { requiredParam } from "../../utils";

interface ScrollableElementProps {
  children: any;
  maxHeight: string;
  scrollX?: boolean;
  scrollY?: boolean;
}

export default (props: ScrollableElementProps) => {
  const { maxHeight = requiredParam(), scrollX, scrollY, children } = props;

  return (
    <Box
      maxHeight={maxHeight}
      overflowX={scrollX ? "auto" : "hidden"}
      overflowY={scrollY ? "auto" : "hidden"}
    >
      {children}
    </Box>
  );
};
