"use client";

import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import { RetireQuestions } from "@/components/retire";
import { Rates } from "@/components/common";
import React from "react";
import { EduQuestions } from "../../components/Education";

const Page = () => {
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
         scrollTarget="#questions2"
        
      />
      
      <RetireQuestions />
      {/* <EduQuestions /> */}
      <CallToAction />
    </>
  );
};

export default Page;
