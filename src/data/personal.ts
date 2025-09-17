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
        '고객사, 서비스 관리자, 물류배달기사와 같은 다양한 출처의 VOC를 수렴하여 서비스 유지/보수',
        '레거시 리팩터링으로 불필요한 코드 제거, 중첩 조건문 등 복잡한 로직 단순화',
        '일부 메뉴 valinaJS -> Next.js 마이그레이션',
        'Next.js, jQuery로 구성된 5개의 프로젝트에서 신규페이지 추가, 서비스 유지/보수 진행'
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
