import { CallToAction } from "@/components/home";
import { PlanForJoy } from "@/components/i-want-tos";
import { RetireQuestions } from "@/components/retire";
import { Rates } from "@/components/common";
import HeroSwiper from "@/components/common/HeroSwiper"; // new reusable swiper component

export const metadata = {
  title: "Retirement Portfolio | Build Wealth for the Future",
  description:
    "Plan for your retirement with Nabo Capital’s tailored investment strategies. Secure steady income, safeguard your future, and retire with peace of mind in Kenya.",
  keywords: [
    "retirement investment Kenya",
    "retire early Kenya",
    "pension planning Kenya",
    "secure future investments",
    "long-term financial planning Kenya",
  ],
};

const retireSlides = [
  {
    image: "/images/oldyy1.jpg",
    title: "Build Something that Outlives You",
    text: "Make your mark. Then make it last",
    primaryButton: "Unlock My Plan",
    primaryLink: "/calculator",
    secondaryButton: "Learn More",
    secondaryLink: "/individual",
  },
  {
    image: "/images/estate-plan.jpg",
    title: "Build Something that Outlives You",
    text: "Invest in forever.The Fixed Income Fund grows wealth\ndesigned to outlast you.",
    primaryButton: "Unlock My Plan",
    primaryLink: "/calculator",
    secondaryButton: "Learn More",
     secondaryLink: "/individual",
  },
];

<HeroSwiper slides={retireSlides} />

const Page = () => {
  return (
    <>
      <Rates />
      <HeroSwiper slides={retireSlides} />
      <PlanForJoy
        title="Do you want to retire with peace of mind and steady income?"
        subtitle="With this retirement plan, we help you grow a portfolio that provides you with predictable income long after you stop working."
        subtext="You’ll enjoy the freedom of retirement without worrying about monthly expenses. Whether it’s healthcare, travel, or family, your essentials remain secured."
        imageUrl="/images/life-3.jpg"
      />
      <RetireQuestions />
      <CallToAction />
    </>
  );
};

export default Page;
