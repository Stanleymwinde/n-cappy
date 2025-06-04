import { Currency } from "@/components/common";
import { Account } from "@/components/home";
import SwiperPage from "@/components/swiper";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <SwiperPage />
      <Currency />
      <Account />
    </>
  );
}
