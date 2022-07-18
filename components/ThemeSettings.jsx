import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "@utils/data/dummy";
import { useStateContext } from "@context/ContextProvider";

const ThemeSettings = () => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettingsVisible,
  } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            onClick={() => setThemeSettingsVisible(false)}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray transition300"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          <div className="my-4">
            <input
              id="light"
              name="theme"
              value="Light"
              type="radio"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="my-4">
            <input
              id="dark"
              name="theme"
              value="Dark"
              type="radio"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((color, i) => (
              <TooltipComponent
                key={i}
                content={color.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: color.color }}
                    onClick={() => setColor(color.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        color.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
