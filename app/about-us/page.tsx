"use client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import TeamMemberCard from "@/components/About/TeamMemberCard";
import { TeamAlbum } from "@/components/About/teamalbum";

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import CallToActionCommon from "@/components/common/CallToAction";
import { Connect } from "@/components/individual";
import { Rates } from "@/components/individual";
import { heritageData } from "@/utils/constants";

// Heritage Data

const OurHeritageSection = () => {
  const [activeYear, setActiveYear] = useState(heritageData[0]);
  const circleSize = useBreakpointValue({ base: "20px", md: "24px" });

  return (
    <Box fontFamily="'Poppins', sans-serif" py={6} bg="white" w="100%">
      <Box px={{ base: 4, md: 12 }} mb={4}>
        <Heading
          fontSize={{ base: "28px", md: "36px" }}
          fontWeight="extrabold"
          color="#0A2233"
        >
          About Nabo Capital
        </Heading>
      </Box>

      <Box bg="#FFFFFF" color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="800px">
          <Box
            bg="#1e2d3d"
            p={6}
            borderRadius="2xl"
            boxShadow="lg"
            width="190%"
            transform="scaleX(1.1)"
            marginX="auto"
            position="relative"
            left="-45%"
            top="-30px"
            minHeight="500px"
          >
            <Text
              fontWeight="semibold"
              fontSize="20px"
              mb={8}
              textAlign="center"
              color="white"
            >
              Our Heritage
            </Text>

            <Box position="relative" mb={10}>
              <HStack
                justify="space-between"
                w="100%"
                px={2}
                position="relative"
                zIndex={2}
              >
                {heritageData.map((item) => (
                  <VStack
                    key={item.year}
                    gap={2}
                    cursor="pointer"
                    onClick={() => setActiveYear(item)}
                  >
                    <Circle
                      size={circleSize}
                      bg={activeYear.year === item.year ? "#00C8FF" : "white"}
                      border="2px solid white"
                      transition="all 0.3s ease"
                    />
                    <Text fontWeight="bold" fontSize="16px" color="white">
                      {item.year}
                    </Text>
                  </VStack>
                ))}
              </HStack>
              <Box
                position="absolute"
                top="12px"
                left="0"
                right="0"
                h="2px"
                bg="whiteAlpha.500"
                zIndex={1}
              />
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              px={{ base: 2, md: 6 }}
            >
              <Text
                fontSize={{ base: "18px", md: "20px" }}
                color="#00C8FF"
                fontWeight="bold"
                mb={3}
                textTransform="uppercase"
              >
                {activeYear.title}
              </Text>
              <Text
                fontSize={{ base: "15px", md: "16px" }}
                color="whiteAlpha.900"
                lineHeight="1.8"
                whiteSpace="normal"
                overflow="visible"
                textOverflow="unset"
              >
                {activeYear.description}
              </Text>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

const teamAlbumMembers = [
  {
    name: "Mercy Njoroge",
    role: "Chief Customer Experience Officer",
    photoUrl: "images/Asset-1.jpeg",
  },
  {
    name: "Abby Mungai",
    role: "General Wealth Manager",
    photoUrl: "images/Asset-2.jpeg",
  },
  {
    name: "Lilian Mungai",
    role: "Finance & Operations Manager",
    photoUrl: "images/Asset-3.jpeg",
  },
  {
    name: "Irene Okoth",
    role: "HR Officer",
    photoUrl: "images//Asset-4.jpeg",
  },
  {
    name: "Kezzy Omoni",
    role: "Digital Creative Director",
    photoUrl: "images//Asset-1.jpeg",
  },
];

const About: React.FC = () => {
  return (
    <>
      <Rates />
      {/* Hero Section */}
      <Box
        position="relative"
        w="100%"
        h="100vh"
        overflow="hidden"
        bg="gray.800"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        >
          <source
            src="https://res.cloudinary.com/demvcea4r/video/upload/v1750574837/About_Us_1_1_xualz9.mp4"
            type="video/mp4"
          />
        </video>

        <VStack
          position="relative"
          zIndex={1}
          h="100%"
          justify="center"
          align="center"
          gap={4}
          textAlign="center"
          px={4}
          color="white"
          fontFamily="Poppins"
        >
          <Heading size="2xl">Who We Are</Heading>
          <Text fontSize="xl" maxW="600px">
            A Trusted Partner in Institutional and Retail Investment Solutions.
          </Text>
          <HStack gap={4} mt={6}>
            <Button colorScheme="teal" size="lg">
              Meet Our Team
            </Button>
            <Button colorScheme="teal" size="lg">
              Learn More
            </Button>
          </HStack>
        </VStack>
      </Box>

    

      {/* Heritage Section */}
      <OurHeritageSection />

      {/* Team Section */}
      <Box bg="gray.50" pt={10} pb={16}>
        <Container maxW="8xl" textAlign="center">
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            mb={4}
          >
            Real People. Big Vision. Deep Experiences
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="#00caff"
            mb={12}
            fontWeight="bold"
            lineHeight="tall"
          >
            Board & Management
          </Text>

          {/* Board */}
          <Box mb={16}>
            <Heading fontSize="2xl" mb={8}>
              Our Leadership (Board)
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={10}>
              <TeamMemberCard
                name="Robert Bunyi"
                title="Chairman & Non-Executive Director"
                image="/Robert-Bunyi.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Pius Muchiri"
                title="Managing Director & CEO"
                image="/Pius-Muchiri.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Thapelo Muribame"
                title="Non-Executive Director"
                image="/Thapelo-Tebogo.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Edwin Macharia"
                title="Non-Executive Director"
                image="/Edwin-Macharia.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Mercy Njoroge"
                title="Chief Customer Experience Officer"
                image="/mercy.jpg"
                linkedin="#"
              />
            </SimpleGrid>
          </Box>

          {/* Management */}
          <Box>
            <Heading fontSize="2xl" mb={8}>
              Our Leadership (Management)
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={10}>
              <TeamMemberCard
                name="Pius Muchiri"
                title="Managing Director & CEO"
                image="/Pius-Muchiri.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Mercy Njoroge"
                title="Chief Customer Experience Officer"
                image="/mercy.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Damitha Pathmala"
                title="Chief Investment Officer"
                image="/Damitha-Pathmalal.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Abby Mungai"
                title="General Wealth Manager"
                image="/abby-Mungai.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Kezzy Omoni"
                title="Digital Creative Director"
                image="/abby-Mungai.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Lilian Mungai"
                title="Finance & Operations Manager"
                image="images/lilian.png"
                linkedin="#"
              />
              <TeamMemberCard
                name="Irene Okoth"
                title="HR Officer"
                image="/abby-Mungai.jpg"
                linkedin="#"
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      {/* CTA Footer Section */}
      <TeamAlbum members={teamAlbumMembers} />
      <Connect />

      {/* Contact Info Section (INLINE) */}
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
            <Text>0709902700 / 0709902702 / 0709902705</Text>
          </Flex>

          <Flex align="center" gap={4}>
            <Icon as={MdEmail} w={6} h={6} />
            <Text>invest@nabocapital.com or clientservice@nabocapital.com</Text>
          </Flex>
        </VStack>
      </Box>
      <CallToActionCommon />
    </>
  );
};

export default About;
