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
    <Box marginX={marginX} py={5} textAlign={"center"} mt={20}>
      <Heading
        as="h1"
        fontSize={{ base: "3xl", md: "6xl" }}
        fontFamily="poppins"
        fontWeight="bold"
        my={12}
        color="gray.800"
      >
        Here When You’re Ready to Build Forward
      </Heading>

      <Flex
        marginX={marginX}
        mt={8}
        justifyContent={{ base: "center", md: "space-between" }}
        wrap="wrap"
      >
        {institutionalMembers.map((member, i) => (
          <Card.Root maxW="16rem" overflow="hidden" key={i}>
            <Image
              src={member.image}
              width="100%"
              height="350px"
              objectFit="cover"
              alt={`${member.name} profile picture`}
              borderRadius="md"
              boxShadow="md"
            />
            <Card.Body gap={2}>
              <Card.Title>{member.name}</Card.Title>
              <Card.Description>
                <Text fontSize="sm" color="gray.600">
                  {member.title}
                </Text>
                <Box display="flex" justifyContent="flex-end" mt={2}>
                  <a
                    href={member.linkedin} // 👈 uses the linkedin property
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon
                      boxSize={7}
                      color={"blue.600"}
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
        bg={"#0a2234"}
        mt={6}
        color={"white"}
        px={8}
        py={4}
        rounded="full"
        fontWeight="bold"
        _hover={{ bg: "#00CAFF" }}
        onClick={() =>
          window.open(
            "https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4",
            "_blank"
          )
        }
      >
        Align & Advance
      </Button>
    </Box>
  );
};

export default Team;
