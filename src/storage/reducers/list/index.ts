import { actionProps, listTypes, initialStateType } from "./listTypes";

const initialState: initialStateType = {
  list: [],
  mode: true,
};

export const listReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
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
