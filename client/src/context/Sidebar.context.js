import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

export default function SidebarProvider({ children }) {
  const [searchFiled, setSearchFiled] = useState("");

  const contextValues = {
    searchFiled,
    setSearchFiled
  };

  return (
    <SidebarContext.Provider value={contextValues}>
      {children}
    </SidebarContext.Provider>
  );
}
