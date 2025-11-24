export interface ProjectInfo {
  projectTitle: string;
  companyName?: string;
  description: string;
  projectDate: string;
  projectParticipants?: string;
  deployLink?: string;
  githubLink?: string;
  stackList: string[];
  feature: {
    main: string;
    sub?: string[];
  }[];
}

export interface PersonalInformation {
  name: string;
  phoneNumber: string;
  eMail: string;
  github: string;
  blog: string;
  skills: string[][];
  education: string;
  certification: string;
  activities: {
    title: string;
    link: string;
    description: string;
  }[];
}
