import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import CardHeadingTitle from "../../CardHeadingTitle";
import CardHotCollection from "./CardHotCollection";
import { hotCollection } from "lib/constant/Pages";

const HotCollections: React.FC = () => {
  const [dataHotCollection, setDataHotCollection] =
    useState<any>(hotCollection);
  return (
    <section className="hot-collections-page tf-section">
      <Box className="container">
        <Box className="row">
          <CardHeadingTitle
            title="hotCollection"
            isOpenIcon={false}
            isShowContentRight={false}
          />
          <Box className="col-md-12">
            <Box className="swiper-container popular-coll">
              <Box className="swiper-wrapper">
                {dataHotCollection?.map((card: any, index: number) => (
                  <CardHotCollection props={card} key={index} />
                ))}
              </Box>
              <Box className="swiper-pagination"></Box>
              <Box className="swiper-button-next btn-slide-next "></Box>
              <Box className="swiper-button-prev btn-slide-prev"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default HotCollections;
