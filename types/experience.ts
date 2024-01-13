export interface WorkExperience {
  company: string;
  startDate: string;
  endDate: string;
  position: string;
  mainLanguage: string;
  summary: string;
  website: string;
  team: string;
  scopes: string[];
  tasks: TaskGroup;
  stack: string[];
  icon: string;
  spacer?: number;
}

export interface TaskGroup {
  frontend: string[];
  backend: string[];
  devops: string[];
  lead: string[];
  other: string[];
}
