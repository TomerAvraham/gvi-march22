import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routes from "./Routes";
import { isLoginByToken } from "./redux/slices/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoginByToken());
  }, [dispatch]);

  return <Routes />;
};

export default App;
