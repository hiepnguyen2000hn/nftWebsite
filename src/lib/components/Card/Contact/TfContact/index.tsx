import { Box } from "@chakra-ui/react";
import { contact } from "lib/constant/Pages";
import { useState } from "react";

const TfContact: React.FC = () => {
  const [dataContact, setDataContact] = useState<any>(contact);
  return (
    <section className="tf-contact tf-section">
      <Box className="container">
        <Box className="row">
          {dataContact?.map((card: any, index: number) => (
            <Box className="col-md-4" key={index}>
              <Box className="sc-contact-infor">
                <h4>{card.contactInfo}</h4>
                <Box className="icon">
                  <i className={card.faIcon}></i>
                </Box>
                <Box className="infor">
                  <a href="tel:012345678">{card.Infor}</a>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default TfContact;
