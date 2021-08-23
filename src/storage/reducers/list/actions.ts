import { listTypes } from "./listTypes";

export const changeMode = (value: boolean) => ({
  type: listTypes.CHANGE_MODE,
  value,
});
