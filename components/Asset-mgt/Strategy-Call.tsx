import { marginX } from "@/utils/constants";
import { Box, Card, Flex, Grid } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";

const Strategy = () => {
  return (
    <Box py={4} mb={16}>
      <Box bg={"#0a2234"} marginX={marginX} p={6} borderRadius="md">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          p={6}
          marginX={marginX}
        >
          {strategyData.map((item, idx) => (
            <Card.Root
              key={idx}
              width="100%"
              p={6}
              borderRadius="md"
              bg="#00caff"
              boxShadow="md"
              border={"1px solid #e2e8f0"}
              _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                height="100%"
                gap={4}
              >
                {/* Centered Icon */}
                <Box
                  boxSize="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="#00caff"
                  borderRadius="full"
                  fontSize="2.5rem"
                >
                  {item.icon}
                </Box>

                {/* Card Content */}
                <Card.Body gap={2} p={0}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Description lineHeight="1.6" color="gray.600">
                    {item.description}
                  </Card.Description>
                </Card.Body>

                {/* Card Footer */}
                <Card.Footer
                  bg={"black"}
                  color="white"
                  p={4}
                  textAlign="center"
                  borderRadius="md"
                  _hover={{ bg: "gray.700", transform: "scale(1.04)" }}
                >
                  <Link href={item.link} passHref legacyBehavior>
                    <a
                      target={
                        item.title === "Book a Strategy Call"
                          ? "_blank"
                          : "_self"
                      }
                      rel={
                        item.title === "Book a Strategy Call"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {item.title === "Book a Strategy Call"
                        ? "Book a Consultation"
                        : "Download Monthly Notes"}
                    </a>
                  </Link>
                </Card.Footer>
              </Flex>
            </Card.Root>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Strategy;

const strategyData = [
  {
    icon: <FaCalendarAlt />,
    title: "Book a Strategy Call",
    description:
      "We generate original insights through rigorous macroeconomic, sectoral, and security-level analysis.",
    link: "https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUMDFGTVU2RlQ0SkY3TFI5MTVSRFVESEc2Wi4u  ",
  },
  {
    icon: <RiFileDownloadFill />,
    title: "Download Brochure",
    description:
      "Institutional-grade reporting, compliance oversight, and real-time risk analytics ensure full visibility and trust.",
    link: "/notes/monthly-notes.zip", // <-- your zipped .docx file
  },
];
