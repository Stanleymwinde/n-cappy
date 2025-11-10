import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from "../icons";
import TiktokIcon from "../icons/TikTokIcon";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import {
  FaHandsHelping,
  FaShieldAlt,
  FaUniversity,
  FaSmile,
  FaCar,
} from "react-icons/fa";

import { BsCashCoin } from "react-icons/bs";
import { FaBuilding, FaGlobe, FaHeart, FaPiggyBank } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaHome, FaCarSide, FaTshirt } from "react-icons/fa";
import {
  FaHouseUser,
  FaHospital,
  FaGraduationCap,
  FaFileContract,
} from "react-icons/fa";
import {
  FaFileInvoice,
  FaBalanceScale,
  FaUsers,
  FaHandHoldingUsd,
  FaHeartbeat,
  FaUserNurse,
  FaGift,
  FaUmbrellaBeach,
  FaHandshake,
} from "react-icons/fa";

export const marginX = { base: "3%", sm: "2%", md: "4%", lg: "6%" };

export const socials = [
  {
    id: 1,
    icon: FacebookIcon,
    link: "https://www.facebook.com/NaboCapital",
    name: "Facebook",
  },
  {
    id: 2,
    icon: XIcon,
    link: "https://x.com/NaboCapital",
    name: "Twitter",
  },
  {
    id: 3,
    icon: InstagramIcon,
    link: "https://www.instagram.com/nabocapital/",
    name: "Instagram",
  },
  {
    id: 4,
    icon: YoutubeIcon,
    link: "https://www.youtube.com/@NaboCapitalKe",
    name: "Youtube",
  },
  {
    id: 5,
    icon: TiktokIcon,
    link: "https://www.tiktok.com/@nabo_capital?lang=en",
    name: "Tiktok",
  },
  {
    id: 5,
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/nabo-capital/posts/?feedView=all",
    name: "LinkedIn",
  },
];

export const navItems = [
  {
    label: "Individual",
    href: "/",
    children: [
      { label: "Our Funds", href: "/individual/MMF&FIF" },
      { label: "Our Portfolios", href: "/individual/MMF&FIF" },
      { label: "Go Global", href: "/global-investing" }],
  },
  {
    label: "Institutional",
    href: "/institutional",
    children: [
      { label: "Our approach", href: "/institutional/treasury" },
      { label: "Resources", href: "/tools_and_resources" },
    ],
  },
  {
    label: "Advisory",
    href: "/advisory",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Investor's Companion",
    href: "/tools_and_resources",
  },
  {
    label: "Calculator",
    href: "/calculator",
  },
];

export const cardData = [
  {
    title: "Secure the Basics ",
    description:
      "Because Freedom is having your basics covered no matter what",
    image: "/images/lifestylegoal-landing.jpeg",
    link: "/lifestyle-goal",
  },
  {
    title: "Be ready for the big disruptors ",
    description:
      "Get yourself a portfolio that is built for the real stuff, bills, bad days and the dignity of knowing you are covered.",
    image: "/images/Education-goal.jpeg",
    link: "/education",
  },
  {
    title: "Travel the World",
    description:
      "Explore the world without financial worries. Save intentionally for unforgettable memories.",
    image: "/images/travelling-goal.jpeg",
    link: "/travel",
  },
  {
    title: "Build Your Legacy",
    description:
      "Retire on your terms. Build a financial cushion that lets you enjoy life’s golden years with peace and pride.",
    image: "/images/retiring-goal.jpeg",
    link: "/retire",
  },
];

export const TestimonialData = [
  {
    name: "Coach Dexter",
    role: "Long Term Investor",
    image: "/images/Dexter3.jpg",
    testimonial:
      "The reason why I feel like I have stayed at Nabo Capital this long is because of safety. It's because I feel safe. And I feel at home.",
  },
  {
    name: "Coach Eileen",
    role: "Long-term Investor",
    image: "/images/e-c.jpg",
    testimonial:
      "The thing I love about Nabo is that you are not just interested in my money you are interested in my mind, and my purpose.",
  },
  {
    name: "Joyce Njoro",
    role: "Long-term Investor",
    image: "/images/cee.jpg",
    testimonial:
      "What I love about Nabo is that they actually take their time to explain to you where your money is going.",
  },
];

export const FinancialGoalsData = [
  {
    title: "Save Intentionally",
    description:
      "Whether you're building wealth, securing your future or planning for a milestone, intentional saving sets the foundation for financial freedom.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuUser",
    button: "Explore Funds",
    image: "/images/carol.png",
  },
  {
    title: "Afford the Life I Want",
    description:
      "We’ll help you build a smart savings plan for education—without the stress",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuFolder",
    button: "Explore Fixed Income Funds",
    image: "/images/carol.png",
  },
  {
    title: "Travel the World",
    description:
      "Explore the world without financial worries. Save intentionally for unforgettable memories.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuSquareCheck",
    button: "Explore Funds",
    image: "/images/carol.png",
  },
  {
    title: "Retire Comfortably",
    description:
      "Retire on your terms. Build a financial cushion that lets you enjoy life’s golden years with peace and pride.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuSquareCheck",
    button: "Explore Fixed Income Funds",
    image: "/images/carol.png",
  },
];

export const WhatAreYourGoalsData = [
  {
    title: "Deliver sustainable returns",
    description:
      "Whether you're seeking to grow your wealth, preserve what you’ve built, or create a legacy that outlives you, intentional investment delivers returns that remain resilient across cycles.g",
    points: [
      "Competitive returns above inflation",
      "Professional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuUser",
    button: "Learn More",
    image: "/images/carol.png",
  },
  {
    title: "Match assets to liabilities",
    description:
      "By aligning assets with upcoming responsibilities, you create a portfolio that is responsive, resilient, and designed to meet life’s defining moments with confidence.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuFolder",
    button: "Learn More",
    image: "/images/carol.png",
  },
  {
    title: "Diversify and maximize portfolio efficiency",
    description:
      "Diversification strengthens your portfolio, spreading risk across quality opportunities and ensuring every asset contributes meaningfully to long-term efficiency.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuSquareCheck",
    button: "Learn More",
    image: "/images/carol.png",
  },
  {
    title: "Grow surplus capital",
    description:
      "Surplus capital is a catalyst for progress—when invested intentionally, it transforms into enduring growth and future strength.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
      "Diversified Low-Risk Portfolio",
      "Withdraw funds when you need them",
    ],
    icon: "LuSquareCheck",
    button: "Learn More",
    image: "/images/carol.png",
  },
];

export const TreasuryGoalsData = [
  {
    title: "Stay liquid without losing value",
    description:
      "Life doesn’t wait. Whether it’s a business opportunity, an emergency, or a personal goal, you want quick access to your money; without it sitting idle or losing value to inflation. Our cash and liquidity solutions help you balance accessibility with intelligent growth.",
    points: [],
    icon: "LuUser",
    button: "Learn More",
    image: "/images/treasuryyy.png",
  },
  {
    title: "Stay ready for opportunities",
    description:
      "Opportunities can come without warning. So being financially ready can make all the difference. Our liquidity strategies give you fast access to your money, so you can respond quickly when the right moment arrives; be it an investment, a business deal, or a personal milestone.",
    points: [],
    icon: "LuFolder",
    button: "Learn More",
    image: "/images/treasuryyy.png",
  },
  {
    title: "Preserve Capital",
    description:
      "Your cash is valuable and so is peace of mind. We help you protect your money with low-risk, short-term investment options designed to preserve capital while maintaining liquidity. Whether you are saving for obligations or safeguarding reserves, our solutions ensure your funds remain secure.",
    points: [],
    icon: "LuSquareCheck",
    button: "Learn More",
    image: "/images/treasuryyy.png",
  },
  {
    title: "Run my business efficiently",
    description:
      "Whether you are a small enterprise or a large institution, cash flow is the heartbeat of your operations. We help you optimize your short-term liquidity, align your cash with operational cycles, and maximize returns on surplus funds; all tailored to your needs.",
    points: [],
    icon: "LuSquareCheck",
    button: "Learn More",
    image: "/images/treasuryyy.png",
  },
];

export const CoreStrategiessData = [
  {
    title: "Equity Strategy",
    subtitle: "Sustainable Capital Growth Across Market Cyclesssssss",
    description: [
      "Our equitys strategy focuses on identifying quality companies with sustainable competitive advantages and strong growth potential. We employ a disciplined investment process that combines fundamental analysis with valuation discipline to deliver consistent alpha across market cycles.",
    ],
    pdf: "/pdfs/Equity-Strategy.pdf",
    icon: "LuUser",
  },
  {
    title: "Balanced Strategy",
    subtitle: "Sustainable Capital Growth Across Market Cycles",
    description: [
      "Our equity strategy focuses on identifying quality companies with sustainable competitive advantages and strong growth potential. We employ a disciplined investment process that combines fundamental analysis with valuation discipline to deliver consistent alpha across market cycles.",
    ],
    pdf: "/pdfs/Equity-Strategy.pdf",
    icon: "LuFolder",
  },
  {
    title: "Fixed Income Strategy",
    subtitle: "Sustainable Capital Growth Across Market Cycles",
    description: [
      "Our equity strategy focuses on identifying quality companies with sustainable competitive advantages and strong growth potential. We employ a disciplined investment process that combines fundamental analysis with valuation discipline to deliver consistent alpha across market cycles.",
    ],
    pdf: "/pdfs/Equity-Strategy.pdf",
    icon: "LuSquareCheck",
  },
];

