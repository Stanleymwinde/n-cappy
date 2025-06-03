"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const YoutubeIcon = (props: IconProps) => {
  return <Icon as={FaYoutube} {...props} />;
};

export default YoutubeIcon;
