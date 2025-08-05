import { Blog } from "@/components/blogs";
import { Calculator, Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { MoreResources, ResourcesTabs } from "@/components/tools";
import React from "react";

const page = () => {
  return (
    <>
      <Rates />
      <Hero
        title="Tools & Resources"
        subtitle="Everything You Need to make Informed Investment Decisions"
        button="Explore"
        imageUrl="/images/rc.jpeg"
      />
     
      {/* <Calculator /> */}
      <Calculator />
      <Blog />
      <MoreResources />
      <ResourcesTabs />
      <CallToAction />
    </>
  );
};

export default page;
