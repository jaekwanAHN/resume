import Link from 'next/link';
import { Fragment } from 'react';

interface activitiesProps {
  activities: {
    title: string;
    link: string;
  }[];
}

const Activities = ({ activities }: activitiesProps) => {
  return (
    <div className="section">
      <p className="text-2xl text-blue-500 sectionTitle">Activities</p>
      {activities.map((activity) => {
        return (
          <Fragment key={activity.title}>
            <Link href={activity.link}>
              <i>{activity.title}</i>
            </Link>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Activities;
