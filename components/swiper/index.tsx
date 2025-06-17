"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Text } from "@chakra-ui/react";
import { link } from "fs";
import Link from "next/link";
import { text } from "stream/consumers";

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
        // Inside your map function (replacing <Box>...</Box>):

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
            <Box color="#0a2234">
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
    image: "/images/slide-1.png",
    title: "Make Money While doing what you love",
    description: "Start Your Freedom Plan",
    text: "Start Your Freedom Plan",
    link: "/",
  },
  {
    image: "/images/slide-2.png",
    title: "Make Money While doing what you love",
    description: "Explore What's Possible",
    text: "Explore What's Possible",
    link: "/",
  },
  {
    image: "/images/slider-3.png",
    title: "Make Money While doing what you love",
    description: "Go Global with Nabo",
    text: "Go Global with Nabo",
    link: "/global-investing",
  },
  {
    image: "/images/slide-4.png",
    title: "Make Money While doing what you love",
    description: "Clock Out, We've got you",
    text: "Clock Out, We've got you",
    link: "/",
  },
];
