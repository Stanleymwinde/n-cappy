import { cardData, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Investing = () => {
  return (
    <Box marginX={marginX} py={12}>
      {/* First sentence */}
      <Heading
        textAlign="center"
        fontSize={{ base: "3xl", md: "6xl" }}
        mb={8}
        mt={8}
        fontFamily={"Poppins"}
         fontWeight={"bold"}
      >
        Money isn't the goal.{" "}
        <Box as="span" color="#00caff">
          Purpose is.
        </Box>
      </Heading>

      {/* Second sentence with more spacing */}
      <Box
        textAlign="center"
        fontSize={{ base: "2xl", md: "5xl" }}
        mt={{ base: 6, md: 8 }} // More space on desktop
        mb={8}
        fontFamily={"Poppins"}
      >
        What do you want your money to do for you?
      </Box>

      <Text fontSize={{ base: "md", md: "3xl" }} color="gray.600" py={2}>
        I want to ...
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} p={4}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{ boxShadow: "lg", transform: "translateY(-4px)" }}
            display="flex"
            flexDirection="column"
            minHeight="350px"    // enforce min height for all cards
          >
            <Image
              src={card.image}
              alt={card.title}
              objectFit="cover"
              width="100%"
              height="200px"
              flexShrink={0}
            />
            <Box
              p={4}
              display="flex"
              flexDirection="column"
              flexGrow={1}
            >
              <Heading fontSize="lg" mb={2}>
                {card.title}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4} flexGrow={1}>
                {card.description}
              </Text>
              <Link href={card.link} passHref>
                <Button
                 borderColor="rgba(0, 0, 0, 0.6)"
                  variant="outline"
                  colorScheme="blackAlpha"
                  borderRadius="full"
                  fontWeight="bold"
                  w="100%"
                  mt="auto"
                >
                  Explore More
                </Button>
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Investing;
