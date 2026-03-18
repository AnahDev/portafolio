import { Header, About, Project, Contact } from '@/types/portfolio.types';

import { es } from '../languages/es'
import { en } from '../languages/en'

type Language = 'es' | 'en';

export const header: Header = {
  homepage: '',
  title: '<AS>',
};

// export const about: About = {
//   name: 'Ana Santamaria',
//   role: 'Full-Stack Developer',
//   picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
//   description:
//     'Full-Stack developer aimed at providing real value. My greatest strength is my versatility to move throughout the development cycle. I firmly believe that the best software is born from teamwork and the integration of ideas. I constantly learn and adapt easily to the technical requirements of each challenge. I build end-to-end solutions, ensuring that every line of code has a clear and scalable purpose.',
//   resume: 'https://example.com',
//   social: {
//     linkedin: 'https://linkedin.com',
//     github: 'https://github.com/AnahDev',
//   },
// };


export const getAbout = (lang: Language): About => {
  const t = lang === 'es' ? es.about : en.about;

  return {
    text: t.text,
    name: 'Ana Santamaria',
    role: t.role,
    picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    description: t.description,
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com/in/anasantamariadev',
      github: 'https://github.com/AnahDev',
    },
  };
};

// export const projects: Project[] = [
//   {
//     name: 'Project 1',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//     image: 'cleanfolio.png',
//   },
//   {
//     name: 'Project 2',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//     image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
//   },
//   {
//     name: 'Project 3',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//   },
// ];


export const getProjects = (lang: Language): Project[] => {
  const t = lang === 'es' ? es.projects : en.projects;

  return [
    {
      name: 'Project 1',
      description: t.project1,
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
    },
    {
      name: 'Project 2',
      description: t.project2,
      stack: ['Laravel', 'PostgreSQL', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
    },
    {
      name: 'Project 3',
      description: t.project3,
      stack: ['Python', 'FastAPI', 'Next.js'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
      image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png'
    },
  ];
};


export const skills: string[] = [
  'HTML',
  'CSS',
  'TypeScript',
  'React',
  'Laravel',
  'NextJs',
  'Python',
  'PostgreSQL',
  'Git',


];

export const contact: Contact = {
  email: 'anadevtools@gmail.com',
};