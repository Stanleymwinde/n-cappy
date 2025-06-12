import { CoreStrategiessData, marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Image,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import * as Icons from "react-icons/lu";

const ResourcesTabs = () => {
  return (
    <Box marginX={marginX}>
      <Tabs.Root defaultValue="goal-0" variant="plain">
        <Flex justify="center" align="center" width="100%" py={4}>
          <Tabs.List bg="bg.muted" rounded="l3" p="1">
            {CoreStrategiessData.map((goal, index) => {
              const Icon = Icons[goal.icon as keyof typeof Icons];
              return (
                <Tabs.Trigger key={index} value={`goal-${index}`}>
                  {Icon && <Icon />}
                  {goal.title}
                </Tabs.Trigger>
              );
            })}
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
        </Flex>
      </Tabs.Root>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        marginX={marginX}
        bg={"gray.100"}
        alignContent={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <GridItem
          colSpan={2}
          bg={"red"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Card.Root maxW="sm">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt="Green double couch with wooden legs"
              />
              <Card.Body gap="2">
                <Card.Title>Living room Sofa</Card.Title>
                <Card.Description>
                  This sofa is perfect for modern tropical spaces, baroque
                  inspired spaces.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box bg={"blue"} height={"100%"}>
            colSpan=2
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box bg={"green"} height={"100%"}>
            colSpan=2
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box bg={"yellow"} height={"100%"}>
            colSpan=4
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ResourcesTabs;
