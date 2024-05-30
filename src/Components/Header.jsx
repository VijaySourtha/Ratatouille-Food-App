import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_ICON, LOGO_URL } from "../utils";
import { useState } from "react";
import Pop from "./Popup";
import { AboutUsIcon, CartIcon, HelpIcon,HomeIcon } from "../utils/Icons";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="flex justify-between bg-white shadow-md ">
      <div className="logo mx-24 ">
        <img className="w-32" src={LOGO_URL} content="Ratatoulie_logo"></img>
      </div>
      <div className="nav-container mx-4">
        <ul className="nav-items flex m-4 p-8 space-x-4 gap-2">
          <Link to=""><li className="flex items-center px-10 cursor-pointer">
            <span className="flex items-center justify-center w-7 h-7"><HomeIcon/></span>
            Home</li></Link>
          <Link to=""><li className="flex items-center px-10 cursor-pointer gap-2">
            <span className="flex items-center justify-center w-7 h-7"><AboutUsIcon/></span>
            About Us</li></Link>
          <Link to=""><li className="flex items-center px-10 cursor-pointer gap-2">
            <span className="flex items-center justify-center w-7 h-7"><HelpIcon/></span>
            Help</li></Link>
          <li
            className="flex items-center px-10 gap-1 cursor-pointer"
            onClick={() => setOpenPopup(true)}
          >
            Cart
            <span className="h-13 w-18 bg-green-600 text-white text-xs font-bold text-center inline-block rounded-full p-1">
              {cartItems.length}
            </span>
          </li>
          <li className="flex items-center px-10 cursor-pointer">
            <span className="">
              <img className="flex items-center rounded-xl justify-center w-7 h-7"src={DEFAULT_PROFILE_ICON}/>
            </span>
          </li>
        </ul>
      </div>
      {openPopup && <Pop open={openPopup} setOpenPopup={setOpenPopup} />}
    </div>
  );
};

export default Header;
