"use client";

import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Grid, Heading, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const WhyforYou = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenVideo = () => {
    setShowVideo(true);
    videoRef.current?.play();
  };

  const handleCloseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideo(false);
  };

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
            fontSize={{ base: "md", sm: "lg", md: "2xl" }}
            maxW="600px"
            lineHeight="1.8"
            color="white"
          >
            At Nabo Capital, we invest with purpose. In this video, Pius
            Muchiri, our CEO, explains how we tailor our investment solutions to
            meet your unique goals, whether you are an individual or an
            institution.
          </Text>
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
        <Flex justifyContent="center" alignItems="center">
          <Box
            position="relative"
            w={{ base: "90%", sm: "80%", md: "500px" }}
            maxW="500px"
          >
            <Image
              src="/pius-m.png"
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
        </Flex>
      </Grid>

      {/* Video Overlay */}
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
          p={{ base: 4, md: 8 }}
        >
          <Box position="relative" w={{ base: "100%", md: "80%" }} maxW="900px">
            <Icon
              as={FaTimes}
              color="white"
              w={{ base: 6, md: 8 }}
              h={{ base: 6, md: 8 }}
              position="absolute"
              top={2}
              right={2}
              cursor="pointer"
              onClick={handleCloseVideo}
            />
            <video
              ref={videoRef}
              width="100%"
              controls
              autoPlay
              style={{
                borderRadius: "12px",
                border: "2px solid white",
              }}
            >
              <source
                src="https://res.cloudinary.com/demvcea4r/video/upload/v1756299923/Pius_-_Website_1_1_1_1_ibcwxh.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WhyforYou;
