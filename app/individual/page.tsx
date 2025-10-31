import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import {
  Connect,
  ConsultationTeam,
  Faqs,
  InvestmentSolutions,
} from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Begin The Journey. We’ll Walk With You"
        subtitle="That’s the Nabo Promise. Your Growth Our Focus."
        imageUrl="/images/individual-hero.png"
        scrollTarget="#consultation"
      />
      <InvestmentSolutions />
      <ConsultationTeam />
      <Connect />
      <Faqs />
      <CallToAction />
    </>
  );
};

export default page;