export const ResourcesData = [
  {
    title: "Investment Types and Strategies",
    icon: "LuFolder",
    description: [
      {
        id: 1,
        title: "Investment Types and Strategies",
        subtitle: "Financial freedom isn’t found in chasing returns. ",
        text: "You don’t just need to invest, you need to invest with purpose. This is the real game. I’ll show you exactly how to turn your portfolio into the most powerful asset you own.",
        image: "/images/Vid-1.jpeg",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
        video: "https://youtu.be/fmW4ZwDaHS4?si=_fe0b_Ao-rGTakMt",
      },
      {
        id: 2,
        title: "Investment Types and Strategies",
        subtitle: "A Raise Won't Fix What You Do Not Know About Money",
        text: "If you don’t understand how money grows, how inflation eats into your savings, or how compounding works;  chances are, you will keep earning your whole life… and still have nothing to show for it.",
        image: "/images/YT.png",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
        video: "https://youtu.be/IjDo69fZrPA?si=wJfvYuCk5vgZY3wf",
      },
      {
        id: 3,
        title: "Investment Types and Strategies",
        subtitle: "You Will Never Be Free, If You Count On Your Salary!",
        text: "Most people are caught in a cycle of depending on their paycheck. They grind, hoping for a raise or a bonus to finally break through and this doesn't help either.",
        image: "/images/YY.jpeg",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
        video: "https://youtu.be/NDCFSkCDJv4?si=rVP4_eu6x3MKfcKw",
      },
      {
        id: 4,
        title: "Investment Types and Strategies",
        subtitle: "Never Go Broke Again, This Investment Plan Works!",
        text: "Picture this: You're working hard, chasing financial goals, but somehow, you still feel like you're not getting any closer to real financial security. You're not alone.",
        image: "/images/Vid-1.jpeg",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
        video: "https://youtu.be/hTRb832NqOs?si=6-EpzM47u14VSWCS",
      },
      {
        id: 5,
        title: "Investment Types and Strategies",
        subtitle: "The Strategies You Need To Invest With Purpose",
        text: "You’ve been chasing returns, scanning the markets, but you are still not where you need to be. I think I know what’s missing!",
        image: "/images/Y8.jpeg",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
        video: "https://youtu.be/FFOGreNBrmg?si=woETNjuo58xyu02L",
      },
    ],
  },
  {
    title: "Private Wealth Management",
    subtitle: "Comprehensive and personalized wealth strategies",
    icon: "LuSquareCheck",
    description: [
      {
        id: 1,
        title: "Private Wealth Management",
        subtitle: "This Is Why Most People Stay Broke, Even When They Try",
        text: "Investors who win aren’t the ones with the biggest salaries.They’re the ones with the clearest plan — and the right accountability.",
        image: "/images/Y3.png",
        pdf: "/pdfs/Private-Wealth-1.pdf",
        video: "https://youtu.be/OXJRWE1EOYo?si=RDlmlGBUmp9fFyTs",
      },
      {
        id: 2,
        title: "Private Wealth Management",
        subtitle: "You Look Rich, But One Crisis Can Break You",
        text: "Owning a big house can make you look rich. But without cash flow, you are just one crisis away from losing everything. If your home owns your money, it also owns your freedom.",
        image: "/images/w2.jpeg",
        pdf: "/pdfs/Private-Wealth-1.pdf",
        video: "https://youtu.be/BmfeB03BF7c?si=_7tHX5lOuFUIr7VA",
      },
      {
        id: 3,
        title: "Private Wealth Management",
        subtitle: "If Your Money Needs You Awake, You Are Not Free!",
        text: "You work. You earn. But the moment you stop showing up… everything stops. That’s not freedom. That’s financial slavery in a suit.",
        image: "/images/w4.jpeg",
        pdf: "/pdfs/Private-Wealth-1.pdf",
        video: "https://youtu.be/5Kb_Mour9Io?si=CqxAwCnZG4RwO7XE",
      },
      {
        id: 4,
        title: "Private Wealth Management",
        subtitle: "You've Worked Too Hard To Stay Broke. Let's Fix That",
        text: "You show up. You grind. You sacrifice. So why does it still feel like your money isn’t working as hard as you are? Most people aren’t broke because they don’t earn; they don’t plan!",
        image: "/images/vid-2.jpeg",
        pdf: "/pdfs/Private-Wealth-1.pdf",
        video: "https://youtu.be/EvIDuxqmEbU?si=iOmIwNpwghnWucRL",
      },
      {
        id: 5,
        title: "Private Wealth Management",
        subtitle:
          "The Heart Behind Billions | Ft. Pius Muchiri and Moses Njuguna",
        text: "Let’s face it, when it comes to money, we all need that one person. Not someone to borrow from. But someone who gets it.",
        image: "/images/Y4.png",
        pdf: "/pdfs/Private-Wealth-1.pdf",
        video: "https://youtu.be/0bMIZFy6fDQ?si=2qPnqstcLP_2h12l",
      },
    ],
  },
  {
    title: "Financial Planning and Retirement",
    subtitle: "Secure your future with strategic planning",
    icon: "LuSquareCheck",
    description: [
      {
        id: 1,
        title: "Financial Planning and Retirements",
        subtitle: "Your Gift Comes With A Mission | Customer Testimonial",
        text: "Joyce’s story serves as a powerful reminder that it is the determination to move forward, to push beyond perceived limits, that shapes our legacy.",
        image: "/images/w9.jpg",
        pdf: "/pdfs/Financial-Planning-1.pdf",
        video: "https://youtu.be/g7SYcLx9GIs?si=WH4SuBgJIW_QJfpB",
      },
      {
        id: 2,
        title: "Financial Planning and Retirements",
        subtitle: " Claim the freedom you deserve ",
        text: "Even the smallest amounts of money can become powerful tools for shaping a child’s future. Prioritize what truly matters.",
        image: "/images/w8.jpg",
        pdf: "/pdfs/Financial-Planning-1.pdf",
        video: "https://youtu.be/OCUe4uRurOo?si=4b4Ub0yytJ6DMkRi",
      },
      {
        id: 3,
        title: "Financial Planning and Retirements",
        subtitle: "Want It, Earn It! | Customer Testimonial",
        text: "Nothing worth having ever comes easy! Joyce shares how growing up, she didn’t have everything handed to her, she had to work for it",
        image: "/images/w1.jpg",
        pdf: "/pdfs/Financial-Planning-1.pdf",
        video: "https://youtu.be/2FgbL6GmmEs?si=RFQ2bxEeism_gs-Q",
      },
      {
        id: 4,
        title: "Financial Planning and Retirements",
        subtitle: "How Asking 'Why Built Wealth",
        text: "Joyce Njoro takes us on a captivating journey from hiding one-shilling coins in a purse to navigating the complexities of budgeting in high school and beyond",
        image: "/images/w3.jpg",
        pdf: "/pdfs/Financial-Planning-1.pdf",
        video: "https://youtu.be/8TI-mBG7T3k?si=QHLJbl1qANilKwDC",
      },
      {
        id: 5,
        title: "Financial Planning and Retirements",
        subtitle: "Think Big Attract Bigger! | Customer Testimonial",
        text: "By daring to dream beyond her immediate surroundings, Joyce unlocked doors she never imagined possible and with even bigger opportunities.",
        image: "/images/w4.jpg",
        pdf: "/pdfs/Financial-Planning-1.pdf",
        video: "https://youtu.be/ECgt-6OINO8?si=mCZ4ZaWa5o3UPbie",
      },
    ],
  },
  {
    title: "Investor Mindset and Education",
    subtitle: "Build confidence and clarity through knowledge",
    icon: "LuSquareCheck",
    description: [
      {
        id: 1,
        title: "Investor Mindset and Education",
        subtitle: "Developing a Growth Mindset",
        text: "Financial Freedom will begin when you set your mind free! The triumph over the trauma of poverty, is to achieve profound financial success.",
        image: "/images/v1.jpeg",
        pdf: "/pdfs/Investor-Education-1.pdf",
        video: "https://youtu.be/-Ilk82l9uW4?si=oqC-sn_KS4W6fa37",
      },
      {
        id: 2,
        title: "Investor Mindset and Education",
        subtitle: "You Want A Legacy Not A Side Hustle",
        text: "If you want to be rich, impose yourself in other people's budgets.The key to lasting wealth is to build it so it thrives without you.",
        image: "/images/v2.jpeg",
        pdf: "/pdfs/Investor-Education-1.pdf",
        video: "https://youtu.be/FPEA_TAv1v4?si=EqA05AdHaiXkx85y",
      },
      {
        id: 3,
        title: "Investor Mindset and Education",
        subtitle: "The Habit That Changes Everything",
        text: "Even if it's just 1 shilling or 10 shillings, cultivating a habit of paying yourself first is a powerful affirmation that you can manage your finances.",
        image: "/images/v3.jpeg",
        pdf: "/pdfs/Investor-Education-1.pdf",
        video: "https://youtu.be/MlgPoHVVvNU?si=dI5Gvf-PMZPfB8pP",
      },
      {
        id: 4,
        title: "Investor Mindset and Education",
        subtitle: "This Is How You Move From Zero To Wealth",
        text: "How do you create wealth when you have nothing to save or invest? The answer lies in packaging yourself to attract opportunities that pay well.",
        image: "/images/vid-4.jpeg",
        pdf: "/pdfs/Investor-Education-1.pdf",
        video: "https://youtu.be/HC6xJ8qKd9w?si=wFg-A-R1QVV7ady9",
      },
      {
        id: 5,
        title: "Investor Mindset and Education",
        subtitle: "Developing a Growth Mindset",
        text: "If your idea of money is wrong, you'll never get the game of money right.Get ready to be inspired and change your life!",
        image: "/images/v5.jpeg",
        pdf: "/pdfs/Investor-Education-1.pdf",
        video: "https://youtu.be/HC6xJ8qKd9w",
      },
    ],
  },
];

export const investmentData = [
  {
    title: "Money Market Fund (USD)",
    subtitle: "Short-term savings",
    description:
      "Ideal for short-term goals. Grow your dollars safely with minimal risk and easy access to your money when you need it.",
    points: [
      "Low risk",
      "Easy liquidity",
      "Stable returns",
      "1-12 month timeframe",
    ],
    cta: "Money Market Fund (USD) Fact Sheet",
    file: "/images/m-usd.jpeg",
  },
  {
    title: "Fixed Income Fund (USD)",
    subtitle: "Steady growth",
    description:
      "Think of it like a monthly income generator. Get regular returns while protecting your principal investment",
    points: [
      "Medium risk",
      "Regular income",
      "Consistent growth",
      "1-3 year timeframe",
    ],
    cta: "Fixed Income Fund (USD) Fact Sheet",
    file: "/images/f-usd.jpeg",
  },
  {
    title: "Balanced Fund (USD)",
    subtitle: "Long-term growth",
    description:
      "A little bit of everything. For long-term goals with steady returns and potential for higher growth.",
    points: [
      "Balanced risk",
      "Growth potential",
      "Diversified assets",
      "3+ year timeframe",
    ],
    cta: "Balanced Fund (USD) Fact Sheet",
    file: "/images/b-f.jpeg",
  },
];

export const itemss = [
  {
    value: "a",
    title: "Equity Strategy",
    text: "Pursuing Sustainable Capital Growth Across Market Cycles",
    points: [
      "Rigorous Stock Selection: Active, research-intensive process grounded in intrinsic value and growth potential",
      "Rigorous Stock Selection: Active, research-intensive process grounded in intrinsic value and growth potential",
      "Rigorous Stock Selection: Active, research-intensive process grounded in intrinsic value and growth potential",
      "Rigorous Stock Selection: Active, research-intensive process grounded in intrinsic value and growth potential",
    ],
  },
  {
    value: "b",
    title: "Balanced Strategy",
    text: "Optimizing Risk-Adjusted Returns Through Asset Class Synergy",
  },
  {
    value: "c",
    title: "Fixed Income Strategy",
    text: " Preserving Capital and Generating Reliable Income",
  },
];
export const teamMembers = [
  {
    image: "/images/Moses1.png",
    name: "Moses Njuguna",
    title: "Senior Private Wealth Manager",
    link: " https://www.linkedin.com/in/moses-njuguna-msc-acsi/ ",
  },
  {
    image: "/images/Zach1.png",
    name: "Zachary Maina",
    title: "Private Wealth Manager",
    link: "  https://www.linkedin.com/in/zachary-mwangi-acsi-76431bba/ ",
  },
  {
    image: "/Alex.png",
    name: "Alex Muchoki",
    title: "Senior Private Wealth Consultant/ IFA Coordinator",
    link: "  https://www.linkedin.com/in/alex-muchoki-ab28a643/  ",
  },
  {
    image: "/Wycliffe.png",
    name: "Wycliffe Simiyu",
    title: "Senior Private Wealth Consultant",
    link: "  https://www.linkedin.com/in/wycliffe-simiyu-acsi-2834b29a/ ",
  },
  {
    image: "/images/joyce-m.png",
    name: "Joyce Gathitu",
    title: "Private Wealth Consultant",
    link: " https://www.linkedin.com/in/joyce-gathitu/  ",
  },
  {
    image: "/images/Hillary.png",
    name: "Hillary Hagai",
    title: "Senior Private Wealth Consultant",
    link: "  https://www.linkedin.com/in/hillary-haggai-910563119/  ",
  },
  {
    image: "/images/antony-n.jpg",
    name: "Antony Njagi",
    title: "Senior Private Wealth Consultant",
    link: "  https://www.linkedin.com/in/anthony-njagi-128689166/  ",
  },
  {
    image: "/images/Brian.png",
    name: "Brian Kipkemboi",
    title: "Senior Private Wealth Consultant",
    link: "https://www.linkedin.com/in/brian-kipkemboi/  ",
  },
];

