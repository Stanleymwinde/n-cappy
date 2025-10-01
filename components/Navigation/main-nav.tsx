"use client";
import { navItems } from "@/utils/constants";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
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
    <Flex
      py={3}
      justify="space-between"
       px={{ base: 4, md: 10 }} 
      align="center"
      bg="white"
      boxShadow="sm"
      wrap="wrap"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          priority
          src="/images/Logooo.png"
          alt="logo"
          width={55}
          height={65}
          style={{ cursor: "pointer" }}
        />
      </Link>

      {/* Desktop Nav Links */}
      <HStack
        gap={{ base: 4, lg: 8 }}
        fontSize="md"
        display={{ base: "none", md: "flex" }}
        flex="1"
        justify="center"
      >
        {navItems.map((item, i) => (
          <Link key={i} href={item.href}>
            <Text
              fontWeight="semibold"
              fontSize={{ base: "md", lg: "lg" }}
              color={handleActiveNav(item.href)}
              _hover={{ color: "primary" }}
              transition="color 0.2s ease"
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </HStack>

      {/* Desktop Buttons */}
      <HStack gap={3} display={{ base: "none", md: "flex" }}>
        <Link href="https://invest.nabocapital.com" target="_blank">
          <Button
            variant="outline"
            borderColor="brand"
            borderRadius="xl"
            fontWeight="semibold"
            size={{ base: "sm", lg: "md" }}
          >
            Log In
          </Button>
        </Link>
        <Link href="https://invest.nabocapital.com" target="_blank">
          <Button
            bg="primary"
            color="white"
            borderRadius="xl"
            fontWeight="semibold"
            size={{ base: "sm", lg: "md" }}
            _hover={{ bg: "cyan.600" }}
          >
            INVEST NOW
          </Button>
        </Link>
      </HStack>

      {/* Mobile Nav */}
      <Box display={{ base: "flex", md: "none" }}>
        <MobileNav />
      </Box>
    </Flex>
  );
};

export default MainNav;
