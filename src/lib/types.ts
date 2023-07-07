export type SocialIconsNameType =
  | 'facebook'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'link'
  | 'twitter'
  | 'youtube'
  | 'discord';

export interface EventInterface {
  id: number;
  title: string;
  description: string;
  endTime?: Date;
  startTime: Date;
  link: string;
  socials: Array<{ name: SocialIconsNameType; link: string }>;
  themes: string[];
}

export type SpeakerType = {
  name: string;
  profile: string;
  designation: string;
  socials: {
    [key: string]: string;
  };
};
// export type EventType = {
//   id: string;
//   name: string;
//   location: string;
//   date: Date;
//   link: string;
//   image: string;
//   logo?: string;
//   organizer: string;
//   details?: string;
//   speakers?: SpeakerType[];
//   duration?: string;
//   requiresTicket?: boolean;
//   sponsors?: string[];
// };
export type SearchType = {
  id: string;
  name: string;
  location: string;
  date: Date;
  link: string;
  image: string;
  logo?: string;
  details?: string;
  duration?: string;
  requiresTicket?: boolean;
  sponsors?: string[];
};
// export type EventDataType = {
//   id: string;
//   name: string;
//   slug: string;
//   organizer: string;
//   description: string;
//   address: { isOnline: boolean; location: string };
//   date: Date;
//   duration: number;
//   tags: string[];
//   link: string;
//   image: string;
//   logo?: string;
// };
export type HackathonDataType = {
  name: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
};

export type CfpDataType = {
  name: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
};
export type EventDataType = {
  name: string;
  address: { isOnline: boolean; location: string };
  date: Date;
  tags: string[];
  link: string;
  image: string;
  logo?: string;
};

export type NewsLetterFormType = {
  name: string;
  email: string;
};
