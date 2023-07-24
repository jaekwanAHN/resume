interface InFoDateProps {
  projectTitle: string;
  projectDate: string;
  projectParticipants: string;
}

const InfoDate = ({
  projectTitle,
  projectDate,
  projectParticipants,
}: InFoDateProps) => {
  return (
    <>
      <p>{projectTitle}</p>
      <p>{projectDate}</p>
      <p>{projectParticipants}</p>
    </>
  );
};

export default InfoDate;
