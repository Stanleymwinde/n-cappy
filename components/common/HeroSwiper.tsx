"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

interface Slide {
  image: string;
  title: string;
  text: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton?: string;
  secondaryLink?: string;
}

interface HeroSwiperProps {
  slides: Slide[];
}

const HeroSwiper: React.FC<HeroSwiperProps> = ({ slides }) => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    _s: import("swiper").Swiper,
    time: number,
    progress: number
  ) => {
    progressCircle.current?.style.setProperty("--progress", String(1 - progress));
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      style={{ width: "100%", height: "83vh" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            position="relative"
            height={{ base: "60vh", md: "83vh" }}
            width="100%"
            objectFit={"fill"}
            backgroundImage={`url(${slide.image})`}
        
            backgroundPosition="center"
            display="flex"
            alignItems={{ base: "flex-start", md: "center" }}
            justifyContent="flex-start"
            px={{ base: 4, md: 20 }}
            py={{ base: 16, md: 0 }}
          >
            {/* Dark overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.5)"
              zIndex={0}
            />

            {/* Slide content */}
            <Box
              color="white"
              position="relative"
              zIndex={1}
              maxW={{ base: "90%", md: "50%" }}
              textAlign="left"
            >
              <Text
                fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
                fontWeight="bold"
              >
                {slide.title}
              </Text>

              <Text
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
                mt={4}
                whiteSpace="pre-line"
              >
                {slide.text}
              </Text>

              <Flex mt={6} gap={4}>
                <Link href={slide.primaryLink}>
                  <Button
                    mt={6}
                    colorScheme="blackAlpha"
                    bg="#0A2233"
                    color="white"
                    px={{ base: 6, md: 8 }}
                    py={{ base: 4, md: 6 }}
                    rounded="full"
                    fontWeight="bold"
                    fontSize={{ base: "sm", md: "md" }}
                    _hover={{ bg: "#00CAFF" }}
                  >
                    {slide.primaryButton}
                  </Button>
                </Link>

                {slide.secondaryButton && (
                  <Link href={slide.secondaryLink || "#"}>
                    <Button
                      mt={6}
                      colorScheme="blackAlpha"
                      bg="#0A2233"
                      color="white"
                      px={{ base: 6, md: 8 }}
                      py={{ base: 4, md: 6 }}
                      rounded="full"
                      fontWeight="bold"
                      fontSize={{ base: "sm", md: "md" }}
                      _hover={{ bg: "#00CAFF" }}
                    >
                      {slide.secondaryButton}
                    </Button>
                  </Link>
                )}
              </Flex>
            </Box>
          </Box>
        </SwiperSlide>
      ))}

      {/* Autoplay Progress (hidden for now) */}
      <div
        className="autoplay-progress"
        slot="container-end"
        style={{ display: "none" }}
      >
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent} style={{ display: "none" }}></span>
      </div>
    </Swiper>
  );
};

export default HeroSwiper;
