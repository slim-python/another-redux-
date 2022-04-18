import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testFunc, testFunc1 } from "./store/actions/testAction";
const App = () => {
  const data = useSelector((state) => state.test1Reducer);
  const dispatch = useDispatch();

  const { name } = data;

  console.log(data);

  useEffect(() => {
    dispatch(testFunc1());
  }, []);

  return <div>App name : {name}</div>;
};

export default App;
