import { useStateContext } from "@context/ContextProvider";
import { links } from "@data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";
import { SiShopware } from "react-icons/si";
import { NavLink } from "./NavLink";

const Sidebar = () => {
  const { activeSidebar, toggleSidebar, isMobile } = useStateContext();

  const handleClose = () => {
    if (activeSidebar && isMobile) {
      toggleSidebar();
    }
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeSidebar && (
        <>
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                <SiShopware /> <span>Shoppy</span>
              </a>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
                onClick={handleClose}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    href={{
                      pathname: "/",
                      query: { key: link.name },
                    }}
                    onClick={handleClose}
                    exact
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
