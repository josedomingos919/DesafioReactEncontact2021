import { listTypes } from "./listTypes";

export const changeMode = (value: boolean) => ({
  type: listTypes.CHANGE_MODE,
  value,
});

export const changeLanguage = (value: String) => ({
  type: listTypes.GET_TEXT,
  value: value,
});
