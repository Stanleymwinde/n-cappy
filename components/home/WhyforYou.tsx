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
    <Box bg="#0a2234" py={6}>
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
            At Nabo Capital, we invest with purpose. In this video, Pius Muchiri,
            our CEO, explains how we tailor our investment solutions to meet
            your unique goals, whether you are an individual or an institution
          </Text>
          <Button
            bg="#00caff"
            _hover={{ bg: "#00b5e0" }}
            mt={4}
            onClick={handleOpenVideo}
          >
            Watch A Video
          </Button>
        </Flex>
        <Flex justifyContent="center" alignItems="center" overflow={"hidden"}>
          <Image
            src="/pius-m.png"
            alt="Commitment Image"
            width={500}
            height={500}
            style={{
              border: "5px solid white",
              borderRadius: "14px",
            }}
          />
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
        >
          <Box position="relative" width={{ base: "90%", md: "80%" }}>
            <Icon
              as={FaTimes}
              color="white"
              w={8}
              h={8}
              position="absolute"
              top={-10}
              right={-10}
              cursor="pointer"
              onClick={handleCloseVideo}
            />
            <video
              ref={videoRef}
              width="100%"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
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
