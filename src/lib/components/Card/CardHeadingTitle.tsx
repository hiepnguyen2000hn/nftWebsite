import { Box } from "@chakra-ui/react";
import React from "react";
import { HeadingTitle } from "lib/constant/Home";

const CardHeadingTitle: React.FC<{
  title: string;
  isOpenIcon: boolean;
  isShowContentRight: boolean;
}> = ({ title, isOpenIcon, isShowContentRight }) => {
  const ContentRight = () => {
    return (
      <Box className="content-right">
        <button className="sc-button style letter style-2">
          <span>Explore More</span>{" "}
        </button>
      </Box>
    );
  };

  // @ts-ignore
  return (
    <Box className="col-md-12">
      <Box className="sc-heading style-2 wow fadeInUp has-icon">
        <Box className="content-left">
          <Box className="inner">
            {isOpenIcon && (
              <Box className="group">
                <Box className="icon">
                  <i className="ripple"></i>
                </Box>
              </Box>
            )}
            <h3 style={{ fontSize: 42, fontWeight: 550 }}>
              {/* {HeadingTitle[`${title}`].title} */}
            </h3>
            {/* <p className="desc">{HeadingTitle[`${title}`].des}</p> */}
          </Box>
        </Box>
        {isShowContentRight && <ContentRight />}
      </Box>
    </Box>
  );
};

export default CardHeadingTitle;
