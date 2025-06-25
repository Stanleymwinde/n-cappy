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
import TeamMemberCard from "@/components/TeamMemberCard";

import{ CallToAction }  from "@/components/home";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
// Heritage Data
const heritageData = [
  {
    year: "1954",
    title: "NABO CAPITAL LIMITED IS SPUN OUT OF CENTUM",
    description:
      "A local DFI was incorporated to become the investment arm of the Kenyan Government in anticipation that the British colonial rule was nearing the end.",
  },
  {
    year: "1967",
    title:
      "ICDC INVESTMENT (ICDCI), NOW CENTUM INVESTMENT, WAS INCORPORATED AS A SUBSIDIARY OF ICDC.",
    description:
      "Centum was subsequently listed from day one at the Nairobi Securities Exchange following a successful roadshow that raised USD 26,000 as seed capital.",
  },
  {
    year: "1998",
    title: "APPOINTMENT OF THE LEGENDARY DR. CHRISTOPHER KIRUBI TO THE CENTUM BOARD",
    description:
      "By 1998, Dr. Christopher J. Kirubi had become one of the largest shareholders of Centum and was appointed to the board. He was renowned for his eye for lucrative investments and Centum was not an exception. According to him, he saw an undiscovered gem in Centum and began accumulating stake in the company. Following Dr. Kirubi’s appointment to the board, a major milestone was achieved when the board appointed the first independent management, separate from the parent company ICDC. This decision began a new era of putting together one of the most coveted, youthful and entrepreneurial investment management team in the region. According to Forbes, Dr. Kirubi was among the 40 wealthiest people in Africa; a seasoned entrepreneur, investor and industrialist with interests in media, consumer, financial, real estate, agriculture and technology.",
  },
  {
    year: "2008",
    title: "JAMES MWORIA BEGAN HIS REIGN AT THE HELM OF CENTUM",
    description:
      "In 2008, at age 30 ,James Mworia was appointed as the Chief Executive Officer (CEO) of Centum becoming the youngest CEO of a publicly listed company in the region. Under his leadership, an extremely ambitious Centum 2.0 strategy was immediately put together to grow the Assets Under Management (AUMs) fivefold. During the first eight years of his tenure, Centum increased its asset base from Kes 6Bn ($69mn) to approximately Kes 61Bn ($610mn) while the share price grew eight fold, from Kes 5/share to the Kes 40/share, creating extraordinary returns for shareholders. On the back of this remarkable success, James Mworia is now widely celebrated across the globe and has received numerous accolades locally, regionally and internationally. One of the major contributing factors to that success was an ingenious decision to unpackage the portfolio into three distinct business lines: real estate, private equity and quoted private equity (public markets). The decision was inspired by a strong desire to have sharp focus in optimizing value along these three business lines and in the process, nurture specialized skills and unique track records for each business unit. These business units have since devolved into independent subsidiaries and the QPE team, now housed within Nabo Capital, was the first to spin off into a fully fledged fund management company licensed by the Capital Markets Authority (CMA). From just one company in 2009, Centum is now a holding company with more than 30 subdiaries spread across eight sectors.",
  },
  {
    year: "2013",
    title: "NABO CAPITAL LIMITED IS SPUN OUT OF CENTUM",
    description:
      "The Quoted Private Equity(QPE) business line was inspired by an observation; “If one excludes the 5 most liquid counters in any African stock exchange(excludingSA),one is left with a relatively “illiquid” asset class that is mostly under – researched and below – the – radar of most investors”. Given our rich history of Private Equity expertise in Africa, in 2009 we set aside a KES 2.3Bn($26mn) proprietary fund and christened it “Quoted Private Equity” portfolio. The strategy was to leverage on our private equity expertise to identify and seize significant minority stakes in securities in listed space that were under-researched, below-the-radar and had significant potential for growth across the various African stock exchanges. More importantly, we desired exposure to the fastest growing economies in Africa and hence the exclusion of South Africa. Up until 2013, the strategy had paid-off handsomely throughout performing benchmarks by a healthy spread, which led to requests from external parties to leverage on our in-house expertise to replicate the QPE portfolio and track record. That triggered the 2013 spin-off of the QPE team led by Pius Muchiri and hence the emergence of Nabo Capital, now an independent fully-fledged and licensed fund manager. Nabo Capital has rapidly grown since its inception and now manages over Kes13Bn ($130mn) in AUMs. Our clients appreciate our position as a Boots-on-the-Ground Investment Manager, our specialization exemplified by a solid track record of investing in Africa, and our unique investment philosophy that is heavily informed by a rich Private Equity heritage. We draw our clients from some of the largest sovereign wealth funds, fund of funds, African multinationals, insurance and investment companies. Nabo is a Maasai word meaning Number One, reflective of the company’s aspiration to be the leading Fund Manager in Africa.",
  },
];

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

            <Box display="flex" flexDirection="column" justifyContent="flex-start" px={{ base: 2, md: 6 }}>
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
{/* Call To Action Section */}
<CallToAction />

