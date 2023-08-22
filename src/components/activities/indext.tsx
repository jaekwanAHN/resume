import Link from 'next/link';

interface activitiesProps {
  activities: {
    title: string;
    link: string;
    description: string;
  }[];
}

const Activities = ({ activities }: activitiesProps) => {
  return (
    <ul className="section marker:text-blue-500 list-disc list-inside mb-2">
      <p className="text-2xl text-blue-500 sectionTitle">Activities</p>
      {activities.map((activity) => {
        return (
          <li key={activity.title}>
            <Link href={activity.link}>{activity.title}</Link>
            <p>{activity.description}</p>
            <br />
          </li>
        );
      })}
    </ul>
  );
};

export default Activities;
