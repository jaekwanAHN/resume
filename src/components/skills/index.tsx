import { PersonalInformation } from '@/data/personal';

const Skills = () => {
  return (
    <div className="pb-2">
      <p className="text-2xl text-blue-500">Skills</p>
      {PersonalInformation.skills[0].join(' ')}
      <br />
      {PersonalInformation.skills[1].join(' ')}
      <br />
      {PersonalInformation.skills[2].join(' ')}
    </div>
  );
};

export default Skills;
