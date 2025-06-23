"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { RiBarChartFill } from "react-icons/ri";

const BarChartIcon = (props: IconProps) => {
  return <Icon as={RiBarChartFill} {...props} />;
};

export default BarChartIcon;
