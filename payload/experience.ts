import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '메타뱅크',
      positions: [
        {
          title: '웹 개발자',
          startedAt: '2024-01',
          descriptions: [
            'Metabank, Meta360, MetaVision 플랫폼 기존 PHP에서 Next.js로 리팩토링',
            '가상 피팅 모델 플랫폼 BOGOFIT에 필요한 CMS, 온라인 쇼핑몰 Next.js로 프론트엔드 개발, GraphQL API 구현 및 데이터 모델 설계',
            '기존 카페24 쇼핑몰 황금단 Next.js로 리팩토링, Node.js로 백엔드 API 구현 및 데이터 모델 재설계, MUI를 활용한 CMS 구축',
            '반려동물 종합 플랫폼 펫빌리티 Next.js로 프론트엔드 개발, NestJS로 백엔드 API 구현 및 데이터 모델 설계',
          ],
          skillKeywords: [
            'TypeScript',
            'Next.js',
            'NestJS',
            'Node.js',
            'GraphQL',
            'PostgreSQL',
            'AWS',
            'Docker',
            'Supabase',
            'Prisma',
            'MUI',
            'Tailwind CSS',
            'Shadcn UI',
            'Framer Motion',
            'React Native',
          ],
        },
      ],
    },
  ],
};

export default experience;
