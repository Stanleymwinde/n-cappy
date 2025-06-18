import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyforYou = () => {
  return (
    <Box bg="#0a2234" py={6}>
      {/* <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={6}
        height="100%"
        px={{ base: 4, md: 10 }}
        marginX={marginX}
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          height="100%"
          gap={12}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "6xl" }}
            fontFamily="poppins"
          >
            Why this Is For You?
          </Heading>
          <Text fontSize="2xl" maxWidth="600px" lineHeight="1.8">
            At Nabo Capital, we invest with purpose. In this video, Pius
            Muchiri, our CEO, explains how we tailor our investment solutions to
            meet your unique goals, whether you are an individual or an
            institution.
          </Text>
          <Link
            href="https://www.youtube.com/watch?v=1b0d8a9f2c4"
            passHref
            target="_blank"
          >
            <Button bg="#00caff" _hover={{ bg: "#00b5e0" }} mt={4}>
              Watch Video
            </Button>
          </Link>
        </Flex>

        <Flex justifyContent="center" alignItems="center" overflow={"hidden"}>
          <Image
            src="/images/Pius.png"
            alt="YouTube Video Thumbnail"
            width={300}
            height={200}
            style={{
              maxHeight: "90%",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Flex>
      </Grid> */}

      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} px={marginX}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems={{ base: "center", md: "flex-start" }}
          textAlign={{ base: "center", md: "left" }}
          height="100%"
          gap={12}
        >
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "6xl" }}
            fontFamily="poppins"
            color="white"
          >
            Why This Is For You
          </Heading>
          <Text fontSize="2xl" maxWidth="600px" lineHeight="1.8" color="white">
            At Nabo Capital, we invest with purpose.In this video, Pius Muchiri,
            our CEO, explains how we tailor our investment solutions to meet
            your unique goals, whether you are an individual or an institution
          </Text>
          <Link
            href="https://www.youtube.com/watch?v=1b0d8a9f2c4"
            passHref
            target="_blank"
          >
            <Button bg="#00caff" _hover={{ bg: "#00b5e0" }} mt={4}>
              Watch A Video
            </Button>
          </Link>
        </Flex>
        <Flex justifyContent="center" alignItems="center" overflow={"hidden"}>
          <Image
            src="/images/Pius-new.png"
            alt="Commitment Image"
            width={500}
            height={500}
          />
        </Flex>
      </Grid>
    </Box>
  );
};

export default WhyforYou;
