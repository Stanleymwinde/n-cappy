import {
  CoreStrategy,
  Solutions,
  StrategyCall,
  WhyChooseUs,
} from "@/components/Asset-mgt";
import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Connect, Faqs } from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="Asset Management"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="We deliver tailored asset management solutions that help institutions achieve their long-term financial objectives"
        button="Schedule a Consultation"
      />
      <Currency />
      <Solutions />
      <CoreStrategy />
      <WhyChooseUs />
      <Connect />
      <StrategyCall />
      <Faqs />
      <CallToAction />
    </>
  );
};

export default page;
