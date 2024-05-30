import { ITEM_CATEGORY_URL, RES_MENU_URL } from "../../utils";
import ResDetails from "./ResDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VegFilter from "./VegFilter";
import Shimmer from "../Shimmer";
import CategoryItems from "./CategoryItems";
import CartFooter from "./CartFooter";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(RES_MENU_URL + resId);

    const json = await data.json();

    setResMenuData(json);
  }

  if (resMenuData === null) {
    return <Shimmer />;
  }

  const resInfo = resMenuData?.data?.cards[2]?.card?.card?.info;
  const itemCategories =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => {
        return card?.card?.card?.["@type"] === ITEM_CATEGORY_URL;
      }
    );

  return (
    <div className="bg-gray-120">
      <div className="mx-auto w-7/12 mt-8 object-contain">
        <ResDetails resInfo={resInfo} />
        {/* <VegFilter/> */}
        <div className="relative mx-4 my-6">
          {itemCategories?.map((category) => (
            <CategoryItems
              key={category?.card?.card?.title}
              data={category?.card?.card}
            />
          ))}
        </div>
        {/* <CartFooter/> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
