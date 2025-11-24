import { ProjectInfo } from '@/types';
import Link from 'next/link';

interface ProjectInfoProps {
  projects: ProjectInfo[];
}

const Projects = ({ projects }: ProjectInfoProps) => {
  return (
    <div className="mb-4 flex justify-start flex-col">
      <p className="text-2xl text-blue-500 sectionTitle">프로젝트</p>
      {projects.map((project) => {
        return (
          <div
            key={project.projectTitle}
            className="flex flex-row border-2 border-transparent border-b-blue-600            
          mb-2"
          >
            <div className="flex">
              <div className="min-w-[200px] ">
                <div className="text-lg mb-4">
                  <p>
                    <b>{project.projectTitle}</b>
                  </p>
                  <p className="font-light text-sm">{project.companyName}</p>
                  <p className="font-light text-sm">{project.projectDate}</p>
                  <p className="font-light text-sm">
                    {project.projectParticipants}
                  </p>
                </div>
                <>
                  {project.deployLink ? (
                    <Link href={project.deployLink}>배포 링크</Link>
                  ) : (
                    ''
                  )}
                  <br />
                  {project.githubLink ? (
                    <Link href={project.githubLink}>GitHub 링크</Link>
                  ) : (
                    ''
                  )}
                </>
              </div>
              <div>
                <p className="font-semibold mb-2">{project.description}</p>
                <ul className="marker:text-blue-500 list-disc mb-2">
                  {project.feature.map((feature) => (
                    <>
                      <li key={feature.main}>{feature.main}</li>
                      {feature.sub
                        ? feature.sub.map((value) => (
                            <li key={value} className="pl-5 list-none">
                              {value}
                            </li>
                          ))
                        : null}
                    </>
                  ))}
                </ul>
                <ul className="mb-2">
                  {project.stackList.map((stack) => {
                    return (
                      <li
                        key={stack}
                        className="inline-block bg-blue-500 rounded text-white mr-1 px-1"
                      >
                        {stack}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