export const institutionalMembers = [
  {
    image: "/images/mwongelam.jpg",
    name: "Dr. Mercy Njoroge Mwongela",
    title: "Head of Asset Management, CX & IT",
    linkedin: "https://www.linkedin.com/in/mercymwongela/",
  },
  {
    image: "/images/Fredo.jpg",
    name: "Fredrick Okudo",
    title: "Snr. Associate Product Structuring and CX & UX",
    linkedin: "https://www.linkedin.com/in/fredrick-okudo-960567135/",
  },
  {
    image: "/images/Jackie1.jpg",
    name: "Jacklyne Waithira",
    title: "Asset Management Analyst",
    linkedin: "https://www.linkedin.com/in/teddey-muthoka/",
  },
];

export const FaqsData = [
  {
    value: "a",
    title: "What is a Unit Trust?",
    text: "A Unit Trust, also known as a mutual fund, is a pooled investment vehicle where investors' money is collectively managed by a professional fund manager.​",
  },
  {
    value: "b",
    title: "What are the differences between the various funds?",
    text: "Nabo Money Market Fund(KES & USD), seeks to maximize current income by investing primarily in a diversified portfolio of short-term debt securities and instruments whilst aiming to preserve capital and maintain a high degree of liquidity.​ Nabo Fixed Income Fund(KES & USD), The fund generates stable capital growth over the medium to long term. Under this fund, we invest in a diversified range of Fixed Income Securities across Africa. ",
  },
  {
    value: "c",
    title: "Is my money safe?",
    text: "Yes, your money and assets that are purchased are safely secured in a bank custody account and will not be affected by failure of any service provider.​",
  },
  {
    value: "d",
    title: "Can I top up my account?",
    text: "Yes, a client can top up their account as many times as they wish.​",
  },
  {
    value: "e",
    title: "How do I withdraw my funds?",
    text: "Send us a redemption request via email to clientservice@nabocapital.com  quoting the amount to be redeemed.​",
  },
  {
    value: "f",
    title:
      "How long does it take for funds to be transferred into my account when I redeem?​",
    text: "It takes 2 to 3 working days from the date of request. This is a requirement of the regulation governing unit trusts.​",
  },
];

export const FaqsData1 = [
  {
    value: "a",
    title: "What is the minimum investment amount for the various funds?​",
    text: "Currently, the minimum investment amount for all funds is KES 100,000. But clients who have below KES 100,000 can channel the funds through Chumz App.​",
  },
  {
    value: "b",
    title: "What is the minimum top-up amount for the various funds?​",
    text: "The minimum top-up amount for all funds is KES 10,000​",
  },
  {
    value: "c",
    title: "What hidden charges are there?",
    text: "There are none",
  },
  {
    value: "d",
    title: "Can I top up my account?",
    text: "You can contact our customer support team via email at",
  },
  {
    value: "e",
    title: " Is there any locking period?​",
    text: "Only for Nabo KES Fixed Income Fund for a period of 6 months on the initial investment, subsequent top-ups are not locked.",
  },
  {
    value: "f",
    title: "Are the returns guaranteed?​",
    text: "No, we are not required to guarantee returns as per the CMA regulations as the assets we invest in don’t guarantee returns.​",
  },
];

export const FaqsData2 = [
  {
    value: "a",
    title: "What is a Portfolio?​",
    text: "A portfolio is a collection of investments, including stocks, bonds, and other assets i.e. real estate, and commodities, owned by an individual or entity, aimed at diversifying risk and achieving financial objectives such as capital growth or stable, consistent income. ​",
  },
  {
    value: "b",
    title: "Are the returns guaranteed?",
    text: "No, we are not required to guarantee returns as per the CMA regulations as the assets we invest in don’t guarantee returns.​",
  },
  {
    value: "c",
    title: "How do I monitor my Investment?​",
    text: "We shall be providing you with monthly statements that you can use to track your investments, and factsheets that indicate the performance of all the funds monthly. ​",
  },
  {
    value: "d",
    title: "Do you have Sharia-compliant investment solutions? ​",
    text: "We are in the process of providing this solution to our clients in the next coming quarters of the year.​",
  },
  {
    value: "e",
    title: "Who are the key players to secure my investment?​",
    text: "On top of CMA being the regulator, these are the key service providers to make sure clients’ investment is secure and does not mix with Fund Manager’s money​",
  },
  {
    value: "f",
    title: "Why is the dollar rate lower than the KES rate​",
    text: "Investment return rates in USD may appear lower than KES due to factors such as;​ Demand for Currency(strengthen of USD against KES).​Inflation(US has lower inflation rate than Kenya).​This will mean the FX gain will be high in the range of 12% - 15% and when added back to the USD rate, it will be higher than the KES rate.​",
  },
];

export const FaqsData3 = [
  {
    value: "a",
    title: " Why is your MMF KES giving greater returns than the FIF KES ",
    text: "The money market fund has a weighted average tenor of 13 months, which allows us to identify higher-yielding assets in the short term. The Fixed Income Fund is invested in longer-term assets such as Govt. Bonds whose returns may, from time to time, be weighed down by older dated securities.​",
  },
  {
    value: "b",
    title: "Where do we invest? ​",
    text: "We invest primarily across Africa excluding South Africa.​",
  },
  {
    value: "c",
    title:
      "Is Chumz legitimate and what is the relationship between Nabo  Capital and Chumz? ​",
    text: "Chumz is a legitimate mobile application that allows you to invest in Nabo Capital’s funds. It is a product of Nabo Capital and is regulated by the Capital Markets Authority (CMA).​",
  },
  {
    value: "d",
    title: "How long has Nabo has been in existence?",
    text: "Nabo Capital is a 3rd generation investment firm, leveraging over 50 years of experience under Centum Investments PLC and 11 years as a stand-alone fund manager.​",
  },
  {
    value: "e",
    title: "Can I create a family trust with NABO? ​",
    text: "Yes, we will be launching our family trust solution by the end of Q3, 2024.​",
  },
];

export const InvestGloballyData = [
  {
    title: "International Fund Access",
    description:
      "Gain access to premium global investment opportunities not available locally.",
    icon: "FaGlobe",
  },
  {
    title: "Currency Diversification",
    description:
      "Protect and grow your wealth by diversifying across multiple strong currencies.",
    icon: "FaShieldAlt",
  },
  {
    title: "Global Real Estate & Private Equity",
    description:
      "Access real estate, private equity, and debt deals across various geographies.",
    icon: "FaBuilding",
  },
  {
    title: "Regional Micro Insights",
    description:
      "Benefit from our deep local expertise combined with global market intelligence.",
    icon: "FaChartLine",
  },
];

export const GlobalPartnersData = [
  {
    name: "·Global Financial Licenses",
    icon: "FaBuilding",
    description:
      "We work with leading financial institutions to facilitate global transactions.",
    list: ["Citibank Global Network"],
  },
  {
    name: "Regulatory Approvals",
    icon: "FaShieldAlt",
    description:
      "We maintain all necessary licenses and regulatory approvals to operate globally.",
    list: ["Capital Markets Authority (CMA) Kenya"],
  },
  {
    name: "Strategic Alliances",
    icon: "FaHandshake",
    description:
      "Our strategic partnerships expand our reach and capabilities.",
    list: [
      "Global Investment Research Firms",
      "International Asset Managers",
      "Regional Market Specialists",
    ],
  },
];

export const heritageData = [
  {
    year: "1954",
    title: "NABO CAPITAL LIMITED IS SPUN OUT OF CENTUM",
    description:
      "A local DFI was incorporated to become the investment arm of the Kenyan Government in anticipation that the British colonial rule was nearing the end.",
  },
  {
    year: "1967",
    title:
      "ICDC INVESTMENT (ICDCI), NOW CENTUM INVESTMENT, WAS INCORPORATED AS A SUBSIDIARY OF ICDC.",
    description:
      "Centum was subsequently listed from day one at the Nairobi Securities Exchange following a successful roadshow that raised USD 26,000 as seed capital.",
  },
  {
    year: "1998",
    title:
      "APPOINTMENT OF THE LEGENDARY DR. CHRISTOPHER KIRUBI TO THE CENTUM BOARD",
    description: [
      "By 1998, Dr. Christopher J. Kirubi had become one of the largest shareholders of Centum and was appointed to the board. He was renowned for his eye for lucrative investments and Centum was not an exception. According to him, he saw an undiscovered gem in Centum and began accumulating stake in the company.",
      "Following Dr. Kirubi’s appointment to the board, a major milestone was achieved when the board appointed the first independent management, separate from the parent company ICDC. This decision began a new era of putting together one of the most coveted, youthful and entrepreneurial investment management teams in the region. According to Forbes, Dr. Kirubi was among the 40 wealthiest people in Africa; a seasoned entrepreneur, investor and industrialist with interests in media, consumer, financial, real estate, agriculture and technology.",
    ],
  },
  {
    year: "2008",
    title: "JAMES MWORIA BEGAN HIS REIGN AT THE HELM OF CENTUM",
    description: [
      "In 2008, at age 30, James Mworia was appointed as the Chief Executive Officer (CEO) of Centum, becoming the youngest CEO of a publicly listed company in the region. Under his leadership, an extremely ambitious Centum 2.0 strategy was immediately put together to grow the Assets Under Management (AUMs) fivefold. During the first eight years of his tenure, Centum increased its asset base from Kes 6Bn ($69mn) to approximately Kes 61Bn ($610mn) while the share price grew eightfold, from Kes 5/share to Kes 40/share, creating extraordinary returns for shareholders.",
      "One of the major contributing factors to that success was an ingenious decision to unpackage the portfolio into three distinct business lines: real estate, private equity, and quoted private equity (public markets). The decision was inspired by a strong desire to have sharp focus in optimizing value along these three business lines and in the process, nurture specialized skills and unique track records for each business unit. These business units have since devolved into independent subsidiaries and the QPE team, now housed within Nabo Capital, was the first to spin off into a fully fledged fund management company licensed by the Capital Markets Authority (CMA). From just one company in 2009, Centum is now a holding company with more than 30 subsidiaries spread across eight sectors.",
    ],
  },
  {
    year: "2013",
    title: "NABO CAPITAL LIMITED IS SPUN OFF AS AN INDEPENDENT FUND MANAGER",
    description: [
      "The Quoted Private Equity (QPE) business line was inspired by an observation: “If one excludes the 5 most liquid counters in any African stock exchange (excluding SA), one is left with a relatively illiquid asset class that is mostly under-researched and below the radar of most investors”. Given our rich history of Private Equity expertise in Africa, in 2009 we set aside a KES 2.3Bn ($26mn) proprietary fund and christened it the “Quoted Private Equity” portfolio. The strategy was to leverage our private equity expertise to identify and seize significant minority stakes in listed securities that were under-researched, below-the-radar and had significant growth potential across African stock exchanges.",
      "Up until 2013, the strategy had paid off handsomely against benchmarks, which led to requests from external parties to leverage our in-house expertise to replicate the QPE portfolio and track record. That triggered the 2013 spin-off of the QPE team led by Pius Muchiri and hence the emergence of Nabo Capital, now an independent fully-fledged and licensed fund manager. Nabo Capital has rapidly grown since its inception and now manages over Kes 13Bn ($130mn) in AUMs. Our clients appreciate our position as a Boots-on-the-Ground Investment Manager, our specialization exemplified by a solid track record of investing in Africa, and our unique investment philosophy heavily informed by a rich Private Equity heritage.",
    ],
  },
];

