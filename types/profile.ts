import { Locale } from '@/i18n-config';
import { IDiploma } from './education';
import { WorkExperience } from './experience';
import { Skill } from './skill';

export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: Location;
  socialMedias: SocialMedia[];
}

interface Location {
  countryCode: string;
  address: string;
}

interface SocialMedia {
  network: string;
  username: string;
  url: string;
  icon: string;
}

export interface IProfile {
  locale: Locale;
  basics: Basics;
  work: WorkExperience[];
  volunteer: string[];
  education: IDiploma[];
  awards: string[];
  publications: string[];
  skills: Skill[];
  languages: [
    {
      language: string;
      fluency: string;
    }
  ];
  interests: string[];
  references: string[];
}
