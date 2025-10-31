import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import { LifestyleQuestions } from "@/components/lifestyle";
import { Rates } from "@/components/common";
import HeroSwiper from "@/components/common/HeroSwiper";

export const metadata = {
  title: "Lifestyle Portfolio | Invest for Early Career Growth",
  description:
    "Discover investment portfolios tailored for young professionals in Kenya. Start early, grow your wealth, and plan for your financial goals with Nabo Capital.",
  keywords: [
    "investment for young professionals Kenya",
    "first salary investment Kenya",
    "investment for 20s Kenya",
    "young professional wealth building",
    "where to invest 100k in Kenya",
  ],
};

const lifestyleSlides = [
  {
    image: "/images/ken.jpeg",
    title: "Live Purposefully. Save Deliberately.",
    text: "Secure the day-to-day with the Lifestyle Portfolio, and create room to breathe, plan and enjoy life.",
    primaryButton: "Unlock My Plan",
    primaryLink: "/calculator",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
  {
    image: "/images/clothing-utilities.jpg",
    title: "Live Purposefully. Save Deliberately.",
    text: "Invest in freedom.\nThe Money Market Fund keeps you liquid, ready \nand covered for life’s daily moves.",
    primaryButton: "Unlock My Plan",
    primaryLink: "/calculator",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
];

const Page = () => {
  return (
    <>
      <Rates />
      {/* ✅ Pass slides to HeroSwiper */}
      <HeroSwiper slides={lifestyleSlides} />
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

export default Page;
