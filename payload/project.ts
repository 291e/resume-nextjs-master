import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Linux Kernel Optimization Project',
      startedAt: '2024-06',
      where: 'Linux Foundation',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: '황금단 프론트엔드/백엔드 서비스 개발',
      startedAt: '2024-12',
      endedAt: '2025-03',
      where: '메타뱅크',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
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
