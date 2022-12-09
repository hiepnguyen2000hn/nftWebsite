import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const ProductContent = ({ props }: any) => {
  const { avatar, title, name, position } = props;

  return (
    <Box className="product-content">
      <h5 className="title">
        <Link legacyBehavior href="/explore/item_detail">
          <a>{title}</a>
        </Link>
      </h5>
      <Box className="product-author flex mg-bt-0">
        <Box className="left flex">
          <Box className="avatar">
            <Image src={avatar} alt="Image" />
          </Box>
          <Box className="infor">
            <Box className="author-name">
              <Link legacyBehavior href="/pages/authors">
                <a>{name}</a>
              </Link>
            </Box>
            <span>{position}</span>
          </Box>
        </Box>
        <Box className="button-wishlish">
          <a href="#" className=" wishlish">
            <i className="fas fa-heart"></i>
          </a>
          <span>152k</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductContent;
