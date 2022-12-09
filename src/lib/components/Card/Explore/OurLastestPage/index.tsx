import React, { useState } from "react";
import Link from "next/link";
import PlaceBid from "lib/components/modal/ModalPlaceBid";
import { Box } from "@chakra-ui/react";

import CardHeadingTitle from "../../CardHeadingTitle";
import CardItem from "../../CardItem/CardItem";

import { ourLastestPage } from "lib/constant/Explore";

const OutLastestPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const connectPlaceBid = async () => {
    setOpenModal(true);
  };

  const [dataOurLastestPage, setDataOurLastestPage] =
    useState<any>(ourLastestPage);
  return (
    <>
      <section className="tf-section auctions-page">
        <Box className="container">
          <Box className="row">
            <CardHeadingTitle
              title="explore"
              isShowContentRight={false}
              isOpenIcon={false}
            />

            <Box className="col-md-12">
              <Box className="swiper-container popular-coll-2">
                <Box className="swiper-wrapper">
                  {dataOurLastestPage?.map((card: any, index: number) => (
                    <CardItem props={card} key={index} />
                  ))}
                </Box>
                <Box className="swiper-pagination"></Box>
                <Box className="swiper-button-next btn-slide-next "></Box>
                <Box className="swiper-button-prev btn-slide-prev"></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>

      {/* <section className="tf-section our-latest-page">
        <Box className="container">
          <Box className="row">
            <CardHeadingTitle title="explore" showStyle="true" />
            <Box className="col-md-3">
              <Box className="sc-product-item style-3">
                <Box className="product-img ">
                  <img src="/images/product-item/item-5.jpg" alt="Image" />
                  <a
                    data-toggle="modal"
                    data-target="#popup_bid"
                    className="sc-button style letter"
                    onClick={connectPlaceBid}
                  >
                    <span>Place Bid</span>
                  </a>
                  <label>BSC</label>
                </Box>
                <Box className="product-content">
                  <h5 className="title">
                    <Link href="/explore/item_detail">
                      <a>‘’3D Space Rocket With Smoke Premium’’</a>
                    </Link>
                  </h5>
                  <Box className="product-author flex mg-bt-0">
                    <Box className="avatar">
                      <img src="/images/avatar/avt-7.jpg" alt="Image" />
                    </Box>
                    <Box className="infor">
                      <Box className="author-name">
                        <a href="author.html">Daniel M. Bivens</a>
                      </Box>
                      <span>Creator</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-md-6">
              <Box className="sc-product-item style-4">
                <Box className="product-img flex">
                  <Box className="img-left">
                    <img src="/images/product-item/item-6.jpg" alt="Image" />
                    <label>BSC</label>
                  </Box>
                  <Box className="img-right">
                    <Box className="top-img flex">
                      <img src="/images/product-item/item-7.jpg" alt="Image" />
                      <img src="/images/product-item/item-8.jpg" alt="Image" />
                    </Box>
                    <Box className="bottom-img">
                      <img src="/images/product-item/item-9.jpg" alt="Image" />
                    </Box>
                  </Box>
                </Box>
                <Box className="product-content">
                  <h5 className="title">
                    <Link href="/explore/item_detail">
                      <a>
                        ‘’Multi-purpose 3D Space Rocket With Animate Real
                        Special Smoke Premium Quality Gaming’’
                      </a>
                    </Link>
                  </h5>
                  <Box className="product-author flex mg-bt-0">
                    <Box className="left flex">
                      <Box className="avatar">
                        <img src="/images/avatar/avt-7.jpg" alt="Image" />
                      </Box>
                      <Box className="infor">
                        <Box className="author-name">
                          <a href="author.html">Daniel M. Bivens</a>
                        </Box>
                        <span>Creator</span>
                      </Box>
                    </Box>
                    <Box className="button-wishlish">
                      <a href="#" className=" wishlish">
                        <i className="fas fa-heart"></i>
                      </a>
                      <span>152k</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-md-3">
              <Box className="sc-product-item style-3 mg-bt-0-mb">
                <Box className="product-img ">
                  <img src="/images/product-item/item-10.jpg" alt="Image" />
                  <a
                    data-toggle="modal"
                    data-target="#popup_bid"
                    className="sc-button style letter"
                    onClick={connectPlaceBid}
                  >
                    <span>Place Bid</span>
                  </a>
                  <label>BSC</label>
                </Box>
                <Box className="product-content">
                  <h5 className="title">
                    <Link href="/explore/item_detail">
                      <a>‘’3D Space Rocket With Smoke Premium’’</a>
                    </Link>
                  </h5>
                  <Box className="product-author flex mg-bt-0">
                    <Box className="avatar">
                      <img src="/images/avatar/avt-7.jpg" alt="Image" />
                    </Box>
                    <Box className="infor">
                      <Box className="author-name">
                        <a href="author.html">Daniel M. Bivens</a>
                      </Box>
                      <span>Creator</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section> */}

      <PlaceBid
        isOpen={openModal}
        totalBidAmount={false}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default OutLastestPage;
