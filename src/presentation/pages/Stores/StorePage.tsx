import React, { Fragment } from "react";
import { Button } from "@chakra-ui/core";

import Header from "../../organisms/Header/Header";
import { StoreList } from "../../organisms/Stores";

const StorePage = () => {
  return (
    <Fragment>
      <Header title="Tus almacenes">
        <Button type="button" bg="#B5BA4E" color="white">
          + Agregar nuevo almacen
        </Button>
      </Header>

      <StoreList />
    </Fragment>
  );
};

export default StorePage;
