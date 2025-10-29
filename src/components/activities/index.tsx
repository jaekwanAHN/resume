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
    <ul className="mb-4">
      <p className="text-2xl text-blue-500 sectionTitle">활동</p>
      {activities.map((activity) => {
        return (
          <li
            key={activity.title}
            className="marker:text-blue-500 list-disc list-inside h-auto"
          >
            <Link href={activity.link}>{activity.title}</Link>
            <p>{activity.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Activities;
