import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import { Calculator } from "@/components/tools";
import { Heading } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="Tools & Resources"
        subtitle="Everything You Need to make Informed Investment Decisions"
        button="Explore"
        imageUrl="/images/tools&resources.png"
      />
      <Currency />
      <Calculator />
    </>
  );
};

export default page;
