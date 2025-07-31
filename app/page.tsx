import { Currency } from "@/components/common";
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
      <Currency />
      <SwiperPage />
      <Account />
      <Investing />
      <WhyforYou />
      <Testimonials />
      <CallToAction />
    </>
  );
}
