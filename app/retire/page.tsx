import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy, QuestionPacks } from "@/components/i-want-tos";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        button="Unlock My Plan"
        imageUrl="/images/retire-hero.png"
        title="Because Life is About Living Fully"
        subtitle="Say yes to Life's Big, Beautiful moments without guilt, without worry"
      />
      <PlanForJoy
        title="What Story Will Your Wealth Tell?"
        subtitle="This is for investors who think in decades, not days—for visionaries building a legacy, not just a portfolio"
        subtext="Whether you're planning for retirement or preserving your life's work, this plan helps ensure your values live on. Because true wealth isn't just accumulated—it's passed down with purpose.
Let your story echo through generations"
        imageUrl="/images/retire-plan.png"
      />
      <QuestionPacks />
      <CallToAction />
    </>
  );
};

export default page;
