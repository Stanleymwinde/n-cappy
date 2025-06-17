import { link } from "fs";
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
    link: "https://www.tiktok.com/",
    name: "Tiktok",
  },
];

export const navItems = [
  { label: "Individual", href: "/individual" },
  { label: "Institutional", href: "/institutional" },
  { label: "About Us", href: "/about-us" },
  { label: "Tools & Resources", href: "/tools_and_resources" },
];

export const cardData = [
  {
    title: "Afford the Life I want",
    description:
      "Whether you're building wealth, securing your future or planning for a milestone, intentional saving sets the foundation for financial freedom.",
    image: "/images/lifestylegoal-landing.jpeg",
    link: "/lifestyle-goal",
  },
  {
    title: "Afford school for my kids",
    description:
      "We’ll help you build a smart savings plan for education—without the stress",
    image: "/images/Education-goal.jpeg",
    link: "/education",
  },
  {
    title: "Travel the world",
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
    image: "/images/slider-3.png",
    testimonial:
      "The reason why I feel like I have stayed at Nabo Capital this long is because of safety. It's because I feel safe. And I feel at home.",
  },
  {
    name: "Investor Jane",
    role: "Short Term Investor",
    image: "/images/gtr-2.jpg",
    testimonial:
      "Nabo Capital has transformed my investment journey. Their expertise and personalized approach have made all the difference.",
  },
  {
    name: "Investor John",
    role: "Institutional Investor",
    image: "/images/gtr-3.jpg",
    testimonial:
      "As an institution, we trust Nabo Capital for their strategic insights and commitment to our financial goals.",
  },
  {
    name: "Investor Sarah",
    role: "Wealth Builder",
    image: "/images/gtr-1.jpg",
    testimonial:
      "Nabo Capital has been instrumental in helping me build and preserve my wealth. Their team is exceptional.",
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
  },
];

export const CoreStrategiessData = [
  {
    title: "Equity Strategy",
    subtitle: "Sustainable Capital Growth Across Market Cycles",
    description: [
      "Our equity strategy focuses on identifying quality companies with sustainable competitive advantages and strong growth potential. We employ a disciplined investment process that combines fundamental analysis with valuation discipline to deliver consistent alpha across market cycles.",
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
        image: "/images/thumbnail.png",
        pdf: "/pdfs/Investment-Strategies-1.pdf",
      },
      {
        id: 2,
        title: "Strategic Allocation",
        text: "Strategic allocation designed to adapt to evolving market conditions and deliver long-term performance.",
        image: "/images/tools&resources.png",
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
        image: "/images/gtr-1.jpg",
        pdf: "/pdfs/Private-Wealth-1.pdf",
      },
      {
        id: 2,
        title: "Private Market Access",
        text: "Access to exclusive private market opportunities for qualified investors.",
        image: "/images/gtr-3.jpg",
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
        image: "/images/gtr-2.jpg",
        pdf: "/pdfs/Financial-Planning-1.pdf",
      },
      {
        id: 2,
        title: "Goal-Based Planning",
        text: "Goal-based planning with dynamic risk management.",
        image: "/images/gtr-1.jpg",
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
        image: "/images/gtr-3.jpg",
        pdf: "/pdfs/Investor-Education-1.pdf",
      },
      {
        id: 2,
        title: "Educational Guides",
        text: "Investor guides and resources to navigate various market environments.",
        image: "/images/tools&resources.png",
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
export const teamMembers = [
  {
    image: "/images/gtr-1.jpg",
    name: "John Doe",
    title: "Chief Investment Officer",
  },
  {
    image: "/images/gtr-2.jpg",
    name: "Jane Smith",
    title: "Senior Portfolio Manager",
  },
  {
    image: "/images/gtr-3.jpg",
    name: "Alice Johnson",
    title: "Financial Analyst",
  },
  {
    image: "/images/gtr-1.jpg",
    name: "Bob Brown",
    title: "Client Relations Manager",
  },
];

export const institutionalMembers = [
  {
    image: "/images/gtr-1.jpg",
    name: "John Doe",
    title: "Chief Investment Officer",
  },
  {
    image: "/images/gtr-2.jpg",
    name: "Jane Smith",
    title: "Senior Portfolio Manager",
  },
  {
    image: "/images/gtr-3.jpg",
    name: "Alice Johnson",
    title: "Financial Analyst",
  },
];

export const FaqsData = [
  {
    value: "a",
    title: "What is a Unit Trust?",
    text: "A Unit Trust, also known as a mutual fund, is a pooled investment vehicle where investors' money is collectively managed by a professional fund manager..",
  },
  {
    value: "b",
    title: "What are the differences between the various funds?",
    text: "You can start investing with Nabo Capital by visiting our website and signing up for an account. Our team will guide you through the process.",
  },
  {
    value: "c",
    title: "Is my money safe?",
    text: "We offer a variety of investment products including mutual funds, ETFs, and personalized portfolio management services.",
  },
  {
    value: "d",
    title: "Can I top up my account?",
    text: "You can contact our customer support team via email at",
  },
  {
    value: "e",
    title: "How do I withdraw my funds?",
    text: "You can withdraw your funds by logging into your account and submitting a withdrawal request. The funds will be processed within 3-5 business days.",
  },
  {
    value: "f",
    title: "What are the fees associated with investing?",
    text: "We charge a management fee based on the assets under management. There may also be transaction fees for buying or selling units in the fund.",
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

export const LifestylePlans = [
  {
    title: "Dream Vacations",
    icon: "LuPlane",
    description: "Plan beach escapes, adventure travel, and more.",
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
  {
    title: "Continuing Education",
    icon: "LuBook",
    description: "Use savings to go back to school or learn new skills.",
    questions: [
      {
        id: 1,
        question: "What do you want to study?",
        placeholder: "e.g. Data Science",
        hint: "Let us know your field of interest.",
        image: "/images/education-1.jpg",
      },
      {
        id: 2,
        question: "Which institution?",
        placeholder: "e.g. MIT, Udemy",
        hint: "Helps tailor your savings goals.",
        image: "/images/education-2.jpg",
      },
      {
        id: 3,
        question: "Expected tuition cost?",
        placeholder: "e.g. $10,000",
        hint: "This helps us prepare your plan.",
        image: "/images/education-3.jpg",
      },
    ],
  },
];
