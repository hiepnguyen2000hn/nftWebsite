import { Box, UnorderedList, ListItem, Image } from "@chakra-ui/react";
import Comment from "./CardComment";
import { comment } from "lib/constant/Blog";
import React, { useState } from "react";

const WgComment: React.FC = () => {
  const [dataCmt, setDataCmt] = useState<any>(comment);

  return (
    <Box className="widget item wg-comments">
      <Box className="wg-title">People Comments</Box>
      {dataCmt?.map((cardCmt: any, index: number) => {
        return (
          <UnorderedList key={index}>
            <ListItem>
              <Box className="post-author">
                <Box className="avatar">
                  <Image src={cardCmt.avtCmt} alt="" />
                </Box>
                <Box className="content">
                  <h4>
                    <a href="#">{cardCmt.nameCmt}</a>
                  </h4>
                  <Box className="job">{cardCmt.timeCmt}</Box>
                  <p>{cardCmt.contentCmt}</p>
                  <a href="#" className="reply active">
                    Reply
                  </a>
                </Box>
              </Box>
            </ListItem>
            {cardCmt?.replyCmt?.map((card: any, index: number) => (
              <Comment props={card} key={index} />
            ))}
          </UnorderedList>
        );
      })}
    </Box>
  );
};

export default WgComment;
