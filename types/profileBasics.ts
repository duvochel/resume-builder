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

export type Locale = 'fr' | 'en'; 
