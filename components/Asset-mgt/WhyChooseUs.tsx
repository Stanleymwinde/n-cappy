import { marginX } from "@/utils/constants";
import { Box, Card, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BiSolidBullseye } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { Fa42Group, FaShieldHalved, FaUser } from "react-icons/fa6";
import { LiaBrainSolid } from "react-icons/lia";

const WhyChooseUs = () => {
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
        Why Institutions Choose You
      </Heading>
      <Text mb={8} textAlign="center" fontSize="lg" color="gray.600">
        Our institutional approach combines deep expertise, proprietary
        research, and a relentless focuss on clients objectives.{" "}
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
            title: "Tailored Mandates Camp",
            description:
              "Every portfolio is custom-structured to your strategic goals, liquidity needs, and governance frameworks .",
          },
          {
            icon: <LiaBrainSolid />,
            title: "Institutional Epertise",
            description:
              "Our team brings decades of experience managing institutional mandates across global markets.",
          },
          {
            icon: <BsGraphUpArrow />,
            title: "Proprietary Research",
            description:
              "We generate original insights through rigorous macroeconomic, sectoral, and security-level analysis .",
          },
          {
            icon: <FaShieldHalved />,
            title: "Transparency & Accountability",
            description:
              "Institutional-grade reporting, compliance oversight, and real-time risk analytics ensure full visibility and trust .",
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

export default WhyChooseUs;
