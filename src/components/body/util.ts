import { listItemTypes } from "../../storage/reducers/list/listTypes";
import { routesEnum } from "../../types";

export const changeRoute = (value: routesEnum) => {
  window.location.href = `/${value}`;
};

export const saveList = (list: Array<listItemTypes>) => {
  localStorage.setItem("not_first_time", "1");
  localStorage.setItem("react-todos", JSON.stringify(list));
};

export const getList = (): Array<listItemTypes> => {
  try {
    return JSON.parse(localStorage.getItem("react-todos") || "[]");
  } catch (e) {
    console.error(e);
    return [];
  }
};
