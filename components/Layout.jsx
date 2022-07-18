import { useStateContext } from "@context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ThemeSettings from "./ThemeSettings";

const Layout = ({ children }) => {
  const {
    activeSidebar,
    themeSettingsVisible,
    setThemeSettingsVisible,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="hover:drop-shadow-xl transition300 hover:bg-light-gray text-white p-3 text-3xl"
              onClick={() => setThemeSettingsVisible(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>

        {/* Sidebar */}
        {activeSidebar ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        {/* NavigationBar */}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeSidebar ? "md:ml-72" : "flex-2"
          }
          `}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          {themeSettingsVisible && <ThemeSettings />}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
