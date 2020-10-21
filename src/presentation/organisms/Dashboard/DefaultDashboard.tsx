import React, { Fragment } from "react";
import { Box, Skeleton } from "@chakra-ui/core";

import Header from "../Header/Header";

const DefaultDashboard = () => {
  return (
    <Fragment>
      <Header title="Dashboard" />
      <Box p="15px 25px">Bienvenido a mi DefaultDashboard</Box>

      <Box w="60%" m="0 auto">
        <Skeleton height="30px" mb="10px" mx="0 auto"></Skeleton>
        <Skeleton height="30px" mb="10px" mx="0 auto"></Skeleton>
        <Skeleton height="30px" mb="10px" mx="0 auto"></Skeleton>
      </Box>
    </Fragment>
  );
};

export { DefaultDashboard };
