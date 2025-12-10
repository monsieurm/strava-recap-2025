export interface Activity {
  id: string;
  date: Date;
  name: string;
  type: string;
  distance: number; // in km
  elapsedTime: number; // in seconds
  elevationGain: number; // in meters
  bike?: string;
  averageSpeed?: number; // in km/h
}

export interface Stats {
  activeDays: number;
  totalDistance: number; // in km
  totalTime: number; // in seconds
  totalElevation: number; // in meters
  totalActivities: number;
  longestRide: number; // in km
  averageSpeed: number; // in km/h
  favoriteBike: string;
  activities: Activity[];
}

// French format
export interface CSVRowFR {
  "ID de l'activité": string;
  "Date de l'activité": string;
  "Nom de l'activité": string;
  "Type d'activité": string;
  "Distance": string;
  "Temps écoulé": string;
  "Dénivelé positif": string;
  "Matériel": string;
  "Vitesse moyenne": string;
}

// English format
export interface CSVRowEN {
  "Activity ID": string;
  "Activity Date": string;
  "Activity Name": string;
  "Activity Type": string;
  "Distance": string;
  "Elapsed Time": string;
  "Elevation Gain": string;
  "Activity Gear": string;
  "Average Speed": string;
}

export type CSVRow = CSVRowFR | CSVRowEN;

