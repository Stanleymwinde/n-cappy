"use client";
import { marginX, navItems } from "@/utils/constants";
import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  const pathname = usePathname();

  function handleActiveNav(nav: string) {
    if (nav === "/") {
      return pathname === nav ? "primary" : "brand.white";
    }
    return pathname.includes(nav) ? "primary" : "brand.white";
  }
  return (
    <Flex marginX={marginX} py={2} justify="space-between" align="center">
      <Flex
        align="center"
        gap={12}
        fontSize="md"
        display={{ base: "none", md: "flex" }}
      >
        <Link href="/">
          <Image
            priority
            src="/images/Logooo.png"
            alt="logo"
            width={60}
            height={70}
          />
        </Link>
        {navItems.map((item, i) => (
          <Link key={i} href={item.href}>
            <Text
              fontWeight="semibold"
              fontSize="lg"
              color={handleActiveNav(item.href)}
              _hover={{
                color: "primary",
              }}
            >
              {item.label}
            </Text>
          </Link>
        ))}{" "}
      </Flex>
      <Flex align="center" gap={4} fontSize="md">
        <Link href="/contact">
          <Button
            hideBelow="md"
            variant={"outline"}
            borderColor={"brand"}
            borderRadius="xl"
            fontStyle="capitalize"
          >
            Log In
          </Button>
        </Link>
        <Link href="/inquiry">
          <Button
            hideBelow="md"
            colorScheme="cyan.fg"
            borderRadius="xl"
            fontStyle="capitalize"
          >
            INVEST NOW
          </Button>
        </Link>
      </Flex>

      <Box hideFrom="md">
        <MobileNav />
      </Box>
    </Flex>
  );
};

export default MainNav;
