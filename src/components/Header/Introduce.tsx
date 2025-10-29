import introduce from '@/data/introduce';

const Introduce = () => {
  return (
    <div className="mb-4">
      <div className="h-8"></div>
      {introduce.map((introduce) => {
        return (
          <div key={introduce.title} className="mb-2">
            <p key={introduce.title}>
              <b>{introduce.title}</b>
              {introduce.content}
              <br />
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Introduce;
