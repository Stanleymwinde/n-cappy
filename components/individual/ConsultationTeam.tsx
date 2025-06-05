import { marginX, teamMembers } from "@/utils/constants";
import { InstagramIcon, LinkedInIcon } from "@/utils/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
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
      <Flex gap={4} mt={8} justifyContent="center" wrap="wrap">
        {teamMembers.map((member, i) => (
          <Card.Root maxW="16rem" overflow="hidden" key={i}>
            <Image
              src={member.image}
              width="100%"
              height="300px"
              objectFit="cover"
              alt="Green double couch with wooden legs"
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
                  <LinkedInIcon boxSize={7} color={"blue.600"} />
                </Box>
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>
    </Box>
  );
};

export default ConsultationTeam;
