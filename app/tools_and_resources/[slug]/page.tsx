"use client";
import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  VStack,
  Avatar,
  Badge,
  Image,
  Stack,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { marginX } from "@/utils/constants";

// Example single-file React component for Next.js + Chakra UI v3
// Place the hero image in the public/ folder of your Next.js app
// (e.g. public/images/weekly-bulletin.png) and reference it as `/images/weekly-bulletin.png`

export default function ArticleFeatureCard() {
  const bg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="container.md" py={8}>
      <Box bg={bg} borderRadius="lg" boxShadow="sm" overflow="hidden">
        {/* Header band */}
        <Box p={6}>
          <Stack bg={useColorModeValue("gray.50", "gray.700")} p={4} mb={4}>
            <Heading size="2xl" mb={2} letterSpacing="tight">
              China Strikes Back
            </Heading>
            <Text color={muted} fontSize="sm" mb={4}>
              A New Chapter of the Trade War Begins
            </Text>
          </Stack>

          <HStack gap={4} alignItems="center">
            <Avatar.Root>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <VStack gap={0} alignItems="flex-start">
              <Text fontWeight={600} fontSize="sm">
                Nabo Capital
              </Text>
              <Text color={muted} fontSize="xs">
                June 15, 2023 • 8 min read
              </Text>
            </VStack>
            <Box flexGrow={1} />
            <Badge colorScheme="gray">Edition Two</Badge>
          </HStack>
        </Box>
        <Stack
          position="relative"
          h={{ base: "220px", md: "420px" }}
          overflow="hidden"
          bg={useColorModeValue("gray.50", "gray.700")}
          justify="center"
          align="center"
        >
          <Image
            marginX={marginX}
            src="/images/Asset-3.jpeg"
            alt="Weekly Financial Bulletin"
            objectFit="contain" // ✅ keeps whole image visible
            maxW="90%" // ✅ fills width without stretching
            maxH="100%" // ✅ fills height without stretching
            borderTop="1px solid"
            borderColor={useColorModeValue("gray.100", "gray.700")}
          />
        </Stack>

        {/* Body */}
        <Box p={6}>
          <Text fontStyle="italic" mb={4} color={muted}>
            “In a global market shaped by geopolitical friction, tactical
            precision matters more than strategic conviction.” — Ray Dalio
          </Text>

          <Heading size="md" mb={3}>
            Markets Shake as The Trade War Intensifies: Fixed Income News
          </Heading>

          <Text mb={3} color={muted}>
            The world woke up to shockwaves: President Trump just announced a
            10% tax on all imports, and a warning of even harsher penalties for
            countries that block American products. Instantly, global markets
            went into panic mode.
          </Text>

          <Text mb={3} color={muted}>
            In the US, long-term interest rates shot up to their highest level
            since 2023, reaching 4.88%, while short-term rates dropped because
            people predict that the Federal Reserve will cut interest rates
            soon. Investors fled to safety, pushing the Japanese Yen which
            strengthened a notch higher. But risky investments, like African
            economies, took a big hit. For many, the doors to global debt
            markets just slammed shut.
          </Text>

          <Text mb={3} color={muted}>
            Despite the global chaos, Kenya is still in good shape. The Central
            Bank moved fast, cutting its main interest rate by 0.75% to 10%. The
            move also made borrowing cheaper for banks to help keep money
            flowing in the economy. Inflation is low at 3.6% and FX reserves are
            strong at $9.1 billion; enough to keep imports flowing for at least
            5 months. Treasury yields are also dropping; currently at 10.23%
            annually, making it cheaper for Kenya to borrow locally.
          </Text>

          <Heading size="sm" mt={6} mb={3}>
            China Retaliates: Equity Overview
          </Heading>

          <Text mb={3} color={muted}>
            This week, global equities suffered their worst selloff of the year
            as China retaliated with a massive 84% tariff on U.S. goods. Stocks
            around the world nosedived. For example, the Nasdaq fell to 9.8%,
            the S&P 500 dropped to 9.1%, and Japan’s Nikkei tumbled to 9.0% with
            year-to-date numbers reaching alarming levels.
          </Text>

          <Text mb={6} color={muted}>
            Despite these dramatic declines, gold remains resilient; holding a
            solid +15.8% gain so far this year, despite a slight drop last week.
            Our analysis indicates more gains, especially if the U.S. Federal
            Reserve cuts rates further, with targets aiming for $3,500 an ounce.
          </Text>

          <Text color={muted} fontSize="sm">
            © Nabo Capital — Weekly Financial Bulletin
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
