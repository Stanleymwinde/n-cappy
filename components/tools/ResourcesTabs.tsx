"use client";
import { marginX, ResourcesData } from "@/utils/constants";
import {
  Box,
  Card,
  Flex,
  Grid,
  GridItem,
  Image,
  Tabs,
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
    <Box marginX={marginX}>
      <Tabs.Root defaultValue="goal-0" variant="plain">
        <Flex justify="center" align="center" width="100%" py={4}>
          <Tabs.List bg="gray.100" rounded="l3" p="1">
            {ResourcesData.map((goal, index) => {
              const Icon = Icons[goal.icon as keyof typeof Icons];
              return (
                <Tabs.Trigger
                  key={index}
                  value={`goal-${index}`}
                  px={4}
                  py={2}
                  fontWeight="medium"
                  display="flex"
                  alignItems="center"
                >
                  {Icon && <Box as={Icon} mr={2} />}
                  {goal.title}
                </Tabs.Trigger>
              );
            })}
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
        </Flex>

        {ResourcesData.map((goal, index) => (
          <Tabs.Content
            key={index}
            value={`goal-${index}`}
            px={{ base: 4, md: 16 }}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={6}
              py={6}
            >
              {goal.description.map((card, idx) => (
                <GridItem key={idx}>
                  <Card.Root>
                    {card.video ? (
                      <Box
                        position="relative"
                        width="100%"
                        cursor="pointer"
                        onClick={() => handlePlay(card.id)}
                      >
                        {/* Show thumbnail first */}
                        {playingId !== card.id && (
                          <Image
                            src={card.image}
                            alt={card.title}
                            width={400}
                            height={240}
                            style={{ width: "100%", borderRadius: 12 }}
                          />
                        )}

                        {/* Video iframe */}
                        {playingId === card.id && (
                          <Box borderRadius={12} overflow="hidden">
                            <iframe
                              src={card.video.replace(
                                "youtu.be",
                                "www.youtube.com/embed"
                              )}
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

                    <Card.Body gap="2">
                      <Card.Title>{card.title}</Card.Title>
                      {card.subtitle && (
                        <Text fontSize="md" fontWeight="medium">
                          {card.subtitle}
                        </Text>
                      )}
                      <Card.Description>
                        <Text>{card.text}</Text>
                      </Card.Description>
                    </Card.Body>
                  </Card.Root>
                </GridItem>
              ))}
            </Grid>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Box>
  );
};

export default ResourcesTabs;
