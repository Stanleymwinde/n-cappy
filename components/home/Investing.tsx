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
    <Box marginX={marginX} py={{ base: 8, md: 12 }}>
      {/* First sentence */}
      <Heading
        textAlign="center"
        fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }} // 🔹 scales smoothly
        mb={{ base: 6, md: 8 }}
        mt={{ base: 4, md: 8 }}
        fontFamily={"Poppins"}
        fontWeight={"bold"}
        lineHeight="short"
      >
        Money isn't the goal.{" "}
        <Box as="span" color="#00caff">
          Purpose is.
        </Box>
      </Heading>

      {/* Second sentence */}
      <Box
        textAlign="center"
        fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "5xl" }} // 🔹 responsive scaling
        mt={{ base: 4, md: 8 }}
        mb={{ base: 6, md: 8 }}
        fontFamily={"Poppins"}
        lineHeight="short"
        px={{ base: 4, md: 0 }} // 🔹 prevent overflow on small screens
      >
        What do you want your money to do for you?
      </Box>

      <Text
        fontSize={{ base: "sm", sm: "md", md: "xl", lg: "3xl" }}
        color="gray.600"
        py={2}
        textAlign={{ base: "center", md: "left" }} // 🔹 center text on mobile
      >
        I want to ...
      </Text>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 4 }} // 🔹 smoother breakpoints
        gap={{ base: 4, md: 6 }}
        p={{ base: 2, md: 4 }}
      >
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
            minHeight={{ base: "300px", md: "350px" }} // 🔹 smaller height on phones
          >
            <Image
              src={card.image}
              alt={card.title}
              objectFit="cover"
              width="100%"
              height={{ base: "150px", md: "200px" }} // 🔹 smaller image on mobile
              flexShrink={0}
            />
            <Box
              p={{ base: 3, md: 4 }}
              display="flex"
              flexDirection="column"
              flexGrow={1}
            >
              <Heading
                fontSize={{ base: "md", md: "lg" }}
                mb={2}
                
              >
                {card.title}
              </Heading>
              <Text
                fontSize={{ base: "xs", sm: "sm", md: "sm" }}
                color="gray.600"
                mb={4}
                flexGrow={1}
                
              >
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
                  fontSize={{ base: "sm", md: "md" }}
                  py={{ base: 2, md: 3 }}
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
