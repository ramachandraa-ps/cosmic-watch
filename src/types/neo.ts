export interface NeoFeed {
    element_count: number;
    links: {
      next: string;
      prev: string;
      self: string;
    };
    near_earth_objects: {
      [date: string]: NearEarthObject[];
    };
  }
  
  export interface NearEarthObject {
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter: {
      kilometers: DiameterRange;
      meters: DiameterRange;
      miles: DiameterRange;
      feet: DiameterRange;
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: CloseApproachData[];
  }
  
  interface DiameterRange {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
  }
  
  interface CloseApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity: {
      kilometers_per_second: string;
      kilometers_per_hour: string;
      miles_per_hour: string;
    };
    miss_distance: {
      astronomical: string;
      lunar: string;
      kilometers: string;
      miles: string;
    };
    orbiting_body: string;
  }