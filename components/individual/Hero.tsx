import { marginX } from "@/utils/constants";
import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box
      position="relative"
      height="80vh"
      width="100%"
      backgroundImage={`url(/images/gtr-2.jpg)`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Box
        color="white"
        p={6}
        rounded="lg"
        position="relative"
        width={{ base: "100%", md: "45%" }} // 👈 adjusted width for better responsiveness
        ml={{ base: 4, md: 32 }} // 👈 added margin to give space from the left
        fontFamily="Poppins"
        maxWidth={"100%"} // 👈 ensure it doesn't overflo
        boxSizing="border-box"
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          lineHeight="short"
        >
          Begin The Journey <br />
          We&apos;ll Walk With You <br />
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} mt={6}>
          That&apos;s the Nabo Promise. <br />
          Your Growth Our Focus
        </Text>
        <Button
          mt={6}
          colorScheme="blackAlpha"
          bg="blackAlpha.800"
          color="white"
          px={8}
          py={6}
          rounded="full"
          fontWeight="bold"
          _hover={{ bg: "blackAlpha.700" }}
        >
          Start Investing
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
