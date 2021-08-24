import { typeOfFilters } from "../../views/home/types";

export type EnHeaderProps = {
  defaultFilter: typeOfFilters;
  lang: any;
  mode: boolean;
  changeMode: (value: boolean) => any;
  changeLanguage: (value: String) => any;
};

export type ButtomModeProps = {
  active: boolean;
};

export type propsButtomMode = {
  active: boolean;
  mode: boolean;
};
