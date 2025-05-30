import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'TypeScript',
    },
    {
      title: 'JavaScript',
    },
    {
      title: 'HTML/CSS',
    },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Fameworks & Libraries',
  items: [
    {
      title: 'Next.js',
    },
    {
      title: 'React Native',
    },
    {
      title: 'Zustand',
    },
    {
      title: 'NestJS',
    },
    {
      title: 'Express.js',
    },
    {
      title: 'Prisma',
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'Vercel',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Nginx',
    },
    {
      title: 'Supabase',
    },
    {
      title: 'PostgreSQL',
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'VS Code',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'Postman',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Figma',
    },
    {
      title: 'Jest',
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'UI/UX',
  items: [
    {
      title: 'Material UI',
    },
    {
      title: 'Tailwind CSS',
    },
    {
      title: 'Shadcn UI',
    },
    {
      title: 'Framer-motion',
    },
  ],
};

// const misc: ISkill.Skill = {
//   category: 'Misc',
//   items: [
//     {
//       title: 'Coffee Brewing',
//     },
//     {
//       title: "Rubik's Cube Solving",
//     },
//     {
//       title: 'Table Tennis',
//     },
//     {
//       title: 'Guitar Playing',
//     },
//     {
//       title: 'Joke Telling',
//     },
//     {
//       title: 'Duct Tape Crafting',
//     },
//   ],
// };

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    // misc,
  ],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
