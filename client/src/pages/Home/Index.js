import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { USER_ROLE } from "../../constants/constants";

const Index = () => {
  const { user } = useSelector((store) => store.auth);
  const { role } = user;

  useEffect(() => {
    if (USER_ROLE.ENTREPRENEUR === role) {
      console.log("Im ENTREPRENEUR");
      // actions for ENTREPRENEUR
    } else if (USER_ROLE.CONSULTANT === role) {
    }
  }, [role]);

  return <div>Index</div>;
};

export default Index;
