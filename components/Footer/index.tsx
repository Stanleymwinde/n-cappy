import { Box } from "@chakra-ui/react";
import React from "react";
import MainFooter from "./Main-Footer";
import BottomFooter from "./Bottom-footer";

const Footer = () => {
  return (
    <Box divideY={"1px"} divideColor="blackAlpha.700">
      <MainFooter />
      <BottomFooter />
    </Box>
  );
};

export default Footer;
