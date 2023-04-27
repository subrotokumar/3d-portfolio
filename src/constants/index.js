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
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  graphql,
  solidity,
  ridobiko,
  java,
  postgres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Ridobiko Solution",
    icon: ridobiko,
    iconBg: "#383E56",
    date: "November 2022 - April 2023",
    points: [
      "Took the ownership of integrating DigiLocker platform to customer apps resulting in successful implementation of e-KYC system for Document verification.",
      "Worked on the developing of key features for personalished coupon section and implementing GST logic.",
      "Reduced code bloat and refactored the codebase,resulting in a 20% increase in speed, a 15% reduced application size, improvement in code readability, and maintainability",
      "Authored comprehensive documentation forthe API,resulting in reduction in integration time and improved DX.",
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kurumi",
    description:
      "Unofficial AniList client that use GraphQL under the hood to deliver an ultimate anime and manga discovery and tracking experience! With user-friendly interface, you'll be able to easily browse through an extensive collection of anime and manga titles, and offers personalized tracking, so you'll never miss a beat.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "ferry",
        color: "pink-text-gradient",
      },
      {
        name: "riverpod",
        color: "orange-text-gradient"
      }
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/kurumi.png?raw=true',
    source_code_link: "https://play.google.com/store/apps/details?id=com.subrotokumar.kurumi",
  },
  {
    name: "Comet: crypto wallet",
    description:
      "Designed and built a secure cryptocurrency wallet utilizing the web3dart library, including wallet encryption, and ERC20 & NFT interaction. Provides a 24x7 uptime transaction facility, tracks transaction history with a detailed summary, and offers a dedicated NFT explorer.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "web3dart",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "pink-text-gradient",
      },
      {
        name: "open-zeppelin",
        color: "pink-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/comet.png?raw=true',
    source_code_link: "https://github.com/subrotokumar/comet",
  },
  {
    name: "Coinstate",
    description:
      "All-in-one Crypto-currencies price tracking application for mobile that displays recent prices value, exchange rate, current market capitalisation and historical data for over 100+ of Cryptocurrency and Token.",
    tags: [
      {
        name: "dart",
        color: "pink-text-gradient",
      },
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/coinstate.png?raw=true',
    source_code_link: "https://github.com/subrotokumar/coinstate",
  },
  {
    name: "1Inch DEX",
    description:
      "Built a Token swap app that enable users to swap 13 crypto tokens seamlessly,resulting in more streamlined experience. Integrated 1Inch aggregator enabling userto swap tokens at best available price across multiple Decentralized exchanges(DEX). ",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "wagmi",
        color: "blue-text-gradient",
      },
      {
        name: "1inch aggregator",
        color: "green-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/1inch-dex.png?raw=true',
    source_code_link: "https://github.com/subrotokumar/1inch-dex",
  },
  {
    name: "Enhanced ChatGPT",
    description:
      "Enhanced ChatGPT is OpenAI powered project that uses natural language processing (NLP) to simulate a conversation between a user and a computer. It is used to provide automated customer service, support, and other kinds of automated communication.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "taiwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/enhanced-chatgpt/raw/main/assets/gpt2.jpg',
    source_code_link: "https://github.com/subrotokumar/enhanced-chatgpt",
  },
  {
    name: "AboutMe-Cli",
    description: "The About Me CLI is an interactive web-based terminal platform built using React. It allows visitors to learn more about person by entering various commands such as about, skills, resume, and social.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/aboutme-cli.png?raw=true',
    source_code_link: "https://github.com/subrotokumar/aboutme-cli",
  },
  {
    name: "NYX: NFT Gallery",
    description:
      "Mobile application that allows users to view and explore their non-fungible tokens (NFTs) collection. NFTs are unique digital assets that are verified on a blockchain network, such as Ethereum.",
    tags: [
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "blue-text-gradient",
      },
      {
        name: "alchemy",
        color: "green-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/nyx.png?raw=true',
    source_code_link: "https://play.google.com/store/apps/details?id=com.subrotokumar.nyx",
  },
  {
    name: "Raffle Dapp",
    description:
      "The About Me CLI is an interactive web-based terminal platform built using React. It allows visitors to learn more about person by entering various commands such as about, skills, resume, and social.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "orange-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/raffle.jpg?raw=true',
    source_code_link: "https://github.com/subrotokumar/decentralized-lottery",
  },
  {
    name: "Market Sentiment",
    description:
      "Open, robust and decentralised application built with Blockchain technology that users to vote and, in turn, give their input regarding where the price of an Cryptocurrency asset is heading.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "moralis",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "hardhat",
        color: "orange-text-gradient",
      },
    ],
    image: 'https://github.com/subrotokumar/portfolio/blob/main/img/projects/market_sentiment.jpg?raw=true',
    source_code_link: "https://github.com/subrotokumar/market-sentiment",
  },
];

export { services, technologies, experiences, testimonials, projects };
