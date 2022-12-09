import { Box, Image } from "@chakra-ui/react";

const CardHotCollection = (props: any) => {
  const { bgImg, avtImg, name, detail } = props;
  return (
    <Box className="swiper-slide">
      <Box className="slider-item">
        <Box className="sc-author-card">
          <Box className="card-media">
            <Image src={bgImg} alt="Image" />
          </Box>
          <Box className="card-avatar">
            <Image src={avtImg} alt="" />
          </Box>
          <Box className="card-content">
            <h5>
              <a href="#">{name}</a>{" "}
            </h5>
            <Box className="details">{detail}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardHotCollection;
