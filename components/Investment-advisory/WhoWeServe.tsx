import { services } from "@/utils/constants";
import { Box, Heading, Text, Grid, VStack, Icon } from "@chakra-ui/react";

export default function WhoWeServe() {
  return (
    <Box py={10} px={6}>
      <VStack gap={4} textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "5xl" }}
          fontWeight={"bold"}
          fontFamily="poppins"
          textAlign="center"
          my={6}
          color="gray.800"
        >
          Who do We Serve
        </Heading>
        <Text fontSize="xl" color="gray.600">
          Where insight meets action, for value that endures.
        </Text>
      </VStack>

      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        mt={10}
        maxW="4xl"
        mx="auto"
      >
        {services.map(({ label, icon }) => (
          <Box
            key={label}
            borderWidth="1px"
            borderRadius="md"
            p={6}
            textAlign="center"
            borderColor={"gray.200"}
            boxShadow={"md"}
            transition="all 0.2s"
            _hover={{ boxShadow: "md", borderColor: "blue.300" }}
          >
            <Box
              bg="cyan.500"
              w={16}
              h={16}
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              mb={4}
            >
              {/* <Icon as={icon} color="blue.600" boxSize={5} /> */}
              {icon}
            </Box>
            <Text fontWeight="semibold">{label}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
