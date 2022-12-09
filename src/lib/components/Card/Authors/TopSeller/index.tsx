import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import CardHeadingTitle from "../../CardHeadingTitle";
import { topSeller } from "lib/constant/Pages";
import CardTopSeller from "./CardTopSeller";

const TopSellerPage: React.FC = () => {
  const [dataTopSeller, setDataTopSeller] = useState<any>(topSeller);
  return (
    <section className="tf-section top-seller-page">
      <Box className="container">
        <Box className="row">
          <CardHeadingTitle
            title="topSeller"
            isOpenIcon={false}
            isShowContentRight={true}
          />

          {dataTopSeller.map((card: any, index: number) => (
            <CardTopSeller props={card} key={index} />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default TopSellerPage;
