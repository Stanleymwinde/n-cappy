import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { Faqs } from "@/components/individual";
import {
  ExploreSolutions,
  PartnerWithUs,
  Team,
  WhatAreYourGoals,
} from "@/components/institutional";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Your Vision. Our Discipline. One Enduring Partnership"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="We don't just manage Institutional Capital, We Guard it's purpose"
        button="Start A Strategic Conversation"
      />
      <WhatAreYourGoals />
      <ExploreSolutions />
      <Team />
      <PartnerWithUs />
      <Faqs />
      <CallToAction />
    </>
  );
};

export default page;
