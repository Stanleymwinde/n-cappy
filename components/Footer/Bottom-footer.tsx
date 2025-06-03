import { marginX } from "@/utils/constants";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const BottomFooter = () => {
  return (
    <Box marginX={marginX}>
      <Flex as="footer" justify={"space-between"}>
        <Box>
          <Text>
            &copy; {new Date().getFullYear()} Nabo Capital. All rights reserved.
          </Text>
        </Box>
        <Flex as="nav" gap={4} ml={4} _hover={{ color: "gray.700" }}>
          <Link as="a" href="/faqs" _hover={{ textDecoration: "underline" }}>
            FAQ&apos;s
          </Link>
          <Link as="a" href="/privacy" _hover={{ textDecoration: "underline" }}>
            Privacy Policy
          </Link>
        </Flex>
      </Flex>{" "}
      <Text textAlign={"left"} mt={5}>
        <strong>
          Nabo Capital Limited is regulated by the Capital Markets Authorty.
        </strong>{" "}
        CMA does not take responsibility For the financial soundness of the
        scheme or for the correctness of any statements made or opinions
        expresssed. Income from investments may increaseor decrease. The
        effective annual yield is net of fees and gross ofwithholding tax. Past
        performance dos not guarantee future results. In certain circumstances,
        investors right to redeem investments may be suspended.
      </Text>
    </Box>
  );
};

export default BottomFooter;
