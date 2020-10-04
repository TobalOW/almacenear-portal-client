import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/core";
import { Navbar } from "../../organisms/Navbar";
import { SideMenu } from "../../organisms/SideMenu";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Inicio | Almacenear";
  }, []);

  return (
    <Flex height="100vh" width="100%" flexDirection="column">
      <Navbar />
      <SideMenu />
    </Flex>
  );
};
export default DashboardPage;
