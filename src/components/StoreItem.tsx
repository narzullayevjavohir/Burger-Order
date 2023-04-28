import { FiHeart } from "react-icons/fi";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
  } = useShoppingCart();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const likedClick = (id: number) => {
    if (
      cartItems.find((item) => item.id === id) ||
      cartItems.find((item) => item.id === id) == null
    ) {
      setIsLiked(!isLiked);
      setCount((prev) => prev + 1);
    }
  };
  const quantity = getItemQuantity(id);
  return (
    <div className="w-96 h-96 bg-white shadow-md flex flex-col m-5 relative">
      <img src={imgUrl} className="w-full h-2/3 object-cover" />
      <div className="absolute right-3 top-3 cursor-pointer">
        {isLiked ? (
          <IoHeart size="27" onClick={() => likedClick(id)} />
        ) : (
          <IoHeartOutline size="27" onClick={() => likedClick(id)} />
        )}
      </div>
      <div className="flex justify-between items-center mx-5 pt-2">
        <span className="text-xl font-semibold">{name}</span>
        <span>{formatCurrency(price)}</span>
      </div>
      {quantity === 0 ? (
        <div className="w-[90%] m-auto">
          <button
            className="w-full py-3 bg-blue-600 text-white rounded-md"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center my-2">
            <button
              className="px-3 py-1 bg-blue-600 rounded-md text-white"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <div className="mx-1">
              <span className="text-xl">{quantity}</span> in cart
            </div>
            <button
              className="px-3 py-1 bg-blue-600 rounded-md text-white"
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="w-20 h-8 text-sm rounded-md text-white bg-red-600"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StoreItem;
