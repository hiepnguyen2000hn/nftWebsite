import { ListItem, Box, Image } from "@chakra-ui/react";

const Comment = (props: any) => {
  const { avtCmt, nameCmt, timeCmt, contentCmt } = props;

  return (
    <ListItem className="reply-comment">
      <Box className="post-author">
        <Box className="avatar">
          <Image src={avtCmt} alt="" />
        </Box>
        <Box className="content">
          <h4>
            <a href="#">{nameCmt}</a>
          </h4>
          <Box className="job">{timeCmt}</Box>
          <p>{contentCmt}</p>
          <a href="#" className="reply active">
            Reply
          </a>
        </Box>
      </Box>
    </ListItem>
  );
};

export default Comment;
