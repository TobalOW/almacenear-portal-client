import React, { useEffect } from "react";

import { Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/core";

import { Navbar } from "../../organisms/Navbar";
import { SideMenu } from "../../organisms/SideMenu";
import { DefaultDashboard } from "../../organisms/Dashboard";

import StorePage from "../../pages/Stores/StorePage";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Inicio | Almacenear";
  }, []);

  return (
    <Box height="100vh" width="100%">
      <Navbar />
      <Flex height="full" bg="gray.100">
        <Box as={SideMenu} display={["none", "none"]} />
        <Flex direction="column" width="100%">
          <Box>
            <Route exact path="/dashboard" component={DefaultDashboard} />
            <Route exact path="/dashboard/stores" component={StorePage} />
            {/* <Route path="/statistics" component={StoreList} /> */}
            {/* <Route path="/settings" component={StoreList} /> */}
            {/* <Route path="/help" component={StoreList} /> */}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default DashboardPage;
