"use client";

import React, { useState, useRef } from "react";
import { Box, Flex, Text, Heading, Image, Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const InvestmentSolutionsVideo: React.FC = () => {
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

  // Entrance animation
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Continuous floating effect
  const floatingEffect = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, repeatType: "loop" as const },
  };

  return (
    <Box bg="white" py={10} px={{ base: 4, md: 20 }}>
      <Flex
        as={motion.div}
        direction={{ base: "column", md: "row" }}
        bg="#002b45"
        borderRadius="lg"
        p={{ base: 6, md: 10 }}
        align="center"
        justify="center"
        gap={{ base: 6, md: 10 }}
      >
        {/* Left side - Image */}
        <MotionBox
          position="relative"
          flexShrink={0}
          onClick={handleOpenVideo}
          cursor="pointer"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          whileHover={{ scale: 1.05 }}
        
        >
          <Image
            src="/mwongela.jpeg"
            alt="Dr. Mercy Njoroge Mwongela"
            borderRadius="md"
            objectFit="cover"
            height={{ base: "300px", md: "360px" }}
            width={{ base: "auto", md: "260px" }}
          />
          <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="white"
            borderRadius="full"
            height="60px"
            width="60px"
            align="center"
            justify="center"
            boxShadow="md"
            _hover={{ scale: 1.1, transition: "all 0.3s ease" }}
          >
            <Icon as={FaPlay} color="#002b45" boxSize={4} />
          </Flex>
        </MotionBox>

        {/* Right side - Text content */}
        <MotionBox
          color="white"
          initial="hidden"
          animate="visible"
          variants={textVariants}
      
        >
          <MotionHeading
            as="h3"
            fontSize={{ base: "lg", md: "2xl" }}
            mb={4}
            color="#00C8FF"
          >
            Hear from Dr. Mercy Njoroge Mwongela on how we tailor <br />
            Investment solutions to your need
          </MotionHeading>

          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="gray.200"
            mb={6}
            lineHeight="tall"
          >
            “Every client’s financial situation is unique. Our approach to asset
            management reflects that reality, ensuring your capital works as
            hard as you do”
          </MotionText>

          <MotionText
            fontSize="sm"
            color="gray.300"
            borderTop="1px solid"
            borderColor="gray.500"
            pt={2}
          >
            Dr. Mercy Njoroge Mwongela, Chief Customer Experience Officer
          </MotionText>
        </MotionBox>
      </Flex>

      {/* Video overlay */}
      {showVideo && (
        <MotionBox
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
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
        >
          <video
            ref={videoRef}
            width="80%"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          >
            <source
              src="https://res.cloudinary.com/demvcea4r/video/upload/v1756294813/Mercy_Website_1_1_1_1_exxyqg.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </MotionBox>
      )}
    </Box>
  );
};

export default InvestmentSolutionsVideo;
