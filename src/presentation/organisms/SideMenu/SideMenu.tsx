import React from "react";
import { Box, Button, List, ListIcon, ListItem } from "@chakra-ui/core";

interface navLink {
  label: string;
  to: string;
}

const SideMenu = () => {
  const navLinks: navLink[] = [
    { label: "Almacenes", to: "stores", icon: "info" },
    { label: "Productos", to: "products", icon: "drag-handle" },
    { label: "Configuraciones", to: "settings", icon: "settings" },
  ];
  return (
    <Box as="nav" color="white" height="full" width={1 / 8}>
      <List pt="20px" pl="3" height="full" backgroundColor="red.400">
        {navLinks.map((link) => (
          <ListItem pb="4" key={link.to}>
            <ListIcon icon={link.icon} />
            <Button variant="link" variantColor="red.500">
              {link.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideMenu;
