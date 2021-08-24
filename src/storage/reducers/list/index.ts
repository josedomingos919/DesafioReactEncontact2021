import { language } from "../../../language";
import { actionProps, listTypes, initialStateType } from "./listTypes";

const initialState: initialStateType = {
  list: [],
  mode: true,
  lang: language["pt"],
};

export const listReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case listTypes.GET_TEXT:
      return {
        ...state,
        lang: language[action.value],
      };

    case listTypes.CHANGE_MODE:
      return {
        ...state,
        mode: action.value,
      };

    case listTypes.ADD_ITEM:
      let { list } = state;
      list.push(action.value);

      return {
        ...state,
        list,
      };
    default:
      return state;
  }
};
