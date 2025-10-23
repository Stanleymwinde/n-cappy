"use client";
import { marginX, ResourcesData } from "@/utils/constants";
import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Image,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as Icons from "react-icons/lu";

const ResourcesTabs = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: number }>({});

  const handlePlay = (id: number) => {
    setPlayingId(id);
  };

  const toggleViewMore = (index: number, total: number) => {
    setVisibleCards((prev) => ({
      ...prev,
      [index]: prev[index] && prev[index] > 3 ? 3 : total,
    }));
  };

  return (
    <Box marginX={{ base: 4, sm: 6, md: marginX }} py={{ base: 6, md: 10 }} mt={20}>
      <TabsRoot defaultValue="goal-0" orientation="horizontal">
        {/* Tabs List */}
        <Flex justify="center" align="center" width="100%" py={4} overflowX={{ base: "auto", md: "visible" }} px={{ base: 2, sm: 4 }}>
          <TabsList
            display="flex"
            flexWrap={{ base: "nowrap", md: "wrap" }}
            gap={2}
            bg="gray.100"
            rounded="xl"
            p={1}
            minW="max-content"
            whiteSpace="nowrap"
          >
            {ResourcesData.map((goal, index) => {
              const Icon = Icons[goal.icon as keyof typeof Icons];
              return (
                <TabsTrigger
                  key={index}
                  value={`goal-${index}`}
                  px={4}
                  py={2}
                  fontWeight="medium"
                  display="flex"
                  alignItems="center"
                  _selected={{
                    bg: "#0A2233",
                    color: "white",
                    rounded: "md",
                    fontWeight: "medium",
                  }}
                >
                  {Icon && <Icon style={{ marginRight: "0.5rem" }} />}
                  {goal.title}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Flex>

        {/* Tabs Content */}
        {ResourcesData.map((goal, index) => {
          const totalCards = goal.description.length;
          const cardsToShow = visibleCards[index] || 3;

          return (
            <TabsContent key={index} value={`goal-${index}`}>
              <Grid
                templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
                gap={6}
                py={6}
              >
                {goal.description.slice(0, cardsToShow).map((card, idx) => (
                  <GridItem key={idx}>
                    <Card.Root>
                      {/* Video or Image */}
                      {card.video ? (
                        <Box
                          position="relative"
                          width="100%"
                          cursor="pointer"
                          onClick={() => handlePlay(card.id)}
                        >
                          {playingId !== card.id ? (
                            <Image
                              src={card.image}
                              alt={card.title}
                              width="100%"
                              height="auto"
                              objectFit="cover"
                              borderRadius="12px"
                            />
                          ) : (
                            <Box borderRadius={12} overflow="hidden">
                              <iframe
                                src={card.video.replace("youtu.be", "www.youtube.com/embed")}
                                width="100%"
                                height={200}
                                style={{ border: "none" }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </Box>
                          )}
                        </Box>
                      ) : (
                        <Image
                          src={card.image}
                          alt={card.title}
                          width="100%"
                          height="auto"
                          objectFit="cover"
                          borderRadius="12px"
                        />
                      )}

                      {/* Card Body */}
                      <Card.Body gap="2">
                        <Card.Title fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
                          {card.title}
                        </Card.Title>
                        {card.subtitle && (
                          <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="medium">
                            {card.subtitle}
                          </Text>
                        )}
                        <Card.Description>
                          <Text fontSize={{ base: "xs", md: "sm" }}>{card.text}</Text>
                        </Card.Description>
                      </Card.Body>
                    </Card.Root>
                  </GridItem>
                ))}
              </Grid>

              {/* View More / View Less Button */}
              {totalCards > 3 && (
                <Box textAlign="center" mt={4}>
                  <Button onClick={() => toggleViewMore(index, totalCards)}>
                    {cardsToShow > 3 ? "View Less" : "View More"}
                  </Button>
                </Box>
              )}
            </TabsContent>
          );
        })}
      </TabsRoot>
    </Box>
  );
};

export default ResourcesTabs;
