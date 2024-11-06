export interface ApodData {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
  }
  
  export interface NavLink {
    name: string;
    path: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon?: string;
  }