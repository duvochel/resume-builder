export interface WorkExperience {
  company: string;
  startDate: string;
  endDate: string;
  rangeString: string;
  highlights: string[];
  position: string;
  summary: string;
  website: string;
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
