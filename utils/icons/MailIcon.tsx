"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";

const MailIcon = (props: IconProps) => {
  return <Icon as={IoMail} {...props} />;
};

export default MailIcon;
