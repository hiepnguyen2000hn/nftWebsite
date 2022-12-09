import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import ProductImg from "./layout/ProductImg";
import ProductContent from "./layout/ProductContent";

const CardItem = ({ props }: any, isStyle7: any) => {
  const [showStyleLast, setShowStyleLast] = useState<any>(props.showStyleLast);

  console.log("isStyle7 CardItem", isStyle7);

  const styleLast = {
    // home-lastcollections
    backgroundColor: showStyleLast && "#030303",
    border: showStyleLast && "1px solid rgba(255, 255, 255,0.1)",
    padding: showStyleLast && "29px 24px 12px",
  };

  const styleItemDetails = isStyle7 && "style-7";

  return (
    <Box className="swiper-slide wow fadeInUp ">
      <Box className="slider-item">
        <Box
          className={`sc-product-item ${styleItemDetails}`}
          style={styleLast}
        >
          <ProductImg props={props} />
          <ProductContent props={props} isStyle7={isStyle7} />
        </Box>
      </Box>
    </Box>
  );
};
export default CardItem;
