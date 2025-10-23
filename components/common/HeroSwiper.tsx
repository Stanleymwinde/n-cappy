"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

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
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const clampLines =
    windowWidth === null
      ? 3
      : windowWidth < 480
      ? 3
      : windowWidth < 768
      ? 4
      : 5;

  return (
    <Swiper
      spaceBetween={windowWidth && windowWidth < 480 ? 10 : 30}
      centeredSlides
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      style={{ width: "100%" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            position="relative"
            width="100%"
            height={{ base: "50vh", sm: "70vh", md: "90vh", lg: "100vh" }}
            display="flex"
            alignItems={{ base: "center", md: "center" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            px={{ base: 4, sm: 8, md: 20, lg: 32 }}
            py={{ base: 8, sm: 16, md: 0 }}
          >
            {/* Background Image */}
            <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bg="rgba(0,0,0,0.45)"
              />
            </Box>

            {/* Slide Content */}
            <Box
              color="white"
              position="relative"
              zIndex={1}
              maxW={{ base: "90%", sm: "80%", md: "55%", lg: "40%" }}
              textAlign={{ base: "center", md: "left" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ base: "center", md: "flex-start" }}
              gap={{ base: 4, md: 6 }}
            >
              <Text
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                lineHeight="short"
                opacity={0.95}
                style={{ transition: "all 0.6s ease", transform: "translateY(0)" }}
              >
                {slide.title}
              </Text>

              <Text
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                mt={2}
                overflow="hidden"
                textOverflow="ellipsis"
                display="-webkit-box"
                css={{
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: clampLines,
                }}
                opacity={0.9}
              >
                {slide.text}
              </Text>

              <Flex
                direction={{ base: "column", sm: "row" }}
                justifyContent={{ base: "center", md: "flex-start" }}
                alignItems={{ base: "center", md: "flex-start" }}
                gap={{ base: 3, sm: 4 }}
                mt={4}
                w="100%"
              >
                <Link href={slide.primaryLink}>
                  <Button
                    bg="#0A2233"
                    color="white"
                    px={{ base: 8, sm: 10, md: 12 }}
                    py={{ base: 3, sm: 4, md: 6 }}
                    rounded="full"
                    fontWeight="bold"
                    fontSize={{ base: "md", sm: "md", md: "lg" }}
                    _hover={{ bg: "#00CAFF" }}
                    w={{ base: "100%", sm: "auto" }}
                  >
                    {slide.primaryButton}
                  </Button>
                </Link>

                {slide.secondaryButton && (
                  <Link href={slide.secondaryLink || "#"}>
                    <Button
                      bg="transparent"
                      border="2px solid white"
                      color="white"
                      px={{ base: 8, sm: 10, md: 12 }}
                      py={{ base: 3, sm: 4, md: 6 }}
                      rounded="full"
                      fontWeight="bold"
                      fontSize={{ base: "md", sm: "md", md: "lg" }}
                      _hover={{ bg: "#00CAFF", borderColor: "#00CAFF" }}
                      w={{ base: "100%", sm: "auto" }}
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
