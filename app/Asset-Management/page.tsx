import { CoreStrategy, Solutions } from "@/components/Asset-mgt";
import { Currency } from "@/components/common";
import Hero from "@/components/common/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <Hero
        title="Asset Management"
        imageUrl="/images/institution-hero.jpeg"
        subtitle="We deliver tailored asset management solutions that help institutions achieve their long-term financial objectives"
        button="Schedule a Consultation"
      />
      <Currency />
      <Solutions />
      <CoreStrategy />
    </>
  );
};

export default page;
