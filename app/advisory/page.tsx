import { StrategyCall } from "@/components/Asset-mgt"; 
import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Faqs } from "@/components/individual";
import {
  WhatWeOffer,
  WhoWeServe,
  WhyChooseUs,
} from "@/components/Investment-advisory";
import React from "react";

// SEO metadata for Advisory / Wealth Management page
export const metadata = {
  title: "Wealth Management & Advisory | Nabo Capital",
  description:
    "Do you need a wealth manager? Nabo Capital explains costs, benefits and when advisory pays off—tailored plans for families & high-net-worth clients.",
  keywords: [
    "do I need a wealth manager Kenya",
    "wealth manager vs doing it yourself",
    "wealth management vs DIY investing",
    "minimum for wealth management Kenya",
    "cost of wealth management Kenya",
    "family investment planning Kenya",
    "children education fund Kenya",
    "middle class investment Kenya",
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Investment Advisory"
        imageUrl="/images/inv-adv.png"
        subtitle="Strategic Capital Guidance for Investors, Businesses, and Institutions"
        button="Schedule a Consultation"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4u"
      />

      <WhatWeOffer />
      <WhoWeServe />
      <WhyChooseUs />
      <StrategyCall />
      <Faqs />
      <CallToAction />
    </>
  );
};

export default page;
