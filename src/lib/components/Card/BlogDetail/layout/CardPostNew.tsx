import { ListItem, Box, Image } from "@chakra-ui/react";

const PostNew = (props: any) => {
  const { postImg, postDate, postTitle, type } = props;

  return (
    <ListItem>
      <Box className="post-img">
        <Image src={postImg} alt="Post New" />
      </Box>
      <Box className="post-content">
        <a href="#" className="post-date">
          <i className="far fa-calendar-week"></i>
          {postDate}
        </a>
        <h6 className="title">
          <a href="#">{postTitle}</a>
        </h6>
      </Box>
    </ListItem>
  );
};

export default PostNew;
