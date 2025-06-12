import { Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const FeaturedBlogs = () => {
  return (
    <Flex mt={10} gap={6} justify="center" flexWrap="wrap">
      {featuredBlogs.map((i, idx) => (
        <Card.Root key={idx} maxW="sm" overflow="hidden">
          <Image src={i.image} width="100%" alt={`Blog Image ${idx + 1}`} />
          <Card.Body gap="2">
            <Card.Title>{i.title}</Card.Title>
            <Card.Description>{i.description}</Card.Description>
          </Card.Body>
          <Card.Footer gap="2">
            <Button variant="ghost">
              Read More <IoArrowForwardCircleOutline />
            </Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </Flex>
  );
};

export default FeaturedBlogs;

const featuredBlogs = [
  {
    id: 1,
    title: "Democratising Investments in Kenya",
    image: "/images/blog-image.png",
    description:
      "In 2023, it was reported that investments in Kenya were on a decline. Many blamed touch economic times and low confidence among investors. ",
  },
  {
    id: 2,
    title: "The Investor’s Trap: Overthinking Your Way to a Bad Investment",
    image: "/images/blog-2.png",
    description:
      "In a world where information is abundant, the risk of overthinking can lead to missed opportunities and poor investment decisions. ",
  },
  {
    id: 3,
    title: "The Power of Diversification: How to Build a Resilient Portfolio",
    image: "/images/blog-3.png",
    description:
      "Diversification is a key strategy for managing risk and enhancing returns in your investment portfolio. ",
  },
];
