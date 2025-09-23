interface InFoDateProps {
  projectTitle: string;
  projectDate: string;
  projectParticipants?: string;
}

const InfoDate = ({
  projectTitle,
  projectDate,
  projectParticipants,
}: InFoDateProps) => {
  return (
    <div className="text-lg mb-4">
      <p>
        <b>{projectTitle}</b>
      </p>
      <p className="font-light text-sm">{projectDate}</p>
      <p className="font-light text-sm">{projectParticipants}</p>
    </div>
  );
};

export default InfoDate;
