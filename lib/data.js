import { Code2, Layout, GitBranch, Cpu, Layers, Sparkles } from 'lucide-react';

export const personalInfo = {
  name: 'Ayasha Tasnim',
  title: 'Frontend Developer Crafting Modern Web Experiences',
  subtitle: "👋 Hi, I'm",
  description:
    'Passionate about creating responsive, user-friendly interfaces with modern frontend technologies and thoughtful UI/UX design.',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    email: 'ayashatasnim291@gmail.com',
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
  {
    value: 2,
    suffix: '+',
    label: 'Years Learning',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    value: 8,
    suffix: '+',
    label: 'Technologies',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Hours Coding',
  },
];

export const skills = {
  frontend: [
    {
      name: 'HTML5',
      level: 95,
      icon: 'Code2',
    },
    {
      name: 'CSS3 / Tailwind CSS',
      level: 90,
      icon: 'Layout',
    },
    {
      name: 'JavaScript (ES6+)',
      level: 85,
      icon: 'Code2',
    },
    {
      name: 'React.js',
      level: 85,
      icon: 'Cpu',
    },
    {
      name: 'Next.js',
      level: 80,
      icon: 'Layers',
    },
  ],

  design: [
    {
      name: 'UI/UX Design',
      level: 85,
      icon: 'Sparkles',
    },
    {
      name: 'Figma',
      level: 85,
      icon: 'Layers',
    },
    {
      name: 'Responsive Design',
      level: 90,
      icon: 'Layout',
    },
  ],

  tools: [
    {
      name: 'Git',
      level: 85,
      icon: 'GitBranch',
    },
    {
      name: 'GitHub',
      level: 85,
      icon: 'GitBranch',
    },
    {
      name: 'Framer Motion',
      level: 80,
      icon: 'Sparkles',
    },
  ],
};

export const projects = [
  {
    title: 'Task Management Dashboard',
    description:
      'A modern productivity dashboard with clean layouts, interactive components, responsive design and smooth user interactions.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project1.jpg',
  },

  {
    title: 'E-Commerce Interface',
    description:
      'A visually engaging shopping interface focused on user experience, product browsing, responsive layouts and modern UI patterns.',
    tech: ['React.js', 'Tailwind CSS', 'UI/UX'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project2.jpg',
  },

  {
    title: 'Weather Application',
    description:
      'A clean weather interface featuring dynamic information display, responsive components and an intuitive user experience.',
    tech: ['JavaScript', 'Tailwind CSS', 'UI Design'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project3.jpg',
  },

  {
    title: 'Portfolio Website',
    description:
      'A premium animated portfolio website featuring glassmorphism design, modern layouts and smooth interactions.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project4.jpg',
  },

  {
    title: 'Blog Platform UI',
    description:
      'A modern content platform interface designed with focus on readability, typography and responsive user experience.',
    tech: ['Next.js', 'Tailwind CSS', 'UI/UX'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project5.jpg',
  },

  {
    title: 'Creative Landing Page',
    description:
      'A responsive landing page with modern visual hierarchy, animations and engaging frontend interactions.',
    tech: ['React.js', 'JavaScript', 'UI/UX'],
    liveLink: 'https://github.com',
    githubLink: 'https://github.com',
    image: '/images/project6.jpg',
  },
];

export const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution:
      'Bangladesh Army International University of Science Technology',
    period: '2023 - Present',
    description:
      'Currently pursuing CSE degree with focus on programming, web technologies, software development and user-centered digital solutions.',
    gpa: 'CGPA: 3.80/4.00',
  },

  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Science Group, Cantonment Public School & College',
    period: '2020 - 2022',
    description:
      'Completed higher secondary education with strong foundation in mathematics, science and technology.',
    gpa: 'GPA: 5.00/5.00',
  },

  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Science Group, Cantonment Public School & College',
    period: '2018 - 2020',
    description:
      'Built academic foundation with interest in computing and technology.',
    gpa: 'GPA: 5.00/5.00',
  },
];

export const experience = [
  {
    role: 'Frontend Development Practice',
    company: 'Independent Projects',
    period: '2023 - Present',
    description:
      'Designed and developed modern frontend applications focusing on responsive layouts, reusable components and smooth user experiences.',
  },

  {
    role: 'UI/UX Design Practice',
    company: 'Creative Projects',
    period: '2023 - Present',
    description:
      'Created user interfaces, explored design systems and transformed ideas into visually engaging digital experiences.',
  },

  {
    role: 'Frontend Learning Journey',
    company: 'Self Guided Learning',
    period: '2022 - 2023',
    description:
      'Learned HTML, CSS, JavaScript and React ecosystem while building interactive web interfaces.',
  },
];
