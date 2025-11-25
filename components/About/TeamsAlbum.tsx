"use client";

import { Box, Image, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const images = [
  "/images/IMG_9912.jpg",
  "/images/IMG_62051.jpg",
  "/images/IMG_62211.jpg",
  "/images/IMG_62221.jpg",
  "/images/IMG_62361.jpg",
  "/images/IMG_9869.jpg",
  "/images/IMG_62421.jpg",
  "/images/IMG_061001.jpg",
  "/images/IMG_62571.jpg",
  "/images/IMG_9833.jpg",
  "/images/IMG_9861.jpg",
  "/images/IMG_62851.jpg",
  "/images/Nabo12.jpg",
  "/images/IMG_62881.jpg",
  "/images/IMG_62941.jpg",
];

const TeamsAlbum: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box width="100%">
      {/* Title Section */}
      <VStack gap={6} textAlign="center" mb={10} mt={20}>
        <Heading
          color="#0A2233"
          fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }}
          fontFamily="poppins"
          fontWeight="bold"
        >
          Our Team in Living Colour
        </Heading>
        <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} color="gray.700">
          Moments and unspoken values that define who we are.
        </Text>
      </VStack>

      {/* Image carousel */}
      <Box
        position="relative"
        width="100%"
        height={{ base: "400px", sm: "600px", md: "1000px" }}
        overflow="hidden"
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Team image ${index + 1}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height={{ base: "400px", sm: "600px", md: "950px" }}
            objectFit="cover"
            transition="opacity 1s ease-in-out"
            opacity={index === currentIndex ? 1 : 0}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TeamsAlbum;
