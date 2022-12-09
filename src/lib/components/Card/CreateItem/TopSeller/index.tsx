import { useState } from "react";
import CardHeadingTitle from "lib/components/Card/CardHeadingTitle";
import { hotCollection } from "lib/constant/Pages";
import { Box, Image } from "@chakra-ui/react";

const TopSeller: React.FC = () => {
  const [dataTopSeller, setDataTopSeller] = useState<any>(hotCollection);

  return (
    <Box className="tf-section top-seller">
      <Box className="container">
        <Box className="row">
          <CardHeadingTitle
            title="topSeller"
            isOpenIcon={false}
            isShowContentRight={false}
          />
          {dataTopSeller.map((card: any, index: number) => (
            <Box className="col-lg-3 col-md-6" key={index}>
              <Box className="sc-author-card style-2">
                <Box className="card-media">
                  <Image src={card.bgImg} alt="" />
                </Box>
                <Box className="card-avatar">
                  <Image src={card.avtImg} alt="" />
                </Box>
                <Box className="card-content">
                  <h5>
                    <a href="author.html">{card.name}</a>{" "}
                  </h5>
                  <Box className="details">{card.detail}</Box>
                  <Box className="card-bottom">
                    <Box className="widget-social">
                      <ul>
                        <li>
                          <a href="#" className="active">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </Box>
                    <a href="#" className="sc-button style-2">
                      <span>Follow</span>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TopSeller;
