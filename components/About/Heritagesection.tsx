"use client";

import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { heritageData } from "@/utils/constants";

const HeritageSection: React.FC = () => {
  const [activeYear, setActiveYear] = useState(heritageData[0]);
  const circleSize = useBreakpointValue({ base: "16px", sm: "20px", md: "24px" });

  return (
    <Box
      id="section3"
      fontFamily="'Poppins', sans-serif"
      py={{ base: 6, md: 12 }}
      bg="white"
      w="100%"
      mt={20}
    >
      {/* Section Heading */}
      <Box px={{ base: 4, md: 12 }} mb={{ base: 4, md: 8 }}>
        <Heading
          fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          fontFamily="poppins"
          color="#0A2233"
          textAlign="center"
        >
          About Nabo Capital
        </Heading>
      </Box>

      {/* Timeline Container */}
      <Box bg="#FFFFFF" color="white" py={{ base: 8, md: 16 }} w="100%">
        <Box
          bg="#1e2d3d"
          p={{ base: 4, md: 8 }}
          borderRadius="2xl"
          boxShadow="lg"
          w="100%"
          maxW="100%"
          mx="auto"
          minHeight={{ base: "auto", md: "500px" }}
        >
          <Text
            fontWeight="semibold"
            fontSize={{ base: "xl", md: "4xl" }}
            mb={8}
            textAlign="center"
            color="white"
          >
            Our Heritage
          </Text>

          {/* Timeline Years */}
          <Box position="relative" mb={{ base: 6, md: 10 }}>
            <HStack
              justify={{ base: "flex-start", md: "space-between" }}
              gap={{ base: 6, md: 0 }}
              px={{ base: 2, md: 6 }}
              overflowX={{ base: "auto", md: "visible" }}
              css={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
              {heritageData.map((item) => (
                <VStack
                  key={item.year}
                  gap={2}
                  cursor="pointer"
                  onClick={() => setActiveYear(item)}
                  minW={{ base: "60px", md: "auto" }}
                >
                  <Circle
                    size={circleSize}
                    bg={activeYear.year === item.year ? "#00C8FF" : "white"}
                    border="2px solid white"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: "scale(1.3)",
                      bg: activeYear.year === item.year ? "#00E0FF" : "#00C8FF",
                      boxShadow: "0 0 10px rgba(0, 200, 255, 0.7)",
                    }}
                  />
                  <Text fontWeight="bold" fontSize={{ base: "14px", md: "16px" }} color="white">
                    {item.year}
                  </Text>
                </VStack>
              ))}
            </HStack>
            <Box
              position="absolute"
              top={{ base: "10px", md: "12px" }}
              left="0"
              right="0"
              h="2px"
              bg="whiteAlpha.500"
              zIndex={1}
            />
          </Box>

          {/* Active Year Description */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            px={{ base: 2, md: 6 }}
          >
            <Text
              fontSize={{ base: "md", md: "20px" }}
              color="#00C8FF"
              fontWeight="bold"
              mb={3}
              textTransform="uppercase"
            >
              {activeYear.title}
            </Text>

            <Box
              fontSize={{ base: "14px", md: "16px" }}
              color="whiteAlpha.900"
              lineHeight="1.8"
              whiteSpace="normal"
              overflow="visible"
              textOverflow="unset"
            >
              {Array.isArray(activeYear.description)
                ? activeYear.description.map((para, idx) => (
                    <Text
                      key={idx}
                      mb={idx < activeYear.description.length - 1 ? 4 : 0}
                    >
                      {para}
                    </Text>
                  ))
                : activeYear.description}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeritageSection;
