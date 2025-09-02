import { Box, Image, Text, VStack, Flex } from "@chakra-ui/react";
import { LinkedInIcon } from "@/utils/icons";

interface TeamMemberCardProps {
  name: string;
  title: string;
  image: string;
  linkedin?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  title,
  image,
  linkedin,
}) => {
  return (
    <VStack
      gap={3}
      bg="white"
      boxShadow="md"
      borderRadius="xl"
      overflow="hidden"
      textAlign="left"
      align="start"
      p={0}
      w="250px" // reduced width
      h="450px"
      position="relative"
    >
      {/* Image Section */}
      <Box w="100%" h="250px">
        <Image src={image} alt={name} objectFit="cover" w="100%" h="120%" />
      </Box>

      {/* Text Section */}
      <Box p={4} w="100%">
        <Text fontWeight="medium" fontSize="md" mb={1} mt={8}>
          {name}
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
          {title}
        </Text>
      </Box>

      {/* LinkedIn Icon Section */}
      {linkedin && (
        <Flex
          position="absolute"
          bottom="10px"
          right="10px"
          align="center"
          justify="center"
          zIndex={10}
        >
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon boxSize={7} color="blue.600" />
          </a>
        </Flex>
      )}
    </VStack>
  );
};

const CallToAction = () => {
  return (
    <Box
      bgImage="url('/images/cta.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      width="100%"
      height="300px"
      position={"relative"}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgColor="rgba(0, 0, 0, 0.5)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        color="white"
        textAlign="center"
      >
        <Box fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          Innovation that feels personal
        </Box>
        <Flex
          mt={2}
          gap={{ base: 2, md: "4rem" }}
          align={"center"}
          justify={"center"}
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
        >
          <Box w={200} h={100} position="relative">
            <Image src="/images/apple.png" alt="Nabo Capital Logo" />
          </Box>

          <Box w={200} h={100} position="relative">
            <Image src="/images/google.png" alt="Nabo Capital Logo" />
          </Box>
        </Flex>
        <Box
          mt={4}
          fontSize={{ base: "md", md: "lg" }}
          as={"button"}
          bgColor={"#0a2234"}
          padding="10px 20px"
          borderRadius="5px"
          _hover={{ bgColor: "#00b5e0" }}
          cursor="pointer"
        >
          INVEST NOW
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMemberCard;
