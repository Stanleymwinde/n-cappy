import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { Faqs3 } from "@/components/institutional";
import { CallToAction } from "@/components/home";
import {
  InvestmentSolutions,
  InvestmentSolutionsVideo,
  TreasuryGoals,
  WhyOrgsChooseUs,
} from "@/components/institutional";
import React from "react";

// SEO metadata for Treasury page
export const metadata = {
  title: "Money Market Fund vs Fixed Deposit | Treasury Solutions",
  description:
    "Compare money market funds, fixed deposits and savings accounts. See returns, safety and liquidity to match your cash management goals.",
  keywords: [
    "money market fund vs fixed deposit",
    "money market fund vs bank savings",
    "are money market funds safe Kenya",
    "how money market funds work",
    "money market fund returns",
    "money market fund minimum investment",
    "unit trust vs money market fund",
    "money market fund companies Kenya",
    "open money market account Kenya",
    "money market fund application Kenya",
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="We Don't Just Manage Institutional Capital, We Guard Its Purpose"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="Your Vision. Our Discipline. One Enduring Partnership."
        button="Start A Strategic Conversation"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUQVpWSFNZU0JWSDJNUFU1OTNYTEZDVVNHVi4u"
      />
      <TreasuryGoals />
      <InvestmentSolutions />
      <InvestmentSolutionsVideo />
      <WhyOrgsChooseUs />
      <Faqs3 />
      <CallToAction />
    </>
  );
};

export default page;
