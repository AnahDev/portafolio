import { Header, About, Project, Contact } from '@/types/portfolio.types';

export const header: Header = {
  homepage: 'https://github.com/AnahDev',
  title: 'AS.',
};

export const about: About = {
  name: 'Ana Santamaria',
  role: 'Front-End Developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
  description:
    'Front-end developer with experience in JavaScript, specializing in creating clean, fast, and accessible interfaces. I combine functional design with best development practices to deliver efficient, scalable, and maintainable solutions.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/AnahDev',
  },
};

export const projects: Project[] = [
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

export const skills: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  
];

export const contact: Contact = {
  email: 'anadevtools@gmail.com',
};