"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { FaTiktok } from "react-icons/fa6";

const TiktokIcon = (props: IconProps) => {
  return <Icon as={FaTiktok} {...props} />;
};

export default TiktokIcon;
