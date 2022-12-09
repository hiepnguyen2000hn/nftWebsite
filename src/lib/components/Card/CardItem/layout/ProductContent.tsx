import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import CountDownt from "lib/components/countDown/CountDownt";

const ProductContent = ({ props }: any, isStyle7: any) => {
  const {
    avatar,
    title,
    label,
    name,
    position,
    showPrice,
    showStyleExplore,
    showStyleOurLast,
  } = props;

  const ProductPrice = (props: any) => {
    const { ETH, dollar } = props;

    return (
      <Box className="product-price" style={{ color: "#fff" }}>
        <Box className="title">Current Bid</Box>
        <Box className="price">
          <span>{ETH} ETH</span>
          <span>= $ {dollar}</span>
        </Box>
      </Box>
    );
  };

  const styleContent = {
    // styleExplore
    paddingTop: showStyleExplore && "11px",
  };

  const styleCountDownt = {
    // styleOurLastExplore
    textAlign: showStyleOurLast && "center",
    width: showStyleOurLast && "178px",
    position: showStyleOurLast && "absolute",
    top: showStyleOurLast && "auto",
    bottom: showStyleOurLast && "0",
    left: showStyleOurLast && "50%",
    transform: showStyleOurLast && "translate(-50%,50%)",
  };

  return (
    <>
      <Box className="product-content" style={styleContent}>
        {isStyle7 && <label>{label}</label>}
        <h5 className="title">
          <Link legacyBehavior href="/explore/item_detail">
            <a>{title}</a>
          </Link>
        </h5>
        <Box className="product-author flex">
          <Box className="avatar">
            <Image src={avatar} alt="Image" />
          </Box>
          <Box className="infor">
            <Box className="author-name">
              <Link legacyBehavior href="/pages/authors">
                <a>{name}</a>
              </Link>
            </Box>
            <Text>{position}</Text>
          </Box>
        </Box>
        {!showPrice && <ProductPrice props={props} />}
      </Box>

      <Box style={styleCountDownt}>
        {showStyleOurLast && (
          <CountDownt timeTillDate={"2022-10-22 00:00:00"} />
        )}
      </Box>
    </>
  );
};

export default ProductContent;
