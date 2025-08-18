"use client";
import { marginX, TestimonialData } from "@/utils/constants";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
  return (
    <Box marginX={marginX} mt={20}>
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="Poppins"
        fontWeight="bold"
        textAlign="center"
        my={4}
        py={4}
      >
        What Our Investors Have to Say ...
      </Heading>

      <Text fontSize="xl" textAlign="center" mb={8} fontFamily="Poppins">
        Hear from investors who have trusted us with their global investment
        journey.
      </Text>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {TestimonialData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: "rgba(123, 134, 135, 0.6)", // semi-transparent background
              border: "1px solid black",
              borderRadius: "12px",
            }}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              gap={6}
              direction={{ base: "column", md: "row" }}
              px={10}
              py={8}
              borderRadius="12px"
              height={{ base: "auto", md: "600px" }} // set container height to match image
            >
              {/* Image Section */}
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
                    objectPosition: "top", // shows the top of image
                  }}
                />
              </Box>

              {/* Text Section */}
              <Stack
                gap={4}
                textAlign={{ base: "center", md: "left" }}
                justifyContent="center"
                height="100%"
                fontFamily="Poppins"
              >
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
