// pages/About.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
} from "@chakra-ui/react";
import TeamMemberCard from "@/components/TeamMemberCard";

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        position="relative"
        w="100%"
        h="100vh"
        overflow="hidden"
        bg="gray.800"
      >
        <iframe
          src="https://www.youtube.com/embed/your-video-id?autoplay=1&mute=1&controls=0&loop=1&playlist=your-video-id"
          title="Background Video"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

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
          fontFamily={"Poppins"}
        >
          <Heading size="2xl" fontFamily={"Poppins"}>
            Who We Are
          </Heading>
          <Text fontSize="xl" maxW="600px" fontFamily={"Poppins"}>
            A Trusted Partner in Institutional and Retail Investment Solutions.
          </Text>
          <VStack gap={4} mt={6}>
            <Button colorScheme="teal" size="lg">
              Meet Our Team
            </Button>
            <Button colorScheme="teal" size="lg">
              Learn More
            </Button>
          </VStack>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl" textAlign="center">
          <Heading
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            mb={2}
            fontFamily={"Poppins"}
          >
            Real People. Big Vision. Deep Experiences
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color="#00caff"
            mb={12}
            fontFamily={"Poppins"}
          >
            Board & Management
          </Text>

          {/* Board Leadership */}
          <Box mb={16}>
            <Heading fontSize="2xl" mb={8} fontFamily={"Poppins"}>
              Our Leadership (Board)
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={8}>
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

          {/* Board Members */}
          <Box mb={16}>
            <Heading fontSize="2xl" mb={8} fontFamily={"Poppins"}>
              Our Team
            </Heading>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
              gap={8}
              fontFamily={"Poppins"}
            >
              <TeamMemberCard
                name="David Awuah"
                title="Non-Executive Director"
                image="/David-BOD.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Ally Angula"
                title="Non-Executive Director"
                image="/Ally-Angula.jpg"
                linkedin="#"
              />
              <TeamMemberCard
                name="Fred Murimi"
                title="Alternate Director Centum PLC"
                image="/Fred-Murimi.jpg"
                linkedin="#"
              />
            </SimpleGrid>
          </Box>

          {/* Management */}
          <Box>
            <Heading fontSize="2xl" mb={8} fontFamily={"Poppins"}>
              Our Leadership (Management)
            </Heading>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
              gap={8}
              fontFamily={"Poppins"}
            >
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
                title="General Manager, Wealth Management"
                image="/abby-Mungai.jpg"
                linkedin="#"
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
