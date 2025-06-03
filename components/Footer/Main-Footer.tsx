import {
  Box,
  Flex,
  Heading,
  HeadingProps,
  IconProps,
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
          <CHeading>Nairobi Chapel Ngong Road</CHeading>
          <Text>
            We are committed to helping people grow D.E.E.P to reach W.I.D.E .
          </Text>
        </Stack>
        <Stack>
          <CHeading>Get In Touch</CHeading>
          {contactData.call.map((item, i) => (
            <FooterCard
              key={i}
              link={item.link}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <Flex align="center" gap={2}>
            {/* <Socials /> */}
          </Flex>
        </Stack>

        <Stack>
          <CHeading>Email</CHeading>
          {contactData.email.map((item, i) => (
            <FooterCard
              key={i}
              link={item.link}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </Stack>
        <Stack>
          <CHeading>Quick Links</CHeading>
          <Flex align="center" gap={2}>
            <Socials />
          </Flex>
        </Stack>
      </SimpleGrid>

      <Box divideX="2px">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </Box>
      <Flex py="1rem" mx={marginX} align="center" justify="center">
        <Text>
          © 2024 Nairobi Chapel Ngong Road. All rights reserved. Terms of
          Service Privacy Policy
        </Text>
      </Flex>
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
  icon: (props: IconProps) => React.JSX.Element;
  link?: string;
}) => {
  return link ? (
    <Flex
      align="center"
      gap={1}
      as="a"
      _hover={{
        textDecoration: "underline",
      }}
    >
      <Box as={icon} color="primary" boxSize={5} />
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

const contactData = {
  call: [
    {
      icon: PhoneIcon,
      label: "+254 725 650 737",
      link: "tel:+254725650737",
    },

    {
      icon: MessageIcon,
      label: "+254 725 650 737",
      link: "tel:+254725650737",
    },
  ],
  email: [
    {
      icon: MailIcon,
      label: "info@nairobichapel.org",
      link: "mailto:info@nairobichapel.org",
    },
  ],
};
