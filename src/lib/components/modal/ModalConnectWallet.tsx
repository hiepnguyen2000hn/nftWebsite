import React, { useEffect } from "react";
import {
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../../helper/connectWallet/index";
// @ts-ignore
const SelectWalletModal = (props: { isOpen: ObjectDto; closeModal: any }) => {
  const { isOpen, closeModal } = props;
  const { activate } = useWeb3React();
  const setProvider = (type: any) => {
    window.localStorage.setItem("provider", type);
  };
  // const changeAcount = () => {
  //   window.ethereum
  //     .request({
  //       method: "eth_sendTransaction",
  //       params: [
  //         {
  //           from: window.ethereum.selectedAddress,
  //           to: "0x58926DE665A1474AfE2c4B34f336AEC76CF6507a",
  //           value: "0x0",
  //           gasPrice: "0x09184e72a000",
  //           gas: "0x2710",
  //         },
  //       ],
  //     })
  //     .then((txHash) => console.log(txHash, "check check"))
  //     .catch((error) => console.log(error));
  // };
  // useEffect(() => {
  //   if (window.ethereum.selectedAddress) {
  //     window.ethereum.on("accountsChanged", changeAcount);
  //   } else {
  //     console.log("null");
  //   }
  // }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalContent w="300px">
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: "none",
          }}
        />
        <ModalBody paddingBottom="1.5rem">
          <VStack>
            <Button
              variant="outline"
              onClick={() => {
                activate(connectors.coinbaseWallet);
                setProvider("coinbaseWallet");
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src="/images/icon/icon-5.svg"
                  alt="Coinbase Wallet Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Coinbase Wallet</Text>
              </HStack>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                // activate(connectors.walletConnect);
                // setProvider("walletConnect");
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src="/images/icon/icon-4.svg"
                  alt="Wallet Connect Logo"
                  width={26}
                  height={26}
                  borderRadius="3px"
                />
                <Text>Wallet Connect</Text>
              </HStack>
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                activate(connectors.injected);
                setProvider("injected");
                closeModal();
              }}
              w="100%"
            >
              <HStack w="100%" justifyContent="center">
                <Image
                  src="/images/icon/icon-1.svg"
                  alt="Metamask Logo"
                  width={25}
                  height={25}
                  borderRadius="3px"
                />
                <Text>Metamask</Text>
              </HStack>
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default SelectWalletModal;
