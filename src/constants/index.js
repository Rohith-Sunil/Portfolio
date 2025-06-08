export const myProjects = [
  {
    id: 1,
    title: "Messo: Mess Management System",
    // description:
    //   "Full-stack mess management system to streamline hostel dining operations across multiple hostels.",
    subDescription: [
      "Built a full-stack mess management web app using React, Node.js, Express, and MongoDB to handle menu ratings, announcements, and hostel rep evaluations across 5+ hostels, supporting over 500 students, with Redis-based caching and secure JWT authentication.",
    ],
    href: "https://github.com/Rohith-Sunil/Messo/tree/messo-with-redis",
    logo: "",
    image: "/assets/projects/messo.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "Redis", path: "/assets/logos/redis.svg" },
      { id: 5, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "Express", path: "/assets/logos/express.svg" },
    ],
  },
  {
    id: 2,
    title: "CogniCare: Alzheimer’s Detection Tool",
    // description:
    //   "An AI-powered application that detects early-stage Alzheimer’s disease through speech analysis.",
    subDescription: [
      "Developed an AI-powered Alzheimer’s detection tool using Flask, React, Scikit-learn, and SpaCy, leveraging AssemblyAI for speech-to-text conversion, enabling early-stage detection with 88%+ accuracy and real-time result display on a modern web interface.",
    ],
    href: "https://github.com/Rohith-Sunil/Alzheimer-Detection/tree/main",
    logo: "",
    image: "/assets/projects/cognicare.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Scikit-learn", path: "/assets/logos/sklearn.svg" },

      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "Express", path: "/assets/logos/express.svg" },
      { id: 5, name: "Flask", path: "/assets/logos/flask.svg" },
    ],
  },
  {
    id: 3,
    title: "IMS: Intelligent Inventory System",
    // description:
    //   "Smart inventory system with semantic search and real-time management using ML and modern web stack.",
    subDescription: [
      "Engineered a semantic inventory system using transformer-based embeddings and FastAPI, integrated with a Node.js + Express backend and MongoDB to manage over 10,000 products, featuring responsive React components and optimized ML-powered search.",
    ],
    href: "https://github.com/Rohith-Sunil/IMS",
    logo: "",
    image: "/assets/projects/ims.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },

      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "FastAPI", path: "/assets/logos/fastapi.svg" },

      { id: 5, name: "Tailwind CSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "Express", path: "/assets/logos/express.svg" },
    ],
  },
  // ... your existing projects
];
export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rohithsunil7",
    icon: "/assets/socials/linkedIn.svg",
    size: "w-5 h-5", // 20x20px
  },
  {
    name: "Github",
    href: "https://www.github.com/Rohith-Sunil",
    icon: "/assets/logos/gith.svg",
    size: "w-7 h-7", // 24x24px
  },
];

export const experiences = [
  {
    title: "Machine Learning Intern",
    job: "Genrobotics",
    date: "May 2025 – Present",
    location: "Thiruvananthapuram, Kerala",
    contents: [
      "Built ML backend for an inventory system enabling semantic product search using transformer embeddings, improving search relevance.",
      "Developed scalable FastAPI services integrated with a Node.js + Express backend and MongoDB, handling extensive product records.",
      "Created reusable React components for search and dashboard features based on these.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
