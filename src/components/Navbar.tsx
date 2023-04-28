import { Link } from "react-router-dom";
import { navItems } from "../constants/navItems";
import { FiShoppingCart } from "react-icons/fi";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { cartQuantity, openCart } = useShoppingCart();
  return (
    <div className="w-full h-16 bg-white sticky top-0 shadow-md flex justify-around items-center z-30">
      <ul>
        {navItems.map((item, id) => (
          <Link key={id} to={item.path} className="mx-5">
            {item.name}
          </Link>
        ))}
      </ul>
      <div
        className="relative w-12 h-12 rounded-full border border-blue-500 cursor-pointer flex justify-center items-center text-blue-700 hover:bg-blue-500 hover:text-white transition-colors"
        onClick={openCart}
      >
        <FiShoppingCart size="24" />
        {cartQuantity > 0 && (
          <div className="absolute right-0 bottom-0 w-5 h-5 text-sm text-white translate-x-1 translate-y-1 rounded-full bg-red-600 flex justify-center items-center">
            {cartQuantity}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
