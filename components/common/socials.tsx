import { socials } from "@/utils/constants";
import { Box, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <>
      {socials.map((item, i) => (
        <Link href={item.link} key={i} target="_blank">
          <Stack
            p=".3rem"
            borderRadius="full"
            color="brand.black"
            bg="brand.white"
            _hover={{
              bg: "brand.black",
              color: "primary.500",
            }}
          >
            <Box as={item.icon} cursor="pointer" />
          </Stack>
        </Link>
      ))}
    </>
  );
};

export default Socials;
