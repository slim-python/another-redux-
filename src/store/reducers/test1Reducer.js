export const test1Reducer = (state = {}, action) => {
  if (action.type === "TEST1") {
    return { ...state, name: "data from test1" };
  }
  return state;
};
