"use client";

import { marginX } from "@/utils/constants";
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Icon,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { CallToAction } from "@/components/home";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: MdLocationOn,
    title: "Our Location",
    description: "International House, 5th floor, Nairobi",
    link: null,
  },
  {
    icon: MdPhone,
    title: "Phone Number",
    description: "+254 709 902 700",
    link: "tel:+254709902700",
  },
  {
    icon: MdEmail,
    title: "Email Us",
    description: "invest@nabocapital.com or clientservice@nabocapital.com",
    link: "mailto:invest@nabocapital.com",
  },
];

const socialMedia = [
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    handle: "0709902700",
    link: "https://wa.me/254709902700",
    color: "#25D366",
  },
  {
    icon: FaFacebook,
    name: "Facebook",
    handle: "@NaboCapital",
    link: "https://web.facebook.com/NaboCapital/",
    color: "#1877F2",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    handle: "@nabocapital",
    link: "https://www.instagram.com/nabocapital/",
    color: "#E4405F",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    handle: "@NaboCapital",
    link: "https://x.com/NaboCapital",
    color: "#1DA1F2",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    handle: "@nabo-capital",
    link: "https://www.linkedin.com/company/nabo-capital/",
    color: "#0A66C2",
  },
  {
    icon: FaTiktok,
    name: "TikTok",
    handle: "@nabo_capital",
    link: "https://www.tiktok.com/@nabo_capital?lang=en",
    color: "#000000",
  },
  {
    icon: FaYoutube,
    name: "YouTube",
    handle: "@NaboCapitalKe",
    link: "https://www.youtube.com/@NaboCapitalKe",
    color: "#FF0000",
  },
];

const ContactUs = () => {
  return (
    <>
      <Box marginX={marginX} py={8}>
        <Heading
          fontFamily={"poppins"}
          fontSize="5xl"
          fontWeight="bold"
          mb={10}
          textAlign={"center"}
        >
          Contact Us
        </Heading>

        {/* Contact Information Section */}
        <Box bg={"gray.100"} p={6} py={8} borderRadius="md" mb={8}>
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            mb={6}
            textAlign={"center"}
            color="#0a2234"
          >
            Get In Touch
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={8}>
            {contactInfo.map((item, index) => (
              <Box key={index} textAlign="center">
                {item.link ? (
                  <Link href={item.link} _hover={{ textDecoration: "none" }}>
                    <VStack gap={3}>
                      <Box
                        bg="#00CAFF"
                        p={4}
                        borderRadius="full"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={item.icon} w={6} h={6} color="white" />
                      </Box>
                      <Text fontWeight="bold" fontSize="lg" color="#0a2234">
                        {item.title}
                      </Text>
                      <Text color="gray.600" _hover={{ color: "#00CAFF" }}>
                        {item.description}
                      </Text>
                    </VStack>
                  </Link>
                ) : (
                  <VStack gap={3}>
                    <Box
                      bg="#00CAFF"
                      p={4}
                      borderRadius="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={item.icon} w={6} h={6} color="white" />
                    </Box>
                    <Text fontWeight="bold" fontSize="lg" color="#0a2234">
                      {item.title}
                    </Text>
                    <Text color="gray.600">{item.description}</Text>
                  </VStack>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Social Media Section */}
        <Box bg={"#0a2234"} p={6} py={8} borderRadius="md" color="white">
          <Heading
            fontSize="3xl"
            fontWeight="bold"
            mb={6}
            textAlign={"center"}
            color="#00CAFF"
          >
            Follow Us On Social Media
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 4, lg: 7 }} gap={6}>
            {socialMedia.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                <VStack gap={2} textAlign="center">
                  <Box
                    bg={social.color}
                    p={3}
                    borderRadius="full"
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ bg: "#00CAFF" }}
                    transition="background-color 0.2s"
                  >
                    <Icon as={social.icon} w={5} h={5} color="white" />
                  </Box>
                  <Text fontSize="sm" fontWeight="bold" color="white">
                    {social.name}
                  </Text>
                  <Text fontSize="xs" color="white">
                    {social.handle}
                  </Text>
                </VStack>
              </Link>
            ))}
          </SimpleGrid>
        </Box>

        {/* Business Hours */}
        <Box bg={"gray.50"} p={6} py={8} borderRadius="md" mt={8}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            textAlign={"center"}
            color="#0a2234"
          >
            Business Hours
          </Heading>
          <VStack gap={2}>
            <Flex justify="space-between" width="100%" maxW="400px">
              <Text fontWeight="bold">Monday - Friday:</Text>
              <Text>8:00 AM - 5:00 PM</Text>
            </Flex>
            <Flex justify="space-between" width="100%" maxW="400px">
              <Text fontWeight="bold">Saturday:</Text>
              <Text>Closed</Text>
            </Flex>
            <Flex justify="space-between" width="100%" maxW="400px">
              <Text fontWeight="bold">Sunday:</Text>
              <Text>Closed</Text>
            </Flex>
          </VStack>
        </Box>
      </Box>
      <CallToAction />
    </>
  );
};

export default ContactUs;
