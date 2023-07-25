interface activitiesProps {
  activities: string[];
}

const Activities = ({ activities }: activitiesProps) => {
  return (
    <div className="pb-2">
      <p className="text-2xl text-blue-500">Activities</p>
      {activities.map((activity) => {
        return <p key={activity}>{activity}</p>;
      })}
    </div>
  );
};

export default Activities;
