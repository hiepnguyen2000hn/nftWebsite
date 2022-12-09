import React, { useState } from "react";
import { Box, Select, Button } from "@chakra-ui/react";
import CardItem from "../../CardItem/CardItem";
import { trendyCollectionsPage } from "lib/constant/Explore";

const TrendyCollectionsPage: React.FC = () => {
  const [dataTrendyCollection, setDataTrendyCollection] = useState<any>(
    trendyCollectionsPage
  );

  return (
    <section className="tf-section trendy-colection-page style-2">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12">
            <Box className="wg-drop-category seclect-box">
              <Box id="all-items" className="dropdown">
                <Box className="select-dropdown">
                  <Select
                    variant="filled"
                    bg="#494957"
                    color="white"
                    size="lg"
                    placeholder="All Categories"
                  >
                    <option value="NFT">NFT</option>
                    <option value="Crypto">Crypto</option>
                    <option value="Token">Token</option>
                  </Select>
                </Box>
              </Box>
              <Box id="new-items" className="dropdown">
                <Box className="select-dropdown">
                  <Select
                    variant="filled"
                    bg="#494957"
                    color="white"
                    size="lg"
                    placeholder="New Items"
                  >
                    <option value="New bestsellers">New bestsellers</option>
                    <option value="New releases">New releases</option>
                  </Select>
                </Box>
              </Box>
              <Box id="buy" className="dropdown">
                <Box className="select-dropdown">
                  <Select
                    variant="filled"
                    bg="#494957"
                    color="white"
                    size="lg"
                    placeholder="Buy Now"
                  >
                    <option value="Wallet">Wallet</option>
                    <option value="Website">Website</option>
                  </Select>
                </Box>
              </Box>
              <Box id="sort-by" className="dropdown">
                <Box className="select-dropdown">
                  <Select
                    variant="filled"
                    bg="#494957"
                    color="white"
                    size="lg"
                    placeholder="Sort By"
                  >
                    <option value="View">View</option>
                    <option value="Rating">Rating</option>
                    <option value="Sale">Sale</option>
                    <option value="Date">Date</option>
                  </Select>
                </Box>
              </Box>
              <Button className="sc-button style letter style-2">
                <span>Filter</span>{" "}
              </Button>
            </Box>
          </Box>
          {dataTrendyCollection.map((card: any, index: number) => (
            <Box className="fl-item col-xl-3 col-lg-4 col-md-6" key={index}>
              <CardItem props={card} />
            </Box>
          ))}
          <Box className="col-md-12">
            <Button id="loadmore" className=" sc-button style letter style-2">
              <span>Explore More</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default TrendyCollectionsPage;
