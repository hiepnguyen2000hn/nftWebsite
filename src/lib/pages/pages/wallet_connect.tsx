import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import { walletConnect } from "lib/constant/Pages";
import CardHeadingTitle from "lib/components/Card/CardHeadingTitle";

const WalletConnect: React.FC = () => {
  const [dataWalletConnect, setDataWalletConnect] =
    useState<any>(walletConnect);

  return (
    <>
      <CardPageTitle title="walletConnect" />

      <section className="tf-section connect-wallet">
        <Box className="container">
          <Box className="row">
            <CardHeadingTitle
              title="walletConnect"
              isOpenIcon={false}
              isShowContentRight={false}
            />

            {dataWalletConnect.map((card: any, index: number) => (
              <Box className="col-lg-4 col-md-4" key={index}>
                <Box className="sc-wallet">
                  <Box className="icon">
                    <Image src={card.iconImg} alt="" />
                  </Box>
                  <Box className="content">
                    <h4>
                      <a href="#">{card.title}</a>
                    </h4>
                    <p>{card.des}</p>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </section>

      <CardNewLetter />
    </>
  );
};

export default WalletConnect;
