"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";

interface AutoplayTimeLeftParams {
  swiper: import("swiper").Swiper;
  time: number;
  progress: number;
}

const SwiperPage = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (
    s: import("swiper").Swiper,
    time: number,
    progress: number
  ): void => {
    progressCircle.current?.style.setProperty(
      "--progress",
      String(1 - progress)
    );
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {slider_images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box
            position="relative"
            height={{ base: "70vh", md: "90vh" }}
            width="100%"
            backgroundImage={`url(${image.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems={{ base: "flex-start", md: "center" }}
            justifyContent="flex-start"
            px={{ base: 4, md: 20 }}
            py={{ base: 16, md: 0 }}
          >
            {/* Black overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.4)"
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
                lineHeight="short"
              >
                {image.title}
              </Text>

              <Text
                fontSize={{ base: "sm", sm: "md", md: "xl" }}
                mt={4}
              >
                {image.text}
              </Text>

              <Link href={image.link} passHref>
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
                  Start Investing
                </Button>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
      ))}

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

export default SwiperPage;

const slider_images = [
  {
    image: "/images/travel_dubai.png",
    title: "Invest in Experiences. Invest in Dubai.",
    description:
      "Step into a city where luxury, thrill, and wonder collide. Every moment you invest here becomes a memory that never fades.",
    text:
      "Step into a city where luxury, thrill, and wonder collide. Every moment you invest here becomes a memory that never fades.",
    link: "/travel",
  },
  {
    image: "/images/slide-4.png",
    title: "Make Money While doing what you love",
    description: "Settle down. Now it’s your money’s turn to clock in.",
    text: "Settle down. Now it’s your money’s turn to clock in.",
    link: "/lifestyle-goal",
  },
    {
    image: "/images/smiling.jpeg",
    title: "Invest Where Performance Leads. Unlock Up to 13% p.a.",
    description: "The Nabo Money Market Fund delivers trusted, market-leading growth. Invest smart, stay liquid, and watch your wealth work harder for you.",
    text: "The Nabo Money Market Fund delivers trusted, market-leading growth. Invest smart, stay liquid, and watch your wealth work harder for you.",
    link: "/lifestyle-goal",
  },
  {
    image: "/images/globaly.jpeg",
    title: "Invest Beyond Borders. Build Wealth Without Limits.",
    description:
      "Unlock global markets, diversify your portfolio, and invest in opportunities that grow your wealth today—and protect your legacy tomorrow.",
    text:
      "Unlock global markets, diversify your portfolio, and invest in opportunities that grow your wealth today—and protect your legacy tomorrow.",
    link: "/global-investing",
  },
  {
    image: "/images/father.son.jpeg",
    title: "Make Money While doing what you love",
    description: "Say yes to life’s big and beautiful moments",
    text: "Say yes to life’s big and beautiful moments",
    link: "/education",
  },
  {
    image: "/images/oldcouple.jpeg",
    title: "Make Money While doing what you love",
    description: "Make your mark. Then make it last",
    text: "Make your mark. Then make it last",
    link: "/retire",
  },
];
