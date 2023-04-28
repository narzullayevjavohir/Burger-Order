import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import ShoppingCartItem from "./ShoppingCartItem";
import { FaTimes } from "react-icons/fa";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      className={`w-96 h-full bg-white shadow-md fixed top-0 right-0 z-40 ${
        isOpen ? "block" : "hidden"
      } overflow-auto`}
    >
      <FaTimes
        className="absolute right-3 top-5 cursor-pointer"
        size="22"
        onClick={closeCart}
      />
      <h1 className="m-5">Cart</h1>
      {cartItems.map((item) => (
        <ShoppingCartItem key={item.id} {...item} />
      ))}
      <div className="flex justify-end items-center mt-5 mr-5 text-xl font-bold">
        Total {""}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((item) => item.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
