"use client";
import { institutionalMembers, marginX } from "@/utils/constants";
import { LinkedInIcon } from "@/utils/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Team = () => {
  return (
    <Box marginX={marginX} py={5} textAlign="center" mt={20}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        my={{ base: 8, md: 12 }}
        color="gray.800"
        lineHeight={{ base: "short", md: "shorter" }}
      >
        Here When You’re Ready to Build Forward
      </Heading>

      <Flex
        marginX={marginX}
        mt={8}
        justifyContent={{ base: "center", md: "space-between" }}
        gap={{ base: 6, md: 10 }}
        flexWrap="wrap"
      >
        {institutionalMembers.map((member, i) => (
          <Card.Root
            key={i}
            flex="1 1 250px" // ✅ flexible basis
            minW={{ base: "100%", sm: "15rem", md: "14rem" }}
            maxW={{ base: "100%", sm: "18rem", md: "20rem" }}
            overflow="hidden"
          >
            <Image
              src={member.image}
              width="100%"
              height={{ base: "300px", sm: "360px", md: "420px" }}
              objectFit="fill"
              alt={`${member.name} profile picture`}
              borderRadius="md"
              boxShadow="md"
            />
            <Card.Body gap={2}>
              <Card.Title fontSize={{ base: "lg", md: "xl" }}>
                {member.name}
              </Card.Title>
              <Card.Description>
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                  {member.title}
                </Text>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      boxSize={{ base: 6, md: 7 }}
                      color="blue.600"
                      style={{ cursor: "pointer" }}
                    />
                  </a>
                </Box>
              </Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </Flex>

      <Button
        bg="#0a2234"
        mt={8}
        color="white"
        px={{ base: 6, md: 8 }}
        py={{ base: 3, md: 4 }}
        rounded="full"
        fontWeight="bold"
        fontSize={{ base: "sm", md: "md" }}
        _hover={{ bg: "#00CAFF" }}
        onClick={() =>
          window.open(
            "https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4u"
          )
        }
      >
        Align & Advance
      </Button>
    </Box>
  );
};

export default Team;
