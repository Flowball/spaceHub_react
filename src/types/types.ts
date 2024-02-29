export interface SpaceXdata {
  links: {
    patch: {
      small: string;
      large: string;
    };
    webcast: string;
    article: string;
    wikipedia: string;
  };
  name: string;
  rocket: string;
  launchpad: string;
  date_utc: string;
  success: boolean;
  patch: string;
  id: string;
  details: string;
}

export interface CuriosityData {
  img_src: string;
  id: number;
}
