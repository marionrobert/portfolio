import { Language } from "./enums/Language";

export interface ProjectProps {
  id: number;
  title: string,
  name: string;
  description: string;
  features: string,
  link: string;
  technologies: string;
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

export interface TimelineItemProps {
  company: string;
  startTime: string;
  site: string | undefined;
  description: string;
  technologies: string;
  color: string;
}
