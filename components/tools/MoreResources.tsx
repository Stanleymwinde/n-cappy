"use client";
import { marginX } from "@/utils/constants";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import ResourcesTabs from "./ResourcesTabs";

const MoreResources = () => {
  return (
    <Box>
      <Box marginX={marginX} py={8}>
        <Heading
          as="h2"
          size="6xl"
          mb={4}
          color={" #00caff"}
          fontWeight={"bold"}
        >
          More Resources
        </Heading>
        <Text fontSize="lg" color="gray.600">
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
            <Image
              src="/images/thumbnail.png"
              alt="Educational Video Thumbnail"
              width="100%"
              objectFit="contain"
              borderRadius="md"
              cursor="pointer"
              onClick={() => {
                const iframe = document.getElementById("more-resources-iframe");
                if (iframe) {
                  iframe.style.display = "block";
                  (iframe.parentNode as HTMLElement).querySelector(
                    "img"
                  )!.style.display = "none";
                }
              }}
            />
            <iframe
              id="more-resources-iframe"
              width="1000"
              height="400"
              src="https://player.cloudinary.com/embed/?cloud_name=dgamw7ib9&public_id=Nairobi_Chapel_futor5&profile=cld-default"
              title="Educational Video"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: "none", position: "absolute", top: 0, left: 0 }}
            ></iframe>
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              fontSize="7xl"
              cursor="pointer"
              // onClick={() => {
              //   const iframe = document.getElementById("more-resources-iframe");
              //   if (iframe) {
              //     iframe.style.display = "block";
              //     (iframe.parentNode as HTMLElement).querySelector(
              //       "img"
              //     )!.style.display = "none";
              //   }
              // }}
            >
              <IoPlayCircleOutline />
            </Box>
          </Box>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default MoreResources;
