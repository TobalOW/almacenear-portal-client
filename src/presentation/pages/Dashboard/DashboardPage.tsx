import React, { useEffect } from "react";

import { Box, Flex } from "@chakra-ui/core";

import { Navbar } from "../../organisms/Navbar";
import { SideMenu } from "../../organisms/SideMenu";
import Header from "../../organisms/Header/Header";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Inicio | Almacenear";
  }, []);

  return (
    <Box height="100vh" width="100%">
      <Navbar />
      <Flex height="full" bg="gray.100">
        <SideMenu />
        <Header title="Dashboard" />
      </Flex>
    </Box>
  );
};
export default DashboardPage;
