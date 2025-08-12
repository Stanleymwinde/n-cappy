import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { PlanForJoy, QuestionPacks } from "@/components/i-want-tos";
import { Rates } from "@/components/common";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        button="Unlock My Plan"
        button1="Learn More"
        imageUrl="/images/lifestyle-hero.png"
        title="Live Purposefully.Save Deliberately."
        subtitle="Secure the day-to-day, and create room to breathe, plan, and enjoy life."
      />
      <PlanForJoy
        title="Do you want steady monthly returns that cover life's core expenses?"
        subtitle="With this plan, we help you replace your monthly income so that even if you lose your job, take a break, or face unexpected changes, your life keeps moving forward."
        subtext="You’ll gain breathing room—the kind that covers your basic needs without stress. Whether it’s keeping the lights on or paying school fees, your essentials stay protected. Always."
        imageUrl="/images/lifestyle.png"
      />
      <QuestionPacks />
      <CallToAction />
    </>
  );
};

export default page;
