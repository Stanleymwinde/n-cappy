"use client";
import { marginX, TestimonialData } from "@/utils/constants";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Box marginX={marginX} mt={20} px={{ base: 2, md: 0 }}>
      {/* Heading */}
      <Heading
        as="h2"
        fontSize={{ base: "1.75rem", md: "4rem" }}
        fontFamily="Poppins"
        fontWeight="bold"
        textAlign="center"
        my={4}
        py={4}
      >
        What Our Investors Have to Say ...
      </Heading>

      {/* Subheading */}
      <Text
        fontSize={{ base: "0.9rem", sm: "1.2rem", md: "1.5rem" }}
        textAlign="center"
        mb={8}
        fontFamily="Poppins"
        maxW="700px"
        mx="auto"
      >
        Hear from investors who have trusted us with their global investment
        journey.
      </Text>

      {/* Carousel */}
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
          style={{ paddingBottom: "40px" }}
        >
          {TestimonialData.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              style={{
                background: "#0A2233",
                border: "1px solid #00caff",
                borderRadius: "12px",
              }}
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                gap={{ base: 6, md: 10 }}
                direction={{ base: "column", md: "row" }}
                px={{ base: 4, md: 10 }}
                py={{ base: 6, md: 8 }}
                borderRadius="12px"
                height="100%"
              >
                {/* Image */}
                <Box
                  position="relative"
                  w={{ base: "100%", sm: "90%", md: "400px", lg: "500px" }}
                  h={{ base: "300px", sm: "400px", md: "500px", lg: "600px" }} // taller on mobile
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="md"
                  flexShrink={0}
                  mx={{ base: "auto", md: 0 }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{
                      objectFit: "cover", // keeps image fully visible
                      objectPosition: "top",
                    }}
                  />
                </Box>

                {/* Text */}
                <Stack
                  gap={4}
                  textAlign={{ base: "center", md: "left" }}
                  justifyContent="center"
                  height="100%"
                  fontFamily="Poppins"
                  maxW={{ base: "95%", md: "500px" }}
                  mx={{ base: "auto", md: 0 }}
                >
                  <Text
                    fontSize={{ base: "sm", sm: "md", md: "xl" }}
                    fontStyle="italic"
                    mb={2}
                    color="white"
                  >
                    “{testimonial.testimonial}”
                  </Text>
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "sm", md: "lg" }}
                    color="white"
                  >
                    - {testimonial.name}
                  </Text>
                  <Text fontSize={{ base: "xs", md: "md" }} color="white">
                    {testimonial.role}
                  </Text>
                </Stack>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
