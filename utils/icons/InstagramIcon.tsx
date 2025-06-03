"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { SiInstagram } from "react-icons/si";

const InstagramIcon = (props: IconProps) => {
  return <Icon as={SiInstagram} {...props} />;
};

export default InstagramIcon;
