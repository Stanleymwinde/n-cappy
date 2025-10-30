"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Blog } from "@/components/blogs";
import { Calculator, Rates } from "@/components/common";
import Hero from "@/components/common/Hero";
import { CallToAction } from "@/components/home";
import { MoreResources, ResourcesTabs, FactSheetsSection } from "@/components/tools";

export default function ToolsAndResourcesClient() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Smooth scroll to #fact-sheets if hash is present
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#fact-sheets") {
      const target = document.querySelector("#fact-sheets");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Rates />
      <Hero
        title="Investor's Companion"
        subtitle="Everything you need to make informed investment decisions"
        button="Explore"
        imageUrl="/images/rc.jpeg"
        scrollTarget="#fact-sheets"
      />

      <Blog />
      <MoreResources />
      <ResourcesTabs />
      <FactSheetsSection />
      <CallToAction />
    </>
  );
}
