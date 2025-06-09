import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import { Faqs } from "@/components/individual";
import {
  ExploreSolutions,
  PartnerWithUs,
  Team,
} from "@/components/institutional";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="Your Vision. Our Discipline. One Enduring Partnership"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="We don't just manage Institutional Capital, We Guard it's purpose"
        button="Start A Strategic Conversation"
      />
      <Currency />
      <ExploreSolutions />
      <Team />
      <PartnerWithUs />
      <Faqs />
    </>
  );
};

export default page;
