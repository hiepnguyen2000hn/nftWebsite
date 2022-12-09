import { Box, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CountDownt from "lib/components/countDown/CountDownt";
import PlaceBid from "lib/components/modal/ModalPlaceBid";

const ItemDetailsPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const connectPlaceBid = async () => {
    setOpenModal(true);
  };

  const [timeTillDate, setTimeTillDate] = useState<null>(null);

  useEffect(() => {
    // @ts-ignore
    setTimeTillDate("2022-10-22 00:00:00");
  }, []);

  return (
    <>
      <section className="tf-section item-details-page">
        <Box className="container">
          <Box className="row">
            <Box className="col-xl-6 col-lg-12 col-md-12">
              <Box className="item-media">
                <Box className="media">
                  <Image
                    src="/images/product-item/auction-detail.jpg"
                    alt="Image"
                  />
                </Box>
                <Box className="countdown style-2">
                  {/* <span
                    className="js-countdown"
                    data-timer="516400"
                    data-labels=" Days  , Hour , Mint ,Seco"
                  ></span> */}
                  <CountDownt timeTillDate={timeTillDate} />
                </Box>
              </Box>
            </Box>
            <Box className="col-xl-6 col-lg-12 col-md-12">
              <Box className="content-item">
                <h3> Mission For Ghost Fighter</h3>
                <p className="mg-bt-42">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut
                </p>
                <Box className="author-item">
                  <Box className="avatar">
                    <Image src="/images/avatar/avt-4.jpg" alt="Image" />
                  </Box>
                  <Box className="infor">
                    <Box className="create">Owner By</Box>
                    <h6>
                      <Link legacyBehavior href="/pages/authors">
                        <a>Duane M. Mendoza</a>
                      </Link>
                    </h6>
                    <Box className="widget-social">
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
                            <i className="fab fa-instagram"></i>
                          </a>
                        </ListItem>
                        <ListItem>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>
                </Box>
                <UnorderedList className="list-details-item">
                  <ListItem>
                    <span className="name">Current Price 1.5 ETH</span>
                    <span className="price">$500.89</span>{" "}
                    <span className="pagi">1 of 5</span>{" "}
                  </ListItem>
                  <ListItem>Size 14000 x 14000 px</ListItem>
                  <ListItem> Volume Traded 64.1</ListItem>
                </UnorderedList>
                <Box className="author-bid">
                  <Box className="author-item">
                    <Box className="avatar">
                      <Image src="/images/avatar/avt-6.jpg" alt="Image" />
                    </Box>
                    <Box className="infor">
                      <h6>
                        <Link legacyBehavior href="/pages/authors">
                          <a>Keith J. Kelley</a>
                        </Link>
                      </h6>
                      <Box className="create">Creators</Box>
                    </Box>
                  </Box>
                  <Box className="author-item">
                    <Box className="avatar">
                      <Image src="/images/avatar/avt-3.jpg" alt="Image" />
                    </Box>
                    <Box className="infor">
                      <h6>
                        <Link legacyBehavior href="/pages/authors">
                          <a>David Michels</a>
                        </Link>
                      </h6>
                      <Box className="create">Collection</Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="infor-bid">
                  <Box className="content-left">
                    <h6>Highest Bid</h6>
                    <Box className="price">9.3 BNB</Box>
                  </Box>
                  <Box className="pagi">1 Of 9</Box>
                </Box>
                <a
                  data-toggle="modal"
                  data-target="#popup_bid"
                  className="sc-button style letter style-2 style-item-details"
                  onClick={connectPlaceBid}
                >
                  <span>Place Bid</span>
                </a>
                <Box className="flat-tabs themesflat-tabs">
                  <UnorderedList className="menu-tab tab-title">
                    <ListItem className="item-title active">
                      <span className="inner">Bids</span>
                    </ListItem>
                    <ListItem className="item-title">
                      <span className="inner">History</span>
                    </ListItem>
                    <ListItem className="item-title">
                      <span className="inner">Details</span>
                    </ListItem>
                  </UnorderedList>
                  <Box className="content-tab">
                    <Box className="content-inner tab-content">
                      <UnorderedList className="bid-history-list">
                        <ListItem>
                          <Box className="content">
                            <Box className="author-item">
                              <Box className="avatar">
                                <Image
                                  src="/images/avatar/avt-6.jpg"
                                  alt="Image"
                                />
                              </Box>
                              <Box className="infor">
                                <p>
                                  Bid listed for{" "}
                                  <span className="status">25 ETH 8</span>
                                  hours ago by{" "}
                                  <span className="creator">@Johnson</span>{" "}
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        </ListItem>
                        <ListItem>
                          <Box className="content">
                            <Box className="author-item">
                              <Box className="avatar">
                                <Image
                                  src="/images/avatar/avt-2.jpg"
                                  alt="Image"
                                />
                              </Box>
                              <Box className="infor">
                                <p>
                                  Bid listed for{" "}
                                  <span className="status">25 ETH 8</span>
                                  hours ago by{" "}
                                  <span className="creator">@Johnson</span>{" "}
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        </ListItem>
                        <ListItem>
                          <Box className="content">
                            <Box className="author-item">
                              <Box className="avatar">
                                <Image
                                  src="/images/avatar/avt-4.jpg"
                                  alt="Image"
                                />
                              </Box>
                              <Box className="infor">
                                <p>
                                  Bid listed for{" "}
                                  <span className="status">25 ETH 8</span>
                                  hours ago by{" "}
                                  <span className="creator">@Johnson</span>{" "}
                                </p>
                              </Box>
                            </Box>
                          </Box>
                        </ListItem>
                      </UnorderedList>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <PlaceBid
        isOpen={openModal}
        totalBidAmount={true}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default ItemDetailsPage;
