import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, List, ListIcon, ListItem } from "@chakra-ui/core";

interface navLink {
  to: string;
  label: string;
  icon: string;
}

const SideMenu = () => {
  const navLinks: navLink[] = [
    { label: "Tus almacenes", to: "stores", icon: "info" },
    { label: "Estadísticas", to: "products", icon: "drag-handle" },
    { label: "Configuración", to: "settings", icon: "settings" },
    { label: "Ayuda", to: "help", icon: "help" },
  ];
  return (
    <Box as="nav" color="white" height="full" width={1 / 8} minWidth="230px">
      <List pt="20px" pl="3" height="full" backgroundColor="red.400">
        {navLinks.map((link) => (
          <ListItem pl="2" pb="4" key={link.to}>
            <Link to={"/dashboard/" + link.to}>
              <ListIcon icon={link.icon} />
              <Button variant="link" color="white">
                {link.label}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;
