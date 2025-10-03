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

// SEO metadata for Global Investment page
export const metadata = {
  title: "USD Investment Options from Kenya | Global Investments",
  description:
    "Access USD-denominated investments from Kenya to protect against shilling depreciation and diversify globally.",
  keywords: [
    "USD investment options Kenya",
    "invest in dollars from Kenya",
    "protect money from shilling depreciation",
    "currency diversification Kenya",
    "African investment opportunities",
    "currency hedge"
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Proudly Kenyan.Globally Connected"
        subtitle="Build resilience, expand regionally and grow with confidence"
        imageUrl="/images/Global-pagehero.png"
        scrollTarget="#section7"
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