const CTAFooter = () => {
  return (
    <Box
      bg="#0a2234"
      w="100%"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      py={4}
      px={{ base: 4, md: 16 }}
      gap={4}
    >
      <Box
        bg="white"
        borderRadius="xl"
        px={4}
        py={2}
        mb={{ base: 4, md: 0 }}
        whiteSpace="nowrap"
        alignSelf={{ base: "center", md: "flex-start" }}
      >
        <Text as="span" fontWeight="bold" color="black">
          #INVEST
        </Text>{" "}
        <Text as="span" color="black">
          WITH
        </Text>{" "}
        <Text as="span" fontWeight="bold" color="black">
          PURPOSE
        </Text>
      </Box>

      <Text
        color="#60e7ff"
        fontSize={{ base: "md", md: "2xl" }}
        fontWeight="bold"
        flex={1}
        textAlign={{ base: "center", md: "right" }}
        mb={1}
      >
        Connect With Our Financial Advisors
      </Text>
    </Box>
  );
};

const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Box position="relative" w="100%" h="100vh" overflow="hidden" bg="gray.800">
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
            objectFit: "cover",
          }}
        >
          <source src="https://res.cloudinary.com/demvcea4r/video/upload/v1750574837/About_Us_1_1_xualz9.mp4" type="video/mp4" />
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

      {/* Rates Ticker */}
      <Box py={1}>
  <Flex border={"1px solid"} borderRadius="md" p={4} bg="gray.50">
    <Text
      fontSize="md"
      fontWeight="bold"  // Makes the entire sentence bold
      width="100%"
      textAlign="center"
      whiteSpace="pre-line"
    >
      📈 🔔 Rates Update: Fixed Deposit – Up to 10.2% | Balanced Fund – 8.9% | Aggressive Growth – 12.1% | Let your money work harder.
    </Text>
  </Flex>
</Box>


      {/* Heritage Section */}
      <OurHeritageSection />

      {/* Team Section */}
      <Box bg="gray.50" pt={10} pb={16}>
  <Container maxW="8xl" textAlign="center">
    <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }} fontWeight="extrabold" mb={4}>
      Real People. Big Vision. Deep Experiences
    </Heading>
    <Text fontSize={{ base: "xl", md: "2xl" }} color="#00caff" mb={12} fontWeight="bold" lineHeight="tall">
      Board & Management
    </Text>

    {/* Board */}
    <Box mb={16}>
      <Heading fontSize="2xl" mb={8}>
        Our Leadership (Board)
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={10}>
        <TeamMemberCard name="Robert Bunyi" title="Chairman & Non-Executive Director" image="/Robert-Bunyi.jpg" linkedin="#" />
        <TeamMemberCard name="Pius Muchiri" title="Managing Director & CEO" image="/Pius-Muchiri.jpg" linkedin="#" />
        <TeamMemberCard name="Thapelo Muribame" title="Non-Executive Director" image="/Thapelo-Tebogo.jpg" linkedin="#" />
        <TeamMemberCard name="Edwin Macharia" title="Non-Executive Director" image="/Edwin-Macharia.jpg" linkedin="#" />
        <TeamMemberCard name="Mercy Njoroge" title="Chief Customer Experience Officer" image="/mercy.jpg" linkedin="#" />
      </SimpleGrid>
    </Box>

    {/* Management */}
    <Box>
      <Heading fontSize="2xl" mb={8}>
        Our Leadership (Management)
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={10}>
        <TeamMemberCard name="Pius Muchiri" title="Managing Director & CEO" image="/Pius-Muchiri.jpg" linkedin="#" />
        <TeamMemberCard name="Mercy Njoroge" title="Chief Customer Experience Officer" image="/mercy.jpg" linkedin="#" />
        <TeamMemberCard name="Damitha Pathmala" title="Chief Investment Officer" image="/Damitha-Pathmalal.jpg" linkedin="#" />
        <TeamMemberCard name="Abby Mungai" title="General Wealth Manager" image="/abby-Mungai.jpg" linkedin="#" />
        <TeamMemberCard name="Kezzy Omoni" title="Digital Creative Director" image="/abby-Mungai.jpg" linkedin="#" />
        <TeamMemberCard name="Lilian Mungai" title="Finance & Operations Manager" image="/abby-Mungai.jpg" linkedin="#" />
        <TeamMemberCard name="Irene Okoth" title="HR Officer" image="/abby-Mungai.jpg" linkedin="#" />
      </SimpleGrid>
    </Box>
  </Container>
</Box>


          

      {/* CTA Footer Section */}
      <CTAFooter />

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
            <Text>
              invest@nabocapital.com or clientservice@nabocapital.com
            </Text>
          </Flex>
        </VStack>
      </Box>
    </>
  );
};

export default About;





