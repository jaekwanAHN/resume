import { PersonalInformation } from '@/types';

export const personalInformation: PersonalInformation = {
  name: '안재관',
  phoneNumber: '010-8003-3635',
  eMail: 'ggstork@gmail.com',
  github: 'https://github.com/jaekwanAHN',
  blog: 'https://jaekwan.tistory.com',
  skills: [
    ['React', 'TypeScript', 'JavaScript'],
    ['Next.js', 'tailwindcss', 'ChakraUI', 'styled-components'],
    ['Axios', 'React Query', 'Storybook', 'Framer Motion', 'Vite'],
    ['Git', 'GitHub'],
  ],
  experiences: [
    {
      name: '한국과학기술정보연구원 (비개발)',
      date: '2020-09 ~ 2021-01',
      works: [
        '여러 분야의 논문들을 머신러닝에 필요한 데이터 형태로 분류했습니다.',
      ],
    },
    {
      name: '신우TNS (비개발)',
      date: '2019-07 ~ 2019-12',
      works: [
        '네트워크엔지니어 고객사의 장비 트러블 슈팅, 유지보수, 점검을 진행했습니다.',
        '데이터 센터 이전 작업 등에 참여하며 DNS, DHCP, OSPF에 대해 알게되었습니다.',
        '작업전 SOP작성, 작업 종료 후 보고서 작성을 진행하였습니다.',
      ],
    },
  ],
  education: '국민대학교(컴퓨터공학 전공 • 학사 ) 2014-02 ~ 2021-02',
  certification: '정보처리기사 2020-12',
  activities: [
    {
      title: 'NextJS DOC 한글화 작업 참여',
      link: 'https://github.com/Nextjs-kr/Nextjs.kr/pull/252',
    },
  ],
};
