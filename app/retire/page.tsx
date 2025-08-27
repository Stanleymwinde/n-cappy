"use client";

import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import { RetireQuestions } from "@/components/retire"; 
import {  Rates } from "@/components/common";
import React, { useState } from "react";

const Page = () => {
  
  const [goal, setGoal] = useState("");

  return (
    <>
      <Rates />
      
      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/oldyy1.jpeg"
        title="Build something that outlives you"
        subtitle="Make your mark. Then make it last"
        buttonLink="https://forms.office.com/Pages/ResponsePage.aspx?id=1I3gDCgn-kmOcay0o8PRRR6Lv0VsgzBFmSkSbPkBGwNUMDFGTVU2RlQ0SkY3TFI5MTVSRFVESEc2Wi4u  "
      />
      <PlanForJoy
        title="What Story Will Your Wealth Tell?"
        subtitle="This is for investors who think in decades, not days—for visionaries building a legacy, not just a portfolio"
        subtext={`Whether you're planning for retirement or preserving your life's work, this plan helps ensure your values live on. Because true wealth isn't just accumulated—it's passed down with purpose.
Let your story echo through generations`}
        imageUrl="/images/retire-plan.png"
      />

      
      

      <RetireQuestions /> 
  
      <CallToAction />
    </>
  );
};

export default Page;
