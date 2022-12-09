import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ProductImgx2 = ({ props }: any) => {
  const { srcImg, label } = props;

  // console.log(srcImg, "srcImgCardItem");

  return (
    <Box className="product-img flex">
      <Box className="img-left">
        <Image src={srcImg?.imgLeft} alt="Image" />
        <label>BSC</label>
      </Box>
      <Box className="img-right">
        <Box className="top-img flex">
          <Image src={srcImg?.imgRight1} alt="Image" />
          <Image src={srcImg?.imgRight2} alt="Image" />
        </Box>
        <Box className="bottom-img">
          <Image src={srcImg?.imgRight3} alt="Image" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductImgx2;
