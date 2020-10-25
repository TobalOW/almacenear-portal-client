import { theme } from "@chakra-ui/core";

export default {
  ...theme,
  fonts: {
    body: "'Open Sans', sans-serif",
    heading: "'Open Sans', sans-serif",
    mono: "'Open Sans', sans-serif",
  },
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
    },
  },
};
