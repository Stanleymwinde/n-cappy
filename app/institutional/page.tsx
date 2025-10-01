import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import {
  PartnerWithUs,
  Team,
  Strategy,
  WhoDoWeServe,
  WhyOrgsChooseUs,
  InvestmentSolutionsVideo,
  WhatAreYourGoals,
  OurInvestmentSolutions,
  Faqs2,
} from "@/components/institutional";
import React from "react";

export const metadata = {
  title: "Institutional Investment Solutions | Nabo Capital",
  description:
    "Nabo Capital partners with pension funds, corporates, and other institutions to provide tailored investment solutions in Kenya and beyond. Discover institutional investment opportunities that drive long-term growth.",
  keywords: [
    "institutional investment Kenya",
    "corporate investment solutions",
    "pension fund investment Kenya",
    "institutional asset management Kenya",
    "best investment firms for institutions",
    "institutional investment opportunities",
    "institutional portfolio management",
    "tailored investment strategies Kenya",
    "long-term growth investment Kenya",
    "corporate financial planning Kenya",
    "institutional fixed income investments",
    "unit trusts for institutions Kenya",
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Your Vision. Our Discipline. One Enduring Partnership"
        imageUrl="/images/sll.jpg"
        subtitle="We don't just manage Institutional Capital, We Guard its purpose"
        button="Start A Strategic Conversation"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4u"
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
