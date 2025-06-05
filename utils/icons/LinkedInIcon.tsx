"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

const LinkedInIcon = (props: IconProps) => {
  return <Icon as={FaLinkedin} {...props} />;
};

export default LinkedInIcon;
