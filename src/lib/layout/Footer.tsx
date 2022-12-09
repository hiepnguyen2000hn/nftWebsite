import { Text, Box, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="footer" className="clearfix bg-style ft-home-1">
        <Box className="container">
          <Box className="row">
            <Box className="col-lg-3 col-md-6 col-12">
              <Box className="widget widget-logo">
                <Box className="logo-footer" id="logo-footer">
                  <Link legacyBehavior href="/">
                    <Image
                      id="logo_footer"
                      src="/logo/logo_dark.png"
                      alt="nft-gaming"
                      width="151"
                      height="45"
                      data-retina="assets/images/logo/logo_dark@2x.png"
                      data-width="151"
                      data-height="45"
                    />
                  </Link>
                </Box>
                <Text className="sub-widget-logo">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptate
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quaes
                </Text>
                <Box className="widget-social">
                  <UnorderedList style={{ color: "#fff" }}>
                    <ListItem>
                      <a className="active">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </ListItem>
                    <ListItem>
                      <a>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </ListItem>
                    <ListItem>
                      <a>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </ListItem>
                    <ListItem>
                      <a>
                        <i className="fab fa-youtube"></i>
                      </a>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-2 col-md-6 col-sm-6 col-6">
              <Box className="widget widget-menu menu-marketplace">
                <h5 className="title-widget">Marketplace</h5>
                <UnorderedList>
                  <ListItem>
                    <a>Gaming </a>
                  </ListItem>
                  <ListItem>
                    <a>Product </a>
                  </ListItem>
                  <ListItem>
                    <a>All NFTs</a>
                  </ListItem>
                  <ListItem>
                    <a>Social Network</a>
                  </ListItem>
                  <ListItem>
                    <a>Domain Names</a>
                  </ListItem>
                  <ListItem>
                    <a>Collectibles</a>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box className="col-lg-3 col-md-6 col-sm-6 col-6">
              <Box className="widget widget-menu menu-supports">
                <h5 className="title-widget">Supports</h5>
                <UnorderedList>
                  <ListItem>
                    <Link legacyBehavior href="/contact">
                      <a>Setting & Privacy </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link legacyBehavior href="/contact">
                      <a>Help & Support </a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link legacyBehavior href="/contact">
                      <a>Live Auctions</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link legacyBehavior href="/explore/item_detail">
                      <a>Item Details</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link legacyBehavior href="/contact">
                      <a>24/7 Supports</a>
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link legacyBehavior href="/community/blog">
                      <a>Blog</a>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box className="col-lg-4 col-md-6 col-sm-12 col-12">
              <Box className="widget widget-post">
                <h5 className="title-widget">News & Post</h5>
                <UnorderedList className="post-new">
                  <ListItem>
                    <Box className="post-img">
                      <Image
                        src="/images/post/post-recent-new-4.jpg"
                        alt="Post New"
                      />
                    </Box>
                    <Box className="post-content">
                      <h6 className="title">
                        <Link legacyBehavior href="/community/blog_detail">
                          <a>
                            Roll Out New Features Without Hurting Loyal Users
                          </a>
                        </Link>
                      </h6>

                      <Link legacyBehavior href="/community/blog_detail">
                        <a className="post-date">
                          <i className="far fa-calendar-week"></i> 25 JAN 2022
                        </a>
                      </Link>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box className="post-img">
                      <Image
                        src="/images/post/post-recent-new-5.jpg"
                        alt="Post New"
                      />
                    </Box>
                    <Box className="post-content">
                      <h6 className="title">
                        <Link legacyBehavior href="/community/blog_detail">
                          <a>
                            An Overview The Most Comon UX Design Deliverables
                          </a>
                        </Link>
                      </h6>

                      <Link legacyBehavior href="/community/blog_detail">
                        <a className="post-date">
                          <i className="far fa-calendar-week"></i> 25 JAN 2022
                        </a>
                      </Link>
                    </Box>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
