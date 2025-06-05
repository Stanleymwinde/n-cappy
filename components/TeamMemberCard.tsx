import {
  Box,
  Image,
  Text,
  VStack,
  IconButton,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";

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
      w="100%"
      h="400px"
      position="relative"
    >
      <Image
        src={image}
        alt={name}
        objectFit="cover"
        w="100%"
        h="260px"
      />
      <Box p={4} w="100%" position="relative" pb="10">
        <Text fontWeight="bold" fontSize="lg" mb={1}>
          {name}
        </Text>
        <Text fontSize="sm" color="gray.600" mb={2}>
          {title}
        </Text>
        {linkedin && (
          <Box position="absolute" bottom="0" right="0" p={2} >
          <ChakraLink href={linkedin} >
            <IconButton
              size="sm"
              variant="ghost"
              colorScheme="blue"
            ><FaLinkedin />
              </IconButton>
          </ChakraLink>
         
        </Box>
        )}
      </Box>
    </VStack>
  );
};

export default TeamMemberCard;

