import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/core";
import Card from "../../atoms/Card";

interface Store {
  address: string;
  giro: string;
  id: number;
  name: string;
  patente: string;
  picture: string;
  rut: string;
  type: string;
}

const StoreItem = (props: any) => {
  const { store } = props;
  const storeDictionary: Store = {
    address: "Dirección",
    giro: "Giro",
    id: 0,
    name: "Nombre",
    patente: "Patente",
    picture: "",
    rut: "RUT",
    type: "Tipo",
  };

  const getProp = (prop: string = "") => {
    return storeDictionary[prop as keyof Store];
  };

  const storeRenderer = () => {
    return Object.entries(store).map((entry: any[], index) => {
      const [key, value] = entry;
      return (
        getProp(key) && (
          <ListItem key={index} maxWidth="50%" p="0">
            <Text as="strong" fontSize="12px" color="gray.500">
              {getProp(key)}:
            </Text>
            <Text
              as="span"
              fontSize="12px"
              color="gray.500"
              isTruncated={true}
              ml="5px"
            >
              {value}
            </Text>
          </ListItem>
        )
      );
    });
  };

  return (
    <Card maxWidth="700px" maxHeight="400px">
      <Box as="header">
        <Heading as="h5" size="md">
          {store.name}
        </Heading>
      </Box>

      <Grid as={List} gridTemplateColumns="1fr 1fr" my="1">
        {storeRenderer()}
      </Grid>

      <Flex as="footer" justifyContent="space-between">
        <Box width="60%">
          <Image
            src={store.picture}
            title={store.name}
            alt={store.name}
            rounded="sm"
          />
        </Box>
        <Flex as="div" direction="column" width="39%">
          <Button bg="red.400" size="sm" color="white" mb="1">
            Ver productos
          </Button>
          <Button bg="red.400" size="sm" color="white">
            <Icon name="delete" />
            Eliminar tienda
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export { StoreItem };