export const boardMembers = [
  {
    name: "Robert Bunyi",
    title: "Chairman & Non-Executive Director",
    image: "/Robert-Bunyi.jpg",
    linkedin: "#",
  },
  {
    name: "Pius Muchiri",
    title: "Managing Director & CEO",
    image: "/Pius-Muchiri.jpg",
    linkedin: "#",
  },
  {
    name: "Thapelo Muribame",
    title: "Non-Executive Director",
    image: "/Thapelo-Tebogo.jpg",
    linkedin: "#",
  },
  {
    name: "Edwin Macharia",
    title: "Non-Executive Director",
    image: "/Edwin-Macharia.jpg",
    linkedin: "#",
  },
  {
    name: "Dr. Mercy Njoroge Mwongela",
    title: "Head of Asset Management, CX & IT",
    image: "/mercy.jpg",
    linkedin: "#",
  },
];

// export const RetirementPlans = [
//   {
//     title: "Estate Planning",
//     description:
//       "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
//     icon: MdOutlineRealEstateAgent,
//     questions: [
//       {
//         id: 1,
//         question: "Where do you want to go?",
//         placeholder: "e.g. Mombasa, Paris, Bali",
//         hint: "Whether it’s a beach, city or the desert , you only need 230 USD per month",
//         image: "/images/life-1.png",
//       },
//       {
//         id: 2,
//         question: "When do you want to travel?",
//         placeholder: "eg.   December 2025",
//         hint: "When are you planning to take this trip? Even an approximate time is fine.",
//         image: "/images/life-3.png",
//       },
//       {
//         id: 3,
//         question: "How long will you stay?",
//         placeholder: "eg.   7 days",
//         hint: "How many days or weeks would you like to spend there?",
//         image: "/images/life-2.png",
//       },
//       {
//         id: 4,
//         question: "What Is your estimated cost?",
//         placeholder: "eg.   KES 5000",
//         hint: "Your best estimate of the total cost. Don’t worry if you are not sure.",
//         image: "/images/life-2.png",
//       },
//       {
//         id: 5,
//         question: "How much have you saved ?",
//         placeholder: "eg.   KES 10,000",
//         hint: "How much have you already put aside for this trip?",
//         image: "/images/life-2.png",
//       },
//       {
//         id: 6,
//         question: "How much can you save monthly?",
//         placeholder: "eg.   KES 10,000",
//         hint: "How much have you already put aside for this trip?",
//         image: "/images/life-2.png",
//       },
//     ],
//   },
//   {
//     title: "Generational Wealth Transfer",
//     description:
//       "Create a structured approach to passing financial assets, knowledge, and values to future generations.",
//     icon: FaHandsHelping,
//     questions: [
//       {
//         id: 1,
//         question: "What do you want to study?",
//         placeholder: "e.g. Data Science",
//         hint: "Let us know your field of interest.",
//         image: "/images/ed-q-4.png",
//       },
//       {
//         id: 2,
//         question: "Which institution?",
//         placeholder: "e.g. MIT, Udemy",
//         hint: "Helps tailor your savings goals.",
//         image: "/images/ed-q-2.png",
//       },
//       {
//         id: 3,
//         question: "Expected tuition cost?",
//         placeholder: "e.g. $10,000",
//         hint: "This helps us prepare your plan.",
//         image: "/images/ed-q-1.png",
//       },
//     ],
//   },
//   {
//     title: "Long-Term Care",
//     description:
//       "Prepare for potential health needs without compromising the financial legacy you intend to leave behind.",
//     icon: FaHeart,
//     questions: [
//       {
//         id: 1,
//         question: "What’s your ideal retirement age?",
//         placeholder: "e.g. 60",
//         hint: "This helps us plan your retirement savings.",
//         image: "/images/r-1.png",
//       },
//       {
//         id: 2,
//         question: "What lifestyle do you envision?",
//         placeholder: "e.g. Travel, hobbies",
//         hint: "Share your retirement dreams.",
//         image: "/images/r-2.png",
//       },
//       {
//         id: 3,
//         question: "Expected monthly expenses?",
//         placeholder: "e.g. $2,000",
//         hint: "Helps us calculate your retirement needs.",
//         image: "/images/life-3.png",
//       },
//     ],
//   },
//   {
//     title: "Giving with Intention",
//     description:
//       "Align your charitable contributions with your values and maximize their impact on causes you care about.",
//     icon: FaHandsHelping,
//     questions: [
//       {
//         id: 1,
//         question: "What causes are you passionate about?",
//         placeholder: "e.g. Education, Health",
//         hint: "This helps us align your giving goals.",
//         image: "/images/giving-1.jpg",
//       },
//       {
//         id: 2,
//         question: "How much do you want to give annually?",
//         placeholder: "e.g. $1,000",
//         hint: "This sets your giving budget.",
//         image: "/images/giving-2.jpg",
//       },
//       {
//         id: 3,
//         question: "Do you prefer local or global impact?",
//         placeholder: "e.g. Local",
//         hint: "Helps us find the right charities for you.",
//         image: "/images/giving-3.jpg",
//       },
//     ],
//   },

//   {
//     title: "Retirement Income",
//     description: "Structure provide reliable income  ",
//     icon: FaHandsHelping,
//     questions: [
//       {
//         id: 1,
//         question: "What causes are you passionate about?",
//         placeholder: "e.g. Education, Health",
//         hint: "This helps us align your giving goals.",
//         image: "/images/giving-1.jpg",
//       },
//       {
//         id: 2,
//         question: "How much do you want to give annually?",
//         placeholder: "e.g. $1,000",
//         hint: "This sets your giving budget.",
//         image: "/images/giving-2.jpg",
//       },
//       {
//         id: 3,
//         question: "Do you prefer local or global impact?",
//         placeholder: "e.g. Local",
//         hint: "Helps us find the right charities for you.",
//         image: "/images/giving-3.jpg",
//       },
//     ],
//   },
// ];

export const LifestylePlans = [
  {
    title: "Dream Vacations",
    description:
      "You’ve earned the right to explore. Take that beach escape, or adventure abroad — this plan helps you travel confidently, without financial pressure.",
    icon: FaUmbrellaBeach,
    questions: [
      {
        id: 1,
        key: "destination",
        question: "Where do you want to go?",
        placeholder: "e.g. Mombasa, Paris, Bali",
        hint: "Whether it’s a beach, city or the desert, you only need 230 USD per month",
        image: "/images/Travelone.png",
      },
      {
        id: 2,
        key: "when",
        question: "When do you want to travel?",
        placeholder: "eg. December 2025",
        hint: "When are you planning to take this trip? Even an approximate time is fine.",
        image: "/images/Travetwo.png",
      },
      {
        id: 3,
        key: "duration",
        question: "How long will you stay?",
        placeholder: "eg. 7 days",
        hint: "How many days or weeks would you like to spend there?",
        image: "/images/Travelthree.png",
      },
      {
        id: 4,
        key: "budget",
        question: "What is your estimated cost?",
        placeholder: "eg. KES 5000",
        hint: "Your best estimate of the total cost. Don’t worry if you are not sure.",
        image: "/images/Travelfour.png",
      },
      {
        id: 5,
        key: "companions",
        question: "Who are you going with?",
        placeholder: "eg. Alone, With my family",
        hint: "Who are you travelling to your dream destination with",
        image: "/images/Travelfive.png",
      },

      {
        id: 6,
        key: "companions",
        question: "How much have you saved ?",
        placeholder: "eg.   KES 10,000",
        hint: "How much have you already put aside for this trip?",
        image: "/Travelfive.png",
      },
      {
        id: 7,
        key: "companions",
        question: "How much can you save monthly?",
        placeholder: "eg.   KES 10,000",
        hint: "How much have you already put aside for this trip?",
        image: "/Travelsix.png",
      },
    ],
  },

  {
    title: "Dream Car",
    description:
      "Owning your dream car isn’t just about luxury — it’s about freedom, comfort, and achievement. Plan for it early, and drive into your future with confidence.",
    icon: FaCar,
    questions: [
      {
        id: 1,
        key: "carType",
        question: "What’s your dream car?",
        placeholder: "e.g. Toyota Prado, BMW X3",
        hint: "Tell us the make or model you have your eyes on.",
        image: "/images/dc.jpg",
      },
      {
        id: 2,
        key: "purchasePlan",
        question: "Do you plan to buy new or used?",
        placeholder: "e.g. New, Used, Not sure yet",
        hint: "Your choice affects your savings goal and timeline.",
        image: "/images/dc2.jpg",
      },
      {
        id: 3,
        key: "estimatedCost",
        question: "What’s the estimated cost of your dream car?",
        placeholder: "e.g. KES 2,500,000",
        hint: "Include taxes, registration, and insurance if possible.",
        image: "/images/te1.jpeg",
      },
      {
        id: 4,
        key: "savingsProgress",
        question: "How much have you already saved toward it?",
        placeholder: "e.g. KES 500,000",
        hint: "This helps track your progress toward owning your car.",
        image: "/images/rs.avif",
      },
      {
        id: 5,
        key: "monthlySavings",
        question: "How much can you save monthly toward your car?",
        placeholder: "e.g. KES 20,000",
        hint: "Setting a consistent monthly goal brings you closer to the driver’s seat.",
        image: "/images/cs1.jpeg",
      },
    ],
  },
  {
    title: "Treating Your Family",
    description:
      "The best moments are shared. Plan ahead for birthdays, holidays, or surprise gifts — and enjoy giving without the financial strain.",
    icon: FaGift,
    questions: [
      {
        id: 1,
        key: "familyMembers",
        question: "Who in your family do you want to treat?",
        placeholder: "e.g. Parents, Children, Siblings",
        hint: "This helps you prioritize your gifting plans.",
        image: "/images/tfe.jpg",
      },
      {
        id: 2,
        key: "specialOccasions",
        question: "Which occasions are you planning for?",
        placeholder: "e.g. Birthdays, Holidays, Anniversaries",
        hint: "Knowing the occasion helps estimate costs and timing.",
        image: "/images/wif.jpg",
      },
      {
        id: 3,
        key: "giftTypes",
        question: "What types of gifts are you thinking of?",
        placeholder: "e.g. Toys, Clothes, Experiences",
        hint: "This gives clarity on budgeting and preparation.",
        image: "/images/bg1.avif",
      },
      {
        id: 4,
        key: "estimatedCost",
        question: "What’s your estimated total budget?",
        placeholder: "e.g. KES 20,000",
        hint: "Include all gifts and related costs to plan effectively.",
        image: "/images/te1.jpeg",
      },
      {
        id: 5,
        key: "monthlySavings",
        question: "How much can you save monthly for these gifts?",
        placeholder: "e.g. KES 3,000",
        hint: "A monthly saving plan ensures you’re ready for each occasion.",
        image: "/images/rs.avif",
      },
    ],
  },
];

