import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import { LifestyleQuestions } from "@/components/lifestyle";
import { Rates } from "@/components/common";
import React from "react";

// SEO metadata for Lifestyle Portfolio page
export const metadata = {
  title: "Lifestyle Portfolio | Invest for Early Career Growth",
  description:
    "Discover investment portfolios tailored for young professionals in Kenya. Start early, grow your wealth, and plan for your financial goals with Nabo Capital.",
  keywords: [
    "investment for young professionals Kenya",
    "first salary investment Kenya",
    "investment for 20s Kenya",
    "young professional wealth building",
    "where to invest 100k in Kenya"
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/life-style.jpeg"
        title="Live Purposefully.Save Deliberately."
        subtitle="Secure the day-to-day, and create room to breathe, plan, and enjoy life."
        scrollTarget="#questions"
      />
      <PlanForJoy
        title="Do you want steady monthly returns that cover life's core expenses?"
        subtitle="With this plan, we help you replace your monthly income so that even if you lose your job, take a break, or face unexpected changes, your life keeps moving forward."
        subtext="You will gain breathing room; the kind that covers your basic needs without stress. Whether it’s keeping the lights on or paying school fees, your essentials stay protected. Always."
        imageUrl="/images/heroafrica.jpeg"
      />
      <LifestyleQuestions />
      <CallToAction />
    </>
  );
};

export default page;
