import { marginX } from "@/utils/constants";
import { Box, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidBullseye } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaShieldHalved } from "react-icons/fa6";
import { LiaBrainSolid } from "react-icons/lia";

const WhyPartnerWithUs = () => {
  return (
    <Box marginX={marginX}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
        textAlign="center"
      >
        Why Partner With Us
      </Heading>
      <Text
        mb={8}
        textAlign="center"
        fontSize="xl"
        color="gray.600"
        fontWeight={"semibold"}
      >
        Our institutional advisory practice is built on a foundation of
        expertise, integrity, and a deep commitment to creating lasting value
        for our clients.
      </Text>
      <Grid
        py={6}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={8}
        justifyContent="center"
        alignItems="stretch"
        maxW="900px"
        mx="auto"
      >
        {[
          {
            icon: <BiSolidBullseye />,
            title: "Institutional-Grade Insight",
            description:
              "Our team brings experience from leading global financial institutions, offering sophisticated analysis that drives strategic decision-making.",
          },
          {
            icon: <LiaBrainSolid />,
            title: "Confidentiality and Discretion",
            description:
              "We maintain the highest standards of privacy and confidentiality throughout all advisory engagements and client relationships.",
          },
          {
            icon: <BsGraphUpArrow />,
            title: "Execution Excellence",
            description:
              "Our proven execution methodology ensures precise implementation of advisory recommendations with measurable outcomes",
          },
          {
            icon: <FaShieldHalved />,
            title: "Pan-African Perspective",
            description:
              "Unparalleled local market expertise across key African economies provides context-rich insights for institutional clients.",
          },
        ].map((item, idx) => (
          <Card.Root
            key={idx}
            width="100%"
            p={6}
            borderRadius="md"
            boxShadow="md"
            border={"1px solid #e2e8f0"}
            _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              height="100%"
              gap={4}
            >
              {/* Centered Icon */}
              <Box
                boxSize="70px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="#00caff"
                borderRadius="full"
                fontSize="2.5rem"
              >
                {item.icon}
              </Box>

              {/* Card Content */}
              <Card.Body gap={2} p={0}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description lineHeight="1.6" color="gray.600">
                  {item.description}
                </Card.Description>
              </Card.Body>
            </Flex>
          </Card.Root>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyPartnerWithUs;
