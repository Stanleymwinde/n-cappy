import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type PlanForJoyProps = {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  subtext?: string;
};

const PlanForJoy = ({
  title,
  subtitle,
  imageUrl,
  subtext,
}: PlanForJoyProps) => {
  return (
    <Box
      bg="#0e2340" // slightly lighter navy blue than before for better contrast
      borderRadius="lg"
      padding={{ base: 8, md: 10 }}
      maxWidth="1500px"
      marginX="auto"
      color="white"
    >
      <Heading
        color="#00caff"
        as="h1"
        fontSize={{ base: "4xl", md: "5xl" }}
        fontWeight="bold"
        lineHeight="1.1"
        textAlign="center"
        mb={4}
      >
        {title || "Are you ready to plan for joy?"}
      </Heading>

      <Text
        color="gray.300"
        fontSize={{ base: "lg", md: "xl" }}
        textAlign="Center"
        mb={8}
        lineHeight="tall"
      >
        {subtitle ||
          "This portfolio is for the dreamers, the doers, and the bold believers in more. It’s for anyone who wants their money to create moments, not just returns."}
      </Text>

      <Flex direction={{ base: "column", md: "row" }} align="left" gap={8}>
        <Text
          color="white"
          fontSize={{ base: "md", md: "xl" }}
          lineHeight="taller"
          flex="1"
          maxWidth={{ base: "100%", md: "60%" }}
          mt={20} 
        >
          {subtext ||
            "Whether you’re planning that once-in-a-lifetime trip, launching a passion project close to your heart, or creating unforgettable memories to share with your family, we’re here to support you every step of the way. No more waiting for “one day”. Together, we’ll turn your dreams into achievable plans and bring those moments to life today. With clear, practical guidance tailored just for you, we make it simple to take action now and start living the life you’ve always imagined."}
        </Text>

        <Box
          flex="1"
          maxWidth={{ base: "100%", md: "50%" }}
          borderRadius="md"
          overflow="hidden"
          boxShadow="lg"
          minHeight="250px"
          position="relative"
          width="100%"
        >
          <Box position="relative" w="100%" h="400px">
            <Image
              src={imageUrl || "/images/slider-1.png"}
              alt="Plan for Joy"
              fill
              style={{ objectFit: "cover", borderRadius: "8px" }}
              priority
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlanForJoy;
