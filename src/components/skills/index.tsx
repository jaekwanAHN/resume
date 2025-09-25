interface skillList {
  skills: string[][];
}

const Skills = ({ skills }: skillList) => {
  return (
    <div className="section">
      <p className="text-2xl text-blue-500 sectionTitle">기술</p>
      <ul className="marker:text-blue-500 list-disc list-inside">
        {skills.map((skillList, idx) => {
          if (idx === 0) {
            return (
              <li key={skillList.join('')}>
                <strong>{skillList.join(', ')}</strong>
              </li>
            );
          } else {
            return <li key={skillList.join('')}>{skillList.join(', ')}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Skills;
