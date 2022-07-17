import { useStateContext } from "@context/ContextProvider";
import avatar from "@static/images/avatar.jpg";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiNotification3Line } from "react-icons/ri";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const NavigationButton = ({ title, icon, color, dotColor, cb }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={cb}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeSidebar, toggleSidebar, isClicked, handleClick } =
    useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavigationButton
        title="Menu"
        icon={<AiOutlineMenu />}
        color="blue"
        cb={toggleSidebar}
      />
      <div className="flex items-center">
        <NavigationButton
          title="Cart"
          icon={<FiShoppingCart />}
          color="blue"
          cb={() => handleClick("cart")}
        />
        <NavigationButton
          title="Chat"
          icon={<BsChatLeft />}
          color="blue"
          dotColor="#03C9D7"
          cb={() => handleClick("chat")}
        />
        <NavigationButton
          title="Notification"
          icon={<RiNotification3Line />}
          color="blue"
          dotColor="#03C9D7"
          cb={() => handleClick("notification")}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <div className="relative w-8 h-8">
              <Image src={avatar} alt="profile icon" className="rounded-full" />
            </div>
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Manav
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
