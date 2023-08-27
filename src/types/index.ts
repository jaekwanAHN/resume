export interface ProjectInfo {
  projectTitle: string;
  description: string;
  projectDate: string;
  projectParticipants: string;
  deployLink?: string;
  githubLink: string;
  stackList: string[];
  feature: string[];
}

export interface PersonalInformation {
  name: string;
  phoneNumber: string;
  eMail: string;
  github: string;
  blog: string;
  skills: string[][];
  experiences: {
    name: string;
    date: string;
    works: string[];
  }[];
  education: string;
  certification: string;
  activities: {
    title: string;
    link: string;
    description: string;
  }[];
}

export type introduces = string[];
