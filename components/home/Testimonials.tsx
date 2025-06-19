"use client";
import { marginX, TestimonialData } from "@/utils/constants";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Box marginX={marginX}>
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
        textAlign="center"
        my={8}
        py={4}
      >
        What Our Investors Have to Say ...
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={8}>
        Hear from investors who have trusted us with their global investment
        journey.
      </Text>

      {/* testimonial card */}
      {/* <Box
        // bg="#f0f0f0"
        p={4}
        borderRadius="md"
        boxShadow="md"
        maxWidth="900px"
        margin="auto"
        mb={6}
        border={"1px solid #00caff"}
      >
        <Flex justifyContent="center" alignItems="center" gap={6}>
          <Image
            src={"/images/gtr-1.jpg"}
            alt="Investor"
            width={300}
            height={300}
            borderRadius="md"
          />
          <Stack gap={6} textAlign="center">
            <Text fontSize="lg" mb={4}>
              "The reason why I feel like I have stayed at Nabo Capital this
              long is because of safety. It's because I feel safe. And I feel at
              home."
            </Text>
            <Text fontWeight="bold">- Coach Dexter, Investor</Text>
            <Text fontStyle="italic">Long Term Invester</Text>
          </Stack>
        </Flex>
      </Box> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {TestimonialData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: "transparent",
              border: "1px solid #00caff",
              borderRadius: "12px", // Added border radius
              boxShadow: "md",
            }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              gap={6}
              direction={{ base: "column", md: "row" }}
              px={10}
              py={8}
              borderRadius="12px" // Added border radius to Flex
            >
              <Box
                position="relative"
                width={{ base: "100%", md: "700px" }}
                height={{ base: "700px", md: "600px" }}
                aspectRatio={3 / 4} 
                borderRadius="md"
                overflow="hidden"

                boxShadow="md"

              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  style={{
    objectFit: "initial",
    objectPosition: "top", // 👈 Keeps the top of the image visible
  }}
                 
                />
              </Box>

              <Stack gap={4} textAlign={{ base: "center", md: "left" }}>
                <Text fontSize="lg" fontStyle="italic" mb={4}>
                  “{testimonial.testimonial}”
                </Text>
                <Text fontWeight="bold">- {testimonial.name}</Text>
                <Text color="gray.500">{testimonial.role}</Text>
              </Stack>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
