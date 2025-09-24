"use client";
import {
  Box,
  Flex,
  Heading,
  HeadingProps,
  IconProps,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import { marginX } from "@/utils/constants";
import Socials from "../common/socials";
import { PhoneIcon } from "@/utils/icons";
import WhatsAppIcon from "@/utils/icons/WhatsApp";
import MailIcon from "@/utils/icons/MailIcon";

const MotionBox = motion(Box);

// Animation variant for "coming from bottom"
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const Footer = () => {
  return (
    <Box
      bgGradient={"linear(to-r, brand.black, purple.200)"}
      mt="2rem"
      py="2rem"
      color="brand.white"
    >
      <SimpleGrid
        py="2rem"
        columns={{ base: 1, md: 2, lg: 5 }}
        mx={marginX}
        gap={8}
      >
        {/* Logo */}
        <MotionBox
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Stack>
            <Image
              boxSize="150px"
              src="/images/Logo.svg"
              alt="N-Cappy Logo"
              objectFit="contain"
            />
          </Stack>
        </MotionBox>

        {/* Explore */}
        <MotionBox
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Stack>
            <CHeading>Explore</CHeading>
            {ExploreData.call.map((item, i) => (
              <FooterCard key={i} link={item.link} label={item.label} />
            ))}
          </Stack>
        </MotionBox>

        {/* Helpful Links */}
        <MotionBox
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Stack>
            <CHeading>Helpful Links</CHeading>
            {HelpfulLinks.map((item, i) => (
              <FooterCard key={i} link={item.link} label={item.label} />
            ))}
          </Stack>
        </MotionBox>

        {/* Our Services */}
        <MotionBox
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Stack>
            <CHeading>Our Services</CHeading>
            {OurServices.map((item, i) => (
              <FooterCard key={i} link={item.link} label={item.label} />
            ))}
          </Stack>
        </MotionBox>

        {/* Contact Us */}
        <MotionBox
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Stack>
            <CHeading>Contact Us</CHeading>
            {contactData.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                _hover={{ textDecoration: "underline" }}
                textAlign="left"
                target={
                  item.link.startsWith("http") || item.link.startsWith("mailto:")
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.link.startsWith("http") || item.link.startsWith("mailto:")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <Flex align="center" gap={1} lineHeight="1.5">
                  <Box as={item.icon} color="primary" boxSize={5} />
                  <Text fontSize="md">{item.label}</Text>
                </Flex>
              </Link>
            ))}
            <Flex pt={3} align="center" gap={2}>
              <Socials />
            </Flex>
          </Stack>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;

interface CHeadingProps extends HeadingProps {
  children: ReactNode;
}

const FooterCard = ({
  label,
  icon,
  link,
}: {
  label: string;
  icon?: (props: IconProps) => React.JSX.Element;
  link?: string;
}) => {
  const isExternal = link?.startsWith("http") || link?.startsWith("mailto:");

  return link ? (
    <Link
      href={link}
      _hover={{ textDecoration: "underline" }}
      textAlign="left"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <Flex align="center" gap={1} lineHeight="1.5">
        <Text fontSize="md">{label}</Text>
      </Flex>
    </Link>
  ) : (
    <Flex align="center" gap={1} _hover={{ textDecoration: "underline" }}>
      {icon && <Box as={icon} color="primary" boxSize={5} />}
      <Text fontSize="md">{label}</Text>
    </Flex>
  );
};

const CHeading = ({ children, ...rest }: CHeadingProps) => (
  <Heading {...rest} fontSize="2xl" color="primary">
    {children}
  </Heading>
);

const contactData = [
  {
    icon: PhoneIcon,
    label: "+254 709 902 700",
    link: "tel:+254709902700",
  },
  {
    icon: WhatsAppIcon,
    label: "+254 709 902 700",
    link: "https://wa.me/254709902700",
  },
  {
    icon: MailIcon,
    label: "invest@nabocapital.com",
    link: "mailto:info@n-cappy.org",
  },
];

const ExploreData = {
  call: [
    { label: "About Us", link: "/about-us" },
    { label: "Individual Investment", link: "/individual" },
    { label: "Institutional Investment", link: "/institutional" },
    { label: "Investor's Companion", link: "/tools_and_resources" },
  ],
};

const HelpfulLinks = [
  { label: "Support", link: "mailto:clientservice@nabocapital.com" },
  { label: "Privacy Policy", link: "/Privacy-policy" },
  { label: "Sign In", link: "https://invest.nabocapital.com" },
];

const OurServices = [
  { label: "Unit Trust Funds", link: "/individual/MMF&FIF" },
  { label: "Private Wealth Management", link: "/institutional/treasury" },
  { label: "Institutional Investment Solutions", link: "/institutional" },
];
