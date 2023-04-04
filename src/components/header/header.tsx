import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { burgerLogo } from "../../constants";

const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  const showClick = () => {
    setActive(true);
  };
  const hideClick = () => {
    setActive(false);
  };
  const items = ["home", "about", "order", "contact"];
  return (
    <nav className="flex justify-around max-md:justify-between max-md:px-10 items-center w-full h-18 bg-white shadow-lg">
      <h3 className="cursor-pointer uppercase text-xl">
        <Link to="/home" className="flex justify-center items-center">
          <img
            src={burgerLogo}
            className="w-16 h-16 object-cover rounded-full"
            alt="burger-logo"
          />
          Burger
        </Link>
      </h3>
      <ul
        className={`flex max-md:absolute top-0 left-${
          active ? `0` : `[-100%]`
        } bg-white max-md:w-full max-md:h-screen max-md:justify-center max-md:flex-col max-md:text-lg transition-all`}
      >
        {items.map((item) => (
          <li
            onClick={hideClick}
            key={item}
            className="uppercase text-black mx-6 cursor-pointer text-md hover:text-orange-500 transition-colors max-md:py-5 max-md:mx-0 max-md:pl-10 hover:max-md:bg-black hover:max-md:text-white "
          >
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
        <FontAwesomeIcon
          icon={faTimes}
          className="hidden max-md:block max-md:absolute top-5 right-10 text-2xl cursor-pointer"
          onClick={hideClick}
        />
        <div className="cart relative max-md:mt-10 ml-10">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-2xl cursor-pointer"
          />
          <p className="badge cursor-pointer w-4 h-4 bg-red-500 rounded-full text-sm flex justify-center items-center absolute bottom-4 left-4 text-white">
            0
          </p>
          <FontAwesomeIcon
            icon={faUser}
            className="text-2xl ml-10 cursor-pointer"
          />
        </div>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        className={`max-md:block hidden text-2xl cursor-pointer`}
        onClick={showClick}
      />
    </nav>
  );
};

export default Header;
