import { StrategyCall } from "@/components/Asset-mgt";
import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { Faqs } from "@/components/individual";
import {
  WhatWeOffer,
  WhoWeServe,
  WhyChooseUs,
} from "@/components/Investment-advisory";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title=" Investment Advisory"
        imageUrl="/images/inv-adv.png"
        subtitle="Strategic Capital Guidance for Investors, Businesses, and Institutions"
        button="Schedule a Consultation"
        buttonLink=" https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4u
"
      />

      <WhatWeOffer />
      <WhoWeServe />
      <WhyChooseUs />
      <StrategyCall />
      <Faqs />
    </>
  );
};

export default page;
