import { Box, Image } from "@chakra-ui/react";
import { Categories } from "lib/constant/Home";

const CardCategory = ({ props }: any) => {
  const { avt, title, des } = props;
  return (
    <Box className="col-lg-4 col-md-6 col-12">
      <Box className="sc-category wow fadeInUp">
        <Box className="card-media">
          <Image src={avt} alt="" />
        </Box>
        <Box className="card-content">
          <h5>
            <a href="#">{title}</a>
          </h5>
          <p>{des}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default CardCategory;
