import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeadingTitle from "../../CardHeadingTitle";
import CardItem from "../../CardItem/CardItem";
import { trendy } from "lib/constant/Home";

const TredyCollection: React.FC = () => {
  const [dataTrendy, setDataTrendy] = useState<any>(trendy);

  return (
    <section className="tf-trendy-collections tf-section">
      <Box className="container">
        <Box className="row">
          <CardHeadingTitle
            title="tredyCollection"
            isOpenIcon={false}
            isShowContentRight={false}
          />
          <Box className="col-md-12">
            <Box className="swiper-container trendy">
              <Box className="swiper-wrapper">
                {dataTrendy?.map((card: any, index: number) => (
                  <CardItem props={{ ...card }} key={index} />
                ))}
              </Box>
              <Box className="swiper-button-next btn-slide-next "></Box>
              <Box className="swiper-button-prev btn-slide-prev"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default TredyCollection;
