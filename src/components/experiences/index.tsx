import { PersonalInformation } from '@/data/personal';

const Experiences = () => {
  return (
    <div className="section">
      <p className="text-2xl text-blue-500">Experiences</p>
      {PersonalInformation.experiences.map((experience) => {
        return (
          <div key={experience.name} className="mb-2">
            <p>
              {experience.name} {experience.date}
            </p>

            <ul className="marker:text-blue-500 list-disc list-inside">
              {experience.works.map((work) => {
                return <li key={work}>{work}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
