import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

const CardBestSeller = ({ props }: any) => {
  const { avt, name, detail } = props;

  return (
    <Box className="col-lg-2 col-md-4 col-6">
      <Box className="sc-author wow fadeInUp">
        <Box className="card-avatar">
          <Image src={avt} alt="Image" />
        </Box>
        <Box className="infor">
          <h6>
            <Link legacyBehavior href="/pages/authors">
              <a>{name}</a>
            </Link>
          </h6>
          <Box className="details">{detail}</Box>
        </Box>
        <a href="#" className="sc-button btn-bordered-white">
          <span>Follow</span>
        </a>
      </Box>
    </Box>
  );
};

export default CardBestSeller;
