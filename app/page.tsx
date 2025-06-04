import { Currency } from "@/components/common";
import { Account, Investing } from "@/components/home";
import SwiperPage from "@/components/swiper";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <SwiperPage />
      <Currency />
      <Account />
      <Investing />
    </>
  );
}
