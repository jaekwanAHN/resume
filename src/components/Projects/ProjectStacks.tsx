interface ProjectStacks {
  stackList: string[];
}

const ProjectStacks = ({ stackList }: ProjectStacks) => {
  return (
    <>
      <p>기술 스택: {stackList.join(', ')}</p>
    </>
  );
};

export default ProjectStacks;
