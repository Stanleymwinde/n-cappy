import React from "react";
import { Box, Heading, Text, VStack, Link, Center } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/layout";

const PrivacyPolicy = () => {
  return (
    <Center bg="gray.50" py={12} px={4}>
      {/* Centered container */}
      <Box maxW="800px" w="100%" bg="white" p={10} borderRadius="md" boxShadow="md">
        {/* Main Headings */}
        <Heading as="h1" size="2xl" mb={4} textAlign="center">
          Nabo Capital Limited
        </Heading>
        <Heading as="h2" size="xl" mb={10} textAlign="center" color="gray.600">
          Data Protection Policy
        </Heading>

        <VStack align="stretch" gap={10}>
          {/* Section: Introduction */}
          <Box py={4}>
            <Heading as="h3" size="lg" mb={4}>
              Introduction
            </Heading>
            <VStack align="start" gap={3} maxW="700px" mx="auto">
              <Text lineHeight="tall">
                Nabo Capital Limited (“Nabo”) is committed to promoting good
                corporate governance by adhering to all national and international
                laws that are applicable to it. Nabo’s Data Protection Policy
                (“Policy”) is intended to facilitate the protection of personal data
                by complying with the Data Protection Act 2019 (“DPA”) and its
                Regulations.
              </Text>
              <Text lineHeight="tall">
                The DPA seeks to protect the privacy of individuals by ensuring the
                responsible processing of personal data. It was enacted to give
                effect to Article 31(c) and (d) of the Constitution. It establishes
                the Office of the Data Protection Commissioner (“ODPC”), provides
                for the rights of data subjects and stipulates the obligations of
                both data controllers and processors.
              </Text>
              <Text lineHeight="tall">
                Nabo reiterates its commitment to protecting the rights and freedoms
                of data subjects and to the secure processing of their data.
              </Text>
            </VStack>
          </Box>

          {/* Section: Purpose */}
          <Box py={4}>
            <Heading as="h3" size="lg" mb={4}>
              Purpose
            </Heading>
            <Text lineHeight="tall" maxW="700px" mx="auto">
              This Policy provides guidance on how Nabo shall handle the data it
              collects. It is designed to aid Nabo in complying with not just the
              DPA but also relevant international laws such as the General Data
              Protection Regulations (“GDPR”) of the European Union.
            </Text>
          </Box>

          {/* Section: Scope */}
          <Box py={4}>
            <Heading as="h3" size="lg" mb={4}>
              Scope
            </Heading>
            <VStack align="start" gap={3} maxW="700px" mx="auto">
              <Text lineHeight="tall">
                This Policy applies to all prospective, current and former
                employees, partners, vendors, contractors, board members, interns,
                and any third parties who handle and use Nabo’s information.
              </Text>
              <Text lineHeight="tall">
                It also applies to all formats (printed, digital, text, images,
                documents, audio, etc.). Nabo processes personal data for financial,
                HR, payroll, regulatory, customer service, and other purposes such
                as providing investment products, processing applications, customer
                surveys, research, investigations, and meeting contractual
                obligations.
              </Text>
            </VStack>
          </Box>

          {/* Section: Data Protection Officer */}
          <Box py={4}>
            <Heading as="h3" size="lg" mb={4}>
              Data Protection Officer
            </Heading>
            <VStack align="start" gap={3} maxW="700px" mx="auto">
              <Text lineHeight="tall">
                Nabo has designated its Legal and Compliance Officer as the Data
                Protection Officer (DPO). The DPO will advise on data processing
                requirements, ensure compliance with laws, provide training, advise
                on impact assessments, and liaise with the ODPC.
              </Text>
              <Text lineHeight="tall">
                Contact:{" "}
                <Link href="mailto:b.otieno@nabocapital.com" color="blue.500">
                  b.otieno@nabocapital.com
                </Link>
              </Text>
            </VStack>
          </Box>

          {/* Section: Privacy Complaints */}
          <Box py={4}>
            <Heading as="h3" size="lg" mb={4}>
              Privacy Complaints or Breaches
            </Heading>
            <VStack align="start" gap={3} maxW="700px" mx="auto">
              <Text lineHeight="tall">
                If you wish to lodge a complaint about a possible breach of privacy
                or have any query on how personal data is collected or handled,
                please contact:
              </Text>
              <Text lineHeight="tall">
                Data Protection Officer <br />
                Nabo Capital Limited <br />
                P.O. Box 10518 – 00100 <br />
                Nairobi <br />
                Email:{" "}
                <Link href="mailto:b.otieno@nabocapital.com" color="blue.500">
                  b.otieno@nabocapital.com
                </Link>
              </Text>
            </VStack>
          </Box>
        </VStack>

        <Divider my={12} />

        <Text fontSize="sm" color="gray.500" textAlign="center">
          © {new Date().getFullYear()} Nabo Capital Limited. All rights reserved.
        </Text>
      </Box>
    </Center>
  );
};

export default PrivacyPolicy;
