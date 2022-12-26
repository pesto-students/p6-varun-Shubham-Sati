export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const inc5 = (num) => {
  return {
    type: "INC5",
    payload: num,
  };
};
export const dec5 = (num) => {
  return {
    type: "DEC5",
    payload: num,
  };
};
export const reset = () => {
  return {
    type: "RESET",
  };
};
export const logIn = () => {
  return {
    type: "LOG_IN",
  };
};
export const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};
