// These are the types for the database
// Do not import directly from this file. Instead just copy and paste a type from here. This file will change when the server is updated. Only import from the data.d.ts file
export type position = "bench" | "gk" | "def" | "mid" | "att";
export type forecast = "a" | "u" | "m";
export interface clubs {
  club: string;
  fullName?: string; // This was added in 1.19.0
  gameStart: number;
  gameEnd: number;
  opponent: string;
  teamScore?: number; // This was added in 1.16.0
  opponentScore?: number; // This was added in 1.16.0
  league: string;
  home: boolean; // This was added in 1.16.0
  exists: boolean; // This was added in 1.16.0
}
export interface players {
  uid: string;
  name: string;
  nameAscii: string;
  club: string;
  pictureID: number;
  value: number;
  sale_price: number;
  position: position;
  forecast: forecast;
  total_points: number;
  average_points: number;
  last_match: number;
  locked: boolean;
  exists: boolean;
  league: string;
}
