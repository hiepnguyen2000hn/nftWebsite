import { Box, Image, Link } from "@chakra-ui/react";
import CountDownt from "lib/components/countDown/CountDownt";
import React, { useState } from "react";
import PlaceBid from "lib/components/modal/ModalPlaceBid";

const ProductImg = ({ props }: any) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const connectPlaceBid = async () => {
    setOpenModal(true);
  };
  const {
    srcImg,
    label,
    isDiabledCountdown,
    showAvt,
    showStyleLabel,
    showStyleOurLast,
  } = props;
  const [show, setShow] = useState<boolean>(isDiabledCountdown);

  const [showProductTop, setShowProductTop] = useState(showStyleOurLast);

  // explore
  const AvatarBox = (props: any) => {
    const { img1, img2, img3, img4 } = props;
    return (
      <Box className="avatar-box">
        <Image src={img1} alt="Image" />
        <Image src={img2} alt="Image" />
        <Image src={img3} alt="Image" />
        <Image src={img4} alt="Image" />
      </Box>
    );
  };

  const styleElement = {
    background:
      showStyleLabel &&
      "linear-gradient(124.27deg, #6345ED 15.3%, #DC39FC 69.02%)",
    borderRadius: showStyleLabel && "10px",
  };

  // explore
  const ProductItemTop = () => {
    return (
      <Box className="product-item-top flex">
        <AvatarBox props={props.srcAvt} />

        <Box className="dropdown-options">
          <Box
            className="overlayUlExplore"
            onClick={() => showProductTop(true)}
          ></Box>
          <Box
            className="options flex"
            onClick={() => setShowProductTop(!showProductTop)}
          >
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
          </Box>
          {!showProductTop && (
            <ul
              className="menu target-menu"
              style={{ color: "#fff", padding: "15px" }}
            >
              <li>
                <a href="#" className="nolink">
                  Refresh Metadata
                </a>
              </li>
              <li>
                <a href="#" className="nolink">
                  Share
                </a>
              </li>
              <li>
                <a href="#" className="nolink">
                  Report
                </a>
              </li>
            </ul>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <>
      {showStyleOurLast && <ProductItemTop />}
      <Box className="product-img">
        <Image src={srcImg?.imgItem} alt="Image" />

        {show && <CountDownt timeTillDate={"2022-10-22 00:00:00"} />}

        <Link onClick={connectPlaceBid} className="sc-button style letter">
          {" "}
          <span>Place Bid</span>
        </Link>
        <label style={styleElement}>{label}</label>
        {showAvt && <AvatarBox props={props.srcAvt} />}
      </Box>
      <PlaceBid
        isOpen={openModal}
        totalBidAmount={false}
        closeModal={() => setOpenModal(false)}
      />
    </>
  );
};

export default ProductImg;
