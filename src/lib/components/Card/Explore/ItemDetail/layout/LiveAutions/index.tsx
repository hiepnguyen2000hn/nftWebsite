import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeadingTitle from "lib/components/Card/CardHeadingTitle";
import { LiveAuctions } from "lib/constant/Home";
import CardItem from "lib/components/Card/CardItem/CardItem";

const LiveAutions: React.FC = () => {
  const [data, setData] = useState<any>(LiveAuctions);

  return (
    <>
      <section className="live-autions tf-section">
        <Box className="container">
          <Box className="row">
            <CardHeadingTitle
              title="liveAuction"
              isOpenIcon={true}
              isShowContentRight={false}
            />
            <Box className="col-md-12">
              <Box className="swiper-container live-auc style-2">
                <Box className="swiper-wrapper">
                  {data.map((card: any, index: number) => (
                    <CardItem props={card} key={index} isStyle7={true} />
                  ))}
                </Box>
                <Box className="swiper-button-next btn-slide-next "></Box>
                <Box className="swiper-button-prev btn-slide-prev"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default LiveAutions;
