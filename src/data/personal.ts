import { PersonalInformation } from '@/types';

export const personalInformation: PersonalInformation = {
  name: '안재관',
  phoneNumber: '010-8003-3635',
  eMail: 'ggstork@gmail.com',
  github: 'https://github.com/jaekwanAHN',
  blog: 'https://jaekwan.tistory.com',
  skills: [
    ['React', 'TypeScript', 'Next.js', 'JavaScript'],
    ['styled-components', 'Tailwind CSS', 'Storybook'],
    ['React Query', 'Redux'],
    ['Git', 'GitHub', 'GitLab'],
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
