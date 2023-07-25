interface ProfileProps {
  name: string;
}

const Profile = ({ name }: ProfileProps) => {
  return (
    <div className="flex justify-center items-center min-w-[10%]">
      <p className="text-xl">{name}</p>
    </div>
  );
};
export default Profile;
