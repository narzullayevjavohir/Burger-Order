import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartItemProps = {
  id: number;
  quantity: number;
};

const ShoppingCartItem = ({ id, quantity }: ShoppingCartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <>
      <div className="flex justify-between items-center w-full px-3 my-2">
        <div className="flex flex-col w-28 h-25 shadow">
          <div className="m-5">
            <div className="flex">
              <img src={item.imgUrl} className="w-28 h-10 object-cover" />
              {quantity > 0 && <span>x{quantity}</span>}
            </div>
            <span className="z-10">{item.name}</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span>{formatCurrency(item.price)}</span>
          <button
            className="ml-3 w-8 h-8 bg-red-600 flex justify-center items-center text-white rounded"
            onClick={() => removeFromCart(item.id)}
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartItem;
