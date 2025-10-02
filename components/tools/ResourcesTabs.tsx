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
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as Icons from "react-icons/lu";

const ResourcesTabs = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const handlePlay = (id: number) => {
    setPlayingId(id);
  };

  return (
    <Box marginX={{ base: 4, sm: 6, md: marginX }} py={{ base: 6, md: 10 }} mt={20}>
      {/* Tabs Root */}
      <TabsRoot defaultValue="goal-0" orientation="horizontal">
        {/* Tabs List */}
        <Flex justify="center" align="center" width="100%" py={4} overflowX="auto" px={{ base: 2, sm: 4 }}>
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
                  value={`goal-${index}`} // MUST match TabsContent
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
        {ResourcesData.map((goal, index) => (
          <TabsContent key={index} value={`goal-${index}`}>
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={6}
              py={6}
            >
              {goal.description.map((card, idx) => (
                <GridItem key={idx}>
                  <Card.Root>
                    {/* Video or Image */}
                    {card.video ? (
                      <Box position="relative" width="100%" cursor="pointer" onClick={() => handlePlay(card.id)}>
                        {playingId !== card.id && (
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={400}
                            height={240}
                            style={{ width: "100%", borderRadius: 12 }}
                          />
                        )}
                        {playingId === card.id && (
                          <Box borderRadius={12} overflow="hidden">
                            <iframe
                              src={card.video.replace("youtu.be", "www.youtube.com/embed")}
                              width="100%"
                              height={240}
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
                        width={400}
                        height={240}
                        style={{
                          width: "100%",
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                      />
                    )}

                    {/* Card Body */}
                    <Card.Body gap="2">
                      <Card.Title fontSize="md" fontWeight="semibold">
                        {card.title}
                      </Card.Title>
                      {card.subtitle && (
                        <Text fontSize="sm" fontWeight="medium">
                          {card.subtitle}
                        </Text>
                      )}
                      <Card.Description>
                        <Text fontSize="sm">{card.text}</Text>
                      </Card.Description>
                    </Card.Body>
                  </Card.Root>
                </GridItem>
              ))}
            </Grid>
          </TabsContent>
        ))}
      </TabsRoot>
    </Box>
  );
};

export default ResourcesTabs;
