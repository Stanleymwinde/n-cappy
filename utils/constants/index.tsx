import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "../icons";
import TiktokIcon from "../icons/TikTokIcon";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaHandsHelping, FaShieldAlt, FaUniversity } from "react-icons/fa";

import { BsCashCoin } from "react-icons/bs";
import { FaBuilding, FaGlobe, FaHeart, FaPiggyBank } from "react-icons/fa6";

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
    link: "https://www.tiktok.com/",
    name: "Tiktok",
  },
];

export const navItems = [
  { label: "Individual", href: "/" },
  { label: "Institutional", href: "/institutional" },
  { label: "Advisory", href: "/advisory" },
  { label: "About Us", href: "/about-us" },
  { label: "Investor's Companion", href: "/tools_and_resources" },
  { label: "Calculator", href: "/calculator" },
];

export const cardData = [
  {
    title: "Afford the Life I Want",
    description:
      "Whether you're building wealth, securing your future or planning for a milestone, intentional saving sets the foundation for financial freedom.",
    image: "/images/lifestylegoal-landing.jpeg",
    link: "/lifestyle-goal",
  },
  {
    title: "Afford School for my Kids",
    description:
      "We’ll help you build a smart savings plan for education; designed around your goals to give your children the best possible future.",
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
    title: "Retire Comfortably",
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
    image: "/images/dx.png",
    testimonial:
      "The reason why I feel like I have stayed at Nabo Capital this long is because of safety. It's because I feel safe. And I feel at home.",
  },
  {
    name: "Coach Eileen",
    role: "Long-term Investor",
    image: "/images/Eileen.png",
    testimonial:
      "The thing I love about Nabo is that you are not just interested in my money you are interested in my mind, and my purpose.",
  },
  {
    name: "Joyce Njoro",
    role: "Long-term Investor",
    image: "/images/Joyce2.0.png",
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
      "Whether you're building wealth, securing your future or planning for a milestone, intentional saving sets the foundation for financial freedom.",
    points: [
      "Competitive returns above inflation",
      "Proffesional Fund Management",
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
      "We’ll help you build a smart savings plan for education. Without the stress",
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
      "Explore the world without financial worries. Save intentionally for unforgettable memories.",
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
      "Retire on your terms. Build a financial cushion that lets you enjoy life’s golden years with peace and pride.",
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
      "We’ll help you build a smart savings plan for education—without the stress",
    points: [],
    icon: "LuFolder",
    button: "Learn More",
    image: "/images/treasuryyy.png",
  },
  {
    title: "Stay liquid without loosing capital ",
    description:
      "Explore the world without financial worries. Save intentionally for unforgettable memories.",
    points: [],
    icon: "LuSquareCheck",
    button: "Learn More",
    image: "/images/treasuryyy.png",
  },
  {
    title: "Preserve capital",
    description:
      "Retire on your terms. Build a financial cushion that lets you enjoy life’s golden years with peace and pride.",
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
    title: "All",
    subtitle: "Sustainable Capital Growth Across Market Cycles",
    icon: "LuUser",
    description: [], // You will generate this tab dynamically using all other tab items.
  },
  {
    title: "Investment Types and Strategies",
    subtitle: "Tailored investment structures for sustainable returns",
    icon: "LuFolder",
    description: [
      {
        id: 1,
        title: "Equity & Hybrid Strategies",
        text: "We explore a diverse mix of investment vehicles, including equity, debt, and hybrid instruments.",
        image: "/images/vid1.webp",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
      },
      {
        id: 2,
        title: "Strategic Allocation",
        text: "Strategic allocation designed to adapt to evolving market conditions and deliver long-term performance.",
        image: "/images/Strats.webp",
        pdf: "/pdfs/Investment-Strategies-2.pdf",
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
        title: "Generational Wealth Planning",
        text: "Dedicated wealth planning to preserve and grow generational wealth.",
        image: "/images/vid2.webp",
        pdf: "/pdfs/Private-Wealth-1.pdf",
      },
      {
        id: 2,
        title: "Private Market Access",
        text: "Access to exclusive private market opportunities for qualified investors.",
        image: "/images/Pius-vd.webp",
        pdf: "/pdfs/Private-Wealth-2.pdf",
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
        title: "Retirement Solutions",
        text: "Customized retirement solutions based on individual income needs and timelines.",
        image: "/images/vid4.webp",
        pdf: "/pdfs/Financial-Planning-1.pdf",
      },
      {
        id: 2,
        title: "Goal-Based Planning",
        text: "Goal-based planning with dynamic risk management.",
        image: "/images/Goal-based.webp",
        pdf: "/pdfs/Financial-Planning-2.pdf",
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
        title: "Investor Psychology",
        text: "Insights into market psychology, risk tolerance, and behavioral finance.",
        image: "/images/i-p.webp",
        pdf: "/pdfs/Investor-Education-1.pdf",
      },
      {
        id: 2,
        title: "Educational Guides",
        text: "Investor guides and resources to navigate various market environments.",
        image: "/images/edu.webp",
        pdf: "/pdfs/Investor-Education-2.pdf",
      },
    ],
  },
];

export const ResourcesTabsData = [
  {
    title: "All",
    description:
      "Explore our comprehensive guide to setting and achieving your financial goals.",
    icon: "LuUser",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dgamw7ib9&public_id=Nairobi_Chapel_futor5&profile=cld-default",
  },
  {
    title: "Inestment Types and Strategies",
    description:
      "Learn about our core investment strategies designed to maximize returns.",
    icon: "LuFolder",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dgamw7ib9&public_id=Nairobi_Chapel_futor5&profile=cld-default",
  },
  {
    title: "Private Wealth Management",
    description: "Find answers to common questions about our services.",
    icon: "LuSquareCheck",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dgamw7ib9&public_id=Nairobi_Chapel_futor5&profile=cld-default",
  },
  {
    title: "Financial Planning and Retirement",
    description: "here and there still figuring out it will look like",
    icon: "LuSquareCheck",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dgamw7ib9&public_id=Nairobi_Chapel_futor5&profile=cld-default",
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
    title: "Chief Investment Officer",
    link: " https://www.linkedin.com/in/moses-njuguna-msc-acsi/ ",
  },
  {
    image: "/images/Zach1.png",
    name: "Zachary Maina",
    title: "Senior Portfolio Manager",
    link: "  https://www.linkedin.com/in/zachary-mwangi-acsi-76431bba/ ",
  },
  {
    image: "/Wycliffe.png",
    name: "Wycliffe Simiyu",
    title: "Financial Analyst",
    link: "  https://www.linkedin.com/in/wycliffe-simiyu-acsi-2834b29a/ ",
  },
  {
    image: "/Alex.png",
    name: "Alex Muchoki",
    title: "Client Relations Manager",
    link: "  https://www.linkedin.com/in/alex-muchoki-ab28a643/  ",
  },
  {
    image: "/images/joyce-m.png",
    name: "Joyce Gathitu",
    title: "Client Relations Manager",
    link: " https://www.linkedin.com/in/joyce-gathitu/  ",
  },
  {
    image: "/images/Hillary.png",
    name: "Hillary Hagai",
    title: "Client Relations Manager",
    link: "  https://www.linkedin.com/in/hillary-haggai-910563119/  ",
  },
  {
    image: "/images/antony-n.jpg",
    name: "Antony Njagi",
    title: "Client Relations Manager",
    link: "  https://www.linkedin.com/in/anthony-njagi-128689166/  ",
  },
  {
    image: "/images/Brian.png",
    name: "Brian Kipkemboi",
    title: "Client Relations Manager",
    link: "https://www.linkedin.com/in/brian-kipkemboi/  ",
  },
];

export const institutionalMembers = [
  {
    image: "/images/Mercy-m.png",
    name: "Mercy Mwongela",
    title: "Chief Investment Officer",
  },
  {
    image: "/images/Fredrick-o.jpg",
    name: "Jane Smith",
    title: "Senior Portfolio Manager",
  },
  {
    image: "/images/tedy.jpg",
    name: "Alice Johnson",
    title: "Financial Analyst",
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
    description:
      "By 1998, Dr. Christopher J. Kirubi had become one of the largest shareholders of Centum and was appointed to the board. He was renowned for his eye for lucrative investments and Centum was not an exception. According to him, he saw an undiscovered gem in Centum and began accumulating stake in the company. Following Dr. Kirubi’s appointment to the board, a major milestone was achieved when the board appointed the first independent management, separate from the parent company ICDC. This decision began a new era of putting together one of the most coveted, youthful and entrepreneurial investment management team in the region. According to Forbes, Dr. Kirubi was among the 40 wealthiest people in Africa; a seasoned entrepreneur, investor and industrialist with interests in media, consumer, financial, real estate, agriculture and technology.",
  },
  {
    year: "2008",
    title: "JAMES MWORIA BEGAN HIS REIGN AT THE HELM OF CENTUM",
    description:
      "In 2008, at age 30 ,James Mworia was appointed as the Chief Executive Officer (CEO) of Centum becoming the youngest CEO of a publicly listed company in the region. Under his leadership, an extremely ambitious Centum 2.0 strategy was immediately put together to grow the Assets Under Management (AUMs) fivefold. During the first eight years of his tenure, Centum increased its asset base from Kes 6Bn ($69mn) to approximately Kes 61Bn ($610mn) while the share price grew eight fold, from Kes 5/share to the Kes 40/share, creating extraordinary returns for shareholders. On the back of this remarkable success, James Mworia is now widely celebrated across the globe and has received numerous accolades locally, regionally and internationally. One of the major contributing factors to that success was an ingenious decision to unpackage the portfolio into three distinct business lines: real estate, private equity and quoted private equity (public markets). The decision was inspired by a strong desire to have sharp focus in optimizing value along these three business lines and in the process, nurture specialized skills and unique track records for each business unit. These business units have since devolved into independent subsidiaries and the QPE team, now housed within Nabo Capital, was the first to spin off into a fully fledged fund management company licensed by the Capital Markets Authority (CMA). From just one company in 2009, Centum is now a holding company with more than 30 subdiaries spread across eight sectors.",
  },
  {
    year: "2013",
    title: "NABO CAPITAL LIMITED IS SPUN OUT OF CENTUM",
    description:
      "The Quoted Private Equity(QPE) business line was inspired by an observation; “If one excludes the 5 most liquid counters in any African stock exchange(excludingSA),one is left with a relatively “illiquid” asset class that is mostly under – researched and below – the – radar of most investors”. Given our rich history of Private Equity expertise in Africa, in 2009 we set aside a KES 2.3Bn($26mn) proprietary fund and christened it “Quoted Private Equity” portfolio. The strategy was to leverage on our private equity expertise to identify and seize significant minority stakes in securities in listed space that were under-researched, below-the-radar and had significant potential for growth across the various African stock exchanges. More importantly, we desired exposure to the fastest growing economies in Africa and hence the exclusion of South Africa. Up until 2013, the strategy had paid-off handsomely throughout performing benchmarks by a healthy spread, which led to requests from external parties to leverage on our in-house expertise to replicate the QPE portfolio and track record. That triggered the 2013 spin-off of the QPE team led by Pius Muchiri and hence the emergence of Nabo Capital, now an independent fully-fledged and licensed fund manager. Nabo Capital has rapidly grown since its inception and now manages over Kes13Bn ($130mn) in AUMs. Our clients appreciate our position as a Boots-on-the-Ground Investment Manager, our specialization exemplified by a solid track record of investing in Africa, and our unique investment philosophy that is heavily informed by a rich Private Equity heritage. We draw our clients from some of the largest sovereign wealth funds, fund of funds, African multinationals, insurance and investment companies. Nabo is a Maasai word meaning Number One, reflective of the company’s aspiration to be the leading Fund Manager in Africa.",
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
    name: "Mercy Njoroge",
    title: "Chief Customer Experience Officer",
    image: "/mercy.jpg",
    linkedin: "#",
  },
];

export const RetirementPlans = [
  {
    title: "Estate Planning",
    description:
      "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
    icon: MdOutlineRealEstateAgent,
    questions: [
      {
        id: 1,
        question: "Where do you want to go?",
        placeholder: "e.g. Mombasa, Paris, Bali",
        hint: "Whether it’s a beach, city or the desert , you only need 230 USD per month",
        image: "/images/life-1.png",
      },
      {
        id: 2,
        question: "When do you want to travel?",
        placeholder: "eg.   December 2025",
        hint: "When are you planning to take this trip? Even an approximate time is fine.",
        image: "/images/life-3.png",
      },
      {
        id: 3,
        question: "How long will you stay?",
        placeholder: "eg.   7 days",
        hint: "How many days or weeks would you like to spend there?",
        image: "/images/life-2.png",
      },
      {
        id: 4,
        question: "What Is your estimated cost?",
        placeholder: "eg.   KES 5000",
        hint: "Your best estimate of the total cost. Don’t worry if you are not sure.",
        image: "/images/life-2.png",
      },
      {
        id: 5,
        question: "How much have you saved ?",
        placeholder: "eg.   KES 10,000",
        hint: "How much have you already put aside for this trip?",
        image: "/images/life-2.png",
      },
      {
        id: 6,
        question: "How much can you save monthly?",
        placeholder: "eg.   KES 10,000",
        hint: "How much have you already put aside for this trip?",
        image: "/images/life-2.png",
      },
    ],
  },
  {
    title: "Generational Wealth Transfer",
    description:
      "Create a structured approach to passing financial assets, knowledge, and values to future generations.",
    icon: FaHandsHelping,
    questions: [
      {
        id: 1,
        question: "What do you want to study?",
        placeholder: "e.g. Data Science",
        hint: "Let us know your field of interest.",
        image: "/images/ed-q-4.png",
      },
      {
        id: 2,
        question: "Which institution?",
        placeholder: "e.g. MIT, Udemy",
        hint: "Helps tailor your savings goals.",
        image: "/images/ed-q-2.png",
      },
      {
        id: 3,
        question: "Expected tuition cost?",
        placeholder: "e.g. $10,000",
        hint: "This helps us prepare your plan.",
        image: "/images/ed-q-1.png",
      },
    ],
  },
  {
    title: "Long-Term Care",
    description:
      "Prepare for potential health needs without compromising the financial legacy you intend to leave behind.",
    icon: FaHeart,
    questions: [
      {
        id: 1,
        question: "What’s your ideal retirement age?",
        placeholder: "e.g. 60",
        hint: "This helps us plan your retirement savings.",
        image: "/images/r-1.png",
      },
      {
        id: 2,
        question: "What lifestyle do you envision?",
        placeholder: "e.g. Travel, hobbies",
        hint: "Share your retirement dreams.",
        image: "/images/r-2.png",
      },
      {
        id: 3,
        question: "Expected monthly expenses?",
        placeholder: "e.g. $2,000",
        hint: "Helps us calculate your retirement needs.",
        image: "/images/life-3.png",
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
        question: "What causes are you passionate about?",
        placeholder: "e.g. Education, Health",
        hint: "This helps us align your giving goals.",
        image: "/images/giving-1.jpg",
      },
      {
        id: 2,
        question: "How much do you want to give annually?",
        placeholder: "e.g. $1,000",
        hint: "This sets your giving budget.",
        image: "/images/giving-2.jpg",
      },
      {
        id: 3,
        question: "Do you prefer local or global impact?",
        placeholder: "e.g. Local",
        hint: "Helps us find the right charities for you.",
        image: "/images/giving-3.jpg",
      },
    ],
  },

  {
    title: "Retirement Income",
    description: "Structure provide reliable income  ",
    icon: FaHandsHelping,
    questions: [
      {
        id: 1,
        question: "What causes are you passionate about?",
        placeholder: "e.g. Education, Health",
        hint: "This helps us align your giving goals.",
        image: "/images/giving-1.jpg",
      },
      {
        id: 2,
        question: "How much do you want to give annually?",
        placeholder: "e.g. $1,000",
        hint: "This sets your giving budget.",
        image: "/images/giving-2.jpg",
      },
      {
        id: 3,
        question: "Do you prefer local or global impact?",
        placeholder: "e.g. Local",
        hint: "Helps us find the right charities for you.",
        image: "/images/giving-3.jpg",
      },
    ],
  },
];

export const LifestylePlans = [
  {
    title: "Dream Vacations",
    description:
      "You’ve earned the right to explore. Take that beach escape,  or adventure abroad — this plan helps you travel confidently, without financial pressure.",
    icon: MdOutlineRealEstateAgent,
    questions: [
      {
        id: 1,
        question: "Where do you want to go?",
        placeholder: "e.g. Mombasa, Paris, Bali",
        hint: "Whether it’s a beach, city or the desert , you only need 230 USD per month",
        image: "/images/Travelone.png",
      },
      {
        id: 2,
        question: "When do you want to travel?",
        placeholder: "eg.   December 2025",
        hint: "When are you planning to take this trip? Even an approximate time is fine.",
        image: "/images/Traveltwo.png",
      },
      {
        id: 3,
        question: "How long will you stay?",
        placeholder: "eg.   7 days",
        hint: "How many days or weeks would you like to spend there?",
        image: "/images/Travelthree.png",
      },
      {
        id: 4,
        question: "What Is your estimated cost?",
        placeholder: "eg.   KES 5000",
        hint: "Your best estimate of the total cost. Don’t worry if you are not sure.",
        image: "/Travelfour.png",
      },
      {
        id: 5,
        question: "How much have you saved ?",
        placeholder: "eg.   KES 10,000",
        hint: "How much have you already put aside for this trip?",
        image: "/Travelfive.png",
      },
      {
        id: 5,
        question: "How much can you save monthly?",
        placeholder: "eg.   KES 10,000",
        hint: "How much have you already put aside for this trip?",
        image: "/Travelsix.png",
      },
    ],
  },
  {
    title: "Continuing Education",
    description:
      "Learning is a lifelong investment. Use your savings to pursue new skills, go back to school, or support a loved one’s academic journey.",
    icon: FaHandsHelping,
    questions: [
      {
        id: 1,
        question: "What do you want to study?",
        placeholder: "e.g. Data Science",
        hint: "Let us know your field of interest.",
        image: "/images/ed-q-4.png",
      },
      {
        id: 2,
        question: "Which institution?",
        placeholder: "e.g. MIT, Udemy",
        hint: "Helps tailor your savings goals.",
        image: "/images/ed-q-2.png",
      },
      {
        id: 3,
        question: "Expected tuition cost?",
        placeholder: "e.g. $10,000",
        hint: "This helps us prepare your plan.",
        image: "/images/ed-q-1.png",
      },
    ],
  },
  {
    title: "Building Your Dream Home",
    description:
      "Turn your vision into reality. From buying land to finishing touches, your plan helps you create a home that truly reflects your goals and lifestyle.",
    icon: FaHeart,
    questions: [
      {
        id: 1,
        question: "What’s your ideal retirement age?",
        placeholder: "e.g. 60",
        hint: "This helps us plan your retirement savings.",
        image: "/images/r-1.png",
      },
      {
        id: 2,
        question: "What lifestyle do you envision?",
        placeholder: "e.g. Travel, hobbies",
        hint: "Share your retirement dreams.",
        image: "/images/r-2.png",
      },
      {
        id: 3,
        question: "Expected monthly expenses?",
        placeholder: "e.g. $2,000",
        hint: "Helps us calculate your retirement needs.",
        image: "/images/life-3.png",
      },
    ],
  },
  {
    title: "Treating Your Family",
    description:
      "The best moments are shared. Plan ahead for birthdays, holidays, or surprise gifts — and enjoy giving without the financial strain",
    icon: FaHandsHelping,
    questions: [
      {
        id: 1,
        question: "What causes are you passionate about?",
        placeholder: "e.g. Education, Health",
        hint: "This helps us align your giving goals.",
        image: "/images/giving-1.jpg",
      },
      {
        id: 2,
        question: "How much do you want to give annually?",
        placeholder: "e.g. $1,000",
        hint: "This sets your giving budget.",
        image: "/images/giving-2.jpg",
      },
      {
        id: 3,
        question: "Do you prefer local or global impact?",
        placeholder: "e.g. Local",
        hint: "Helps us find the right charities for you.",
        image: "/images/giving-3.jpg",
      },
    ],
  },
  {
    title: "Enjoying the life You",
    description:
      "You’ve earned more than a paycheck — you’ve earned peace of mind. This plan lets you relax, celebrate milestones, and f",
    icon: BsCashCoin,
    questions: [
      {
        id: 1,
        question: "Where do you want to go?",
        placeholder: "e.g. Mombasa, Paris, Bali",
        hint: "Tell us your dream destination.",
        image: "/images/vacation-1.jpg",
      },
      {
        id: 2,
        question: "What’s your travel budget?",
        placeholder: "e.g. $5,000",
        hint: "This helps us plan accordingly.",
        image: "/images/vacation-2.jpg",
      },
      {
        id: 3,
        question: "How often do you travel?",
        placeholder: "e.g. Twice a year",
        hint: "This will guide your yearly budget.",
        image: "/images/vacation-3.jpg",
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
    label: "Pention Funds",
    icon: <FaPiggyBank size={26} />,
  },
  {
    label: "Insurance Companies",
    icon: <FaShieldAlt size={26} />,
  },
  {
    label: "Government Investment Funds",
    icon: <FaBuilding size={26} />,
  },
  { label: "Local and International Businesses", icon: <FaGlobe size={26} /> },
  {
    label: "SMEs, Large Corporates",
    icon: <FaUniversity size={26} />,
  },
];

export const RetirePlans = [
  {
    title: "Estate Planning",
    description:
      "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
    icon: MdOutlineRealEstateAgent,
    exploreMoreUrl: "/estate-planning",
    questions: [
      {
        id: 1,
        question: "Where are you in your legacy journey?",
        placeholder: "e.g.Just Starting, mid career, near retirement",
        hint: "Every journey is unique. Let;s start by undestanding where you are today.",
        image: "/images/life-1.png",
      },
      {
        id: 2,
        question: "Who are you planning for?",
        placeholder: "eg. Yourself, Family, Charity",
        hint: "Your legacy extends beyond yourself!",
        image: "/images/life-3.png",
      },
      {
        id: 3,
        question: "What do you care about most?",
        placeholder: "eg. Generational wealth, Giving back, Healthcare",
        hint: "Your values guide your financial decisions. What matters most to you?",
        image: "/images/life-2.png",
      },
      {
        id: 4,
        question: "How much have you saved already?  ",
        placeholder: "eg. KES 500,000",
        hint: "Include retirement accounts, investments and other assets you have set aside for the future.",
        image: "/images/life-2.png",
      },
      {
        id: 5,
        question: "How much have you saved ?",
        placeholder: "eg.   KES 50,000",
        hint: "Regular contributions are key to building your legacy",
        image: "/images/life-2.png",
      },
      {
        id: 6,
        question: "What is your ideal retirement age ?  ",
        placeholder: "eg.  50, 85, 60",
        hint: "When would you like to transition to the next phaseof your journey? ",
        image: "/images/life-2.png",
      },
    ],
  },
  {
    title: "Generational Wealth Transfer",
    description:
      "Create a structured approach to passing financial assets, knowledge, and values to future generations.",
    icon: MdOutlineRealEstateAgent,
    questions: [
      {
        id: 1,
        question: "What stage are you at in your wealth transfer plan?",
        placeholder: "e.g. Just beginning, have a plan, actively transferring",
        hint: "Understanding your current stage helps tailor the best strategy for your family.",
        image: "/images/life-1.png",
      },
      {
        id: 2,
        question: "Who are the primary beneficiaries of your wealth transfer?",
        placeholder: "e.g. Children, grandchildren, trusts, charities",
        hint: "Clarify who will receive your assets to ensure alignment with your wishes.",
        image: "/images/life-3.png",
      },
      {
        id: 3,
        question: "What are your goals for generational wealth transfer?",
        placeholder:
          "e.g. Preserve family business, education funds, philanthropy",
        hint: "Your intentions shape how your wealth is distributed and managed.",
        image: "/images/life-2.png",
      },
      {
        id: 4,
        question:
          "Have you set up any trusts or legal entities for wealth transfer?",
        placeholder: "e.g. Family trust, charitable trust, foundations",
        hint: "Trusts can help protect assets and provide tax advantages for heirs.",
        image: "/images/life-2.png",
      },
      {
        id: 5,
        question:
          "How do you plan to educate your heirs about managing the inheritance?",
        placeholder: "e.g. Financial literacy programs, family meetings",
        hint: "Preparing heirs helps ensure the legacy is sustained responsibly.",
        image: "/images/life-2.png",
      },
      {
        id: 6,
        question:
          "What concerns do you have about transferring wealth to future generations?",
        placeholder: "e.g. Taxes, family disputes, asset protection",
        hint: "Identifying challenges helps us address them proactively.",
        image: "/images/life-2.png",
      },
    ],
  },
  {
    title: "Long-Term Care",
    description:
      "Prepare for potential health needs without compromising the financial legacy you intend to leave behind.",

    icon: FaHandsHelping,
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
    icon: BsCashCoin,
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
    icon: MdOutlineRealEstateAgent,
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
    title: "Estate Planning",
    description:
      "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
    icon: MdOutlineRealEstateAgent,
    exploreMoreUrl: "/estate-planning",
    questions: [
      {
        id: 1,
        question: "Where are you in your legacy journey?",
        placeholder: "e.g.Just Starting, mid career, near retirement",
        hint: "Every journey is unique. Let;s start by undestanding where you are today.",
        image: "/images/life-1.png",
      },
      {
        id: 2,
        question: "Who are you planning for?",
        placeholder: "eg. Yourself, Family, Charity",
        hint: "Your legacy extends beyond yourself!",
        image: "/images/life-3.png",
      },
      {
        id: 3,
        question: "What do you care about most?",
        placeholder: "eg. Generational wealth, Giving back, Healthcare",
        hint: "Your values guide your financial decisions. What matters most to you?",
        image: "/images/life-2.png",
      },
      {
        id: 4,
        question: "How much have you saved already?  ",
        placeholder: "eg. KES 500,000",
        hint: "Include retirement accounts, investments and other assets you have set aside for the future.",
        image: "/images/life-2.png",
      },
      {
        id: 5,
        question: "How much have you saved ?",
        placeholder: "eg.   KES 50,000",
        hint: "Regular contributions are key to building your legacy",
        image: "/images/life-2.png",
      },
      {
        id: 6,
        question: "What is your ideal retirement age ?  ",
        placeholder: "eg.  50, 85, 60",
        hint: "When would you like to transition to the next phaseof your journey? ",
        image: "/images/life-2.png",
      },
    ],
  },
  {
    title: "Generational Wealth Transfer",
    description:
      "Create a structured approach to passing financial assets, knowledge, and values to future generations.",
    icon: MdOutlineRealEstateAgent,
    questions: [
      {
        id: 1,
        question: "What stage are you at in your wealth transfer plan?",
        placeholder: "e.g. Just beginning, have a plan, actively transferring",
        hint: "Understanding your current stage helps tailor the best strategy for your family.",
        image: "/images/life-1.png",
      },
      {
        id: 2,
        question: "Who are the primary beneficiaries of your wealth transfer?",
        placeholder: "e.g. Children, grandchildren, trusts, charities",
        hint: "Clarify who will receive your assets to ensure alignment with your wishes.",
        image: "/images/life-3.png",
      },
      {
        id: 3,
        question: "What are your goals for generational wealth transfer?",
        placeholder:
          "e.g. Preserve family business, education funds, philanthropy",
        hint: "Your intentions shape how your wealth is distributed and managed.",
        image: "/images/life-2.png",
      },
      {
        id: 4,
        question:
          "Have you set up any trusts or legal entities for wealth transfer?",
        placeholder: "e.g. Family trust, charitable trust, foundations",
        hint: "Trusts can help protect assets and provide tax advantages for heirs.",
        image: "/images/life-2.png",
      },
      {
        id: 5,
        question:
          "How do you plan to educate your heirs about managing the inheritance?",
        placeholder: "e.g. Financial literacy programs, family meetings",
        hint: "Preparing heirs helps ensure the legacy is sustained responsibly.",
        image: "/images/life-2.png",
      },
      {
        id: 6,
        question:
          "What concerns do you have about transferring wealth to future generations?",
        placeholder: "e.g. Taxes, family disputes, asset protection",
        hint: "Identifying challenges helps us address them proactively.",
        image: "/images/life-2.png",
      },
    ],
  },
  {
    title: "Long-Term Care",
    description:
      "Prepare for potential health needs without compromising the financial legacy you intend to leave behind.",

    icon: FaHandsHelping,
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
    icon: BsCashCoin,
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
    icon: MdOutlineRealEstateAgent,
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
      image: "/images/Charles.png",
      alt: "Advisory Team",
    },

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
      image: "/images/Charles.png",
      alt: "Private Credit Team",
    },

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
      image: "/images/Charles.png",
      alt: "Infrastructure Projects",
    },

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
      image: "/images/Pius-new.png",
      alt: "Advisory Team",
    },
    featuredDeal: {
      title: "Featured Deal:",
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
      image: "/images/Pius-new.png",
      alt: "Private Credit Team",
    },
    featuredDeal: {
      title: "Featured Deal:",
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
      image: "/images/Pius-new.png",
      alt: "Infrastructure Projects",
    },
    featuredDeal: {
      title: "Featured Deal:",
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
      image: "/images/Pius-new.png",
      alt: "Private Credit Team",
    },
    featuredDeal: {
      title: "Featured Deal:",
      description:
        "Structured a $12M convertible note for a rapidly growing health-tech platform, balancing immediate growth capital needs with long-term equity upside for investors and founders alike",
    },
  },
];
