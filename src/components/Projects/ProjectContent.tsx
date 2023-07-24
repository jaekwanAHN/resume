import ProjectStacks from '@/components/Projects/ProjectStacks';

interface ProjectContentProps {
  stackList: string[];
  feature: string[];
  description: string;
}

const ProjectContent = ({
  stackList,
  feature,
  description,
}: ProjectContentProps) => {
  return (
    <div>
      <p className="text-base">{description}</p>
      <ul className="marker:text-blue-500 list-disc">
        {feature.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <ProjectStacks stackList={stackList} />
    </div>
  );
};

export default ProjectContent;
