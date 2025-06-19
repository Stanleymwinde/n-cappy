import { link } from "fs";
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from "../icons";
import TiktokIcon from "../icons/TikTokIcon";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BsCashCoin } from "react-icons/bs";

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
    image: "/images/dexter.jpg",
    testimonial:
      "The reason why I feel like I have stayed at Nabo Capital this long is because of safety. It's because I feel safe. And I feel at home.",
  },
  {
    name: "Coach Eileen",
    role: "Long-term Investor",
    image: "/images/c-eileen.png",
    testimonial:
      "The thing I love about Nabo is that you are not just interested in my money you are interested in my mind, and my purpose.",
  },
  {
    name: "Joyce Njoro",
    role: "Long-term Investor",
    image: "/images/njoro.png",
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
export const teamMembers = [
  {
    image: "/images/Moses1.png",
    name: "Moses Njuguna",
    title: "Chief Investment Officer",
  },
  {
    image: "/images/Zach1.png",
    name: "Zachary Maina",
    title: "Senior Portfolio Manager",
  },
  {
    image: "/Wycliffe.png",
    name: "Wycliffe Simiyu",
    title: "Financial Analyst",
  },
  {
    image: "/Alex.png",
    name: "Alex Muchoki",
    title: "Client Relations Manager",
  },
  {
    image: "/images/joyce-m.png",
    name: "Joyce Gathitu",
    title: "Client Relations Manager",
  },
  {
    image: "/images/Hillary.png",
    name: "Hillary Hagai",
    title: "Client Relations Manager",
  },
  {
    image: "/images/antony-n.jpg",
    name: "Antony Njagi",
    title: "Client Relations Manager",
  },
  {
    image: "/images/Brian.png",
    name: "Brian Kipkemboi",
    title: "Client Relations Manager",
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
    title: "Estate Planning",
    description:
      "Ensure your assets are protected and distributed according to your wishes, minimizing taxes and complications for your heirs.",
    icon: MdOutlineRealEstateAgent,
    questions: [
      {
        id: 1,
        question: "Where do you want to go?",
        placeholder: "e.g. Mombasa, Paris, Bali",
        hint: "Tell us your dream destination.",
        image: "/images/life-1.png",
      },
      {
        id: 2,
        question: "What's your travel budget?",
        placeholder: "e.g. $5,000",
        hint: "This helps us plan accordingly.",
        image: "/images/life-3.png",
      },
      {
        id: 3,
        question: "How often do you travel?",
        placeholder: "e.g. Twice a year",
        hint: "This will guide your yearly budget.",
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
    description:
      "Structure predictable and reliable income for your retirement years.",
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
