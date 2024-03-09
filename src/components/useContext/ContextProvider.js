import * as React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

export const GlobalState = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isOpened, setOpened] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <GlobalState.Provider
      value={{
        activeMenu,
        setOpened,
        isCollapsed,
        setIsCollapsed,
        setActiveMenu,
        isOpened,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export const useStateContext = () => useContext(GlobalState);
