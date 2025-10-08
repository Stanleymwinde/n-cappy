"use client";

import React, { useState } from "react";
import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

const WhyforYou = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOpenVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

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

          {/* Watch Video Button */}
          <Button
            bg="#00caff"
            _hover={{ bg: "#00b5e0" }}
            mt={2}
            px={{ base: 6, md: 8 }}
            py={{ base: 4, md: 6 }}
            fontSize={{ base: "sm", md: "md" }}
            borderRadius="full"
            onClick={handleOpenVideo}
          >
            Watch A Video
          </Button>
        </Flex>

        {/* Right Image Section */}
        <Box justifyContent="center" alignItems="center" display="flex">
          <Box
            position="relative"
            w={{ base: "90%", sm: "80%", md: "500px" }}
            maxW="500px"
          >
            <Image
              src="/Pius-m1.jpg"
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

      {/* Video Overlay using iframe */}
      {showVideo && (
        <Box
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100vh"
          bg="rgba(0,0,0,0.8)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex={1000}
          onClick={handleCloseVideo}
        >
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=demvcea4r&public_id=Pius_-_Website_1_1_1_1_ibcwxh&profile=cld-default"
            width="80%"
            height="500"
            allow="autoplay; fullscreen"
            style={{ borderRadius: "12px" }}
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      )}
    </Box>
  );
};

export default WhyforYou;
