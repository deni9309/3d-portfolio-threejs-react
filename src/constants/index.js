export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
]

export const colleagueReviews = [
  {
    id: 1,
    name: 'Zlatko Iliev',
    position: 'Senior Front-End Developer (Team Lead in MyTeamsHub)',
    img: 'assets/review1.png',
    review:
      'I am writing to recommend Denitsa Slavkova, who worked with me on the MyTeamsHub project as a front-end developer from 05.2024 to 08.2024. I worked closely with Denitsa and reviewed many of her pull requests on github. She showed great results in both dealing with tasks and catching up with the tech stack. She really went beyond my expectations for these few months, she showed understanding of how the technologies work together and improved her technical skills. Denitsa also showed proactiveness by suggesting improvements in the codebase and willingness to take tasks from the board without waiting to be assigned to a task. I believe Denitsa will be a great fit for the next team where she would join!',
    link: 'https://drive.google.com/file/d/1R-vwmc_yWexSgXL-rKyxgzsd1Re7C9tN/view?usp=drive_link',
  },
  {
    id: 2,
    name: 'Alex Ivanov',
    position: 'Technical Lead at Algona LTD',
    img: 'assets/review2.png',
    review:
      'Denitsa has mastered the work with Angular, Typescript, HTML5, CSS and libraries like Bootstrap and Angular Material. She showcased exceptional motivation and proficiency. Until the end of her internship she showed deep understanding of design principles and technical skills. She brought creative solutions to complex challenges and fostered a collaborative environment.',
    link: 'https://drive.google.com/file/d/1fgVFVaDttikoAHBvHXmFYOzArG-z0ad7/view?usp=drive_link',
  },
]

export const myProjects = [
  {
    title: 'VitaCare - Health Management System',
    desc: 'A healthcare patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming and canceling appointments.',
    subdesc:
      'With a focus on efficiency, VitaCare integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://vita-care-app-2024.vercel.app/',
    github: 'https://github.com/deni9309/vita-care-app-2024',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0px',
      boxShadow: '0px 0px 9px 6px rgba(75, 181, 96, 0.4)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Appwrite',
        path: '/assets/appwrite.png',
      },
      {
        id: 4,
        name: 'Twilio',
        path: 'assets/twilio.png',
      },
      {
        id: 5,
        name: 'TailwindCSS',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Horizon - Financial SaaS platform',
    desc: 'Horizon is a comprehensive financial SaaS platform that links multiple bank accounts, offers real-time transaction tracking, enables seamless money transfers between users, and simplifies overall financial management.',
    subdesc:
      'Powered by Next.js, Appwrite, Dwolla, Plaid and secured with Sentry, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://banking-app-horizon-sand.vercel.app/sign-in',
    github: 'https://github.com/deni9309/banking-app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#1e3b5e',
      background:
        'linear-gradient(45deg, rgba(102, 169, 250, 0.6) 5%, rgba(30, 59, 94, 1) 100%)',
      border: '0px',
      boxShadow: '0px 0px 9px 6px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tagsStyle: {
      backgroundColor: '#D9D9D9',
    },
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 3,
        name: 'Appwrite',
        path: '/assets/appwrite.png',
      },
      {
        id: 2,
        name: 'Plaid',
        path: '/assets/plaid.png',
      },
      {
        id: 5,
        name: 'Sentry',
        path: 'assets/sentry.png',
      },
      {
        id: 4,
        name: 'Dwolla',
        path: 'assets/dwolla.png',
      },
    ],
  },
  {
    title: 'Evently - Event Management Platform',
    desc: 'Evently is an event organization web application that provides user authentication, event and category management, searching, filtering, checkout and payment functionalities.',
    subdesc:
      'Built with Next.js, Clerk, Stripe, Uploadthing and more, Evently ensures a secure authentication and payment experience, enabling users to easily manage events and bookings.',
    github: 'https://github.com/deni9309/event-platform',
    href: 'https://event-platform-xi-flax.vercel.app',
    texture: '/textures/project/evently2.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tagsStyle: {
      backgroundColor: '#B5B5B5',
    },
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nextjs.png',
      },
      {
        id: 2,
        name: 'Clerk',
        path: '/assets/clerk.png',
      },
      {
        id: 3,
        name: 'Stripe',
        path: '/assets/stripe.png',
      },
      {
        id: 4,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 5,
        name: 'Shadcn/ui',
        path: 'assets/shadcn.png',
      },
    ],
  },
  {
    title: 'Snapgram - A Social Media Application',
    desc: 'Built with Vite and React.js, Snapgram is a Social media platform with user-friendly interface that has a nice modern look and lots of features including infinite scroll.',
    subdesc:
      'Users can easily create, explore posts, and view other users profiles and post activity. Snapgram has a strong authentication system and performs a quick data fetching using React Query for a smooth user experience.',
    texture: '/textures/project/snapgram.mp4',
    logo: '/assets/project-logo2.png',
    href: 'https://snapgram-beta-ashen.vercel.app/sign-in',
    github: 'https://github.com/deni9309/snapgram',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Vite',
        path: 'assets/vite.png',
      },
      {
        id: 3,
        name: 'React Query',
        path: 'assets/reactQuery.png',
      },
      {
        id: 4,
        name: 'Appwrite',
        path: 'assets/appwrite.png',
      },
      {
        id: 5,
        name: 'TypeScript',
        path: 'assets/typescript.png',
      },
    ],
  },
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.11 : isMobile ? 0.15 : 0.2,
    deskPosition: isMobile ? [-0.4, -1.5, 0] : [-1.5, -2, 0],
    cubePosition: isSmall
      ? [3.6, -4.9, 0]
      : isMobile
        ? [5, -4.8, 0]
        : isTablet
          ? [8, -5.5, 0]
          : [9, -5.5, 5],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-3, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-7, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-4, -10, -11]
      : isMobile
        ? [-7, -10, -13]
        : isTablet
          ? [-10, -10, -4]
          : [-15, -11, -6],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
]
