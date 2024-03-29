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
      <p className="text-2xl text-blue-500 sectionTitle">Experiences</p>
      {experiences.map((experience) => {
        return (
          <div key={experience.name} className="mb-2">
            <p>
              {experience.name} {experience.date}
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
