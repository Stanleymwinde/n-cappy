"use client";
import { marginX } from "@/utils/constants";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const MoreResources = () => {
  return (
    <Box>
      <Box id="section3" marginX={marginX} py={{ base: 6, md: 12 }}>
        <Heading
          as="h2"
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          mb={4}
          color="#0a2234"
          fontWeight="bold"
          textAlign="center"
        >
          More Resources
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          color="gray.600"
          textAlign="center"
        >
          Explore our collection of educational videos
        </Text>

        <Box
          mt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box position="relative" width="100%" maxWidth="1000px">
            {/* Thumbnail Image */}
            <Image
              src="/images/thumbnail.jpeg"
              alt="Educational Video Thumbnail"
              width="100%"
              height="auto"
              objectFit="cover"
              borderRadius="md"
              cursor="pointer"
              onClick={() => {
                const iframe = document.getElementById(
                  "more-resources-iframe"
                );
                if (iframe) {
                  iframe.style.display = "block";
                  (iframe.parentNode as HTMLElement).querySelector(
                    "img"
                  )!.style.display = "none";
                }
              }}
            />

            {/* Video Iframe */}
            <iframe
              id="more-resources-iframe"
              width="100%"
              height="100%"
              src="https://player.cloudinary.com/embed/?cloud_name=dgamw7ib9&public_id=Nairobi_Chapel_futor5&profile=cld-default"
              title="Educational Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                display: "none",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
            ></iframe>

            {/* Play Icon */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }}
              cursor="pointer"
              pointerEvents="none"
            >
              <IoPlayCircleOutline />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MoreResources;
