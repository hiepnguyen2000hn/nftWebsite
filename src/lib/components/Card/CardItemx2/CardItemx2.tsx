import { Box } from "@chakra-ui/react";
import React from "react";
import ProductImgx2 from "./layout/ProductImg";
import ProductContent from "./layout/ProductContent";

const CardItemx2 = ({ props }: any) => {
  return (
    <Box className="swiper-slide wow fadeInUp tf-col-itemx2">
      <Box className="slider-item">
        <Box className="sc-product-item style-4 bg-color-dark">
          <ProductImgx2 props={props} />
          <ProductContent props={props} />
        </Box>
      </Box>
    </Box>
  );
};

export default CardItemx2;
