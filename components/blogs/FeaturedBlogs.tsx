import { Button, Card, Flex, Image, Link } from "@chakra-ui/react";
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
            <Link href={i.link} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost">
                Read More <IoArrowForwardCircleOutline style={{ marginLeft: "0.5em" }} />
              </Button>
            </Link>
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
    title: "YOUR WEEKLY MARKET INSIGHTS",
    image: "/images/blog-image.png",
    description:
      "Markets are constantly in a state of uncertainty and flux, and money is made by discounting the obvious and betting on the unexpected. — George Soros",
    link: "https://www.linkedin.com/pulse/your-weekly-market-insights-nabo-capital-camcf/?trackingId=zKABa9mTT5GT90oJ2k8V0g%3D%3D",
  },
  {
    id: 2,
    title: "The Investor’s Trap: Overthinking Your Way to a Bad Investment",
    image: "/images/blog-2.png",
    description:
      "In a world where information is abundant, the risk of overthinking can lead to missed opportunities and poor investment decisions.",
    link: "https://www.linkedin.com/pulse/investors-trap-overthinking-your-way-bad-investment-nabo-capital-aa6sf/?trackingId=TMDoerK0QwuMrC1eslEQEg%3D%3D",
  },
  {
    id: 3,
    title: "The Power of Diversification: How to Build a Resilient Portfolio",
    image: "/images/blog-3.png",
    description:
      "Diversification is a key strategy for managing risk and enhancing returns in your investment portfolio.",
    link: "https://www.linkedin.com/pulse/democratising-investments-kenya-nabo-capital-hx3sf/?trackingId=XHUKT%2Fr%2BSOGehu4dyp73Tg%3D%3D",
  },
];
