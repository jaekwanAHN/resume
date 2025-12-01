import { ProjectInfo } from '@/types';

export const projects: ProjectInfo[] = [
  {
    projectTitle: 'www-react',
    companyName: '하우저 (Howser)',
    description: '기업 고객 문의 관리, 전체 의뢰설정 서비스',
    projectDate: '2023.11 ~ 2025.09',
    projectParticipants: '',
    deployLink: '',
    githubLink: '',
    stackList: [
      'React',
      'Next.js',
      'TypeScript',
      'react Query',
      'styled-Components',
      'Redux',
    ],
    feature: [
      {
        main: 'react Query를 활용하여 백엔드 REST API와 통신.',
        sub: [
          '무분별하게 사용되던 query-Key를 정리하여 invalidateQueries를 활용함으로써 불필요한 데이터 리패칭과 페이지 리랜더링 제거.',
        ],
      },
      {
        main: '공통 컴포넌트 type 수정.',
        sub: [
          'React.ElementType 기반 제네릭과 Omit 유틸 타입을 적용하여 as prop 으로 전달된 엘리먼트의 고유 속성까지 안전하게 사용할 수 있도록 개선.',
        ],
      },
      {
        main: '버그 수정, 편의성 개선.',
        sub: [
          '커스텀 checkbox group에서 클릭된 요소 외 요소가 함께 체크되는 현상을 내부로직 중 includes 메서드를 filter로 수정하여 해결.',
          'Styled Components 네이밍을 정리하여 Styled Wrapper 와 Logic Component를 구별하여 작업 시 확인 단계 감소.',
        ],
      },
    ],
  },
  {
    projectTitle: 'web-JSP',
    companyName: '하우저 (Howser)',
    description: '개별 의뢰관리 서비스',
    projectDate: '2023.11 ~ 2025.09',
    projectParticipants: '',
    deployLink: '',
    githubLink: '',
    stackList: ['JavaScript', 'jQuery', 'JSP'],
    feature: [
      {
        main: '코드 최적화.',
        sub: [
          '이벤트 버블링활용으로 동일 로직을 더 간소화 하여 가독성 향상.',
          '중복 코드 함수화, 중복 선택자 정리로 코드량 감소.',
        ],
      },
      {
        main: '개발 환경 개선.',
        sub: [
          'application.yml 수정으로 서버를 재부팅 하지 않아도 변경 내용을 확인할 수 있도록 하여 개발 시간 단축.',
        ],
      },
    ],
  },
  {
    projectTitle: 'customer-react',
    companyName: '하우저 (Howser)',
    description: '개인 고객 주문진행 서비스',
    projectDate: '2023.11 ~ 2025.09',
    projectParticipants: '',
    deployLink: '',
    githubLink: '',
    stackList: [
      'React',
      'Next.js',
      'TypeScript',
      'react Query',
      'styled-Components',
      'Redux',
    ],
    feature: [
      {
        main: 'Redux Toolkit 사용으로 UI 관리.',
        sub: [
          'loading / fetching / error state를 store 로 관리하여 UI 구현 간소화 및 일관된 상태관리.',
        ],
      },
    ],
  },
  {
    projectTitle: 'moweb-react',
    companyName: '하우저 (Howser)',
    description: '배송 기사 대상의 의뢰 정보 확인 서비스',
    projectDate: '2023.11 ~ 2025.09',
    projectParticipants: '',
    deployLink: '',
    githubLink: '',
    stackList: [
      'React',
      'Next.js',
      'TypeScript',
      'react Query',
      'styled-Components',
      'Redux',
    ],
    feature: [
      {
        main: '검색어 입력, 배송조회에 Debouncing / Throttling 활용으로 API 요청 최소화.',
      },
      {
        main: 'API Response data 타입 수정으로 잘못된 값이 노출되던 현상 수정.',
      },
    ],
  },
  {
    projectTitle: '랭킹 먼지',
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
      'Framer Motion',
      'React Query',
      'Axios',
      'Vercel',
    ],
    feature: [
      {
        main: 'Kakao MAP API 사용을 위한 useMap Hook(줌 인/아웃, 내위치 이동, custom overlay) 구현.',
      },
      {
        main: 'Error Boundary와 Suspense를 묶은 Async Boundary를 적용하여 선언적 에러 처리와 로딩UI 처리.',
      },
      {
        main: '반응형 페이지로 제작하여 다양한 환경에 대응.',
      },
      {
        main: 'UI 일관성 유지를 위하여 Skeleton UI 적용.',
      },
      {
        main: '모바일 환경에서의 편의성을 고려하여 네비게이션바 구현.',
      },
      {
        main: 'Geolocation API를 사용하여 내위치 기반 정보 제공.',
      },
    ],
  },
];
