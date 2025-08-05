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
            height="90vh"
            width="100%"
            backgroundImage={`url(${image.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            px={{ base: 4, md: 20 }}
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
            <Box color="white" position="relative" zIndex={1}>
              <Text
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                lineHeight="short"
              >
                Make money while doing
                <br /> what you love
              </Text>
              <Text fontSize={{ base: "md", md: "xl" }} mt={6}>
                {image.text}
              </Text>
              <Link href={image.link} passHref>
                <Button
                  mt={6}
                  colorScheme="blackAlpha"
                  bg="blackAlpha.800"
                  color="white"
                  px={8}
                  py={6}
                  rounded="full"
                  fontWeight="bold"
                  _hover={{ bg: "blackAlpha.700" }}
                >
                  Start Investing
                </Button>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};

export default SwiperPage;

const slider_images = [
  {
    image: "/images/travel_dubai.png",
    title: "Make Money While doing what you love",
    description: "Dubai's Calling",
    text: "Dubai's Calling",
    link: "/",
  },
  {
    image: "/images/slide-4.png",
    title: "Make Money While doing what you love",
    description: "Settle down. Now it’s your money’s turn to clock in.",
    text: "Settle down. Now it’s your money’s turn to clock in.",
    link: "/",
  },
  {
    image: "/images/globaly.jpeg",
    title: "Make Money While doing what you love",
    description: "Go Global with Us",
    text: "Go Global with Us",
    link: "/global-investing",
  },
  {
    image: "/images/father.son.jpeg",
    title: "Make Money While doing what you love",
    description: "Say yes to life’s big and beautiful moments ",
    text: "Say yes to life’s big and beautiful moments ",
    link: "/",
  },
  {
    image: "/images/oldcouple.jpeg",
    title: "Make Money While doing what you love",
    description: "Make your mark. Then make it last",
    text: "Make your mark. Then make it last",
    link: "/",
  },
];
