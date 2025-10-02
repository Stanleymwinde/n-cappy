import { Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { CompareFunds, FIF, MMF, GettingStarted } from "@/components/individual";
import React from "react";

export const metadata = {
  title: "Grow Your Wealth With Nabo Capital | MMF & FIF",
  description:
    "Discover Nabo Capital’s Money Market Fund (MMF) and Fixed Income Fund (FIF). Learn how they work, compare returns, and choose the best option for your investment goals in Kenya.",
  keywords: [
    // MMF keywords
    "money market fund vs fixed deposit",
    "money market fund vs bank savings",
    "are money market funds safe Kenya",
    "money market fund minimum investment",
    "best money market fund Kenya",
    "open money market account Kenya",
    "best money market fund rates Kenya",
    "money market fund application Kenya",
    "money market fund companies Kenya",
    "unit trust vs money market fund",
    "money market fund returns",
    "how money market funds work",

    // FIF keywords
    "fixed income investment Kenya",
    "safe long-term investment options",
    "bond investment Kenya",
    "portfolio allocation by investment size",
    "diversification strategies",
    "investment options by amount",
  ],
};

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Grow Your Wealth With Nabo Capital"
        imageUrl="/images/hm1.jpeg"
        subtitle="Choose the investment fund that aligns with your financial goals."
        button="Explore Funds"
        scrollTarget="#section6"
      />

      <MMF />
      <FIF />
      <CompareFunds />
      <GettingStarted />
      <CallToAction />
    </>
  );
};

export default page;
