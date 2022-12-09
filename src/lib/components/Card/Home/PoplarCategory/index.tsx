import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import CardHeadingTitle from "../../CardHeadingTitle";
import CardCategory from "../../CardCategory";
import { categories } from "lib/constant/Home";

const PoplarCategory: React.FC = () => {
  const [dataCardCategory, setDataCardCategory] = useState<any>(categories);

  return (
    <section className="tf-category tf-section">
      <Box className="category-inner">
        <Box className="row">
          <CardHeadingTitle
            title="poplarCategory"
            isOpenIcon={false}
            isShowContentRight={false}
          />
          {dataCardCategory?.map((card: any, index: number) => (
            <CardCategory props={{ ...card }} key={index} />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default PoplarCategory;
