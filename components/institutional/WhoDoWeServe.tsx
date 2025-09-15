"use client";

import { whoweserve } from "@/utils/constants";
import { Box, Heading, Text, Grid, VStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

const MotionBox = motion(Box);

export default function WhoWeServe() {
  return (
    <Box py={10} px={6} mt={8}>
      {/* Animated Text */}
      <VStack gap={3} textAlign="center">
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "6xl" }}
            fontWeight={"bold"}
            fontFamily="poppins"
            my={5}
            color="gray.800"
          >
            Who do We Serve
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Text fontSize="xl" color="gray.600">
            Where insight meets action, for value that endures.
          </Text>
        </MotionBox>
      </VStack>

      {/* Animated Cards */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        mt={10}
        maxW="4xl"
        mx="auto"
      >
        {whoweserve.map(({ label, icon }, index) => {
          const isLeft = index < 3; // first three come from left
          const cardVariants: Variants = {
            hidden: { opacity: 0, x: isLeft ? -100 : 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
          };

          return (
            <MotionBox
              key={label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              borderWidth="1px"
              borderRadius="md"
              p={6}
              textAlign="center"
              borderColor={"gray.200"}
              boxShadow={"md"}
              _hover={{ boxShadow: "md", borderColor: "blue.300", transition: "all 0.2s" }}
            >
              <Box
                bg="cyan.500"
                w={16}
                h={16}
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                mb={4}
              >
                {icon}
              </Box>
              <Text fontWeight="semibold">{label}</Text>
            </MotionBox>
          );
        })}
      </Grid>
    </Box>
  );
}
