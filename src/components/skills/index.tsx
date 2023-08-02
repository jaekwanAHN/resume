import { PersonalInformation } from '@/data/personal';

const Skills = () => {
  return (
    <div className="section">
      <p className="text-2xl text-blue-500">Skills</p>
      <strong>{PersonalInformation.skills[0].join(', ')}</strong>
      <br />
      {PersonalInformation.skills[1].join(', ')}
      <br />
      {PersonalInformation.skills[2].join(', ')}
    </div>
  );
};

export default Skills;
