interface ExperiencesProps {
  experiences: {
    name: string;
    date: string;
    works: string[];
  }[];
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <div className="section">
      <div>
        <p className="text-2xl text-blue-500 sectionTitle">경력</p>
      </div>
      {experiences.map((experience) => {
        return (
          <div key={experience.name} className="mb-2">
            <p>{experience.name}</p>
            <p className="text-xs">
              {experience.date} {'(1년 9개월)'}
            </p>
            <ul className="marker:text-blue-500 list-disc list-inside">
              {experience.works.map((work) => {
                return (
                  <li style={{ wordWrap: 'break-word' }} key={work}>
                    {work}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
