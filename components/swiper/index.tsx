"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";

interface AutoplayTimeLeftParams {
  swiper: import("swiper").Swiper;
  time: number;
  progress: number;
}

const SwiperPage = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
    >
      {slider_images.map((image, index) => (
        <SwiperSlide key={index}>
          <Box
            position="relative"
            height={{ base: "90vh", sm: "80vh", md: "90vh", lg: "100vh" }}
            width="100%"
            backgroundImage={`url(${image.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems={{ base: "flex-start", md: "center" }}
            justifyContent="flex-start"
            px={{ base: 4, sm: 8, md: 20, lg: 32 }}
            py={{ base: 20, sm: 24, md: 0 }}
          >
            {/* Black overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.45)"
              zIndex={0}
            />

            {/* Slide content */}
            <Box
              color="white"
              position="relative"
              zIndex={1}
              maxW={{ base: "95%", sm: "80%", md: "55%", lg: "40%" }}
              textAlign="left"
            >
              <Box
                as="p"
                fontSize={{ base: "xl", sm: "2xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                lineHeight="short"
              >
                {image.title}
              </Box>

              <Box
                as="p"
                fontSize={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
                mt={4}
                overflow="hidden"
                textOverflow="ellipsis"
                display="-webkit-box"
                css={{
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: clampLines,
                }}
              >
                {image.text}
              </Box>

              <Link href={image.link} passHref>
                <Button
                  mt={6}
                  colorScheme="blackAlpha"
                  bg="#0A2233"
                  color="white"
                  px={{ base: 6, sm: 8, md: 10 }}
                  py={{ base: 3, sm: 4, md: 6 }}
                  rounded="full"
                  fontWeight="bold"
                  fontSize={{ base: "sm", sm: "md", md: "lg" }}
                  _hover={{ bg: "#00CAFF" }}
                >
                  {index === 2 ? "Explore Funds" : "Start Investing"}
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
    image: "/images/travel1.jpeg",
    title: "Invest in Experiences. Invest in Dubai.",
    text: "Step into a city where luxury, thrill, and wonder collide. Every moment you invest here becomes a memory that never fades.",
    link: "/travel",
  },
  {
    image: "/images/slide-4.jpg",
    title: "Make Money While Doing What You Love",
    text: "Settle down. Now it’s your money’s turn to clock in.",
    link: "/lifestyle-goal",
  },
  {
    image: "/images/smiling.jpeg",
    title: "Invest Where Performance Leads. Unlock Up to 13% p.a.",
    text: "The Nabo Money Market Fund delivers trusted, market-leading growth. Invest smart, stay liquid, and watch your wealth work harder for you.",
    link: "/individual/MMF&FIF",
  },
  {
    image: "/images/globall.jpg",
    title: "Invest Beyond Borders. Build Wealth Without Limits.",
    text: "Unlock global markets, diversify your portfolio, and invest in opportunities that grow your wealth today—and protect your legacy tomorrow.",
    link: "/global-investing",
  },
  {
    image: "/images/fs.jpeg",
    title: "Make Money While Doing What You Love",
    text: "Say yes to life’s big and beautiful moments",
    link: "/education",
  },
  {
    image: "/images/oldcouple.jpeg",
    title: "Make Money While Doing What You Love",
    text: "Make your mark. Then make it last",
    link: "/retire",
  },
];
