import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import ClickPlace from "./ModalClickPlace";

// @ts-ignore
const PlaceBid = (props: {
  // isOpen: ObjectDto;
  isOpen: boolean;
  closeModal: any;
  totalBidAmount: any;
}) => {
  const { isOpen, closeModal, totalBidAmount } = props;

  const { activate } = useWeb3React();
  const setProvider = (type: any) => {
    window.localStorage.setItem("provider", type);
  };

  const [openModal, setOpenModal] = useState(false);

  const connectPlaceBid = async () => {
    setOpenModal(true);
  };

  const CurrentBid = () => {
    return (
      <Flex mb={15}>
        <Box color="#b9b9be">Current Bid</Box>
        <Spacer />
        <Box color="#fff" fontSize={18} fontWeight={600}>
          5.23 ETH
        </Box>
      </Flex>
    );
  };

  const TotalBidAmount = () => {
    return (
      <>
        <Flex mb={15}>
          <Box color="#b9b9be">You must bid at least:</Box>
          <Spacer />
          <Box color="#fff" fontSize={18} fontWeight={600}>
            4.89 ETH
          </Box>
        </Flex>

        <Flex mb={15}>
          <Box color="#b9b9be">Service free:</Box>
          <Spacer />
          <Box color="#fff" fontSize={18} fontWeight={600}>
            0,89 ETH
          </Box>
        </Flex>

        <Flex mb={15}>
          <Box color="#b9b9be">Total bid amount:</Box>
          <Spacer />
          <Box color="#fff" fontSize={18} fontWeight={600}>
            4 ETH
          </Box>
        </Flex>
      </>
    );
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
              fontWeight={600}
              display="flex"
              justifyContent="center"
            >
              Place a Bid
            </Text>

            <Flex mb={15}>
              <Text color="#b9b9be" fontSize={15}>
                You must bid at least &nbsp;{" "}
              </Text>
              <Spacer />
              <Text color="#fff" fontSize={18} fontWeight={600}>
                5.23 ETH
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
            <Input
              variant="outline"
              placeholder="00.00ETH"
              size="lg"
              h={50}
              fontSize="16px"
              mb={15}
              border="1px"
              borderColor="#292645"
              color="#fff"
            />

            <Flex mb={15}>
              <Text color="#b9b9be" fontSize={15}>
                Enter quantity.&nbsp;{" "}
              </Text>

              <Text color="#fff" fontSize={15}>
                1 available
              </Text>
            </Flex>

            <Input
              variant="outline"
              placeholder="1"
              size="lg"
              h={50}
              fontSize="16px"
              mb={15}
              color="#fff"
              border="1px"
              borderColor="#292645"
            />

            {totalBidAmount ? <TotalBidAmount /> : <CurrentBid />}

            <Button
              bg="#5142fc"
              color="#fff"
              width="100%"
              fontSize={18}
              px={20}
              py={10}
              border="none"
              onClick={connectPlaceBid}
              onClickCapture={closeModal}
            >
              Place a Bid
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      <ClickPlace isOpen={openModal} closeModal={() => setOpenModal(false)} />
    </>
  );
};
export default PlaceBid;
