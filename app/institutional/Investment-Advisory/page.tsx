import { StrategyCall } from "@/components/Asset-mgt";
import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Faqs1 } from "@/components/Investment-advisory";
import { PartnerWithUs } from "@/components/institutional";
import { WhyOrgsChooseUs } from "@/components/institutional";
import {
  WhatWeOffer,
  WhyPartnerWithUs,
} from "@/components/Investment-advisory";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        button="Schedule a Cosnsultation"
        imageUrl="/images/investment-advisory.png"
        title="Investment Advisory"
        subtitle="We Offer Strategic Guidance for Institutional and Corporate Clients"
      />

      <WhatWeOffer />
      <WhyOrgsChooseUs />
      <WhyPartnerWithUs />
      <PartnerWithUs />
      <StrategyCall />
      <Faqs1/>
      <CallToAction />
    </>
      
  );
};

export default page;
