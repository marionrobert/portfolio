import { Language } from "./enums/Language";

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  features: string;
  image: string;
  link: string;
}

export interface CellPosition {
  row: number;
  col: number;
}

export interface Position {
  row: number;
  col: number;
  index: number;
}

export interface Option {
  value: Language;
  label: string;
}

export interface Event {
  company: string;
  "start-time": string;
  "end-time": string;
  site?: string;
  description?: string;
  features?: string;
}
