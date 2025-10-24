"use client";
import { navItems } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Menu,
  Portal,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import MobileNav from "./mobile-nav";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";
import { useState } from "react";

const MainNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          src="/images/logo.png"
          alt="logo"
          width={55}
          height={65}
          style={{ cursor: "pointer" }}
        />
      </Link>

      {/* Desktop Nav Links */}
      <HStack
        as="nav"
        gap={6}
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item, i) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openIndex === i;

          return (
            <Menu.Root
              key={i}
              open={isOpen}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <div
                onMouseEnter={() => hasChildren && setOpenIndex(i)}
                onMouseLeave={() => hasChildren && setOpenIndex(null)}
              >
                <Menu.Trigger asChild>
                  <Link href={item.href} cursor={"pointer"}>
                    <Button
                      variant="ghost"
                      fontWeight="semibold"
                      fontSize={{ base: "sm", md: "md" }}
                      // _hover={{ color: "primary" }}
                      transition="color 0.15s"
                    >
                      {item.label}
                      {hasChildren && (
                        <Box as="span" ml={1} display="inline-flex">
                          <LuChevronDown />
                        </Box>
                      )}
                    </Button>
                  </Link>
                </Menu.Trigger>

                {hasChildren && (
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content rounded="md" py={2} minW="200px">
                        {item.children.map((child, j) => (
                          <Menu.Item
                            asChild
                            key={j}
                            value="Bold"
                            cursor={"pointer"}
                          >
                            <Link
                              href={child.href}
                              px={4}
                              py={2}
                              display="block"
                              fontSize="sm"
                              fontWeight="medium"
                            >
                              {child.label}
                            </Link>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                )}
              </div>
            </Menu.Root>
          );
        })}
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
