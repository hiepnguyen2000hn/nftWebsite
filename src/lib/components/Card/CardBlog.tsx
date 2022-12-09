import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { Blog } from "lib/constant/Blog";

const CardBlog = ({ props }: any) => {
  const { imgPost, name, date, article } = props;
  return (
    <Box className="col-lg-4 col-md-6">
      <article className="sc-card-article">
        <Box className="card-media">
          <Link legacyBehavior href="/community/blog_detail">
            <Image src={imgPost} alt="Image" />
          </Link>
        </Box>
        <Box className="content">
          <Box className="meta-info">
            <Box className="item author">
              <a>{name}</a>
            </Box>
            <Box className="item date">{date}</Box>
          </Box>
          <Box className="text-article">
            <h5>
              <Link legacyBehavior href="/community/blog_detail">
                {article}
              </Link>
            </h5>
          </Box>
          <Link legacyBehavior href="/community/blog_detail">
            <a className="sc-button btn-bordered-white style letter">
              <span>Read More</span>
            </a>
          </Link>
        </Box>
      </article>
    </Box>
  );
};

export default CardBlog;
