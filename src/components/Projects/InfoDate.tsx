interface InFoDateProps {
  projectDate: string;
  projectParticipants: string;
}

const InfoDate = ({ projectDate, projectParticipants }: InFoDateProps) => {
  return (
    <>
      <p>{projectDate}</p>
      <p>{projectParticipants}</p>
    </>
  );
};

export default InfoDate;
