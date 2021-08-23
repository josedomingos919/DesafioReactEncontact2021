const theSameColor = {
  BODY: "#EFEFEF",
  PRIMARY: "#2A2A2A",
  SECUDARY: "#ADADAD",
  BLUE: "#1459FC",
  RED: "#A55A6E",
  HEADER_COLOR: "#203a45",
};

export const getColor = (appMode: boolean) => {
  if (appMode)
    return {
      ...theSameColor,
    };
  else
    return {
      ...theSameColor,
      BODY: "#252525",
      HEADER_COLOR: "#191A21",
    };
};
