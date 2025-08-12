import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy, QuestionPacks } from "@/components/i-want-tos";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/education-hero.png"
        title="For life’s big moments and the unexpected"
        subtitle="True peace of mind is being financially ready."
      />
      <PlanForJoy
        title="Do You Want to Be Ready for Anything?"
        subtitle=" Think of this as your personal financial safety shield—built for those who plan
 for life’s milestones and prepare for the unexpected."
        subtext="Whether it’s a future home, school fees, or an unforeseen medical bill, this plan keeps you in control. It’s stability without slowdown—flexible, reliable, and always ready when you need it most."
        imageUrl="/images/school.png"
      />
      <QuestionPacks />
      <CallToAction />
    </>
  );
};

export default page;
