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
    <Box marginX={marginX} py={5} textAlign={"center"}>
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "4xl" }}
        fontFamily="poppins"
        my={6}
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
              alt="Green double couch with wooden legs"
              borderRadius="md"
              boxShadow="md"
            />
            <Card.Body gap={2}>
              <Card.Title>{member.name}</Card.Title>
              <Card.Description>
                <Text fontSize="sm" color="gray.600">
                  {member.title}
                </Text>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  mt={2}
                  _hover={{ cursor: "pointer" }}
                >
                  <LinkedInIcon boxSize={7} color={"blue.600"} />
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
            "https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUMDFGTVU2RlQ0SkY3TFI5MTVSRFVESEc2Wi4u",
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
