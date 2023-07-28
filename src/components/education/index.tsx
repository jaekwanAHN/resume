interface EducationProps {
  education: string;
}

const Education = ({ education }: EducationProps) => {
  return (
    <div className="pb-2">
      <p className="text-2xl text-blue-500">Education</p>
      <p>{education}</p>
    </div>
  );
};

export default Education;