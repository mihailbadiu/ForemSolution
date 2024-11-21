// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Marketing and Growth Strategy",
    icon: web,
  },
  {
    title: "How It Works",
    icon: mobile,
  },
  {
    title: "Target Audience",
    icon: backend,
  },
  {
    title: "Success Stories",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Smarter Advertising for the Digital Age",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Empower your business with precise, AI-driven ad campaigns that maximize ROI",
      "Presented by: ForemSolution",
    ],
  },
  {
    title: "Introduction",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "AI-Driven Targeting: Identify and reach your ideal audience effortlessly .",
      "Real-Time Analytics: Monitor campaign performance and make instant adjustments. ",
      "Omni-Channel Integration: Seamlessly manage campaigns across social media, search engines, and streaming platforms.",
      "Cost Optimization: Reduce ad spend while maximizing results through AI-optimized bidding strategies.",
    ],
  },
  {
    title: "Target Audience",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "AdVance is built for:",
      "Small and Medium Businesses: Affordable, effective solutions for budget-conscious marketers",
      "Advertising Agencies: Scalable tools to manage multiple client campaigns efficiently.",
      "E-commerce Brands: Boost conversions with hyper-targeted ads that reach ready-to-buy customers.",
      "Our platform adapts to the needs of any business size or industry.",
    ],
  },
  {
    title: "Marketing and Growth Strategy",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Digital Campaigns: Launching a mix of PPC, social media, and influencer-driven content to build awareness.",
      "Partnerships: Collaborating with industry leaders like Google Ads and Facebook Ads Manager for integrations.",
      "Referral Program: Incentivizing existing users to invite new businesses with discounts and credits.",
      "Webinars and Demos: Hosting live sessions to educate potential users about the platforms capabilities.",
      "Our strategy focuses on both organic growth and targeted outreach to maximize adoption.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Working with ForemSolution has been a game-changer for our business. Their targeted campaigns helped us reach more local customers than ever before, increasing our foot traffic by 40% in just two months. They truly understood our goals and delivered beyond our expectations. Highly recommend!",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "As a growing online store, we struggled to find an advertising partner who could deliver measurable results. [ForemSolution did not just meet our expectations—they exceeded them. Their data-driven approach boosted our sales by 70%, and their team made the entire process seamless. We finally feel like our ad spend is paying off!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "We needed a creative and cost-effective way to break into a competitive market. ForemSolution  crafted a campaign that perfectly captured our brands message and reached the right audience. Thanks to their expertise, our app downloads tripled within the first month! They are an invaluable partner for any startup."
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Disney+ Clone",
    description:
      "Disney+ is one of the biggest streaming platforms used by millions of people world-wide and allows us to stream high quality content in 4k and various other formats",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  {
    name: "Golds Gym",
    description:
      "Web application that enables users to search for fitness exercises, effective personalized positions, and recommends new exercises based on their personal preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanidhyy/fitness-app",
    live_site_link: "https://fitness-gym-react.netlify.app/",
  },
  {
    name: "Shoppy",
    description:
      "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanidhyy/admin-dashboard",
    live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  },
  {
    name: "TikTok Clone",
    description:
      "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sanidhyy/tiktok-clone",
    live_site_link: "https://tiktok-clone-react.vercel.app/",
  },
  {
    name: "Cryptoverse",
    description:
      "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/sanidhyy/crypto-app",
    live_site_link: "https://reactjscryptoapp.netlify.app/",
  },
  {
    name: "Travel Advisor",
    description:
      "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/sanidhyy/travel-advisor",
    live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
] as const;
