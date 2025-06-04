import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "../icons";
import TiktokIcon from "../icons/TikTokIcon";

export const marginX = { base: "3%", sm: "2%", md: "4%", lg: "6%" };

export const socials = [
  {
    id: 1,
    icon: FacebookIcon,
    link: "https://www.facebook.com/",
    name: "Facebook",
  },
  {
    id: 2,
    icon: XIcon,
    link: "https://twitter.com/",
    name: "Twitter",
  },
  {
    id: 3,
    icon: InstagramIcon,
    link: "https://www.instagram.com//",
    name: "Instagram",
  },
  {
    id: 4,
    icon: YoutubeIcon,
    link: "https://youtube.com",
    name: "Youtube",
  },
  {
    id: 5,
    icon: TiktokIcon,
    link: "https://www.tiktok.com/@nairobichapel",
    name: "Tiktok",
  },
];

export const navItems = [
  { label: "Individual", href: "/" },
  { label: "Institutional", href: "/institutional" },
  { label: "About Us", href: "/about-us" },
  { label: "Tools & Resources", href: "/tools_and_resources" },
];
