import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import { WhatWeOffer } from "@/components/Investment-advisory";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        button="Schedule a Cosnsultation"
        imageUrl="/images/investment-advisory.png"
        title="Investment Advisory"
        subtitle="We Offer Strategic Guidance for Institutional and Corporate Clients"
      />
      <Currency />
      <WhatWeOffer />
    </>
  );
};

export default page;
