import ProjectStacks from '@/components/Projects/ProjectStacks';

const ProjectContent = () => {
  return (
    <div>
      <h2>전국의 미세먼지 정보확인 서비스</h2>
      <hr />
      <ul>
        <li>
          Custom Hook
          <ul>
            <li>
              Kakao MAP api 사용을 위한 useMap Hook(줌 인/아웃, 내위치 이동,
              custom overlay)을 구현
            </li>
            <li>geolocation api를 사용하여 내위치 기반 정보 제공</li>
          </ul>
        </li>
      </ul>
      <ProjectStacks
        stackList={[
          'React',
          'TypeScript',
          'Vite',
          'Chakra UI',
          'React Query',
          'Axios',
          'Framer Motion',
        ]}
      />
    </div>
  );
};

export default ProjectContent;
