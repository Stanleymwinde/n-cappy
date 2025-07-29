import { Rates } from "@/components/common";
import {
  Account,
  CallToAction,
  Investing,
  Testimonials,
  WhyforYou,
} from "@/components/home";

import SwiperPage from "@/components/swiper";

export default function Home() {
  return (
    <>
      <SwiperPage />
      <Rates />
      <Account />
      <Investing />
      <WhyforYou />
      <Testimonials />
      <CallToAction />
    </>
  );
}
