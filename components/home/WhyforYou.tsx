import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Grid, Heading, Text, Icon } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";

const WhyforYou = () => {
  return (
    <Box bg="#0a2234" py={{ base: 8, md: 12 }}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        px={{ base: 4, md: marginX }}
        gap={{ base: 8, md: 12 }}
        alignItems="center"
      >
        {/* Left Text Section */}
        <Flex
          direction="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          gap={{ base: 6, md: 8 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
            fontFamily="Poppins"
            color="white"
            lineHeight="short"
          >
            Why This Is For You
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md", md: "xl" }}
            maxW="600px"
            lineHeight="1.8"
            color="white"
          >
            At Nabo Capital, we invest with purpose. In this video, Pius
            Muchiri, our CEO, explains how we tailor our investment solutions to
            meet your unique goals, whether you are an individual or an
            institution.
          </Text>
          <Link
            href="https://www.youtube.com/watch?v=Zx1e3b0n8pY"
            target="_blank"
          >
            <Button
              bg="#00caff"
              _hover={{ bg: "#00b5e0" }}
              mt={2}
              px={{ base: 6, md: 8 }}
              py={{ base: 4, md: 6 }}
              fontSize={{ base: "sm", md: "md" }}
              borderRadius="full"
            >
              Watch A Video
            </Button>
          </Link>
        </Flex>

        {/* Right Image Section */}
        <Box justifyContent="center" alignItems="center" display="flex">
          <Box
            position="relative"
            w={{ base: "90%", sm: "80%", md: "500px" }}
            maxW="500px"
          >
            <Image
              src="/pius-m1.jpg"
              alt="Commitment Image"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                border: "5px solid white",
                borderRadius: "14px",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default WhyforYou;
