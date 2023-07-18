interface ProfileProps {
  name: string;
}

const Profile = ({ name }: ProfileProps) => {
  return <h1>{name}</h1>;
};
export default Profile;
