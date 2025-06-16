import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import {
  ClientOnboarding,
  GlobalMarketFootprint,
  GlobalPartnerships,
  GlobalThoughtLeadership,
  InvestingGlobally,
  MultiCurrencyInvestment,
} from "@/components/global-investing";
import { Testimonials } from "@/components/home";

import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="Proudly Kenyan.Globally Connected"
        subtitle="Build Resilience, Expand Regionally and gow with confidence"
        imageUrl="/images/Global-pagehero.png"
      />
      <Currency />
      <MultiCurrencyInvestment />
      <InvestingGlobally />
      <GlobalMarketFootprint />
      <GlobalThoughtLeadership />
      <GlobalPartnerships />
      <ClientOnboarding />
      <Testimonials />
    </>
  );
};

export default page;
