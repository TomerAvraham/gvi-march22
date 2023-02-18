import React from 'react'
import { useLocation } from "react-router-dom";
const User = (props) => {
  const location = useLocation();
  const query = new URLSearchParams(location.state);
  const userId = query.getAll("state");
  console.log(userId)

  return (
    <div>User Name:{userId} </div>
  )
}

export default User