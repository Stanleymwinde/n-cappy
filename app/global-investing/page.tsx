import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import {
  ClientOnboarding,
  GlobalMarketFootprint,
  GlobalPartnerships,
  GlobalThoughtLeadership,
  InvestingGlobally,
  MultiCurrencyInvestment,
} from "@/components/global-investing";
import { CallToAction, Testimonials } from "@/components/home";

import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Proudly Kenyan.Globally Connected"
        subtitle="Build Resilience, Expand Regionally and gow with confidence"
        imageUrl="/images/Global-pagehero.png"
      />

      <MultiCurrencyInvestment />
      <InvestingGlobally />
      <GlobalMarketFootprint />
      <GlobalThoughtLeadership />
      <GlobalPartnerships />
      <ClientOnboarding />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default page;
