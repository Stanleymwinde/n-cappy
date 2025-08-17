import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Faqs2 } from "@/components/institutional";
import {
  
  PartnerWithUs,
  Team,
  Strategy,
  WhoDoWeServe,
  WhyOrgsChooseUs,
  InvestmentSolutionsVideo,
  WhatAreYourGoals,
  OurInvestmentSolutions,
} from "@/components/institutional";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Your Vision. Our Discipline. One Enduring Partnership"
        imageUrl="/images/sll.jpeg"
        subtitle="We don't just manage Institutional Capital, We Guard it's purpose"
        button="Start A Strategic Conversation"
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

     