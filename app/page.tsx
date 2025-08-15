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
      <div id="1">
        <Rates />
      </div>

      <SwiperPage />
      <Account />
      <Investing />
      <WhyforYou />
      <Testimonials />
      <CallToAction />
    </>
  );
}
