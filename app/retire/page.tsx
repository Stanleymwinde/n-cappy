import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import { RetireQuestions } from "@/components/retire"; 
import React from "react";

const Page = () => {
  return (
    <>
      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/retire-hero.png"
        title="Build something that outlives you"
        subtitle="Make your mark. Then make it last"
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
