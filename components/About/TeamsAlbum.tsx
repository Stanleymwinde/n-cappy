"use client";

import { Box, Image, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const images = [
  "/images/IMG_6245.jpg",
  "/images/IMG_6199.jpg",
  "/images/IMG_6205.jpg",
  "/images/IMG_6208.jpg",
  "/images/IMG_6221.jpg",
  "/images/IMG_6222.jpg",
  "/images/IMG_6236.jpg",
  "/images/IMG_6242.jpg",
  "/images/IMG_0610.jpg",
  "/images/IMG_6257.jpg",
  "/images/IMG_6277.jpg",
  "/images/IMG_6283.jpg",
  "/images/IMG_6285.jpg",
  "/images/IMG_6288.jpg",
  "/images/IMG_6294.jpg",
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
          fontSize={{ base: "3xl", md: "6xl" }}
          fontFamily="poppins"
          fontWeight="bold"
        >
          Our Team in Living Colour
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
          Moments and unspoken values that define who we are
        </Text>
      </VStack>

      {/* Image carousel */}
      <Box position="relative" width="100%" height="1000px" overflow="hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Team image ${index + 1}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="950px"
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
