import { ProjectInfo } from '@/types';

export const projects: ProjectInfo[] = [
  {
    title: '랭킹 먼지',
    description: '전국의 미세먼지 정보확인 서비스',
    projectDate: '2023.03 ~ 2023.05',
    projectParticipants: '2명',
    deployLink: 'https://dust-rating.vercel.app/',
    githubLink: 'https://github.com/tooooo1/dust-rating',
    stackList: [
      'React',
      'TypeScript',
      'Vite',
      'Chakra UI',
      'React Query',
      'Axios',
      'Framer Motion',
    ],
    feature: [
      'Kakao MAP api 사용을 위한 useMap Hook(줌 인/아웃, 내위치 이동, custom overlay)을 구현',
      'geolocation api를 사용하여 내위치 기반 정보 제공 ',
      '에러 바운더리와 서스펜스를 묶은 Async 바운더리를 적용하여 선언적으로 에러 처리와 로딩 UI 처리',
      '반응형 페이지들로 제작하여 다양한 환경에 대응',
      '페이지들의 CLS를 0으로 개선',
      'UI 일관성 유지를 위하여 Skeleton UI 적용',
      '각 페이지간 이동을 위한 NaviBar를 구현',
    ],
  },
];
