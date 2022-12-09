import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";

const TfSlider: React.FC = () => {
  return (
    <section className="tf-slider">
      <Box className="swiper-container slider swiper-container-pointer-events">
        <Box className="swiper-wrapper">
          <Box className="swiper-slide wow fadeInUp">
            <Box className="slider-item">
              <Box className="overlay"></Box>
              <Box className="slider-inner flex home-1">
                <Box className="slider-content">
                  <h1
                    className="heading"
                    style={{ fontSize: 70, fontWeight: 550 }}
                  >
                    Discover and collect your favorite digital NTFs
                  </h1>
                  <p className="sub-heading">
                    Quis autem vel eum iure reprehenderit qui in ea voluptates
                    esse quam nihil molestiae consequatur veillum{" "}
                  </p>
                  <Box className="button-slider">
                    <Link legacyBehavior href="/explore">
                      <a className="sc-button btn-bordered-white style letter ">
                        <span>Explore More</span>
                      </a>
                    </Link>

                    <Link legacyBehavior href="/pages/create_item">
                      <a className="sc-button btn-bordered-white style file">
                        <span>Create Now</span>
                      </a>
                    </Link>
                  </Box>
                </Box>
                <Box className="slider-img">
                  <Box className="img-home-1">
                    <Image src="/images/slider/img-slider-1.png" alt="img" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="swiper-slide wow fadeInUp">
            <Box className="slider-item ">
              <Box className="overlay "></Box>
              <Box className="container">
                <Box className="slider-inner style-2 home-1 flex">
                  <Box className="slider-content">
                    <h1
                      className="heading"
                      style={{ fontSize: 70, fontWeight: 500 }}
                    >
                      Discover and collect your favorite digital NTFs
                    </h1>
                    <p className="sub-heading">
                      Quis autem vel eum iure reprehenderit qui in ea voluptates
                      esse quam nihil molestiae consequatur veillum{" "}
                    </p>
                    <Box className="button-slider">
                      <Link legacyBehavior href="/explore">
                        <a className="sc-button btn-bordered-white style letter ">
                          <span>Explore More</span>
                        </a>
                      </Link>

                      <Link legacyBehavior href="/pages/create_item">
                        <a className="sc-button btn-bordered-white style file">
                          <span>Create Now</span>
                        </a>
                      </Link>
                    </Box>
                  </Box>
                  <Box className="slider-img flex">
                    <Box className="img-left">
                      <Box className="img-1">
                        <Image
                          src="/images/slider/img-slider-3.jpg"
                          alt="Image"
                        />
                      </Box>
                      <Box className="img-2">
                        <Image
                          src="/images/slider/img-slider-4.jpg"
                          alt="Image"
                        />
                      </Box>
                    </Box>
                    <Box className="img-right">
                      <Image
                        src="/images/slider/img-slider-5.jpg"
                        alt="Image"
                      />
                      <Box className="box-avatar flex">
                        <Box className="list-avatar flex">
                          <Image src="/images/avatar/avt-8.jpg" alt="Image" />
                          <Image src="/images/avatar/avt-9.jpg" alt="Image" />
                          <Image src="/images/avatar/avt-10.jpg" alt="Image" />
                          <Image src="/images/avatar/avt-11.jpg" alt="Image" />
                        </Box>
                        <Box className="icon-plus">
                          <a href="#">
                            <i className="fas fa-plus"></i>
                          </a>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="swiper-pagination"></Box>
        <Box className="swiper-button-next btn-slide-next "></Box>
        <Box className="swiper-button-prev btn-slide-prev"></Box>
      </Box>
    </section>
  );
};

export default TfSlider;
