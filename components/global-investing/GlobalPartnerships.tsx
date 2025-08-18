import { GlobalPartnersData, marginX } from "@/utils/constants";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import * as Icons from "react-icons/fa";

const GlobalPartnerships = () => {
  return (
    <Box marginX={marginX} py={8} bg="white">
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
          fontWeight={"bold"}
        textAlign="center"
        my={6}
        color="gray.800"
      >
        Global Partnerships & Approvals
      </Heading>
      <Box textAlign="center" color="gray.600" mb={6}>
        Our global network provides the foundation for secure, compliant, and
        effective investment solutions across borders.
      </Box>
      {/* partnership boxes */}
      <Box
        p={{ base: 4, md: 8 }}
        textAlign="center"
        borderRadius="md"
        justifyContent={"center"}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        gap={6}
      >
        {GlobalPartnersData.map((partnership, index) => {
          const Icon = Icons[partnership.icon as keyof typeof Icons];
          return (
            <Box
              key={index}
              flex="1"
              p={4}
              borderRadius="md"
              boxShadow="sm"
              bg="gray.50"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box fontSize="4xl" color="blue.500">
                {Icon && <Icon />}
              </Box>
              <Heading as="h3" size="md" mb={2}>
                {partnership.name}
              </Heading>
              <Box color="gray.600">{partnership.description}</Box>
            </Box>
          );
        })}
        {/* <Box
          flex="1"
          p={4}
          borderRadius="md"
          boxShadow="sm"
          bg="gray.50"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h3" size="md" mb={2}>
            Global Partnerships
          </Heading>
          <Box color="gray.600">
            We collaborate with leading financial institutions worldwide to
            ensure you have access to the best investment opportunities.
          </Box>
        </Box>

        <Box
          flex="1"
          p={4}
          borderRadius="md"
          boxShadow="sm"
          bg="gray.50"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h3" size="md" mb={2}>
            Regulatory Approvals
          </Heading>
          <Box color="gray.600">
            Our operations are fully compliant with international regulations,
            providing you with peace of mind in your global investments.
          </Box>
        </Box>
        <Box
          flex="1"
          p={4}
          borderRadius="md"
          boxShadow="sm"
          bg="gray.50"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h3" size="md" mb={2}>
            Strategic Alliances
          </Heading>
          <Box color="gray.600">
            Through strategic alliances, we enhance our service offerings and
            expand our global reach, ensuring you benefit from a diverse range
            of investment solutions.
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default GlobalPartnerships;
