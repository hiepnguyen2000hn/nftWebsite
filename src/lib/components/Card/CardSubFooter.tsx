import { Box, Input, Button, FormControl, Image } from "@chakra-ui/react";
import React from "react";

const CardNewLetter: React.FC = () => {
  const NewLetterImg = () => {
    return (
      <Box className="new-letter-img">
        <img src="/images/background/img-newletter.png" alt="Image" />
      </Box>
    );
  };

  return (
    <section className="new-letter">
      <Box className="container">
        <Box className="new-letter-inner flex">
          <Box className="new-letter-content">
            <h3 className="heading">Newsletters</h3>
            <p className="sub-heading">
              Most popular gaming digital nft market place{" "}
            </p>
            <Box className="form-subcribe">
              <form
                id="subscribe-form"
                action="#"
                method="GET"
                acceptCharset="utf-8"
                className="form-submit"
              >
                <input
                  name="email"
                  value=""
                  className="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                />
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="sc-button style letter style-2"
                >
                  <span>Browse More</span>
                </button>
              </form>
            </Box>
          </Box>
          <NewLetterImg />
        </Box>
      </Box>
    </section>
  );
};

export default CardNewLetter;
