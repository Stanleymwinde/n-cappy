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
    <Box id="consultation" marginX={marginX} py={5} textAlign="center">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "5xl" }} 
        fontFamily="poppins"
        my={6}
        color="gray.800"
      >
        Ask. Choose. Build your path
      </Heading>

      {/* Schedule a Consultation button */}
      <Box my={4}>
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUMDFGTVU2RlQ0SkY3TFI5MTVSRFVESEc2Wi4u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button bg="#02b5df" color="white" _hover={{ bg: "#029ec3" }}>
            Schedule a Consultation
          </Button>
        </a>
      </Box>

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
                  {member.link && (
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: "inline-block" }}
                    >
                      <LinkedInIcon boxSize={7} color="blue.600" />
                    </a>
                  )}
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
