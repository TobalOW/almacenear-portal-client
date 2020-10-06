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
    { label: "Almacenes", to: "/stores", icon: "info" },
    { label: "Productos", to: "/products", icon: "drag-handle" },
    { label: "Ajustes", to: "/settings", icon: "settings" },
  ];
  return (
    <Box as="nav" color="white" height="full" width={1 / 8} minWidth="150px">
      <List pt="20px" pl="3" height="full" backgroundColor="red.400">
        {navLinks.map((link) => (
          <ListItem pb="4" key={link.to}>
            <Link to={link.to}>
              <ListIcon icon={link.icon} />
              <Button variant="link" variantColor="red.500">
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
