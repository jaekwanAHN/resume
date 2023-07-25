import { PersonalInformation } from '@/data/personal';
import { Fragment } from 'react';

const Experiences = () => {
  return (
    <div className="pb-2">
      <p className="text-2xl text-blue-500">Experiences</p>
      {PersonalInformation.experiences.map((experience) => {
        return (
          <Fragment key={experience.name}>
            <p>
              {experience.name} {experience.date}
            </p>

            <ul className="pb-2">
              {experience.works.map((work) => {
                return <li key={work}>{work}</li>;
              })}
            </ul>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Experiences;
