import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'BOGOFIT CMS 개발 및 유지보수',
      startedAt: '2025-04',
      where: '메타뱅크',
      descriptions: [
        {
          content: 'BOGOFIT CMS 개발.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Next.js 기반 프론트엔드 서비스 개발' },
            { content: 'GraphQL API Apollo Client 연동' },
            { content: 'Shadcn UI 컴포넌트 사용' },
            { content: 'Prisma ORM으로 DB 모델링' },
          ],
        },
      ],
    },
    {
      title: '펫빌리티 프론트엔드/백엔드 개발 및 유지보수',
      startedAt: '2025-03',
      endedAt: '2025-05',
      where: '메타뱅크',
      descriptions: [
        {
          content: '펫빌리티 백엔드 개발.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'NestJS 기반 백엔드 서비스 개발' },
            { content: '프론트 API랑 DB 연동' },
            { content: 'Swagger API 문서 작성' },
            { content: 'Jest로 테스트 코드 작성 및 포스트맨 테스트' },
            { content: 'Prisma ORM으로 DB 모델링' },
          ],
        },
        {
          content: '반려동물 종합 플랫폼 펫빌리티 프론트엔드 개발 및 유지보수.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Next.js로 프론트엔드 서비스 개발' },
            { content: '토스 페이먼츠 Next.js API route로 연동' },
            { content: 'NextAuth.js로 소셜 로그인/이메일 로그인 연동' },
            { content: 'React Callendar로 캘린더 컴포넌트 개발' },
          ],
        },
      ],
    },
    {
      title: '황금단 프론트엔드/백엔드 서비스 개발',
      startedAt: '2024-12',
      endedAt: '2025-02',
      where: '메타뱅크',
      descriptions: [
        {
          content: '황금단 쇼핑몰 Admin CMS 개발.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Next.js로 Meterial-UI 기반 Admin CMS 개발' },
            { content: 'API 비동기 연동 및 캐싱 처리' },
          ],
        },
        {
          content: '황금단 쇼핑몰 Next.js TypeScript 리팩토링.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Next.js로 프론트엔드 서비스 개발' },
            { content: '얼굴 합성 AI 웹소켓 연동' },
            { content: 'API 비동기 연동 및 캐싱 처리' },
          ],
        },
        {
          content: 'Node.js 기반 백엔드 서비스 개발 및 유지보수.',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '황금단 쇼핑몰이 전반적인 백엔드 구현, 인프라 구축, 이벤트 설계 및 RESTful API 개발',
            },
            { content: '데이터베이스 및 API 응답 모델링을 통한 구조 설계와 기획서 분석' },
            { content: 'AWS EC2, pm2, Nginx 등 인프라 구축 및 설정' },
            { content: 'Docker 컨테이너 이미지 빌드 및 배포' },
            { content: '카카오, 구글, 네이버 Oauth2 소셜 로그인 연동' },
            { content: '토스 페이 연동' },
          ],
        },
        {
          content: 'JavaScript 기반 프론트엔드 서비스 개발 및 유지보수.',
        },
      ],
    },
    {
      title: 'Meta360, MetaVision, Metabank 프론트엔드 서비스 개발',
      startedAt: '2024-01',
      endedAt: '2024-11',
      where: '메타뱅크',
      descriptions: [
        {
          content: 'Meta360 플랫폼 프론트엔드 개발 및 유지보수.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'PHP 그누보드 기반 Meta360 플랫폼 개발' },
            { content: 'Next.js로 Meta360 Admin CMS 개발' },
            { content: 'Next.js로 Meta360 플랫폼 리팩토링' },
            { content: '첫 API 연동 및 테스트' },
          ],
        },
        {
          content: 'MetaVision 플랫폼 프론트엔드 개발 및 유지보수.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'PHP 그누보드 기반 MetaVision 플랫폼 개발' },
            { content: 'Next.js로 MetaVision Admin CMS 개발' },
            { content: 'Next.js로 MetaVision 플랫폼 리팩토링' },
            { content: 'GraphQL API 연동' },
            { content: '3D 모델 데이터 변환 API 연동 및 웹 소켓 연동' },
          ],
        },
        {
          content: 'Metabank 플랫폼 프론트엔드 개발 및 유지보수.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'PHP 그누보드 기반 Metabank 플랫폼 개발' },
            { content: 'Next.js로 Metabank 플랫폼 리팩토링' },
          ],
        },
      ],
    },
  ],
};

export default project;
