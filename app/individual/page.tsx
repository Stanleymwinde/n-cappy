import {
  ConsultationTeam,
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
    </>
  );
};

export default page;
