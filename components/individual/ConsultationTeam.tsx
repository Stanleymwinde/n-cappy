"use client";

import { marginX, teamMembers } from "@/utils/constants";
import { LinkedInIcon } from "@/utils/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import React from "react";

const ConsultationTeam = () => {
  return (
    <Box marginX={marginX} py={5} textAlign="center">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
      >
        Ask. Choose. Build your path
      </Heading>

      <Button bg="#02b5df" color="white">
        Schedule a Consultation
      </Button>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        gap={6}
        mt={8}
        justifyItems="center"
      >
        {teamMembers.map((member, i) => (
          <Card.Root key={i} maxW="16rem" overflow="hidden">
            <Image
              src={member.image}
              width="100%"
              height="300px"
              objectFit="cover"
              alt={member.name}
              borderRadius="md"
              boxShadow="md"
            />
            <Card.Body gap="2">
              <Card.Title>{member.name}</Card.Title>
              <Card.Description>
                <Text fontSize="sm" color="gray.600">
                  {member.title}
                </Text>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <LinkedInIcon boxSize={7} color="blue.600" />
                </Box>
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ConsultationTeam;