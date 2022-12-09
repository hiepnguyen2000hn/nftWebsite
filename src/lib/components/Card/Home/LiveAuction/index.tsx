import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeadingTitle from "../../CardHeadingTitle";
import CardItem from "../../CardItem/CardItem";
import { LiveAuctions } from "lib/constant/Home";

const LiveAuction: React.FC = () => {
  const [dataCardItem, setDataCardItem] = useState<any>(LiveAuctions);

  return (
    <section className="tf-live-auctions tf-section bg-color-1">
      <Box className="container">
        <Box className="row">
          <CardHeadingTitle
            title="liveAuction"
            isOpenIcon={true}
            isShowContentRight={false}
          />
          <Box className="col-md-12">
            <Box className="swiper-container live-auc">
              <Box className="swiper-wrapper">
                {dataCardItem?.map((card: any, index: number) => (
                  <CardItem props={{ ...card }} key={index} isStyle7={false} />
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

export default LiveAuction;
