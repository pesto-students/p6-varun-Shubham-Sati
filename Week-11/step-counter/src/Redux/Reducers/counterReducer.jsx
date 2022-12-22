const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INC5":
      return state + action.payload;
    case "DEC5":
      return state - action.payload;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default counterReducer;
