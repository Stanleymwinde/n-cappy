import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import {
  Connect,
  ConsultationTeam,
  Faqs,
  FinancialGoals,
  InvestmentSolutions,
  Rates,
} from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
    <Rates />
      <Hero
        title="Grow Your Wealth with Nabo Capital"
        subtitle="choose the investment fund that aligns with your financial goals"
        imageUrl="/images/individual-hero.png"
      />
      
      <FinancialGoals />
      <InvestmentSolutions />
      <ConsultationTeam />
      <Connect />
      <Faqs />
      <CallToAction />
    </>
  );
};

export default page;
