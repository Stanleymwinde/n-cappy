import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { InvestmentSolutions, TreasuryGoals } from "@/components/institutional";
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
      />
      <TreasuryGoals />
      <InvestmentSolutions />
    </>
  );
};

export default page;
