import { Box } from "@chakra-ui/react";

const MapMessage: React.FC = () => {
  return (
    <>
      <section>
        <Box className="container-fluid">
          <Box className="row">
            <iframe
              className="map-contact"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976373946234!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1640857108284!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </section>

      <section className="tf-section login-page contact-page pd-top-0">
        <Box className="container">
          <Box className="row jtf-content-center">
            <Box className="col-md-8">
              <Box className="form-create-item-content">
                <Box className="form-create-item">
                  <Box className="sc-heading">
                    <h3>Send Us Message</h3>
                    <p className="desc">
                      Most popular gaming digital nft market place{" "}
                    </p>
                  </Box>
                  <form
                    id="create-item-1"
                    action="./contact/contact-process.php"
                    method="post"
                    acceptCharset="utf-8"
                    noValidate
                  >
                    <input
                      type="text"
                      id="name"
                      className="tb-my-input"
                      name="name"
                      tabIndex={1}
                      placeholder="Your Full Name"
                      value=""
                      aria-required="true"
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      className="tb-my-input"
                      name="email"
                      tabIndex={2}
                      placeholder="Email Address"
                      value=""
                      aria-required="true"
                      required
                    />
                    <select className="valid">
                      <option value="1">Subject</option>
                      <option value="2">Subject</option>
                      <option value="3">Subject</option>
                    </select>
                    <textarea
                      id="comment-message"
                      name="message"
                      tabIndex={4}
                      placeholder="Write Message"
                      aria-required="true"
                    ></textarea>
                    <button
                      name="submit"
                      type="submit"
                      id="comment-reply"
                      className="sc-button style letter style-2"
                    >
                      <span>Send Message</span>{" "}
                    </button>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default MapMessage;
