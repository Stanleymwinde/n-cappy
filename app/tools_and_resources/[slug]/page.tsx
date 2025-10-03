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
  Separator,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { marginX } from "@/utils/constants";

export default function ArticleFeatureCard() {
  const bg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.400");

  return (
    <Container maxW="1300px" py={10}>
      <Box bg={bg} borderRadius="xl" boxShadow="md" overflow="hidden">
        {/* Header */}
        <Box p={6}>
          <Stack
            bg={useColorModeValue("gray.50", "gray.700")}
            p={6}
            mb={6}
            borderRadius="md"
          >
            <Heading size="2xl" mb={3} letterSpacing="tight">
              When Was the Last Time You Truly Stepped Out?
            </Heading>
            <Text color={muted} fontSize="md">
              The Campaign That Dares You to See More
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
                August 4, 2025 • 8 min read
              </Text>
            </VStack>
            <Box flexGrow={1} />
            <Badge colorScheme="blue">Edition Two</Badge>
          </HStack>
        </Box>

        {/* Hero Image */}
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
            src="/images/why-choose-dubai.jpeg"
            alt="Weekly Financial Bulletin"
            objectFit="cover"
            maxW="100%"
            maxH="100%"
            borderTop="1px solid"
            borderColor={useColorModeValue("gray.100", "gray.700")}
          />
        </Stack>

        {/* Article Body */}
        <Box p={8}>
          {/* Intro */}
          <Text
            fontWeight="semibold"
            mb={6}
            color={muted}
            fontSize="lg"
            lineHeight="tall"
          >
            When Was the Last Time You Truly Stepped Out?
          </Text>

          {/* Section 1 */}
          <Heading size="lg" mb={4} letterSpacing="tight">
            Why Choose Dubai?
          </Heading>
          <Text mb={4} color={muted} fontSize="md" lineHeight="tall">
            At first glance, Dubai Is Calling may look like a travel offer. But
            look closer, and you will see something deeper. This isn’t about
            ticking destinations off a bucket list. It’s about rethinking what
            it means to invest in yourself. This is a bold and intentional
            partnership between Nabo Capital and Expeditions Maasai Safaris;
            designed for those who want to explore the world without stepping
            away from their financial goals. With flexible packages starting
            from just $230/month, we have made it possible for more people to
            say yes, yes to new experiences, yes to new perspectives, yes to a
            new way of building wealth.
          </Text>

          <Text mb={4} color={muted} fontSize="md" lineHeight="tall">
            Every journey stretches your thinking. Every new place opens your
            imagination. Travel connects you to people, ideas, systems, and
            cultures and sometimes, to opportunities that can change your entire
            direction. “My first time in Dubai, I met a Kenyan who later
            introduced me to a network that helped birth a $40M international
            school in Nairobi. That trip changed everything.” Pius Muchiri This
            is what we mean when we say: travel isn’t an expense, it’s
            expansion. It’s time to invest in a better you. You never know
            what’s waiting on the other side of a boarding pass. This window
            closes in November 2025. Don’t wait till it’s another “maybe next
            time."
          </Text>

          <Text mb={4} color={muted} fontSize="md" lineHeight="tall">
            Despite the global chaos, Kenya is still in good shape. The Central
            Bank moved fast, cutting its main interest rate by 0.75% to 10%. The
            move also made borrowing cheaper for banks to help keep money
            flowing in the economy. Inflation is low at 3.6% and FX reserves are
            strong at $9.1 billion; enough to keep imports flowing for at least
            5 months. Treasury yields are also dropping; currently at 10.23%
            annually, making it cheaper for Kenya to borrow locally.
          </Text>

          <Text mb={4} color={muted} fontSize="md" lineHeight="tall">
            As Pancras Karema, CEO of Expeditions Maasai Safaris, put it:
            “Everything that is being experimented in the world, you get it in
            Dubai.” From AI-powered transport systems to flawless urban
            planning, Dubai offers a front-row seat to what world-class progress
            looks like. For anyone seeking exposure and inspiration, this is
            where the journey should begin. But it’s not just about tech and
            skylines. Dubai offers ease of travel, affordable luxury, and global
            shopping at unbeatable prices. A five-star experience doesn’t come
            with a five-star price tag and getting there is as simple as a
            five-hour flight from Nairobi, with fast visa processing and direct
            flights. Put simply: Dubai is where aspiration meets accessibility.
            That’s why, for Africa’s next generation of global thinkers and
            doers, Dubai isn’t just a destination, it’s a launchpad.
          </Text>

          <Separator my={8} />

          {/* Section 2 */}
          <Heading size="lg" mb={4}>
            Dubai is calling — and this time it’s calling you!
          </Heading>
          <Text mb={4} color={muted} fontSize="md" lineHeight="tall">
            Whether you are flying solo, planning a romantic escape, organizing
            a family getaway, or rounding up your crew, this experience is
            tailor-made for how YOU want to experience it. Our solo traveller
            package offers six unforgettable days and five nights in Dubai,
            complete with return flights, hotel transfers, guided city tours,
            and elegant accommodation. Couples can choose between our standard
            and executive tiers, designed to suit both affordable romance and
            elevated luxury. Each option comes with flexible hotel selections
            and thoughtfully curated moments to help you reconnect and unwind.
            For families, we have crafted child-friendly packages that balance
            comfort, exploration, and ease; making sure the experience is just
            as memorable for the kids as it is for you. And if you are coming as
            a group whether friends, colleagues, or teams; our group-friendly
            rates make it easy to travel together, share the fun, and get great
            value while doing it
          </Text>

          <Separator my={8} />

          {/* Section 3 */}
          <Heading size="lg" mb={4}>
            Why Now?!
          </Heading>
          <Text mb={4} color={muted} fontSize="md" lineHeight="tall">
            Because what you see shapes what you believe. And what you believe
            shapes the life you live. At Nabo Capital, we have always believed
            that exposure is not entertainment; it’s investment. An investment
            in your mind. An investment in your perspective. An investment in
            your future. That’s why we have partnered with Expedition Maasai
            Safaris to make something extraordinary possible. For the first
            time, you can travel to Dubai on one of the lowest-priced, most
            accessible packages on the market. This isn’t just affordable, it’s
            a door flung wide open. Because we know this: If all you ever see is
            what you have always seen, you will keep building within the same
            boundaries. And you were made for more.
          </Text>

          <Box
            bg={useColorModeValue("gray.100", "gray.600")}
            p={5}
            borderRadius="md"
            my={6}
          >
            <Text fontStyle="italic" color={muted}>
              “You don’t need another year of just working hard. You need to
              live wide. To breathe. To get out of the bubble.”
            </Text>
          </Box>

          <Text mb={6} color={muted} fontSize="md" lineHeight="tall">
            To sit in new spaces that stretch how you dream, how you plan, how
            you build, how you love. We are not offering a vacation. We are
            inviting you into alignment. Because sometimes, all it takes to wake
            up a dormant destiny is a new environment. One new city. One new
            view. One divine disruption. This is a reintroduction to yourself at
            a price that has removed every excuse. So ask yourself: What’s the
            cost of not going? Of staying stuck? Of continuing to postpone the
            version of you that’s waiting on the other side of exposure? You owe
            yourself more. And for once more is within reach.
          </Text>

          <Separator my={8} />

          {/* Section 4 */}
          <Heading size="lg" mb={4}>
            What’s Next
          </Heading>
          <Text mb={6} color={muted} fontSize="md" lineHeight="tall">
            This isn’t just a campaign. It’s a declaration; that joy is part of
            the journey, that rest is not a luxury, and that exposure is one of
            the most overlooked investments of our time. That’s why we are
            launching a special video series. Not just to show you Dubai but, to
            show you what happens when vision meets movement. You will hear from
            the leaders behind this partnership. You will see the faces, the
            stories, the thinking. You will understand why we believe that
            wealth must come with perspective, and that sometimes, the most
            strategic thing you can do is step away and come back with clarity.
          </Text>

          {/* Read More Button */}
          <Box textAlign="center" mt={8}>
            <Button
              as="a"
              href="https://www.linkedin.com/pulse/when-last-time-you-truly-stepped-out-nabo-capital-tnqmf"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              size="lg"
            >
              Read More
            </Button>
          </Box>

          {/* Footer */}
          <Text color={muted} fontSize="sm" textAlign="center" mt={10}>
            © Nabo Capital — Weekly Financial Bulletin
          </Text>
        </Box>
      </Box>
    </Container>
  );
}
