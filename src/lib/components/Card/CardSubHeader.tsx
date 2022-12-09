import React, { useState } from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { flPageTitle } from "lib/constant/SubHeader";

const CardPageTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section className="fl-page-title">
      <Box className="overlay"></Box>
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12">
            <Box className="page-title-inner flex">
              <Box className="page-title-heading">
                <h2 className="heading">
                  {/* {flPageTitle[`${title}`].pageTitleHeading} */}
                </h2>
              </Box>
              <Box className="breadcrumbs">
                <ul>
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  {/* <li>{flPageTitle[`${title}`].pageTitleBreadcrumbs}</li> */}
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default CardPageTitle;
