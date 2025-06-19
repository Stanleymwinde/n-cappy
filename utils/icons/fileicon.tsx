"use client";

import { IconProps, Icon } from "@chakra-ui/react";
import { RiFile2Fill } from "react-icons/ri";

const FileIcon = (props: IconProps) => {
  return <Icon as={RiFile2Fill} {...props} />;
};

export default FileIcon;