export const HelpMeChoosePlans = [
  {
    question: "What is your primary financial goal?",
    options: [
      { label: "less than 6 months", value: "Less than 6 months" },
      { label: "6 months to 1 year", value: "6 months to 1 year" },
      { label: "1 to 3 years", value: "1 to 3 years" },
      { label: "more than 3 yeard", value: "3 to 5 years" },
    ],
  },
  {
    question: "What is your risk tolerance?",
    options: [
      { label: "Low Risk", value: "Low Risk" },
      { label: "Medium Risk", value: "Medium Risk" },
      { label: "High Risk", value: "High Risk" },
    ],
  },
  {
    question: "What is your investment horizon?",
    options: [
      { label: "Short-term (less than 1 year)", value: "Short-term" },
      { label: "Medium-term (1-3 years)", value: "Medium-term" },
      { label: "Long-term (3+ years)", value: "Long-term" },
    ],
  },
  {
    question: "What is your preferred investment type?",
    options: [
      { label: "Equity", value: "Equity" },
      { label: "Fixed Income", value: "Fixed Income" },
      { label: "Balanced", value: "Balanced" },
    ],
  },
  {
    question: "What is your expected return on investment?",
    options: [
      { label: "Low (3-5%)", value: "Low" },
      { label: "Medium (5-10%)", value: "Medium" },
      { label: "High (10%+)", value: "High" },
    ],
  },
];

export const services = [
  {
    label: "Individuals and families",
    icon: <FaPiggyBank size={26} />,
  },
  {
    label: "Entrepreneurs and business owners",
    icon: <FaShieldAlt size={26} />,
  },
  {
    label: "Small and large companies",
    icon: <FaBuilding size={26} />,
  },
  { label: "Finance teams", icon: <FaGlobe size={26} /> },
  {
    label: "Government agencies and organizations",
    icon: <FaUniversity size={26} />,
  },
];

export const whoweserve = [
  {
    label: "Pension Funds",
    icon: <FaPiggyBank size={26} />,
  },
  {
    label: "Insurance Companies",
    icon: <FaShieldAlt size={26} />,
  },
  {
    label: "NGOs and FBOs",
    icon: <FaBuilding size={26} />,
  },
  { label: "Local and International Businesses", icon: <FaGlobe size={26} /> },
  {
    label: "SMEs, Large Corporates",
    icon: <FaUniversity size={26} />,
  },

  {
    label: "Associations/ Endowments",
    icon: <FaHandshake size={26} />,
  },
];

export const RetirePlans = [
  {
    title: "Estate Planning",
    description:
      "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
    icon: FaFileInvoice,
    exploreMoreUrl: "/estate-planning",
    questions: [
      {
        id: 1,
        question: "Where are you in your legacy journey?",
        placeholder: "e.g.Just Starting, mid career, near retirement",
        hint: "Every journey is unique. Let;s start by undestanding where you are today.",
        image: "/images/legc.jpeg",
      },
      {
        id: 2,
        question: "Who are you planning for?",
        placeholder: "eg. Yourself, Family, Charity",
        hint: "Your legacy extends beyond yourself!",
        image: "/images/legc-plan.jpg",
      },
      {
        id: 3,
        question: "What do you care about most?",
        placeholder: "eg. Generational wealth, Giving back, Healthcare",
        hint: "Your values guide your financial decisions. What matters most to you?",
        image: "/images/life-3.jpeg",
      },
      {
        id: 4,
        question: "How much have you saved already?  ",
        placeholder: "eg. KES 500,000",
        hint: "Include retirement accounts, investments and other assets you have set aside for the future.",
        image: "/images/legc-mon1.jpeg",
      },
      {
        id: 5,
        question: "How much have are you willing to put aside every month?",
        placeholder: "eg.   KES 50,000",
        hint: "Regular contributions are key to building your legacy",
        image: "/images/legc-savings.jpeg",
      },
      {
        id: 6,
        question: "What is your ideal retirement age ?  ",
        placeholder: "eg.  50, 85, 60",
        hint: "When would you like to transition to the next phaseof your journey? ",
        image: "/images/oldyy12.jpeg",
      },
    ],
  },
  {
    title: "Generational Wealth Transfer",
    description:
      "Create a structured approach to passing financial assets, knowledge, and values to future generations.",
    icon: FaUsers,
    questions: [
      {
        id: 1,
        question: "What stage are you at in your wealth transfer plan?",
        placeholder: "e.g. Just beginning, have a plan, actively transferring",
        hint: "Understanding your current stage helps tailor the best strategy for your family.",
        image: "/images/legc.jpeg",
      },
      {
        id: 2,
        question: "Who are the primary beneficiaries of your wealth transfer?",
        placeholder: "e.g. Children, grandchildren, trusts, charities",
        hint: "Clarify who will receive your assets to ensure alignment with your wishes.",
        image: "/images/legc-plan.jpg",
      },
      {
        id: 3,
        question: "What are your goals for generational wealth transfer?",
        placeholder:
          "e.g. Preserve family business, education funds, philanthropy",
        hint: "Your intentions shape how your wealth is distributed and managed.",
        image: "/images/life-3.jpeg",
      },
      {
        id: 4,
        question:
          "Have you set up any trusts or legal entities for wealth transfer?",
        placeholder: "e.g. Family trust, charitable trust, foundations",
        hint: "Trusts can help protect assets and provide tax advantages for heirs.",
        image: "/images/legc-mon1.jpeg",
      },
      {
        id: 5,
        question:
          "How do you plan to educate your heirs about managing the inheritance?",
        placeholder: "e.g. Financial literacy programs, family meetings",
        hint: "Preparing heirs helps ensure the legacy is sustained responsibly.",
        image: "/images/legc-savings.jpeg",
      },
    ],
  },
  {
    title: "Long-Term Care",
    description:
      "Prepare for potential health needs without compromising the financial legacy you intend to leave behind.",

    icon: FaHeartbeat,
    questions: [
      {
        id: 1,
        question: "What type of long-term care do you anticipate?",
        placeholder: "e.g. Assisted living, home care, nursing home",
        hint: "Understanding your care preference helps tailor your plan.",
        image: "/images/long-term-care-1.png",
      },
      {
        id: 2,
        question: "When do you expect to start needing care?",
        placeholder: "e.g. 5 years from now, immediately",
        hint: "An approximate timeline helps us estimate costs.",
        image: "/images/long-term-care-2.png",
      },
      {
        id: 3,
        question: "What is your estimated monthly care cost?",
        placeholder: "e.g. $2,500",
        hint: "This helps us prepare a realistic savings plan.",
        image: "/images/long-term-care-3.png",
      },

      {
        id: 4,
        question: "How much have you already saved for long-term care?",
        placeholder: "e.g. $20,000",
        hint: "Let us know what you’ve set aside so far.",
        image: "/images/long-term-care-4.png",
      },

      {
        id: 5,
        question: "How much can you save monthly toward this plan?",
        placeholder: "e.g. $500",
        hint: "Your monthly savings capacity helps us create your timeline.",
        image: "/images/long-term-care-5.png",
      },

      {
        id: 6,
        question: "Do you have family or insurance support?",
        placeholder: "e.g. Yes, family help or LTC insurance",
        hint: "This affects your overall care plan and budget.",
        image: "/images/long-term-care-6.png",
      },
    ],
  },
  {
    title: "Giving with Intention",
    description:
      "Align your charitable contributions with your values and maximize their impact on causes you care about.",
    icon: FaHandsHelping,
    questions: [
      {
        id: 1,
        question: "What causes matter most to you?",
        placeholder: "e.g. Education, Environment, Health",
        hint: "Identifying your passions helps focus your giving.",
        image: "/images/giving-intent-1.jpg",
      },
      {
        id: 2,
        question: "How much do you want to donate annually?",
        placeholder: "e.g. $1,000",
        hint: "This helps set your giving budget.",
        image: "/images/giving-intent-2.jpg",
      },
      {
        id: 3,
        question: "Do you prefer one-time gifts or recurring donations?",
        placeholder: "e.g. Monthly, Quarterly, One-time",
        hint: "This affects your giving schedule and impact.",
        image: "/images/giving-intent-3.jpg",
      },
      {
        id: 4,
        question: "Would you like to support local or global organizations?",
        placeholder: "e.g. Local",
        hint: "Helps us align your giving to your preferred communities.",
        image: "/images/giving-intent-4.jpg",
      },

      {
        id: 5,
        question: "Are you interested in volunteering your time as well?",
        placeholder: "e.g. Yes, No, Maybe",
        hint: "This adds another dimension to your giving plan.",
        image: "/images/giving-intent-5.jpg",
      },
      {
        id: 6,
        question: "Would you like help tracking the impact of your donations?",
        placeholder: "e.g. Yes, I want updates",
        hint: "Stay informed about how your gifts make a difference.",
        image: "/images/giving-intent-6.jpg",
      },
    ],
  },
  {
    title: "Retirement income",
    description:
      "Prepare today for a comfortable and fulfilling tomorrow. This plan helps you estimate your retirement needs, set realistic savings goals, and envision the lifestyle you want once you stop working.",
    icon: FaPiggyBank,
    exploreMoreUrl: "/estate-planning",
    questions: [
      {
        id: 1,
        question: "At what age do you plan to retire?",
        placeholder: "e.g. 60",
        hint: "This helps us estimate how long your retirement savings need to last.",
        image: "/images/retirement-1.png",
      },
      {
        id: 2,
        question: "What kind of lifestyle do you envision during retirement?",
        placeholder: "e.g. Travel, hobbies, quiet life",
        hint: "Share your dreams to tailor your retirement plan.",
        image: "/images/retirement-2.png",
      },
      {
        id: 3,
        question: "What are your expected monthly expenses in retirement?",
        placeholder: "e.g. $3,000",
        hint: "Includes housing, food, healthcare, leisure, and more.",
        image: "/images/retirement-3.png",
      },
      {
        id: 4,
        question: "How much have you saved for retirement so far?",
        placeholder: "e.g. $50,000",
        hint: "This gives us a starting point for your plan.",
        image: "/images/retirement-4.png",
      },
      {
        id: 5,
        question: "How much can you save monthly toward retirement?",
        placeholder: "e.g. $500",
        hint: "Regular savings help you reach your goals on time.",
        image: "/images/retirement-5.png",
      },
      {
        id: 6,
        question: "Do you expect any additional income during retirement?",
        placeholder: "e.g. Pension, rental income",
        hint: "Helps calculate your total retirement resources.",
        image: "/images/retirement-6.png",
      },
    ],
  },
];
export const EducationPlans = [
  {
    title: "Home Ownership Goals",
    description:
      "From your first home to your forever home, we help you plan and save for every stage of your home ownership journey",
    icon: FaHouseUser,
    exploreMoreUrl: "/home-ownership",
    questions: [
      {
        id: 1,
        question: "Where are you in your homeownership journey?",
        placeholder:
          "e.g. Just starting, saving for down payment, already own a home",
        hint: "Understanding your stage helps us guide you better toward your housing goals.",
        image: "/images/Home-own1.jpeg",
      },
      {
        id: 2,
        question: "Who will live in the home with you?",
        placeholder: "e.g. Just me, Partner, Family, Investment tenants",
        hint: "Knowing who you're planning for helps shape your ideal home choice.",
        image: "/images/Fam-home1.jpeg",
      },
      {
        id: 3,
        question: "What type of home do you dream of?",
        placeholder:
          "e.g. Apartment, Townhouse, Family house, Land for building",
        hint: "Your lifestyle and aspirations influence the kind of property that suits you best.",
        image: "/images/Home.jpeg",
      },
      {
        id: 4,
        question: "How much have you saved toward your home?",
        placeholder: "e.g. KES 500,000",
        hint: "Your savings, including down payment and related funds, shape your affordability.",
        image: "/images/home-save.jpg",
      },
      {
        id: 5,
        question: "What is your monthly housing budget?",
        placeholder: "e.g. KES 30,000",
        hint: "Include mortgage, rent-to-own payments, or maintenance costs you’re comfortable with.",
        image: "/images/house-budget1.jpeg",
      },
      {
        id: 6,
        question: "When do you want to own your home?",
        placeholder: "e.g. 2 years, 5 years, 10 years",
        hint: "Your timeline helps align savings, financing, and planning strategies.",
        image: "/images/home-buying1.jpeg",
      },
    ],
  },
  {
    title: "Medical Emergencies",
    description:
      "Hospital bills, medication, specialist visits, and other unexpected medical expenses are all covered in your financial plan",
    icon: FaHospital,
    questions: [
      {
        id: 1,
        question: "Where are you in preparing for medical emergencies?",
        placeholder: "e.g. Just starting, have partial cover, fully insured",
        hint: "Knowing your current preparedness helps us guide your next step.",
        image: "/images/medic-emergency.jpg",
      },
      {
        id: 2,
        question: "Who are you preparing for?",
        placeholder: "e.g. Yourself, Spouse, Children, Parents",
        hint: "Medical emergencies often affect loved ones too, not just you.",
        image: "/images/med-prep1.jpeg",
      },
      {
        id: 3,
        question: "What type of medical cover do you currently have?",
        placeholder: "e.g. NHIF, Private insurance, None",
        hint: "Your existing support determines what extra protection you may need.",
        image: "/images/med-insurance.jpg",
      },
      {
        id: 4,
        question: "How much have you set aside for emergencies?",
        placeholder: "e.g. KES 100,000",
        hint: "Savings can cover expenses not included in insurance plans.",
        image: "/images/medi-savings.jpeg",
      },
      {
        id: 5,
        question: "What is your monthly budget for health coverage?",
        placeholder: "e.g. KES 5,000",
        hint: "Planning for ongoing contributions ensures sustainable protection.",
        image: "/images/health-budget1.jpeg",
      },
      {
        id: 6,
        question: "What matters most to you in medical planning?",
        placeholder:
          "e.g. Fast access to hospitals, Cover for chronic illness, Family security",
        hint: "Your priorities help identify the best solutions for peace of mind.",
        image: "/images/hospital-beds.jpg",
      },
    ],
  },
  {
    title: "Education Planning",
    description:
      "Education is a lifelong journey, and we help you plan ahead, so you are financially prepared at every stage.",
    icon: FaGraduationCap,
    questions: [
      {
        id: 1,
        question: "Where are you in your education planning journey?",
        placeholder:
          "e.g. Just starting, saving for primary, saving for university",
        hint: "Understanding your stage helps in setting realistic education goals.",
        image: "/images/eduu-plan.jpeg",
      },
      {
        id: 2,
        question: "Who are you planning education for?",
        placeholder: "e.g. Myself, Child, Sibling, Family member",
        hint: "Education planning often extends beyond just yourself.",
        image: "/images/educ1.jpeg",
      },
      {
        id: 3,
        question: "What type of education are you planning for?",
        placeholder:
          "e.g. Local university, International school, Professional certification",
        hint: "Different education paths come with different costs and timelines.",
        image: "/images/educ-levell.jpeg",
      },
      {
        id: 4,
        question: "How much have you saved so far?",
        placeholder: "e.g. KES 200,000",
        hint: "Your current savings help determine the gap between now and your goal.",
        image: "/images/educ-save1.jpeg",
      },
      {
        id: 5,
        question: "What is your monthly budget for education savings?",
        placeholder: "e.g. KES 10,000",
        hint: "Consistent contributions are key to building a strong education fund.",
        image: "/images/edu-budget.jpg",
      },
      {
        id: 6,
        question: "When will the funds be needed?",
        placeholder: "e.g. 2 years, 5 years, 10 years",
        hint: "Your timeline affects how much and how you should invest or save.",
        image: "/images/edu-mon.jpeg",
      },
    ],
  },
  {
    title: "Insurance Premiums",
    description:
      "We help you plan for insurance premiums; so you are covered when it matters most, without compromising your financial stability.",
    icon: FaShieldAlt,
    exploreMoreUrl: "/insurance-premiums",
    questions: [
      {
        id: 1,
        question: "Where are you in your insurance journey?",
        placeholder:
          "e.g. Just exploring, Already have some policies, Looking to upgrade",
        hint: "Your stage determines the type of guidance you may need.",
        image: "/images/insurance-jon1.jpeg",
      },
      {
        id: 2,
        question: "Who are you getting insurance coverage for?",
        placeholder: "e.g. Myself, Spouse, Children, Family business",
        hint: "Insurance can protect not just you, but the people and assets you care about.",
        image: "/images/famil-biss.jpeg",
      },
      {
        id: 3,
        question: "What type of insurance are you considering?",
        placeholder: "e.g. Health, Life, Motor, Property",
        hint: "Different policies serve different needs — the right mix provides peace of mind.",
        image: "/images/ins-types1.jpeg",
      },
      {
        id: 4,
        question: "How much are you currently paying in premiums?",
        placeholder: "e.g. KES 15,000 per year",
        hint: "This helps identify if you are underinsured, overpaying, or well balanced.",
        image: "/images/insurance-prem1.jpeg",
      },
      {
        id: 5,
        question: "What is your budget for future premiums?",
        placeholder: "e.g. KES 5,000 per month",
        hint: "Budgeting ensures your policies remain affordable and sustainable.",
        image: "/images/insurance-budget1.jpeg",
      },
      {
        id: 6,
        question: "What matters most in your insurance planning?",
        placeholder:
          "e.g. Comprehensive coverage, Low cost, Flexibility, Quick claims",
        hint: "Your priorities help select the right policies to protect your goals.",
        image: "/images/ins-care1.jpeg",
      },
    ],
  },
];

