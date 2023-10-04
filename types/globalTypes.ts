export interface WorkExperience {
  company: string;
  endDate: string;
  highlights: string[];
  position: string;
  startDate: string;
  summary: string;
  website: string;
  project: string;
  team: string;
  scopes: string[];
  tasks: TaskGroup;
  stack: string[];
  icon: string;
}

export interface TaskGroup {
  frontend: string[];
  backend: string[];
  devops: string[];
  lead: string[];
  other: string[];
}
