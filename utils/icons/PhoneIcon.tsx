"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";

const PhoneIcon = (props: IconProps) => {
  return <Icon as={FaPhone} {...props} />;
};

export default PhoneIcon;
