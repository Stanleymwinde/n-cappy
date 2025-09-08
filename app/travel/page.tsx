import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import QuestionPack from "@/components/i-want-tos/QuestionPack";
import { Rates } from "@/components/common";
import React from "react";

export const metadata = {
  title: "Aspirational Portfolio | Purpose & Growth Investing",
  description:
    "Invest with intention and impact. Nabo Capital’s Aspirational Portfolio helps you achieve growth while aligning with ethical and purpose-driven goals in Kenya.",
  keywords: [
    "purpose driven investing Kenya",
    "ethical investing Kenya",
    "generational wealth building",
    "middle class investment Kenya",
  ],
};

const Page: React.FC = () => {
  return (
    <> 
      <Rates />

      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/travelling.jpeg"
        title="Because Life is About Living Fully"
        subtitle="Say yes to Life's Big, Beautiful moments without guilt, without worry"
        scrollTarget="#questions1"
      />

      <PlanForJoy />
      <QuestionPack />
      <CallToAction />
    </>
  );
};

export default Page;
