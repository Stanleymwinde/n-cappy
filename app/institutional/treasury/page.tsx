import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { Faqs3 } from "@/components/institutional";
import { InvestmentSolutions, InvestmentSolutionsVideo, TreasuryGoals, WhyOrgsChooseUs } from "@/components/institutional";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="We Don't Just Manage Institutional Capital, We Guard Its Purpose"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="Your Vision. Our Discipline. One Enduring Partnership"
        button="Start A Strategic Conversation"
        buttonLink=" https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4u
"
      />
      <TreasuryGoals />
      <InvestmentSolutions />
      <InvestmentSolutionsVideo />
      <WhyOrgsChooseUs />
      <Faqs3 />
    </>
  );
};

export default page;
