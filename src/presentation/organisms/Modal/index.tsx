import React from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/core";

import { requiredParam } from "../../../utils";

interface ModalProps {
  children?: any;
  closeLabel?: string;
  isOpen?: boolean;
  onClose: any;
  onSave: any;
  saveLabel?: string;
  size?: string;
  title?: string;
}

const ModalComponent = (props: ModalProps) => {
  const {
    children,
    closeLabel = "Cerrar",
    isOpen = false,
    onClose = requiredParam("onClose"),
    onSave = requiredParam("onSave"),
    saveLabel = "Guardar",
    size = "md",
    title = "",
  } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>{children}</ModalBody>

        <Flex as={ModalFooter} justifyContent="space-between">
          <Button
            type="button"
            w="45%"
            bg="gray.500"
            color="white"
            onClick={onClose}
          >
            {closeLabel}
          </Button>
          <Button
            type="button"
            w="45%"
            bg="#B5BA4E"
            color="white"
            onClick={onSave}
          >
            {saveLabel}
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
