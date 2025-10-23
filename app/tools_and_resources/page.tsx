import { Blog } from "@/components/blogs";
import { Calculator, Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { MoreResources, ResourcesTabs, FactSheetsSection } from "@/components/tools";
import React from "react";

// SEO metadata for Blog / Insights page
export const metadata = {
  title: "Investment Insights & Guides | Nabo Capital Blog",
  description:
    "Explore expert insights, seasonal strategies, and step-by-step investment guides. Learn how to start investing and make informed financial decisions in Kenya.",
  keywords: [
    "new year investment goals 2025",
    "mid-year investment review",
    "bonus investment ideas",
    "year-end investment planning",
    "13th month investment Kenya",
    "investment tax planning",
    "how to start investing in Kenya",
    "steps to start investing Kenya",
    "how much money to start investing",
    "investment tutorial Kenya"
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Investor's Companion"
        subtitle="Everything you need to make informed investment decisions"
        button="Explore"
        imageUrl="/images/rc.jpeg"
        scrollTarget="#section4"
      />

      <Blog />
      <MoreResources />
      <ResourcesTabs />
      <FactSheetsSection />
      <CallToAction />
    </>
  );
};

export default page;