interface EducationProps {
  education: string;
}

const Education = ({ education }: EducationProps) => {
  return (
    <div className="section">
      <p className="text-2xl text-blue-500 sectionTitle">교육</p>
      <p>{education}</p>
    </div>
  );
};

export default Education;
