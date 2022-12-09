import { Box, Image, UnorderedList, ListItem } from "@chakra-ui/react";

const CardTopSeller = (props: any) => {
  const { avt, name, amount } = props;
  return (
    <Box className="col-xl-4 col-lg-6 col-md-6">
      <Box className="sc-author style-2">
        <Box className="card-avatar">
          <Image src={avt} alt="Image" />
        </Box>
        <Box className="infor">
          <h5>
            <a href="#">{name}</a>
          </h5>
          <Box className="details">{amount} ETH</Box>
          <UnorderedList className="rating">
            <ListItem>
              <i className="fas fa-star"></i>
            </ListItem>
            <ListItem>
              <i className="fas fa-star"></i>
            </ListItem>
            <ListItem>
              <i className="fas fa-star"></i>
            </ListItem>
            <ListItem>
              <i className="fas fa-star"></i>
            </ListItem>
            <ListItem className="un-rate">
              <i className="fas fa-star"></i>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box className="button-follow">
          <a href="#" className="sc-button style-2">
            <span>Follow</span>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default CardTopSeller;
