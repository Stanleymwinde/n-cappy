import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import React from "react";
import { EduQuestions } from "../../components/Education";
import { Rates } from "@/components/common";
import HeroSwiper from "@/components/common/HeroSwiper"; // ✅ import swiper

// SEO metadata for Security Portfolio page
export const metadata = {
  title: "Security Portfolio | Preserve Capital & Hedge Inflation",
  description:
    "Explore secure, low-volatility investment options in Kenya. Preserve your capital and hedge against inflation with Nabo Capital’s tailored Security Portfolio.",
  keywords: [
    "safe investment options Kenya",
    "protect money from inflation Kenya",
    "protect money from shilling depreciation",
    "safe places to invest money Kenya",
    "middle class investment Kenya"
  ],
};

const securitySlides = [
  {
    image: "/grad1.jpg",
    title: "For Life’s Big Moments and the Unexpected",
    text: " Be ready for anything. Our Security Portfolio gives you true financial peace of mind.",
    primaryButton: "Unlock My Plan",
    primaryLink: "/calculator",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
  {
    image: "/iestate-plan.jpg", 
    title: "For Life’s Big Moments and the Unexpected",
    text: "Invest in certainty. The Fixed income Fund anchors your capital when life hits hardest.",
    primaryButton: "Unlock My Plan",
    primaryLink: "/calculator",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
];

const Page: React.FC = () => {
  return (
    <>
      <Rates />
      <HeroSwiper slides={securitySlides} /> 
      <PlanForJoy
        title="Do You Want to Be Ready for Anything?"
        subtitle="Think of this as your personal financial safety shield—built for those who plan for life’s milestones and prepare for the unexpected."
        subtext="Whether it’s a future home, school fees, or an unforeseen medical bill, this plan keeps you in control. It’s stability without slowdown—flexible, reliable, and always ready when you need it most."
        imageUrl="/images/old-coup1.jpg"
      />
      <EduQuestions />
      <CallToAction />
    </>
  );
};

export default Page;
