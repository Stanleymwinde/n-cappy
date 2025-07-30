import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { CompareFunds, FIF, MMF } from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Grow Your Wealth With Nabo Capital"
        imageUrl="/images/MMF.png"
        subtitle="Choose the investment fund that aligns with your financial goals."
        button="Explore Funds"
      />

      <MMF />
      <FIF />
      <CompareFunds />
      <CallToAction />
    </>
  );
};

export default page;
