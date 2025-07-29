import {
  CoreStrategy,
  Solutions,
  StrategyCall,
  WhyChooseUs,
} from "@/components/Asset-mgt";
import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Connect, Faqs } from "@/components/individual";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Asset Management"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="We deliver tailored asset management solutions that help institutions achieve their long-term financial objectives"
        button="Schedule a Consultation"
      />
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
