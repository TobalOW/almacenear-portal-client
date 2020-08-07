import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { addDecorator } from "@storybook/react";
import * as React from "react";

const withChakra = (StoryFn: Function) => (
  <ThemeProvider>
    <CSSReset />
    <div id="story-wrapper" style={{ minHeight: "100vh" }}>
      <StoryFn />
    </div>
  </ThemeProvider>
);

addDecorator(withChakra);
