import type { ReactNode } from "react";
import Header from "./Header/Header";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [off_fixed, setOffFixed] = useState<string>("off-fixed");

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  const onScroll = (e: any) => {
    let c = e.target.documentElement.scrollTop;
    if (c < 650) {
      setOffFixed("off-fixed");
    } else {
      setOffFixed("");
    }
  };

  const onClickActive = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box className="body header-fixed is_dark">
        <Box id="wrapper">
          <Box id="page" className="clearfix">
            <Header />
            <Box>{children}</Box>
            <Box className={`scrollToTop ${off_fixed}`} onClick={onClickActive}>
              <i className="fa fa-chevron-up"></i>
            </Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
