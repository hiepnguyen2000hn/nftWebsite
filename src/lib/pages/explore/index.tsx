import Link from "next/link";
import { Box, Select } from "@chakra-ui/react";
// import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import OutLastestPage from "lib/components/Card/Explore/OurLastestPage";
import TrendyCollectionsPage from "lib/components/Card/Explore/TrendyCollectionPage";

const Explore: React.FC = () => {
  return (
    <>
      <CardPageTitle title="explore" />
      <OutLastestPage />
      <TrendyCollectionsPage />
      <CardNewLetter />
    </>
  );
};

export default Explore;
