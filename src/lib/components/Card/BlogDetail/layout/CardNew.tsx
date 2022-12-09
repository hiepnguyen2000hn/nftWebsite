import { Box, UnorderedList } from "@chakra-ui/react";
import PostNew from "./CardPostNew";
import { postNew } from "lib/constant/Blog";
import React, { useState } from "react";

const News: React.FC<{
  type: string;
  styleCard: any;
  title: string;
}> = ({ type, styleCard, title }) => {
  const [dataPostNew, setDataPostNew] = useState<any>(postNew);

  return (
    <Box className={`widget item widget-post ${styleCard}`}>
      <Box className={`wg-title ${styleCard}`}>{title}</Box>
      <UnorderedList className="post-new">
        {dataPostNew?.map(
          (card: any, index: number) =>
            card.type === type && <PostNew props={card} key={index} />
        )}
      </UnorderedList>
    </Box>
  );
};

export default News;
