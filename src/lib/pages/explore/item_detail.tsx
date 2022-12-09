import Link from "next/link";
import React, { useState, useEffect } from "react";
import PlaceBid from "lib/components/modal/ModalPlaceBid";
import CountDownt from "lib/components/countDown/CountDownt";
import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";

import ItemDetailsPage from "lib/components/Card/Explore/ItemDetail/layout/ItemDetailsPage";
import LiveAutions from "lib/components/Card/Explore/ItemDetail/layout/LiveAutions";

const ItemDetail: React.FC = () => {
  return (
    <>
      <CardPageTitle title="itemDetail" />
      <ItemDetailsPage />
      <LiveAutions />
      <CardNewLetter />
    </>
  );
};

export default ItemDetail;
