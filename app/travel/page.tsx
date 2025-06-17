import Hero from "@/components/common/Hero";
import { PlanForJoy } from "@/components/i-want-tos";
import QuestionPack from "@/components/i-want-tos/QuestionPack";

import React from "react";

const page = () => {
  return (
    <>
      <Hero
        button="Unlock My Plan"
        imageUrl="/images/travel.png"
        title="Because Life is About Living Fully"
        subtitle="Say yes to Life's Big, Beautiful moments without guilt, without worry"
      />
      <PlanForJoy />
      <QuestionPack />
    </>
  );
};

export default page;
