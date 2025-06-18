import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { FIF, MMF } from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="Grow Your Wealth With Nabo Capital"
        imageUrl="/images/MMF.png"
        subtitle="Choose the investment fund that aligns with your financial goals."
        button="Explore Funds"
      />
      <Currency />
      <MMF />
      <FIF />
      <CallToAction />
    </>
  );
};

export default page;
