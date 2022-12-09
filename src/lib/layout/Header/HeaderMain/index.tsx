import {
  Box,
  Image,
  FormControl,
  UnorderedList,
  ListItem,
  Input,
  Button,
} from "@chakra-ui/react";
import Avatar from "lib/components/Avatar";
import Link from "next/link";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";
import SelectWalletModal from "lib/components/modal/ModalConnectWallet";

const HeaderMain: React.FC = () => {
  const { activate, deactivate } = useWeb3React();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const connectWallet = async () => {
    setOpenModal(true);
  };

  const providerOptions = {
    coinbasewallet: {
      package: CoinbaseWalletSDK,
      options: {
        appName: "Web 3 Modal Demo",
        infuraId: process.env.INFURA_KEY,
      },
    },
    walletconnect: {
      package: WalletConnect,
      options: {
        infuraId: process.env.INFURA_KEY,
      },
    },
  };

  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState(0);
  const [posHeaderMain, setPosHeaderMain] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPosHeaderMain(window.scrollY > 165);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    let moving = window.pageYOffset;

    setVisible(position > moving);
    setPosition(moving);
  };
  const headScroll = visible && posHeaderMain ? "visible" : "hidden";

  //props Avatar
  const alt = "text";
  const src = "/images/avatar/avt-2.jpg";
  const ImgStyle = {
    objectFit: "cover",
    borderRadius: "50%",
    cursor: "pointer",
  };

  return (
    // <header id="header_main" className={`header_1 js-header ${headScroll}`}>
    <header id="header_main" className={`header_1 js-header ${headScroll}`}>
      <Box className="container-fluid">
        <Box className="row">
          <Box className="col-md-12">
            <Box className="mobile-button">
              <span></span>
            </Box>
            {/*/.mobile-button */}
            <Box id="site-header-inner" className="flex">
              <Box id="site-logo" className="clearfix">
                <Box id="site-logo-inner">
                  <Link legacyBehavior href="/">
                    <a rel="home" className="main-logo">
                      <Image
                        id="logo_header"
                        src="/images/logo/logo_dark.png"
                        alt="nft-gaming"
                        width="151"
                        height="45"
                        data-retina="images/logo/logo_dark@2x.png"
                        data-width="151"
                        data-height="45"
                      />
                    </a>
                  </Link>
                </Box>
              </Box>
              <FormControl className="form-search">
                <Input
                  type="text"
                  placeholder="Search here"
                  style={{ height: "54px" }}
                />
                <Button>
                  <i className="far fa-search"></i>
                </Button>
              </FormControl>

              <Box id="site-menu">
                <nav id="main-nav" className="main-nav">
                  <UnorderedList id="menu-primary-menu" className="menu">
                    <ListItem className="menu-item menu-item-has-children current-item">
                      <a>Home</a>
                      <UnorderedList className="sub-menu">
                        <ListItem className="menu-item ">
                          <Link legacyBehavior href="/">
                            <a>Home 1</a>
                          </Link>
                        </ListItem>
                        {/* <ListItem className="menu-item current-item">
                            <a>Home 2</a>
                          </ListItem> */}
                        <ListItem className="menu-item">
                          <a>Home Animation</a>
                        </ListItem>
                      </UnorderedList>
                    </ListItem>
                    <ListItem className="menu-item menu-item-has-children">
                      <a>Explore</a>
                      <UnorderedList className="sub-menu">
                        <ListItem className="menu-item">
                          <Link legacyBehavior href="/explore">
                            <a>Explore 1</a>
                          </Link>
                        </ListItem>
                        {/* <ListItem className="menu-item">
                            <a>Explore 2</a>
                          </ListItem>
                          <ListItem className="menu-item">
                            <a>Creator</a>
                          </ListItem>
                          <ListItem className="menu-item">
                            <a>Item </a>
                          </ListItem> */}
                        <ListItem className="menu-item">
                          <Link legacyBehavior href="/explore/item_detail">
                            <a>Item Detail</a>
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </ListItem>

                    <ListItem className="menu-item menu-item-has-children ">
                      <a>Community</a>
                      <UnorderedList className="sub-menu">
                        <ListItem className="menu-item ">
                          <Link legacyBehavior href="/community/blog">
                            Blog
                          </Link>
                        </ListItem>
                        <ListItem className="menu-item">
                          <Link legacyBehavior href="/community/blog_detail">
                            <a>Blog Detail</a>
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </ListItem>

                    <ListItem className="menu-item menu-item-has-children">
                      <a>Pages</a>
                      <UnorderedList className="sub-menu">
                        <ListItem className="menu-item">
                          <Link legacyBehavior href="/pages/authors">
                            <a>Authors</a>
                          </Link>
                        </ListItem>
                        <ListItem className="menu-item">
                          <Link legacyBehavior href="/pages/wallet_connect">
                            <a>Wallet Connect</a>
                          </Link>
                        </ListItem>
                        <ListItem className="menu-item">
                          <Link legacyBehavior href="/pages/create_item">
                            <a>Create Item</a>
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </ListItem>

                    <ListItem className="menu-item ">
                      <Link legacyBehavior href="/contact">
                        <a>Contact</a>
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </nav>
                {/*/#main-nav */}
              </Box>

              <Box className="button-connect-wallet">
                <a
                  className="sc-button wallet  style-2"
                  onClick={connectWallet}
                >
                  <Image
                    src="images/icon/connect-wallet.svg"
                    alt="icon"
                    style={{ display: "inherit" }}
                  />
                  <span>Connect Wallet</span>
                </a>
              </Box>
              <Avatar
                width={45}
                height={45}
                alt={alt}
                src={src}
                style={ImgStyle}
              />
              <Box className="mode_switcher">
                <h6>
                  <span>Dark Mode</span> <strong>Activate</strong>
                </h6>
                <a className="light d-flex align-items-center">
                  <Image src="images/icon/sun.png" alt="" />
                </a>
                <a className="dark d-flex align-items-center is_active">
                  <Image id="moon_dark" src="images/icon/moon.png" alt="" />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <SelectWalletModal
        isOpen={openModal}
        closeModal={() => setOpenModal(false)}
      />
    </header>
  );
};

export default HeaderMain;
