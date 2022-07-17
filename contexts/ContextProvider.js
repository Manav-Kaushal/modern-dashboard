import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(true);

  const toggleSidebar = () => {
    setActiveSidebar((prevState) => !prevState);
  };

  return (
    <StateContext.Provider value={{ activeSidebar, toggleSidebar }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
