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
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

import { marginX } from "@/utils/constants";
import Socials from "../common/socials";
import { PhoneIcon } from "@/utils/icons";
import MessageIcon from "@/utils/icons/MessageIcon";
import MailIcon from "@/utils/icons/MailIcon";

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
        <Stack>
          <Image
            boxSize="150px"
            src="/images/logo.svg"
            alt="N-Cappy Logo"
            objectFit="contain"
          />
        </Stack>
        <Stack>
          <CHeading>Explore</CHeading>
          {ExploreData.call.map((item, i) => (
            <FooterCard key={i} link={item.link} label={item.label} />
          ))}
          <Flex align="center" gap={2}>
            {/* <Socials /> */}
          </Flex>
        </Stack>
        <Stack>
          <CHeading>Helpful links</CHeading>
          {HelpfulLinks.map((item, i) => (
            <FooterCard key={i} link={item.link} label={item.label} />
          ))}
          <Flex align="center" gap={2}>
            {/* <Socials /> */}
          </Flex>
        </Stack>
        <Stack>
          <CHeading>Our Services </CHeading>
          {OurServices.map((item, i) => (
            <FooterCard key={i} link={item.link} label={item.label} />
          ))}
          <Flex align="center" gap={2}>
            {/* <Socials /> */}
          </Flex>
        </Stack>

        <Stack>
          <CHeading>Contact Us</CHeading>
          {contactData.map((item, i) => (
            <Flex
              key={i}
              align="center"
              gap={1}
              lineHeight={"1.5"}
              as="a"
              textAlign={"left"}
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <Box as={item.icon} color="primary" boxSize={5} />
              <Text fontSize="md">{item.label}</Text>
            </Flex>
          ))}
          <Flex pt={3} align="center" gap={2}>
            <Socials />
          </Flex>
        </Stack>
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
  return link ? (
    <Flex
      align="center"
      gap={1}
      lineHeight={"1.5"}
      as="a"
      textAlign={"left"}
      _hover={{
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      <Text fontSize="md">{label}</Text>
    </Flex>
  ) : (
    <Flex
      align="center"
      gap={1}
      _hover={{
        textDecoration: "underline",
      }}
    >
      <Box as={icon} color="primary" boxSize={5} />
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
    link: "tel:+2547709902700",
  },

  {
    icon: MessageIcon,
    label: "+254 709 902 700",
    link: "tel:+2547709900700",
  },

  {
    icon: MailIcon,
    label: "info@nairobichapel.org",
    link: "mailto:info@nairobichapel.org",
  },
];

const ExploreData = {
  call: [
    {
      label: "About Us",
      link: "#",
    },

    {
      label: "Individual investment",
      link: "#",
    },

    {
      label: "Institutional Investment",
      link: "#",
    },
    {
      label: "tools & resources",
      link: "#",
    },
  ],
};

const HelpfulLinks = [
  {
    label: "Support",
    link: "#",
  },
  {
    label: "Privacy Policy",
    link: "#",
  },
  {
    label: "Terms & Condition",
    link: "#",
  },
  {
    label: "Sign In",
    link: "#",
  },
];

const OurServices = [
  {
    label: "Unit Trust Funds",
    link: "#",
  },
  {
    label: "Private Wealth Management",
    link: "#",
  },
  {
    label: "Institutional Investment Solutions",
    link: "#",
  },
];
