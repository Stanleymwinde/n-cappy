import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import QuestionPack from "@/components/i-want-tos/QuestionPack";
import { Rates } from "@/components/common";
import HeroSwiper from "@/components/common/HeroSwiper"; 
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


const travelSlides = [
  {
    image: "/images/travelling.jpg",
    title: "Because Life is About Living Fully",
    text: "Say Yes to life’s big, beautiful moments without guilt, without worry",
    primaryButton: "Unlock My Plan",
    primaryLink: "/travel-goal",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
  {
    image: "/images/b-t.jpg",
    title: "Because Life is About Living Fully",
    text: "Invest in possibility. Safe, accessible, and ready the Money Market Fund\nmakes your next adventure always within reach.",
    primaryButton: "Unlock My Plan",
    primaryLink: "/travel-goal",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
];

const Page: React.FC = () => {
  return (
    <> 
      <Rates />
      <HeroSwiper slides={travelSlides} /> 
      <PlanForJoy />
      <QuestionPack />
      <CallToAction />
    </>
  );
};

export default Page;
