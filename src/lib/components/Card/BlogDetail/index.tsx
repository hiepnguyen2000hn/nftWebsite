import React from "react";
import {
  Box,
  Image,
  Input,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import News from "./layout/CardNew";
import WgComment from "./layout/CardListCmt";

const PostDetails: React.FC = () => {
  const BlogDetails = () => {
    return (
      <article className="blog-details">
        <Box className="post-media">
          <Image src="/images/post/post-detail-1.jpg" alt="" />
          <Box className="meta">
            <Box className="item author">
              <a href="#">Dale J. Barnes</a>
            </Box>
            <Box className="item date">
              <a href="#">05 Jan 2022</a>
            </Box>
            <Box className="item comments">Comments (5)</Box>
          </Box>
        </Box>
        <Box className="post-content">
          <h1 className="post-title">
            Ultimate Digital Clean-Up Checklist Are You Prepared For New Year
            E-Commerce Platforms An Overview Most Common
          </h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur
          </p>
        </Box>
        <blockquote className="block-quote">
          <h4>
            Roll Out New Features Without Hurting Loyal Users Unicode Character
            Sets The Ultim An Overview UX Design Deliverables
          </h4>
          <Box className="author">John B. Thomas</Box>
        </blockquote>
        <Box className="post-content">
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam
          </p>
        </Box>
      </article>
    );
  };

  const PostAuthor = () => {
    return (
      <>
        <Box className="post-details">
          <Box className="details-left">
            <Box className="wg-title style-2">Popular Tags</Box>
            <Box className="wg-tags style-2">
              <UnorderedList>
                <ListItem className="active">
                  <a href="#">Crypto</a>
                </ListItem>
                <ListItem>
                  <a href="#">Bitcoin</a>
                </ListItem>
                <ListItem>
                  <a href="#">ICO Landing</a>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box className="details-right">
            <Box className="wg-title style-2">Share Post</Box>
            <Box className="widget-social style-3">
              <UnorderedList>
                <ListItem>
                  <a href="#" className="active">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
        <Box className="post-author style-2">
          <Box className="avatar">
            <Image src="/images/avatar/avt-12.jpg" alt="" />
          </Box>
          <Box className="content">
            <h4>
              <a href="#">Herbert N. Johnson</a>
            </h4>
            <Box className="job">Author</Box>
            <p>
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur must explain to you how all
              this mistaken idea of denouncing Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
              pariatur must explain to you how all this mistaken idea of
              denouncing Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur must explain to
              you how all this mistaken idea of denouncing Quis autem vel eum
              iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur must explain to you how all this mistaken
              idea of denouncing Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur must explain to
              you how all this mistaken idea of denouncing Quis autem vel eum
              iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur must explain to you how all this mistaken
              idea of denouncing Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur must explain to
              you how all this mistaken idea of denouncing
            </p>
            <Box className="widget-social style-4">
              <UnorderedList>
                <ListItem>
                  <a href="#" className="active">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      </>
    );
  };

  const FormComment = () => {
    return (
      <Box className="wg-post-comments">
        <Box className="wg-title">Leave a Reply</Box>
        <Box className="desc">We’re Ready to Help Your Buisness</Box>
        <form
          method="post"
          id="contactform"
          className="comment-form form-submit"
          action="./contact/contact-process.php"
          acceptCharset="utf-8"
          noValidate
        >
          <Box className="text-wrap clearfix">
            <fieldset className="name-wrap">
              <Input
                type="text"
                id="name"
                className="tb-my-input"
                name="name"
                tabIndex={1}
                placeholder="Full Name"
                value=""
                size="32"
                aria-required="true"
                required
              />
            </fieldset>
            <fieldset className="email-wrap">
              <Input
                type="email"
                id="email"
                className="tb-my-input"
                name="email"
                tabIndex={2}
                placeholder="Email Address"
                value=""
                size="32"
                aria-required="true"
                required
              />
            </fieldset>
          </Box>
          <fieldset className="message-wrap">
            <textarea
              id="comment-message"
              name="message"
              tabIndex={4}
              placeholder="Write Message"
              aria-required="true"
            ></textarea>
          </fieldset>
          <Button
            name="submit"
            type="submit"
            id="comment-reply"
            className="sc-button style letter style-2"
          >
            <span>Send Reply</span>{" "}
          </Button>
        </form>
      </Box>
    );
  };

  const WgSearchCategory = () => {
    return (
      <>
        <Box className="widget wg-search">
          <form action="#" method="get" role="search" className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search"
              value=""
              name="s"
              title="Search for"
              required
            />
            <Button
              className="search search-submit"
              type="submit"
              title="Search"
            ></Button>
          </form>
        </Box>
        <Box className="widget item wg-category">
          <Box className="wg-title">Category</Box>
          <UnorderedList>
            <ListItem>
              <a href="#">
                <span>Bitcoin</span>
                <span>(5)</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#">
                <span>Blockchain</span>
                <span>(8)</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#">
                <span>NFT</span>
                <span>(3)</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#">
                <span>Cryptocurrency</span>
                <span>(2)</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#">
                <span>ICO</span>
                <span>(4)</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#">
                <span>News</span>
                <span>(5)</span>
              </a>
            </ListItem>
            <ListItem>
              <a href="#">
                <span>Uncategorized</span>
                <span>(2)</span>
              </a>
            </ListItem>
          </UnorderedList>
        </Box>
      </>
    );
  };

  const WgPopularTags = () => {
    return (
      <Box className="widget item wg-tags">
        <Box className="wg-title">Popular Tags</Box>
        <UnorderedList>
          <ListItem className="active">
            <a href="#">Crypto</a>
          </ListItem>
          <ListItem>
            <a href="#">Bitcoin</a>
          </ListItem>
          <ListItem>
            <a href="#">Landing</a>
          </ListItem>
          <ListItem>
            <a href="#">Digital</a>
          </ListItem>
          <ListItem>
            <a href="#">NFTs</a>
          </ListItem>
        </UnorderedList>
      </Box>
    );
  };

  return (
    <>
      <Box className="tf-section post-details" style={{ padding: "100px 0" }}>
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-8 col-md-12">
              <BlogDetails />
              <PostAuthor />
              <News type="related" styleCard="style-2" title="Related News" />
              <WgComment />
              <FormComment />
            </Box>
            <Box className="col-lg-4 col-md-12">
              <aside className="side-bar">
                <WgSearchCategory />
                <News type="recent" styleCard="style-3" title="Recent News" />
                <WgPopularTags />
              </aside>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PostDetails;
