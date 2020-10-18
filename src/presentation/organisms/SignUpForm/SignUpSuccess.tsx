/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, List, ListItem, ListIcon, Heading, Text } from "@chakra-ui/core";

import GoToNextButton from "./SignUpNext";

import Loader from "../../atoms/Loader";

const SignUpSuccess = (props: any) => {
  const [loading = false, setLoader] = useState();
  const history = useHistory();

  const goToLogin = () => {
    setLoader(true);
    setTimeout(() => {
      history.push("/login");
    }, 2500);
  };

  return (
    <Fragment>
      <Box textAlign="center">
        <Text as="span" role="img" aria-label="Success" fontSize="32px">
          🎉
        </Text>
        <Heading as="h4" color="red.500" size="lg" ml="2">
          ¡Excelente!
        </Heading>
      </Box>

      <Text mt="8" mb="2">
        En <strong>Almacenear</strong> podrás realizar fácilmente las siguientes
        tareas
      </Text>

      <List mb="2">
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" /> Entregar
          información valiosa a tus clientes
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" /> Gestionar tu
          inventario
        </ListItem>
        <ListItem>
          <ListIcon icon="check-circle" color="green.500" /> Agilizar tus
          procesos
        </ListItem>
      </List>

      {loading ? (
        <Loader bg="gray.100" />
      ) : (
        <GoToNextButton label="Comenzar" nextStep={goToLogin} />
      )}
    </Fragment>
  );
};

export default SignUpSuccess;
