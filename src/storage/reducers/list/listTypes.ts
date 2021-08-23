export enum listTypes {
  ADD_ITEM = "ADD_ITEM",
  CHANGE_MODE = "CHANGE_MODE",
}

export type actionProps = {
  value: any;
  type: listTypes;
};

export type listItemTypes = {
  id: string;
  title: string;
  isDone: boolean;
};

export type initialStateType = {
  list: Array<listItemTypes>;
  mode: boolean;
};
