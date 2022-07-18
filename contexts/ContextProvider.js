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
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettingsVisible, setThemeSettingsVisible] = useState(false);

  const { width } = useWindowSize();

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("thememode", e.target.value);
    setThemeSettingsVisible(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettingsVisible(false);
  };

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
        currentColor,
        currentMode,
        themeSettingsVisible,
        setThemeSettingsVisible,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
