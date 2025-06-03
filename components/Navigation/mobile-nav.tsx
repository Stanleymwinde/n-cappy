"use client";
import {
  Box,
  Button,
  Drawer as D,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  IconProps,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import { navItems } from "@/utils/constants";
import { ArrowRightIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MobileNav = ({ color }: { color: IconProps["color"] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const navigate = (link: string) => {
    onClose();
    router.push(link);
  };
  return (
    <Box>
      <IconButton
        as={RxHamburgerMenu}
        zIndex={2}
        onClick={onOpen}
        w="30px"
        h="30px"
        color={color}
        bg="none"
        _hover={{ background: "none" }}
        aria-label="menu"
      />
      <D isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="primary">
          <DrawerCloseButton
            color="red"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color="brand.white"
            >
              {navItems.map((nav) => (
                <Text
                  key={nav.label}
                  onClick={() => navigate(nav.href)}
                  color="brand.white"
                  fontWeight="600"
                  fontSize="xl"
                  _hover={{
                    color: "brand.dark",
                    cursor: "pointer",
                  }}
                >
                  {nav.label}
                </Text>
              ))}
              <Link href="/inquiry">
                <Button
                  colorScheme="blue"
                  w="100%"
                  borderRadius="xl"
                  leftIcon={<ArrowRightIcon />}
                >
                  Request a Quote
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </D>
    </Box>
  );
};

export default MobileNav;
