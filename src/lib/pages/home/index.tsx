import { NextSeo } from "next-seo";
import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";
import React from "react";
import axios from "axios";

import TfSlider from "lib/components/Card/Home/Slider";
import LiveAuction from "lib/components/Card/Home/LiveAuction";
import LatestCollection from "lib/components/Card/Home/LastestCollection";
import BestSeller from "lib/components/Card/Home/BestSeller";
import TredyCollection from "lib/components/Card/Home/TrendyCollection";
import PoplarCategory from "lib/components/Card/Home/PoplarCategory";
import CardNewLetter from "lib/components/Card/CardSubFooter";

const Home: React.FC = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://636767ca79b0914b75dfc6c9.mockapi.io/category")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // @ts-ignore
  return (
    <>
      <TfSlider />
      <LiveAuction />
      <LatestCollection />
      <BestSeller />
      <TredyCollection />
      <PoplarCategory />
      <CardNewLetter />
    </>
  );
};

export default Home;
