import { marginX, teamMembers } from "@/utils/constants";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

const ConsultationTeam = () => {
  return (
    <Box marginX={marginX} py={5} textAlign={"center"}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }}
        fontFamily="poppins"
        my={6}
        color="gray.800"
      >
        Ask.Choose.Build your path
      </Heading>
      <Button bg={"#02b5df"}>Schedule a Consultation</Button>
      <Box>
        <Card.Root maxW="md" boxShadow="lg" borderRadius="lg">
          <CardBody>
            <VStack gap={4} align="stretch">
              {teamMembers.map((member, index) => (
                <Box
                  key={index}
                  py={2}
                  borderBottom={
                    index !== teamMembers.length - 1 ? "1px solid" : "none"
                  }
                  borderColor="gray.100"
                >
                  <Heading size="md">{member.name}</Heading>
                  <Text fontSize="sm" color="gray.600">
                    {member.title}
                  </Text>
                </Box>
              ))}
            </VStack>
          </CardBody>
        </Card.Root>
      </Box>
    </Box>
  );
};

export default ConsultationTeam;
