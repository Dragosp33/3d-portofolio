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
  nextjs,
  docker,
  threejs,
  secondpresentation,
  zapp,
  auth_cover,
  bikes_cover,
  helsinki,
  fmi,
  freecode,
  portofolio_ss,
  codecamp1,
  codecamp2,
  helsinki_cert,
  java,
  angular,
  spring,
  bootstrap,
  mysql,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  /* {
    name: 'Three JS',
    icon: threejs,
  },*/
  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'angular',
    icon: angular,
  },
  {
    name: 'spring',
    icon: spring,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
];

const experiences = [
  {
    title: 'Informatics Bachelor Degree',
    company_name: 'University of Bucharest',
    icon: fmi,
    iconBg: '#383E56',
    date: 'October 2020 - Present',
    points: [
      'Final year through a bachelor degree at Mathematics and Informatics Faculty.',
      'Collaborating with colleagues and teachers to bring projects to life on deadline.',
      'Learning responsive design and base of web development.',
      'Participating in code reviews and providing constructive feedback to other colleagues.',
    ],
  },
  {
    title: 'FullStack Open Course',
    company_name: 'University of Helsinki',
    icon: helsinki,
    iconBg: '#E6DEDD',
    date: 'Jun 2023 - October 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Base and extensive development of backend APIs using Node.js.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Deploying real world application on different platforms with a variety of technologies.',
    ],
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    company_name: 'freeCodeCamp',
    icon: freecode,
    iconBg: '#383E56',
    date: 'May 2023 - Sep 2023',
    points: [
      'Studied algorithms thoroughly while practicing and completing tasks.',
      'Applied algorithms in real world scenarios',
      'Studied javascript data structures to deepen web development understandings',
    ],
  },
  {
    title: 'Responsive Web-Design',
    company_name: 'freeCodeCamp',
    icon: freecode,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Sep 2023',
    points: [
      'Deepen Responsive Design and styling skills and understandings',
      'Hands on learning completing tasks',
      'Implementing a few responsive components',
    ],
  },
];

const certificates = [
  {
    name: 'University of Helsinki FullStack Course',
    description: 'FullStack development',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'redux',
        color: 'pink-text-gradient',
      },
    ],
    image: helsinki_cert,

    app_link:
      'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/9945f888fc7c914d543b9218e02df11b',
  },
  {
    name: 'freeCodeCamp Web Design',
    description: 'Responsive web Design',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'orange-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: codecamp1,

    app_link:
      'https://www.freecodecamp.org/certification/dragp3/responsive-web-design',
  },
  {
    name: 'freeCodeCamp Javascript',
    description: 'Algorithms & Data Structures',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'javascript',
        color: 'orange-text-gradient',
      },
    ],
    image: codecamp2,

    app_link:
      'https://www.freecodecamp.org/certification/dragp3/javascript-algorithms-and-data-structures',
  },
];

const projects = [
  {
    name: 'Portfolio',
    description:
      'React-based web portfolio with responsive design and innovative technologies and models providing an opportunity to showcase my skills.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portofolio_ss,
    source_code_link: 'https://github.com/Dragosp33/3d-portofolio',
    app_link: '#',
    modal_description: 'A modern web app with 3D models and responsive design.',
    brief: 'Web Platform to showcase protfolio',
    features: [
      'Responsive Design',
      'Light/Dark Mode responsive colors',
      '3D models',
    ],
    tech_used: '',
    implementation: '',
  },

  // enhanced auth
  {
    name: 'Enhanced Auth',
    description:
      'Enhanced authentication with Next.js and MongoDB. Extending the Auth.js library with new features and implementations, providing a full service for authentication.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'next.js',
        color: 'orange-text-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-text-gradient',
      },
    ],
    image: auth_cover,
    source_code_link: 'https://github.com/Dragosp33/enhanced-auth',
    app_link: 'https://enhanced-auth.vercel.app/',
    modal_description: 'Full authentication service',
    brief: 'Auth service with full features',
    features: [
      'Light/Dark Mode responsive colors',
      '2FA authentication',
      'OTP codes through email',
      'Socials',
      'Automatic account linking',
      'Manual account linking for multiple providers and different emails',
      'Session updates',
      'OTP handshake for changing emails',
      'Extended users, accounts, sessions and tokens interfaces.',
    ],
    tech_used: '',
    implementation: '',
  },

  {
    name: 'Social App',
    description:
      'Web-based platform that allows users to post social media content, like, comment and interact with others, providing a simple communication network.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'orange-text-gradient',
      },
    ],
    image: zapp,
    source_code_link: 'https://github.com/Dragosp33/ZAPP-development',
    app_link: 'https://zapp.fly.dev',
    modal_description: 'Social Media web app',
    brief:
      'Web Platform where registered users can post photos and interact with other people',
    features: [
      'Responsive Design',
      'Light/Dark Mode',
      'Self-Made refresh tokens',
      'Redux Store',
      'Node.js REST API resource',
    ],
    tech_used: '',
    implementation:
      'On the frontend, data is handled and initialized into a Redux Store for a smoother experience. The node.js has a refresh-token system that gets called on initial app load and on every authorized api call. Brief explanation after oAuth2 implementation: Every log in, user receives access and refresh token. On access token expiry, the user receives a new pair of access-refresh tokens, while old ones are invalidated and stored into a MongoDB database for future-use checks. If an old refresh token is used, both users ( user and attacker ) are logged out and every token that resulted from this refresh token is invalidated.',
  },
  {
    name: 'Bikes App',
    description:
      'Web platform that enables users to register, search for a bike close to them, find the right fit option, reserve and pay safely with a credit card via Stripe',
    //  'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'angular',
        color: 'blue-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
      {
        name: 'aws',
        color: 'orange-text-gradient',
      },
    ],
    image: bikes_cover,
    source_code_link: 'https://github.com/Dragosp33/bikesv2',
    app_link: 'https://bikesv2.fly.dev',
    modal_description: 'Bikes Reservation App',
    brief: 'Live Web App that provide a bikes rental, bolt-like platform',
    features: [
      'Responsive Design',
      'Friendly UI/UX',
      'Firebase authentication',
      'AngularJs',
      'Java Spring:Boot REST API resource',
    ],
    tech_used: '',
    implementation: '',
  },
  {
    name: 'Logistics Company',
    description:
      'A comprehensive yet simple to use, user-friendly platform requested by an international transport company to showcase their potential and services.',
    // 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: secondpresentation,
    source_code_link: 'https://github.com/Dragosp33/HLogistics',
    app_link: 'https://dark-hill9062.fly.dev',
    modal_description: 'Logistics Presentation',
    brief:
      'Presentation website requested by a Transport Company based in Romania',
    features: [
      'Mobile & Desktop Friendly',
      'Dedicated pages for services',
      'GeoCoding and Autocomplete for postal codes for a better send-offer service',
      'ReactJs',
      'Formik with states and autosuggest and autocomplete functionality',
      'Email Sender Services for offers and contacts',
    ],
    tech_used: '',
    implementation: '',
  },
];

const personal_github = 'https://github.com/Dragosp33';
const personal_linkedin =
  'https://www.linkedin.com/in/dragos-polifronie-b7b725200/';
const personal_codecamp = 'https://www.freecodecamp.org/dragp3';

export {
  services,
  technologies,
  experiences,
  projects,
  personal_github,
  personal_linkedin,
  personal_codecamp,
  certificates,
};
