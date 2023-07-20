import ProjectStacks from '@/components/Projects/ProjectStacks';

interface ProjectContentProps {
  stackList: string[];
  feature: string[];
}

const ProjectContent = ({ stackList, feature }: ProjectContentProps) => {
  return (
    <div>
      <h2>전국의 미세먼지 정보확인 서비스</h2>
      <hr />
      <ul>
        {feature.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <ProjectStacks stackList={stackList} />
    </div>
  );
};

export default ProjectContent;
