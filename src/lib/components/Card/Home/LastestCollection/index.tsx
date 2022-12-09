import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeadingTitle from "../../CardHeadingTitle";
import CardItem from "../../CardItem/CardItem";
import CardItemx2 from "../../CardItemx2/CardItemx2";
import { latestCollections } from "lib/constant/Home";

const LatestCollection: React.FC = () => {
  const [dataLastCollection, setLastCollection] =
    useState<any>(latestCollections);

  return (
    <section className="tf-latest-collections tf-section bg-color-2">
      <Box className="container">
        <Box className="row">
          <CardHeadingTitle
            title="latestCollection"
            isOpenIcon={false}
            isShowContentRight={false}
          />

          <Box className="col-md-12">
            <Box className="swiper-container latest-coll style-2">
              <Box className="swiper-wrapper">
                {dataLastCollection.map((card: any, index: number) => {
                  if (card.type === "item") {
                    return <CardItem props={{ ...card }} key={index} />;
                  } else if (card.type === "groupItem") {
                    return <CardItemx2 props={{ ...card }} key={index} />;
                  } else {
                    return null;
                  }
                })}
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

export default LatestCollection;
