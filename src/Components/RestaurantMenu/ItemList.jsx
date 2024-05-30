import { useDispatch } from "react-redux";
import { addItem } from "../../AppStore/CartSlice";

import { IMG_CONST_URL } from "../../utils/index";

const ItemList = (props) => {
  const dispatch = useDispatch();
  const items = props.items;
  console.log(items);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div
          key={index}
          className="pb-6 my-6 flex justify-start border-b border-gray-400"
        >
          <div className="w-10/12">
            <p className="text-base text-gray-600 font-mono font-bold">
              {item?.card?.info?.name}
            </p>
            <p className="text-sm text-[#3e4152] mb-1">
              {" "}
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="text-xs font-semibold text-gray-800 text-opacity-40">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="ml-4 w-2/12 p-1 relative">
            <img
              className="rounded-md"
              src={IMG_CONST_URL + item?.card?.info?.imageId}
              alt="dish-image"
            />
            <div className="absolute bottom-0 text-xs font-bold left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg bg-white text-[#3d9b6d]">
              <button onClick={() => handleAddToCart(item)}>ADD</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
