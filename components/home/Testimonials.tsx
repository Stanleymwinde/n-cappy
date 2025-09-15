"use client";
import { marginX, TestimonialData } from "@/utils/constants";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { motion, easeOut } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, when: "beforeChildren" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Testimonials() {
  return (
    <MotionBox
      marginX={marginX}
      mt={20}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Heading */}
      <MotionHeading
        as="h2"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
        fontFamily="Poppins"
        fontWeight="bold"
        textAlign="center"
        my={4}
        py={4}
        variants={fadeUp}
      >
        What Our Investors Have to Say ...
      </MotionHeading>

      {/* Subheading */}
      <MotionText
        fontSize={{ base: "md", sm: "lg", md: "xl" }}
        textAlign="center"
        mb={8}
        fontFamily="Poppins"
        maxW="700px"
        mx="auto"
        px={{ base: 4, md: 0 }}
        variants={fadeUp}
      >
        Hear from investors who have trusted us with their global investment journey.
      </MotionText>

      {/* Carousel */}
      <MotionBox variants={fadeUp}>
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
              <MotionFlex
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
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
                  w={{ base: "90%", sm: "80%", md: "400px", lg: "500px" }}
                  h={{ base: "400px", sm: "500px", md: "600px" }}
                  borderRadius="md"
                  overflow="hidden"
                  boxShadow="md"
                  flexShrink={0}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{
                      objectFit: "cover",
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
                  maxW={{ base: "90%", md: "500px" }}
                >
                  <Text
                    fontSize={{ base: "md", sm: "lg", md: "xl" }}
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
                  <Text fontSize={{ base: "sm", md: "md" }} color="white">
                    {testimonial.role}
                  </Text>
                </Stack>
              </MotionFlex>
            </SwiperSlide>
          ))}
        </Swiper>
      </MotionBox>
    </MotionBox>
  );
}
