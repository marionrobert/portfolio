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
