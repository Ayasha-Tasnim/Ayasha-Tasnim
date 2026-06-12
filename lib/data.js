import {
  Code2,
  Layout,
  Server,
  Database,
  GitBranch,
  Cpu,
  Globe,
  Terminal,
  Layers,
  Cloud,
  Sparkles,
  School,
  Award,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

export const personalInfo = {
  name: 'Ayasha Tasnim',
  title: 'Computer Science Student & Aspiring Software Engineer',
  subtitle: "👋 Hi, I'm",
  description:
    'Passionate about web development, software engineering, problem solving, and building impactful digital products.',
  resumeUrl: '#', // Placeholder for resume PDF
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    email: 'ayasha@example.com', // Placeholder email
  },
  details: {
    name: 'Ayasha Tasnim',
    email: 'ayashatasnim291@gmail.com',
    location: 'Cumilla, Bangladesh',
    degree: 'B.Sc. in Computer Science & Engineering',
    university:
      'Bangladesh Army International University of Science Technology',
    availability: 'Available for Internships & Projects',
    languages: 'English, Bangla',
  },
};

export const stats = [
  { value: 2, suffix: '+', label: 'Years Learning' },
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 8, suffix: '+', label: 'Technologies' },
  { value: 1000, suffix: '+', label: 'Hours Coding' },
];

export const skills = {
  frontend: [
    { name: 'HTML5', level: 95, icon: 'Html5' },
    { name: 'CSS3 / Tailwind CSS', level: 90, icon: 'Layout' },
    { name: 'JavaScript (ES6+)', level: 85, icon: 'Code2' },
    { name: 'React.js', level: 80, icon: 'Cpu' },
    { name: 'Next.js', level: 75, icon: 'Layers' },
  ],
  backend: [
    { name: 'Node.js', level: 70, icon: 'Server' },
    { name: 'Express.js', level: 75, icon: 'Terminal' },
    { name: 'MongoDB', level: 65, icon: 'Database' },
  ],
  tools: [
    { name: 'Git', level: 85, icon: 'GitBranch' },
    { name: 'GitHub', level: 90, icon: 'Github' },
    { name: 'REST APIs', level: 80, icon: 'Globe' },
  ],
};

export const projects = [
  {
    title: 'Task Management App',
    description:
      'A collaborative project tracking app featuring drag-and-drop boards, status filters, and real-time updates using React and MongoDB.',
    tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project1.jpg', // We will use generic elegant gradient representations if actual files don't load, or styled fallbacks.
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A premium, fully responsive storefront featuring cart interactions, search, filter parameters, and Stripe checkout simulation.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project2.jpg',
  },
  {
    title: 'Weather Application',
    description:
      'An elegant meteorological application displaying local forecast data, interactive atmospheric charts, and search parameters utilizing OpenWeather API.',
    tech: ['JavaScript', 'Tailwind CSS', 'REST API'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project3.jpg',
  },
  {
    title: 'Portfolio Website',
    description:
      'This premium, fully animated dark portfolio website displaying clean responsive design and glassmorphic micro-animations.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project4.jpg',
  },
  {
    title: 'Blog Platform',
    description:
      'A modern content publishing interface supporting Markdown syntax formatting, comment threads, and categorization options.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project5.jpg',
  },
  {
    title: 'Chat Application',
    description:
      'Real-time communication software allowing users to form persistent group chat channels using WebSockets and Node.js.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project6.jpg',
  },
];

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'State University of Bangladesh',
    period: '2023 - Present',
    description:
      'Currently pursuing CSE degree focusing on algorithms, database design, software development, and web engineering principles.',
    gpa: 'CGPA: 3.80/4.00',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Science Group, Cantonment Public School & College',
    period: '2020 - 2022',
    description:
      'Completed secondary education with high marks in Mathematics, Physics, Chemistry, and Information Technology.',
    gpa: 'GPA: 5.00/5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Science Group, Cantonment Public School & College',
    period: '2018 - 2020',
    description:
      'Academic foundation emphasizing core scientific subjects and introductory computing.',
    gpa: 'GPA: 5.00/5.00',
  },
];

export const experience = [
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2024 - Present',
    description:
      'Contributing to various web development repositories, fixing UI bugs, optimizing build pipelines, and collaborating with global developers.',
  },
  {
    role: 'Personal Projects & Hackathons',
    company: 'Independent Development',
    period: '2023 - Present',
    description:
      'Engineered 10+ full-stack and front-end applications, solving architectural challenges, exploring state management libraries, and enhancing UI/UX.',
  },
  {
    role: 'Freelance Practice & Client UI/UX Design',
    company: 'Contract Work',
    period: '2023 - 2024',
    description:
      'Designed responsive user interfaces and converted design mockups into pixel-perfect frontend layouts using Tailwind and React.',
  },
  {
    role: 'Web Development Learning Journey',
    company: 'Self-Guided & Bootcamps',
    period: '2022 - 2023',
    description:
      'Learned core HTML, CSS, JavaScript, and advanced into React ecosystem, building interactive pages and API client integrations.',
  },
];
