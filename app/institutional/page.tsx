import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Faqs, FinancialGoals } from "@/components/individual";
import {
  ExploreSolutions,
  PartnerWithUs,
  Team,
} from "@/components/institutional";
import React from "react";

const page = () => {
  return (
    <>
      <Currency />
      <Hero
        title="Your Vision. Our Discipline. One Enduring Partnership"
        imageUrl="/images/image13.jpg"
        subtitle="Your ambition carries weight. We help you carry it well."
        button="Start A Strategic Conversation"
      />
      <FinancialGoals />
      <Team />
      <PartnerWithUs />
      <Faqs />
      <CallToAction />
    </>
      
  );
};

export default page;
