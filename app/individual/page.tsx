import { CallToAction } from "@/components/home";
import {
  Connect,
  ConsultationTeam,
  Faqs,
  FinancialGoals,
  Hero,
  InvestmentSolutions,
  Rates,
} from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Rates />
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