export const StrategyContent = [
  {
    value: "equity-strategy",
    title: "Equity Strategy",
    text: "Pursuing Sustainable Capital Growth Across Market Cycles- This is to appear on the website while the rest is hidden. ",
    body: "Our Equity Strategy is designed for institutions seeking to maximize long-term capital appreciation through high-conviction investments in quality companies. We employ a fundamentally driven, bottom-up approach that targets businesses with strong earnings potential, durable competitive advantages, and prudent capital allocation. ",

    differentiators: [
      {
        title: "Rigorous Stock Selection",
        description:
          "Active, research-intensive process grounded in intrinsic value and growth potential",
      },
      {
        title: "Sector & Geographic Diversification",
        description:
          "Risk-adjusted exposure across developed, emerging, and frontier markets",
      },
      {
        title: "Forward-Looking Themes",
        description:
          "Allocation to secular growth trends in technology, healthcare innovation, energy transition, and digital infrastructure",
      },
      {
        title: "Sustainable Investing Integration",
        description:
          "ESG considerations embedded into investment decisions to ensure alignment with global sustainability standards and stakeholder expectations",
      },
    ],

    media: {
      image: "/images/Charlie.jpg",
      alt: "Advisory Team",
    },

    quote:
      "“Equity is the art of patience; time turns great companies into lasting wealth.” – Charles Miano",

    featuredDeal: {
      title: "Institutional Application:",
      description:
        " A pension fund with multi-decade liabilities may allocate to this strategy to achieve real returns above inflation while accessing global equity growth opportunities, including early-stage innovation in emerging markets. ",
    },
  },

  {
    value: "Balanced Strategy ",
    title: "Balanced Strategy ",
    text: "Optimizing Risk-Adjusted Returns Through Asset Class Synergy- This is to appear on the website while the rest is hidden. ",
    body: "The Balanced Strategy is tailored for institutions that require capital growth alongside consistent income. This multi-asset approach strategically blends equities with fixed income instruments to generate a resilient portfolio that performs across varying economic conditions. ",

    differentiators: [
      {
        title: "Dynamic Asset Allocation",
        description:
          "Tactical shifts driven by macroeconomic indicators, interest rate trends, and valuation signals ",
      },
      {
        title: "Dual Objective",
        description:
          "Capital appreciation from equities combined with steady income from bonds and dividend-yielding assets ",
      },
      {
        title: "Volatility Management",
        description:
          "Smoother return profile compared to pure equity strategies ",
      },
      {
        title: "Inflation Buffer",
        description:
          "Selective positioning in inflation-sensitive securities and real assets ",
      },
    ],

    media: {
      image: "/images/mwongelam.jpg",
      alt: "Private Credit Team",
    },

    quote:
      "A balanced portfolio is wealth in harmony; where endurance beats extremes.” – Mercy Mwongela",

    featuredDeal: {
      title: "Institutional Application:",
      description:
        " An insurance company managing policyholder reserves may benefit from this strategy’s balanced approach—generating steady income streams while capturing equity upside to offset long-term liabilities. ",
    },
  },

  {
    value: "Fixed Income Strategy  ",
    title: "Fixed Income Strategy  ",
    text: "Preserving Capital and Generating Reliable Income- This is to appear on the website while the rest is hidden",
    body: "Our Fixed Income Strategy is purpose-built for institutions prioritizing capital preservation, income consistency, and downside protection. The strategy focuses on investment-grade sovereign, quasi-sovereign, and high-quality corporate debt, guided by active duration management and credit selection. ",

    differentiators: [
      {
        title: "Credit Quality Discipline",
        description:
          "Emphasis on resilient issuers with strong fundamentals and favorable risk-return profiles ",
      },
      {
        title: "Interest Rate Positioning",
        description:
          "Tactical allocation along the yield curve to optimize duration exposure and interest rate sensitivity ",
      },
      {
        title: "Inflation Protection",
        description:
          "Integration of inflation-linked securities to safeguard purchasing power ",
      },
      {
        title: "Liability Matching",
        description:
          "Well-suited for institutions deploying liability-driven investment (LDI) frameworks to meet known cash flow needs",
      },
    ],

    media: {
      image: "/images/Charlie.jpg",
      alt: "Infrastructure Projects",
    },
    quote:
      "“In uncertain markets, fixed income delivers the rarest asset of all: predictable cash flow.” – Charles Miano",

    featuredDeal: {
      title: "Institutional Application:",
      description:
        "A sovereign wealth fund or endowment seeking low-volatility income to support national development projects or annual grant-making may deploy this strategy to stabilize returns through market cycles. ",
    },
  },
];

