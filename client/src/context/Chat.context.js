import { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

const SERVER_ENDPOINT = "http://localhost:9001";
const socket = io(SERVER_ENDPOINT);

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export default function ChatProvider({ children }) {
  const [isConnect, setIsConnect] = useState(socket.connected);
  const { conversations } = useSelector((store) => store.messages);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnect(true);
    });

    socket.on("disconnect", () => {
      setIsConnect(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  const values = { socket, isConnect, conversations };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
}
