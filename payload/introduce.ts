import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/앱 서비스 풀스택 개발과 스타트업 개발자로서의 다양한 경험이 있습니다. Node.js, TypeScript, NextJS, React Native, AWS, NestJS 등을 사용하여 프로덕션 서비스를 설계, 개발, 운영한 경험으로 확장성과 유지 보수성이 높은 아키텍처와 패턴을 위해 언제나 고민하고 있습니다.',
    '오픈소스 라이브러리에 관심이 많고, 다양한 방법으로 프로젝트에 적용하려 노력하고 있습니다. 이외에도 개인 프로젝트나 팀 프로젝트 활동을 통해 다양한 개발 경험을 즐기고 있습니다. 언제나 웹 개발의 정점을 찍고 싶다고 생각하고 있으며, 조금 더 나중에는 어딘가의 기술 조직 리더라는 목표를 가지고 다양한 기술을 학습하거나 사용하고 경험을 쌓고 있습니다.',
    '서비스 개발이란 결국 개발과 비즈니스와의 커뮤니케이션이 가장 중요하다고 생각하고 있습니다. 능동적이고 적극적인 커뮤니케이션으로 문제 해결과 비즈니스 발전을 위해 뛰어듭니다. 이러한 점을 바탕으로 더 좋은 개발자로서 성장하기 위해 더 치열하게 학습하고, 경험하고, 노력하고 있습니다.',
  ],
  sign: 'GyuWon',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
