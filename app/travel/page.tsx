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
        subtitle="Invest in possibility. Safe, accessible, and ready—the Money Market Fund makes your next adventure always within reach."
        scrollTarget="#questions1"
      />

      <PlanForJoy />
      <QuestionPack />
      <CallToAction />
    </>
  );
};

export default Page;
