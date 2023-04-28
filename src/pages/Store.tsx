import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <div className="w-full h-full p-3 flex justify-start items-center flex-wrap">
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Store;
