import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeadingTitle from "../../CardHeadingTitle";
import { bestSeller } from "lib/constant/Home";
import CardBestSeller from "../../CardBestSeller";

const BestSeller: React.FC = () => {
  const [dataCardBestSeller, setDataCardBestSeller] = useState<any>(bestSeller);

  return (
    <section className="tf-best-seller">
      <Box className="best-seller-inner">
        <Box className="row">
          <CardHeadingTitle
            title="bestSeller"
            isOpenIcon={false}
            isShowContentRight={false}
          />
          {dataCardBestSeller?.map((card: {}, index: number) => (
            <CardBestSeller props={{ ...card }} key={index} />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default BestSeller;
