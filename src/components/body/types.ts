import { listItemTypes } from "../../storage/reducers/list/listTypes";
import { typeOfFilters } from "../../views/home/types";

export type EnHeaderProps = {
  list: Array<listItemTypes>;
  defaultFilter: typeOfFilters;
  lang: any;
  mode: boolean;
  changeMode: (value: boolean) => any;
  changeLanguage: (value: String) => any;
  addListItem: (value: listItemTypes[]) => any;
  updateListItem: (value: listItemTypes[]) => any;
};

export type ButtomModeProps = {
  active: boolean;
};

export type propsButtomMode = {
  active: boolean;
  mode: boolean;
};

export type ButtonOptiosListProps = {
  active: boolean;
  completed?: boolean;
};

export type ListItensIconRightType = {
  isDone: boolean;
};

export type ListItemTextType = {
  isDone: boolean;
};
