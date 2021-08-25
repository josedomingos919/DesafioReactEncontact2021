import { listItemTypes, listTypes } from "./listTypes";

export const changeMode = (value: boolean) => ({
  type: listTypes.CHANGE_MODE,
  value,
});

export const changeLanguage = (value: String) => ({
  type: listTypes.GET_TEXT,
  value: value,
});

export const addListItem = (value: listItemTypes[]) => ({
  type: listTypes.ADD_ITEM,
  value: value,
});

export const updateListItem = (value: listItemTypes[]) => ({
  type: listTypes.UPDATE,
  value: value,
});
