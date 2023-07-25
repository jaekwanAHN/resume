interface certificationProps {
  certification: string;
}

const Certification = ({ certification }: certificationProps) => {
  return (
    <div className="pb-2">
      <p className="text-2xl text-blue-500">Certification</p>
      <p>{certification}</p>
    </div>
  );
};

export default Certification;
