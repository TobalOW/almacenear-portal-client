import React, { Fragment } from "react";
import { Box } from "@chakra-ui/core";

import Header from "../Header/Header";

const DefaultDashboard = () => {
  return (
    <Fragment>
      <Header title="Dashboard" />
      <Box p="15px 25px">Bienvenido a mi DefaultDashboard</Box>
    </Fragment>
  );
};

export { DefaultDashboard };
