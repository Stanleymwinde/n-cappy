"use client";

import { Box, VStack, Flex, Text, Icon } from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const ContactInfoSection: React.FC = () => {
  return (
    <Box
      bg="#00CFFF"
      borderRadius="lg"
      p={{ base: 6, md: 12 }}
      my={10}
      mx={{ base: 4, md: 16 }}
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        mb={6}
        color="black"
      >
        Contact Information
      </Text>

      <VStack align="start" gap={6} color="black">
        <Flex align="center" gap={4}>
          <Icon as={MdLocationOn} w={6} h={6} />
          <Text>International House, 5th floor, Nairobi</Text>
        </Flex>

        <Flex align="center" gap={4}>
          <Icon as={MdPhone} w={6} h={6} />
          <Text>0709902700</Text>
        </Flex>

        <Flex align="center" gap={4}>
          <Icon as={MdEmail} w={6} h={6} />
          <Text>invest@nabocapital.com or clientservice@nabocapital.com</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ContactInfoSection;
