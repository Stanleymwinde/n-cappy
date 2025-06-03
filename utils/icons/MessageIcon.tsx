"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { RiMessage2Fill } from "react-icons/ri";

const MessageIcon = (props: IconProps) => {
  return <Icon as={RiMessage2Fill} {...props} />;
};

export default MessageIcon;
