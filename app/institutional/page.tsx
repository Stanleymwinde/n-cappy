import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Faqs2 } from "@/components/institutional";
import {
  PartnerWithUs,
  Team,
  Strategy,
  WhoDoWeServe,
  WhyOrgsChooseUs,
  InvestmentSolutionsVideo,
  WhatAreYourGoals,
  OurInvestmentSolutions,
} from "@/components/institutional";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Your Vision. Our Discipline. One Enduring Partnership"
        imageUrl="/images/sll.jpeg"
        subtitle="We don't just manage Institutional Capital, We Guard its purpose"
        button="Start A Strategic Conversation"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUMDFGTVU2RlQ0SkY3TFI5MTVSRFVESEc2Wi4u"
      />
      <WhatAreYourGoals />
      <WhoDoWeServe />
      <OurInvestmentSolutions />
      <InvestmentSolutionsVideo />
      <WhyOrgsChooseUs />
      <Strategy />
      <Team />
      <PartnerWithUs />
      <Faqs2 />
      <CallToAction />
    </>
  );
};

export default page;
