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
    ['Tailwind CSS', 'Chakra UI', 'styled-components', 'Storybook'],
    ['Vite', 'React Query', 'Axios', 'React Hook Form', 'Vercel'],
    ['Git', 'GitHub'],
  ],
  experiences: [
    {
      name: '한국과학기술정보연구원 (비개발)',
      date: '2020-09 ~ 2021-01',
      works: [
        '여러 분야의 논문들을 카테고리에 맞는 문장별로 분리했습니다. 100% 재택근무로 진행되었고 피드백을 단방향으로만 제공하는 형태였기 때문에 작업자 간 의사소통이 불가능하였습니다. 이에 피드백의 내용들 중 공통으로 언급된 내용을 반영하며 작업을 진행하였으나, 구체적인 이유나 내용을 알 수 없어 아쉬웠습니다. 구성원들 간의 소통이 중요하다고 느끼게 된 경험이었습니다.',
      ],
    },
    {
      name: '신우TNS (비개발)',
      date: '2019-07 ~ 2019-12',
      works: [
        '네트워크 엔지니어 고객사의 장비 트러블 슈팅, 유지보수, 점검을 진행했습니다. 업데이트를 위해 협업했던 개발사에서 솔루션의 코드의 수정이 필요했는데 하드 코딩된 코드가 많고 전임자의 퇴사로 거의 처음부터 새로 만들어야 한다는 답변을 들었습니다. 이 기억을 떠올리며 이해하기 쉽고, 재사용하기 좋은 코드를 작성하는 것이 매우 중요하다고 느끼고 있습니다.',
      ],
    },
  ],
  education: '국민대학교(컴퓨터공학 전공 • 학사 ) 2014-02 ~ 2021-02',
  certification: '정보처리기사 2020-12',
  activities: [
    {
      title: 'Next.js Docs 한글화 작업 참여',
      link: 'https://github.com/Nextjs-kr/Nextjs.kr/pull/252',
      description: `app/api-reference/components/script 문서를 번역했습니다.`,
    },
  ],
};