export const whatweoffer = [
  {
    value: "Capital-Raising",
    title: "Capital Raising",
    text: "Structuring and Sourcing Capital for Sustainable Growth.",
    body: "Raising capital isn’t just about finding funding; it’s about finding the right kind of capital, under the right structure, at the right time. Whether you are expanding operations, restructuring, or investing in new markets, we will help you access strategic funding to support your next phase of growth.",
    extraText:
      "We focus on sustainable strategies that maximize investor value while supporting business growth.",
    services: [
      {
        title: "Custom Funding Strategies",
        description:
          "Designing custom funding strategies aligned with your business stage and sector",
      },
      {
        title: "Investor Network Access",
        description:
          "Mapping and connecting you to our trusted network of institutional and private investors",
      },
      {
        title: "Investment Documentation",
        description:
          "Preparing professional investment documents: pitch decks, financial models, and valuations",
      },
      {
        title: "Transaction Support",
        description:
          "Full transaction support: due diligence, investor negotiations, and term sheet execution",
      },
    ],
    media: {
      image: "/Pius-m1.jpg",
      alt: "Advisory Team",
    },
    quote:
      "We don’t just raise capital, we raise the belief that tomorrow can be bigger than today.” – Pius Muchiri",
    featuredDeal: {
      title: "Advisory Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },

  {
    value: "Business Valuation",
    title: "Business Valuation",
    text: "We turn complex numbers into clear insights so you can move forward with confidence. ",
    body: "A clear, credible business valuation is essential. Whether you are planning an exit, raising funds, buying a company, or restructuring. We help individuals and businesses understand the real worth of their assets and what drives value.",
    extraText:
      "Designed for investors who seek a blend of growth and stability across market cycles.",
    services: [
      {
        title: "Standards-Aligned Reporting",
        description:
          "We deliver valuation reports that comply with international standards, including IVSC, IFRS, and CMA guidelines.",
      },
      {
        title: "Robust Methodologies",
        description:
          "We apply multiple approaches—DCF, market comparables, and precedent transactions—for accuracy and reliability.",
      },
      {
        title: "Benchmarking & Scenario Testing",
        description:
          "We conduct industry benchmarking, scenario analysis, and sensitivity testing to assess performance under different conditions.",
      },
      {
        title: "Tailored Valuation Reviews",
        description:
          "We prepare valuations specifically designed for boards, investors, and auditors, ensuring clarity and decision-making support.",
      },
    ],
    media: {
      image: "/images/abie.jpeg",
      alt: "Private Credit Team",
    },
    quote:
      "True value is not only in today’s numbers, but in tomorrow’s potential.” – Abby Mungai",
    featuredDeal: {
      title: "Advisory Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },

  {
    value: "Private Funding and Investment Advisory   ",
    title: "Private Funding and Investment Advisory   ",
    text: "Access Capital That Is Beyond Public Markets",
    body: "Not all capital comes from banks or stock markets. For clients looking to raise funds or invest in private market opportunities, we offer expert guidance through Africa’s growing private capital ecosystem.",
    extraText: "Ideal for investors who want stable income with minimal risk.",
    services: [
      {
        title: "Deal Sourcing",
        description:
          "We identify and access attractive opportunities in private equity and private debt markets tailored to investor mandates.",
      },
      {
        title: "Investment Structuring",
        description:
          "We design flexible investment structures—equity, convertible debt, or mezzanine finance—to balance risk and return.",
      },
      {
        title: "Exit Planning & Support",
        description:
          "We develop and execute exit strategies, including secondaries, buyouts, or strategic sales, to maximize investor outcomes.",
      },
      {
        title: "Portfolio Monitoring",
        description:
          "We provide ongoing oversight of private portfolios, ensuring performance tracking, reporting, and value optimization.",
      },
    ],
    media: {
      image: "/Pius-m1.jpg",
      alt: "Infrastructure Projects",
    },
    quote:
      "The best investor isn’t defined by pockets, but by vision aligned with yours.” – Pius Muchiri",
    featuredDeal: {
      title: "Advisory Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },

  {
    value: "Business Deals",
    title: "Business Deals and Partnerships",
    text: "Expert Support Across Your Deals’ Lifecycles  ",
    body: "If you are looking to buy, sell, or merge a business, we provide expert support at every step.  Our role is to ensure the deal is not only financially sound but also strategically aligned with your growth or exit goals.",
    extraText:
      "Designed for investors who seek a blend of growth and stability across market cycles.",
    services: [
      {
        title: "Buy-side and sell-side advisory",
        description:
          "We guide businesses through both acquisitions and divestitures, ensuring transactions are strategically aligned and value-driven",
      },
      {
        title: "Screening and identifying strategic opportunities",
        description:
          "We identify and evaluate strategic opportunities that best fit your business objectives, sector trends, and growth potential.",
      },
      {
        title: "Valuation and deal structuring",
        description:
          "We provide accurate business valuations and design deal structures that maximize financial and strategic outcomes.",
      },
      {
        title: "Negotiation, execution, and post-deal integration",
        description:
          "We support you through negotiations, transaction closing, and seamless post-deal integration to ensure long-term success.",
      },
    ],
    media: {
      image: "/images/abie.jpeg",
      alt: "Private Credit Team",
    },
    quote:
      "In every deal, the rarest and most valuable currency is trust.” – Abby Mungai",
    featuredDeal: {
      title: "Advisory Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },
];

export const whatweoffertreasury = [
  {
    value: "Customized liquidity Portfolios",
    title: "Customized liquidity Portfolios",
    text: "Tailored solutions that align your cash needs with market opportunities and your business’ needs",
    body: "Managing liquidity isn’t just about keeping cash; it’s about making sure your money is structured to meet your needs, stay safe, and remain accessible when it matters most. Whether you are covering daily operations, planning for large payments, or preparing for growth, we help you align liquidity with your broader financial strategy.",
    extraText:
      "We focus on sustainable strategies that maximize investor value while supporting business growth.",
    services: [
      {
        title: "Tailored Horizon",
        description:
          "Investments are structured to match your short, medium, or long-term liquidity needs.",
      },
      {
        title: "Risk Alignment",
        description:
          "Portfolios are built to reflect your comfort level with risk while preserving capital.",
      },
      {
        title: "Balanced Performance",
        description:
          "We ensure flexibility and accessibility while optimizing returns.",
      },
    ],
    media: {
      image: "/images/mwongelam.jpg",
      alt: "Advisory Team",
    },
    quote:
      "“Liquidity should serve strategy, not limit it; bespoke portfolios make every shilling count.” – Mercy Mwongela",
    featuredDeal: {
      title: "Treasury Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },

  {
    value: "Short-Term Investment Strategies",
    title: "Short-Term Investment Strategies",
    text: " Preserve capital while generating returns with minimal risk.",
    body: "A clear, credible business valuation is essential. Whether you are planning an exit, raising funds, buying a company, or restructuring. We help individuals and businesses understand the real worth of their assets and what drives value.",
    extraText:
      "Designed for investors who seek a blend of growth and stability across market cycles.",
    services: [
      {
        title: "Safe Investments",
        description:
          "Using treasury bills, commercial paper, and other secure instruments.",
      },
      {
        title: "Reliable Income",
        description: "Generating steady yields to enhance cash productivity.",
      },
      {
        title: "Accessible Liquidity",
        description: "Ensuring funds are available when you need them.",
      },
    ],
    media: {
      image: "/Pius-m1.jpg",
      alt: "Private Credit Team",
    },
    quote:
      "“Short-term doesn’t mean short-sighted; discipline turns idle cash into steady gains.” – Pius Muchiri",
    featuredDeal: {
      title: "Treasury Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },

  {
    value: "Liquidity Access Planning",
    title: "Liquidity Access Planning",
    text: " Tools and structures to ensure access to your funds when needed.",
    body: "Ensuring your liquidity supports both short-term needs and long-term financial goals.",
    extraText: "Ideal for investors who want stable income with minimal risk.",
    services: [
      {
        title: "Structure Review",
        description:
          "Assessing your existing liquidity against your broader financial objectives.",
      },
      {
        title: "Optimal Allocation",
        description:
          "Balancing immediate access, near-term needs, and longer-term reserves.",
      },
      {
        title: "Growth Alignment",
        description:
          "Positioning liquidity to support stability and future opportunities.",
      },
    ],
    media: {
      image: "/images/mwongelam.jpg",
      alt: "Infrastructure Projects",
    },
    quote:
      "True strength is never caught off guard; planned liquidity keeps opportunity within reach.” Dr. Mercy Njoroge Mwongela",
    featuredDeal: {
      title: "Treasury Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },
  {
    value: "Daily Liquidity Monitoring & Reporting",
    title: "Daily Liquidity Monitoring & Reporting",
    text: "Transparent, real-time insights into portfolio performance and accessibility",
    body: "Providing real-time visibility into portfolio performance and accessibility.",
    extraText:
      "Designed for investors who seek a blend of growth and stability across market cycles.",
    services: [
      {
        title: "Active Oversight",
        description: "Tracking daily portfolio activity and cash levels.",
      },
      {
        title: "Transparent Reporting",
        description: "Giving clear insights into availability and performance.",
      },
      {
        title: "Proactive Adjustments",
        description:
          "Recommending timely changes based on market conditions and evolving needs.",
      },
    ],
    media: {
      image: "/images/Fredo.png",
      alt: "Private Credit Team",
    },
    quote:
      "Markets move fast—daily oversight keeps your liquidity a step ahead” – Fredrick Okudo",
    featuredDeal: {
      title: "Treasury Application:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },
];

export const teamAlbumMembers = [
  {
    name: "Mercy Njoroge",
    role: "Chief Customer Experience Officer",
    photoUrl: "/images/IMG_6199.jpg",
  },
  {
    name: "Abby Mungai",
    role: "General Wealth Manager",
    photoUrl: "/images/IMG_6205.jpg",
  },
  {
    name: "Lilian Mungai",
    role: "Finance & Operations Manager",
    photoUrl: "/images/IMG_6208.jpg",
  },
  {
    name: "Irene Okoth",
    role: "HR Officer",
    photoUrl: "/images/IMG_6221.jpg",
  },
  {
    name: "Kezzy Omoni",
    role: "Digital Creative Director",
    photoUrl: "/images/IMG_6222.jpg",
  },
];

export const Lifestyle = [
  {
    title: "Food & Household essentials",
    description:
      "Everyday essentials may seem small, but they form the foundation of a dignified life. Plan for them, and protect your peace.",
    icon: FiShoppingCart,
    questions: [
      {
        id: 1,
        question: "What are your monthly food and grocery needs?",
        placeholder: "e.g. fruits, grains, cleaning items",
        hint: "Think about your typical household shopping list—what do you usually buy every month?",
        image: "/images/Fng1.jpeg",
      },
      {
        id: 2,
        question: "How often do you shop for groceries?",
        placeholder: "e.g. weekly, bi-weekly, monthly",
        hint: "Your shopping frequency helps you plan your budget better.",
        image: "/images/fng.jpeg",
      },
      {
        id: 3,
        question: "How many people are in your household?",
        placeholder: "e.g. 1 person, family of 4",
        hint: "The number of people determines how much you spend on essentials.",
        image: "/images/fng2.jpeg",
      },
      {
        id: 4,
        question: "What is your estimated monthly cost for essentials?",
        placeholder: "e.g. KES 15,000",
        hint: "Give your best estimate — include both food and household items.",
        image: "/images/fngg3.jpeg",
      },
      {
        id: 5,
        question: "How much have you already budgeted or saved?",
        placeholder: "e.g. KES 5,000",
        hint: "Enter how much you currently have set aside for these expenses.",
        image: "/images/fng44.jpeg",
      },
      {
        id: 6,
        question: "How much can you set aside monthly?",
        placeholder: "e.g. KES 3,000",
        hint: "This helps create a realistic savings plan for your essential needs.",
        image: "/images/fng45.avif",
      },
    ],
  },
  {
    title: "Rent Payments",
    description:
      "A roof over your head is more than a shelter, it’s stability. Whether you’re renting or building a legacy, secure it wisely.",
    icon: FaHome,
    questions: [
      {
        id: 1,
        question: "How much is your monthly rent?",
        placeholder: "e.g. KES 25,000",
        hint: "Include any service charges or utilities that come with your rent.",
        image: "/images/mr1.jpeg",
      },
      {
        id: 2,
        question: "When is your next rent due?",
        placeholder: "e.g. 1st of every month",
        hint: "Knowing your payment date helps you plan ahead.",
        image: "/images/rd1.jpeg",
      },
      {
        id: 3,
        question: "How much have you already saved for rent?",
        placeholder: "e.g. KES 10,000",
        hint: "Track your current progress toward your next payment.",
        image: "/images/rs.avif",
      },
      {
        id: 4,
        question: "How much can you set aside monthly?",
        placeholder: "e.g. KES 5,000",
        hint: "Small, consistent amounts make rent less stressful.",
        image: "/images/rs1.avif",
      },
      {
        id: 5,
        question: "Do you plan to move or renew your lease soon?",
        placeholder: "e.g. Move next year",
        hint: "This helps plan for deposits, moving costs, or rent adjustments.",
        image: "/images/rs5.jpg",
      },
    ],
  },
  {
    title: "Transport",
    description:
      "Mobility gives you access to opportunity. Budget for it, because how you move determines where you go.",
    icon: FaCarSide,
    questions: [
      {
        id: 1,
        question: "What’s your main mode of transport?",
        placeholder: "e.g. Matatu, personal car, bike",
        hint: "Knowing this helps estimate your travel expenses.",
        image: "/images/ree.jpg",
      },
      {
        id: 2,
        question: "How much do you spend on transport monthly?",
        placeholder: "e.g. KES 6,000",
        hint: "Include daily commutes, fuel, and occasional trips.",
        image: "/images/te1.jpeg",
      },
      {
        id: 3,
        question: "Do you have any upcoming trips or travel plans?",
        placeholder: "e.g. Upcountry visit in December",
        hint: "Plan for one-off journeys in your transport budget.",
        image: "/images/ut1.jpeg",
      },
      {
        id: 4,
        question: "Would you like to start saving for a vehicle or upgrade?",
        placeholder: "e.g. Yes, saving for a car",
        hint: "Helps you map out long-term mobility goals.",
        image: "/images/bl.jpg",
      },
      {
        id: 5,
        question: "How much can you save toward transport each month?",
        placeholder: "e.g. KES 2,000",
        hint: "A little saved monthly goes a long way over time.",
        image: "/images/te2.jpeg",
      },
    ],
  },
  {
    title: "Clothing & Utilities",
    description:
      "Dignity is in the details; clean clothes, running water and power when you need it. Plan for them, to preserve your comfort and confidence.",
    icon: FaTshirt,
    questions: [
      {
        id: 1,
        question: "How much do you spend on clothing and laundry monthly?",
        placeholder: "e.g. KES 3,000",
        hint: "Include purchases, repairs, or dry cleaning.",
        image: "/images/brj.jpg",
      },
      {
        id: 2,
        question: "What are your average monthly utility bills?",
        placeholder: "e.g. Electricity KES 2,000, Water KES 1,000",
        hint: "Estimate your total household bills per month.",
        image: "/images/mub1.jpeg",
      },
      {
        id: 3,
        question: "Do your utility costs fluctuate seasonally?",
        placeholder: "e.g. Higher in December",
        hint: "Helps anticipate and plan for high-usage months.",
        image: "/images/mub22.jpeg",
      },
      {
        id: 4,
        question: "Do you have any pending bills or arrears?",
        placeholder: "e.g. Electricity bill pending KES 800",
        hint: "Helps prioritize urgent payments first.",
        image: "/images/sm.jpg",
      },
      {
        id: 5,
        question: "How much can you allocate monthly for these needs?",
        placeholder: "e.g. KES 5,000",
        hint: "Set a comfortable budget for consistent peace of mind.",
        image: "/images/nm.avif",
      },
    ],
  },
];

export const commonfaqs = [
  {
    value: "a",
    title: "What is a Unit Trust?",
    text: "A Unit Trust, also known as a mutual fund, is a pooled investment vehicle where investors' money is collectively managed by a professional fund manager.​",
  },
  {
    value: "b",
    title: "What are the differences between the various funds?",
    text: "Nabo Money Market Fund(KES & USD), seeks to maximize current income by investing primarily in a diversified portfolio of short-term debt securities and instruments whilst aiming to preserve capital and maintain a high degree of liquidity.​ Nabo Fixed Income Fund(KES & USD), The fund generates stable capital growth over the medium to long term. Under this fund, we invest in a diversified range of Fixed Income Securities across Africa. ",
  },
  {
    value: "c",
    title: "Is my money safe?",
    text: "Yes, your money and assets that are purchased are safely secured in a bank custody account and will not be affected by failure of any service provider.​",
  },
  {
    value: "d",
    title: "Can I top up my account?",
    text: "Yes, a client can top up their account as many times as they wish.​",
  },
  {
    value: "e",
    title: "How do I withdraw my funds?",
    text: "Send us a redemption request via email to clientservice@nabocapital.com  quoting the amount to be redeemed.​",
  },
  {
    value: "f",
    title:
      "How long does it take for funds to be transferred into my account when I redeem?​",
    text: "It takes 2 to 3 working days from the date of request. This is a requirement of the regulation governing unit trusts.​",
  },
  {
    value: "g",
    title: "What is the minimum investment amount for the various funds?​",
    text: "Currently, the minimum investment amount for all funds is KES 100,000. But clients who have below KES 100,000 can channel the funds through Chumz App.​",
  },
  {
    value: "h",
    title: "What is the minimum top-up amount for the various funds?​",
    text: "The minimum top-up amount for all funds is KES 10,000​",
  },
  {
    value: "i",
    title: "What hidden charges are there?",
    text: "There are none",
  },
  {
    value: "j",
    title: "Can I top up my account?",
    text: "You can contact our customer support team via email at",
  },
  {
    value: "k",
    title: "Is there any locking period?​",
    text: "Only for Nabo KES Fixed Income Fund for a period of 6 months on the initial investment, subsequent top-ups are not locked.",
  },
  {
    value: "l",
    title: "Are the returns guaranteed?​",
    text: "No, we are not required to guarantee returns as per the CMA regulations as the assets we invest in don’t guarantee returns.​",
  },
  {
    value: "m",
    title: "What is a Portfolio?​",
    text: "A portfolio is a collection of investments, including stocks, bonds, and other assets i.e. real estate, and commodities, owned by an individual or entity, aimed at diversifying risk and achieving financial objectives such as capital growth or stable, consistent income. ​",
  },
  {
    value: "n",
    title: "How do I monitor my Investment?​",
    text: "We shall be providing you with monthly statements that you can use to track your investments, and factsheets that indicate the performance of all the funds monthly. ​",
  },
  {
    value: "o",
    title: "Do you have Sharia-compliant investment solutions? ​",
    text: "We are in the process of providing this solution to our clients in the next coming quarters of the year.​",
  },
  {
    value: "p",
    title: "Who are the key players to secure my investment?​",
    text: "On top of CMA being the regulator, these are the key service providers to make sure clients’ investment is secure and does not mix with Fund Manager’s money​",
  },
  {
    value: "q",
    title: "Why is the dollar rate lower than the KES rate​",
    text: "Investment return rates in USD may appear lower than KES due to factors such as;​ Demand for Currency(strengthen of USD against KES).​Inflation(US has lower inflation rate than Kenya).​This will mean the FX gain will be high in the range of 12% - 15% and when added back to the USD rate, it will be higher than the KES rate.​",
  },
  {
    value: "r",
    title: "Why is your MMF KES giving greater returns than the FIF KES ",
    text: "The money market fund has a weighted average tenor of 13 months, which allows us to identify higher-yielding assets in the short term. The Fixed Income Fund is invested in longer-term assets such as Govt. Bonds whose returns may, from time to time, be weighed down by older dated securities.​",
  },
  {
    value: "s",
    title: "Where do we invest? ​",
    text: "We invest primarily across Africa excluding South Africa.​",
  },
  {
    value: "t",
    title:
      "Is Chumz legitimate and what is the relationship between Nabo Capital and Chumz? ​",
    text: "Chumz is a legitimate mobile application that allows you to invest in Nabo Capital’s funds. It is a product of Nabo Capital and is regulated by the Capital Markets Authority (CMA).​",
  },
  {
    value: "u",
    title: "How long has Nabo been in existence?",
    text: "Nabo Capital is a 3rd generation investment firm, leveraging over 50 years of experience under Centum Investments PLC and 11 years as a stand-alone fund manager.​",
  },
  {
    value: "v",
    title: "Can I create a family trust with NABO? ​",
    text: "Yes, we will be launching our family trust solution by the end of Q3, 2024.​",
  },
  {
    value: "w",
    title: "How do I schedule a consultation?",
    text: "You can schedule a consultation by reaching out through this link (insert link), or contacting our team directly through f.okudo@nabocapital.com or m.njoroge@nabocapital.com. We will be happy to guide you through the process.",
  },
  {
    value: "x",
    title: "What documentation is needed for onboarding?",
    text: "Typically, onboarding requires: A valid national ID or passport, KRA PIN (for Kenyan clients), Proof of bank, Company registration documents (for institutional clients). Our team will provide a checklist tailored to your investor profile.",
  },
  {
    value: "y",
    title: "Are solutions customized for each institution?",
    text: "Yes. We take a highly personalized approach to all our investment solutions. We assess each client’s objectives, risk appetite, and constraints to design a strategy aligned with their long-term goals.",
  },
  {
    value: "z",
    title: "What are the minimum asset requirements?",
    text: "Minimum requirements vary depending on the investment solution and mandate. Kindly speak with our team to understand the threshold that best matches your investment goals.",
  },
  {
    value: "aa",
    title: "What are the fees associated with investing?",
    text: "We offer complimentary consultations to help you understand your options before committing. If any management or administrative fees apply, these will be clearly communicated during the onboarding process; with full transparency and no hidden charges.",
  },
  {
    value: "ab",
    title: "How do you report on performance and activity?",
    text: "We provide periodic reports (monthly) detailing portfolio performance, market commentary, and transaction activity. In addition, you will have access to your relationship manager for deeper insights and regular strategy reviews.",
  },
];
