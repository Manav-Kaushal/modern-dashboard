import { createContext, useContext, useEffect, useState } from "react";
import { useWindowSize } from "react-use";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowSize();

  const toggleSidebar = () => {
    setActiveSidebar((prevState) => !prevState);
  };

  const handleClick = (key) => {
    setIsClicked({ ...initialState, [key]: true });
  };

  useEffect(() => {
    if (width <= 900) {
      setIsMobile(true);
      setActiveSidebar(false);
    } else {
      setIsMobile(false);
      setActiveSidebar(true);
    }
  }, [width]);

  return (
    <StateContext.Provider
      value={{
        activeSidebar,
        toggleSidebar,
        isClicked,
        handleClick,
        isMobile,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
