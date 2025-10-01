"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import TeamMemberCard from "@/components/About/TeamMemberCard";

const TeamSection: React.FC = () => {
  return (
    <Box bg="gray.50" pt={10} pb={16}>
      <Container maxW="8xl" textAlign="center">
        {/* Section Heading */}
        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "5xl", lg: "6xl" }} fontWeight="bold" mb={4} fontFamily="poppins">
          Real People. Big Vision. Deep Experiences
        </Heading>
        <Text
          fontSize={{ base: "xl", md: "5xl" }}
          color="#00caff"
          mb={12}
          fontWeight="Regular"
          lineHeight="tall"
        >
          Board & Management
        </Text>

        {/* Board Section */}
        <Box mb={16}>
          <Heading fontSize="4xl" mb={8} fontWeight="Medium">
            Our Leadership (Board)
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={10}>
            <TeamMemberCard
              name="Robert Bunyi"
              title="Chairman & Non-Executive Director"
              image="/Robert-Bunyi1.jpg"
              linkedin="#"
            />
            <TeamMemberCard
              name="Pius Muchiri"
              title="Managing Director & CEO"
              image="/Piusss.jpg"
              linkedin="https://www.linkedin.com/in/pius-muchiri-cfa-0619392a/"
            />
            <TeamMemberCard
              name="Thapelo Muribame"
              title="Non-Executive Director"
              image="/Thapelo-Tebogo1.jpg"
              linkedin="#"
            />
            <TeamMemberCard
              name="Edwin Macharia"
              title="Non-Executive Director"
              image="/Edwin-Macharia1.jpg"
              linkedin="https://www.linkedin.com/in/edwin-macharia-0aa5a63/"
            />
            <TeamMemberCard
              name="Dr. Mercy Njoroge Mwongela"
              title="Company Secretary"
              image="/images/Mwongela2.png"
              linkedin=" https://www.linkedin.com/in/mercymwongela/"
            />
            <TeamMemberCard
              name="David Awuah"
              title="Non-Executive Director"
              image="/David-BOD1.jpg"
              linkedin="https://www.linkedin.com/company/icgroupafrica/people/"
            />
            <TeamMemberCard
              name="Ally Angula"
              title="Non-Executive Director"
              image="/Ally-Angula1.jpg"
              linkedin=" https://www.linkedin.com/in/angula-ally-37492511/"
            />
            <TeamMemberCard
              name="Fred Murimi"
              title="Non-Executive Director"
              image="/Freddy1.jpg"
              linkedin=" https://www.linkedin.com/in/fred-murimi-ngari-28a72836/ "
            />
          </SimpleGrid>
        </Box>

        {/* Management Section */}
        <Box>
          <Heading fontSize="4xl" mb={8} fontWeight="Medium">
            Our Leadership (Management)
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={10}>
            <TeamMemberCard
              name="Pius Muchiri"
              title="Managing Director & CEO"
              image="/Piusss.jpg"
              linkedin="https://www.linkedin.com/in/pius-muchiri-cfa-0619392a/"
            />
            <TeamMemberCard
              name="Dr. Mercy Njoroge Mwongela"
              title="Chief Customer Experience Officer"
              image="/images/Mwongela2.png"
              linkedin="https://www.linkedin.com/in/mercymwongela/"
            />
            <TeamMemberCard
              name="Damitha Pathmala"
              title="Chief Investment Officer"
              image="/Damitha-Pathmalal1.jpg"
              linkedin="https://www.linkedin.com/in/damitha-pathmalal/"
            />
            <TeamMemberCard
              name="Abby Mungai"
              title="General Wealth Manager"
              image="/abby-Mungai1.jpg"
              linkedin="https://www.linkedin.com/in/abby-mungai-wealth-strategist-27a541109/"
            />
            <TeamMemberCard
              name="Kezzy Omoni"
              title="Digital Creative Director"
              image="/kezzyyy.jpg"
              linkedin="https://www.linkedin.com/in/kezzy-omoni/"
            />
            <TeamMemberCard
              name="Lilian Mungai"
              title="Finance & Operations Manager"
              image="/lilian.jpg"
              linkedin="https://www.linkedin.com/in/lilian-muthoni-7b2170b8/"
            />
            <TeamMemberCard
              name="Irene Okoth"
              title="HR Officer"
              image="/irene2.jpg"
              linkedin="https://www.linkedin.com/in/chrp-k-pm-ihrm-akoth-irene-051430179/"
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default TeamSection;
