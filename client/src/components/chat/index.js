// import React, { Fragment, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// // Components
// import ChatArea from "./components/ChatArea/ChatArea";
// import InputAddMessage from "./components/InputAddMessage/InputAddMessage";

// export default function index() {
//   const { userId } = useParams();
//   // const [userIdInformation, setUserIdInformation] = useState({});

// useEffect(() => {
//   if (userId) {
//     getUserById(userId).then(setUserIdInformation);
//   }
// }, [userId]);

//   return (
// <div>
//   <ChatArea />
//   <InputAddMessage />
// </div>
//   );
// }

export { default } from "./ChatComponents";
