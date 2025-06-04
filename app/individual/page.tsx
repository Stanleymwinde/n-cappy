import {
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
    </>
  );
};

export default page;
