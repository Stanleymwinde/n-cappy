import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import QuestionPack from "@/components/i-want-tos/QuestionPack";
import {  Rates } from "@/components/common";

import React from "react";

const page = () => {
  return (
    <> 
      <Rates />

      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/travel-hero.jpeg"
        title="Because Life is About Living Fully"
        subtitle="Say yes to Life's Big, Beautiful moments without guilt, without worry"
      />
      <PlanForJoy />
      <QuestionPack />
      <CallToAction />
    </>
  );
};

export default page;
