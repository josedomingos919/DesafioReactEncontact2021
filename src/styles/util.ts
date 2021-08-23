const theSameColor = {
  BODY: "#EFEFEF",
  PRIMARY: "#2A2A2A",
  SECUDARY: "#ADADAD",
  BLUE: "#1459FC",
  RED: "#A55A6E",
  HEADER_COLOR: "#203a45",
  BUTTOM: "#4d616a",
};

export const getColor = (appMode: boolean) => {
  if (appMode)
    return {
      ...theSameColor,
    };
  else
    return {
      ...theSameColor,
      BODY: "#343746",
      BUTTOM: "#343746",
      HEADER_COLOR: "#191A21",
    };
};
