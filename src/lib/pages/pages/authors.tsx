import CardNewLetter from "lib/components/Card/CardSubFooter";
import CardPageTitle from "lib/components/Card/CardSubHeader";
import TopSellerPage from "lib/components/Card/Authors/TopSeller";
import HotCollections from "lib/components/Card/Authors/HotCollection";

const Authors: React.FC = () => {
  return (
    <>
      <CardPageTitle title="authors" />

      {/* <section className="tf-section best-seller-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sc-heading style-2">
                <div className="content-left">
                  <div className="inner">
                    <h3>Best Sellers</h3>
                    <p className="desc">
                      Most popular gaming digital nft market place{" "}
                    </p>
                  </div>
                </div>
                <div className="content-right">
                  <button className="sc-button style letter style-2">
                    <span>Explore More</span>{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="swiper-container author-best pd-bt-50">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author active">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-1.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Jason M. Stalls</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-2.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Frank F. Chan</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-3.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Robert George</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-4.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Frank N. Glisson</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-5.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Michel ZonaS</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-6.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Mizanur Mango</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-1.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Jason M. Stalls</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-2.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Frank F. Chan</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="slider-item">
                      <div className="sc-author">
                        <div className="card-avatar">
                          <img src="/images/avatar/avt-3.jpg" alt="" />
                        </div>
                        <div className="infor">
                          <h6>
                            {" "}
                            <a href="#">Robert George</a>{" "}
                          </h6>
                          <div className="details">523.7 ETH</div>
                        </div>
                        <a href="#" className="sc-button btn-bordered-white">
                          <span>Follow</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <TopSellerPage />

      <HotCollections />

      <CardNewLetter />
    </>
  );
};

export default Authors;
