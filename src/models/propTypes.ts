import { GridSize } from "@mui/material";

export interface MapoAutoCompleteProps {
  lable: string;
  onItemSelect: (selection: any) => void;
}

export interface MapViewProps {
  leftGridSize?: GridSize;
  rightGridSize?: GridSize;
}

export interface PlacesListProps {
  title?: string;
}
