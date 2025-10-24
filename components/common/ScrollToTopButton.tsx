"use client";

import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowUpIcon } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          position="fixed"
          bottom={{ base: "20px", md: "30px" }}
          right={{ base: "20px", md: "30px" }}
          zIndex={9999}
          colorScheme="teal"
          rounded="full"
          size="lg"
          boxShadow="lg"
          onClick={scrollToTop}
        >
          <ArrowUpIcon />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
