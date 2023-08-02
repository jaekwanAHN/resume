interface ProjectStacks {
  stackList: string[];
}

const ProjectStacks = ({ stackList }: ProjectStacks) => {
  return (
    <ul className="mb-2">
      {stackList.map((stack) => {
        return (
          <li
            key={stack}
            className="inline-block bg-blue-500 rounded text-white mr-1 px-1"
          >
            {stack}
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectStacks;
