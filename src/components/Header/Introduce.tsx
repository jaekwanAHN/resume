import introduce from '@/data/introduce';

const Introduce = () => {
  return (
    <div className="mb-2">
      <p className="text-2xl text-blue-500 sectionTitle">Introduce</p>
      {introduce.map((introduce: string) => {
        let splitIntroduceIntroduce = introduce.split('.');
        return (
          <p key={introduce}>
            <b>{`${splitIntroduceIntroduce[0]}.`}</b>
            {splitIntroduceIntroduce.slice(1).join('.')}
            <br />
            <br />
          </p>
        );
      })}
    </div>
  );
};
export default Introduce;
