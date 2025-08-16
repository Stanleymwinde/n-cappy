"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = (props: IconProps) => {
  return <Icon as={FaWhatsapp} {...props} />;
};

export default WhatsAppIcon;
