import { Calculator, Rates, StartBuilding } from "@/components/common";
import Hero from "@/components/common/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Save with Intention"
        subtitle="Choose your goal, plan your path, and let your money work for you"
        button="Explore"
        imageUrl="/images/calc-bg.jpg"
      />
      <Calculator />
      <StartBuilding />
    </>
  );
};

export default page;
