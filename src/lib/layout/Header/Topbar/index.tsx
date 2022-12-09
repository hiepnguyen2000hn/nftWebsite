import React, { useState, useEffect } from "react";
import { Box, Select, UnorderedList, ListItem } from "@chakra-ui/react";
import CountDownt from "lib/components/countDown/CountDownt";

const Topbar: React.FC = () => {
  const [timeTillDate, setTimeTillDate] = useState<null>(null);

  useEffect(() => {
    // @ts-ignore
    setTimeTillDate("2022-10-22 00:00:00");
  }, []);

  return (
    <Box className="topbar">
      <Box className="container">
        <Box className="topbar-inner flex">
          <Box className="menu-options flex">
            <Box className="ethereum">
              <Box id="ethereum" className="dropdown">
                <Select variant="filled" bg="#494957" color="white" size="lg">
                  <option value="Ethereum">Ethereum</option>
                  <option value="Bitski">Bitski</option>
                  <option value="Fortmatic">Fortmatic</option>
                </Select>
              </Box>
            </Box>
            <Box className="english">
              <Box id="english" className="dropdown">
                <Select variant="filled" bg="#494957" color="white" size="lg">
                  <option value="English">English</option>
                  <option value="USA">USA</option>
                  <option value="France">France</option>
                </Select>
              </Box>
            </Box>
          </Box>
          <Box className="topbar-right flex">
            <span>New Product Coming Soon</span>
            <CountDownt timeTillDate={timeTillDate} />

            <UnorderedList className="socical-icon flex">
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
                  <i className="fab fa-instagram"></i>
                </a>
              </ListItem>
              <ListItem>
                <a>
                  <i className="fab fa-dribbble"></i>
                </a>
              </ListItem>
              <ListItem>
                <a>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
