import introduce from '@/data/introduce';

const Introduce = () => {
  return (
    <div className="mb-2">
      <div className="h-8"></div>
      {introduce.map((introduce) => {
        return (
          <p key={introduce.title}>
            <b>{introduce.title}</b>
            {introduce.content}
            <br />
            <br />
          </p>
        );
      })}
    </div>
  );
};
export default Introduce;
