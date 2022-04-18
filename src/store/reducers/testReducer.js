export const testReducer = (state = {}, action) => {
  if (action.type === "TEST") {
    return { ...state, name: "anhisdfj" };
  }
  return state;
};
