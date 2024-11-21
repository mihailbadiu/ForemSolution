// Contains constant data for using in a website
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
    icon: meta,
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
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "AI-Driven Targeting: Identify and reach your ideal audience effortlessly.",
      "Real-Time Analytics: Monitor campaign performance and make instant adjustments.",
      "Omni-Channel Integration: Seamlessly manage campaigns across social media, search engines, and streaming platforms.",
      "Cost Optimization: Reduce ad spend while maximizing results through AI-optimized bidding strategies.",
    ],
  },
  {
    title: "Target Audience",
    company_name: "",
    icon: meta,
    iconBg: "#383E56",
    date: "",
    points: [
      "AdVance is built for:",
      "Small and Medium Businesses: Affordable, effective solutions for budget-conscious marketers.",
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
      "Webinars and Demos: Hosting live sessions to educate potential users about the platform’s capabilities.",
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
      "As a growing online store, we struggled to find an advertising partner who could deliver measurable results. ForemSolution didn’t just meet our expectations—they exceeded them. Their data-driven approach boosted our sales by 70%, and their team made the entire process seamless. We finally feel like our ad spend is paying off!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "We needed a creative and cost-effective way to break into a competitive market. ForemSolution crafted a campaign that perfectly captured our brand’s message and reached the right audience. Thanks to their expertise, our app downloads tripled within the first month! They’re an invaluable partner for any startup.",
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
      "Disney+ is one of the biggest streaming platforms used by millions of people worldwide and allows us to stream high-quality content in 4k and various other formats.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/sanidhyy/disney-clone",
    live_site_link: "https://clonedisneyplus.web.app/",
  },
  // Add other project objects here, following the same structure
] as const;

// Social Media Links
export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com",
  },
] as const;
