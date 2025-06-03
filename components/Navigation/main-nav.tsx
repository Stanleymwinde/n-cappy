import { Flex } from "@chakra-ui/react";
import React from "react";

const MainNav = () => {
  return (
    <Flex>
      <Flex
        as="nav"
        width="100%"
        height="60px"
        backgroundColor="gray.800"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={4}
        fontSize="16px"
      >
        <Flex>
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>
        </Flex>
        <Flex>
          <a
            href="/about"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            About
          </a>
          <a
            href="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "20px",
            }}
          >
            Contact
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MainNav;
