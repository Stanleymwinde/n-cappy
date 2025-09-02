import React from "react";
import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/layout";

const PrivacyPolicy: React.FC = () => {
  return (
    <Box as="main" maxW="container.lg" mx="auto" py={10} px={6}>
      <Heading as="h1" size="xl" mb={4}>
        Nabo Capital Limited
      </Heading>
      <Heading as="h2" size="lg" mb={8}>
        Data Protection Policy
      </Heading>

      <VStack align="start" gap={6}>
        <Box>
          <Heading as="h3" size="md" mb={2}>
            Introduction
          </Heading>
          <Text>
            Nabo Capital Limited (“Nabo”) is committed to promoting good
            corporate governance by adhering to all national and international
            laws that are applicable to it. Nabo’s Data Protection Policy
            (“Policy”) is intended to facilitate the protection of personal data
            by complying with the Data Protection Act 2019 (“DPA”) and its
            Regulations.
          </Text>
          <Text mt={2}>
            The DPA seeks to protect the privacy of individuals by ensuring the
            responsible processing of personal data. It was enacted to give
            effect to Article 31(c) and (d) of the Constitution. It establishes
            the Office of the Data Protection Commissioner (“ODPC”), provides
            for the rights of data subjects and stipulates the obligations of
            both data controllers and processors.
          </Text>
          <Text mt={2}>
            Nabo reiterates its commitment to protecting the rights and freedoms
            of data subjects and to the secure processing of their data.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Purpose
          </Heading>
          <Text>
            This Policy provides guidance on how Nabo shall handle the data it
            collects. It is designed to aid Nabo in complying with not just the
            DPA but also relevant international laws such as the General Data
            Protection Regulations (“GDPR”) of the European Union.
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Scope
          </Heading>
          <Text>
            This Policy applies to all prospective, current and former
            employees, partners, vendors, contractors, board members, interns,
            and any third parties who handle and use Nabo’s information.
          </Text>
          <Text mt={2}>
            It also applies to all formats (printed, digital, text, images,
            documents, audio, etc.). Nabo processes personal data for financial,
            HR, payroll, regulatory, customer service, and other purposes such
            as providing investment products, processing applications, customer
            surveys, research, investigations, and meeting contractual
            obligations.
          </Text>
        </Box>

        {/* --- You can keep going with same structure --- */}
        {/* For example: Key Definitions, Principles, Data Protection Officer, etc. */}

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Data Protection Officer
          </Heading>
          <Text>
            Nabo has designated its Legal and Compliance Officer as the Data
            Protection Officer (DPO). The DPO will advise on data processing
            requirements, ensure compliance with laws, provide training, advise
            on impact assessments, and liaise with the ODPC.
          </Text>
          <Text mt={2}>
            Contact:{" "}
            <Link href="mailto:b.otieno@nabocapital.com" color="blue.500">
              b.otieno@nabocapital.com
            </Link>
          </Text>
        </Box>

        <Box>
          <Heading as="h3" size="md" mb={2}>
            Privacy Complaints or Breaches
          </Heading>
          <Text>
            If you wish to lodge a complaint about a possible breach of privacy
            or have any query on how personal data is collected or handled,
            please contact:
          </Text>
          <Text mt={2}>
            Data Protection Officer <br />
            Nabo Capital Limited <br />
            P.O. Box 10518 – 00100 <br />
            Nairobi <br />
            Email:{" "}
            <Link href="mailto:b.otieno@nabocapital.com" color="blue.500">
              b.otieno@nabocapital.com
            </Link>
          </Text>
        </Box>
      </VStack>

      <Divider my={10} />

      <Text fontSize="sm" color="gray.400" textAlign="center">
        © {new Date().getFullYear()} Nabo Capital Limited. All rights reserved.
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
