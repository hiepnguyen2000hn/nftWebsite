import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";

// @ts-ignore
const ClickPlace = (props: { isOpen: ObjectDto; closeModal: any }) => {
  const { isOpen, closeModal } = props;

  const { activate } = useWeb3React();
  const setProvider = (type: any) => {
    window.localStorage.setItem("provider", type);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal} isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor="#222232"
          maxWidth={500}
          p={30}
          borderRadius={20}
          position="relative"
        >
          <ModalHeader
            display="flex"
            justifyContent="center"
            color="#fff"
            flexWrap="wrap"
            // w={5000}
          >
            <Text
              fontSize={42}
              color="#fff"
              w="100%"
              mb={15}
              fontWeight={500}
              display="flex"
              justifyContent="center"
              textAlign="center"
              lineHeight="42px"
            >
              Your Bidding Successfuly Added
            </Text>

            <Flex mb={15}>
              <Text color="#b9b9be" fontSize={15}>
                your bid{" "}
              </Text>
              <Spacer />
              <Text color="#fff" fontSize={18} fontWeight={600}>
                &nbsp;(5.23 ETH)&nbsp;
              </Text>
              <Text color="#b9b9be" fontSize={15}>
                has been listing to our database{" "}
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton
            position="absolute"
            w={30}
            h={30}
            borderRadius="50%"
            top={-15}
            right={-15}
            border="none"
            outline="none"
            bg="#14141f"
            color="#fff"
          />
          <ModalBody paddingBottom="1.5rem">
            <Button
              bg="#5142fc"
              color="#fff"
              width="100%"
              fontSize={18}
              px={20}
              py={10}
              border="none"
            >
              Watch the listings
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ClickPlace;
