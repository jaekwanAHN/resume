import { PersonalInformation } from '@/types';

export const personalInformation: PersonalInformation = {
  name: '안재관',
  phoneNumber: '010-8003-3635',
  eMail: 'ggstork@gmail.com',
  github: 'https://github.com/jaekwanAHN',
  blog: 'https://jaekwan.tistory.com',
  skills: [
    ['TypeScript', 'JavaScript'],
    ['React', 'Next.js'],
    ['styled-components', 'Tailwind CSS', 'Storybook'],
    ['React Query', 'Redux'],
    ['Git', 'GitHub', 'GitLab'],
  ],
  experiences: [
    {
      name: '하우저 (HOWSER)',
      date: '2023-11 ~ 2025-11',
      works: [
        '레거시 프로젝트 코드 리팩터링으로 불필요코드제거, 로직 간소화 코드양 30% 감소',
        'valinaJS -> NextJS 로 마이그레이션',
        'Styled-alias 정리로 컨벤션 통일'
      ],
    },
    {
      name: '한국과학기술정보연구원 (비개발)',
      date: '2020-09 ~ 2021-01',
      works: [
        '여러 분야의 논문들을 카테고리에 맞는 문장별로 분리',
      ],
    },
    {
      name: '신우TNS (비개발)',
      date: '2019-07 ~ 2019-12',
      works: [
        '네트워크 엔지니어 고객사의 장비 트러블 슈팅, 유지보수, 점검을 진행',
      ],
    },
  ],
  education: '국민대학교(컴퓨터공학 전공 • 학사) 2014-02 ~ 2021-02',
  certification: '정보처리기사 2020-12',
  activities: [
    {
      title: 'Next.js Docs 한글화 작업 참여',
      link: 'https://github.com/Nextjs-kr/Nextjs.kr/pull/252',
      description: `app/api-reference/components/script 문서를 번역했습니다.`,
    },
  ],
};
