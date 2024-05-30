import { IMG_CONST_URL } from "../utils";
const RestaurantCard = (props) =>{


    const {resData} = props;
    
    const {name, areaName, cuisines, avgRating, sla, cloudinaryImageId} = resData.info;
    return (
        <div className="res-card w-56 bg-white rounded-lg m-4 p-4">
            <div className="overflow-hidden h-36 object-fill rounded-lg">
                <img className="res-img" src={IMG_CONST_URL + cloudinaryImageId} alt="Restaurant-imgage"/>
            </div>
            <div className="ml-1">
                <div>
                    <div className="text-base text-cyan-950">{name}</div>
                </div>
                <div className="">
                    <span className="text-sm">{avgRating} • </span>{sla.deliveryTime} mins
                </div>
                <div className="">
                    <div className="text-xs text-slate-500">{cuisines.slice(0,3).join(", ")}...</div>
                    <div className="text-xs text-slate-500">{areaName}</div>
                </div>
            </div>
        </div>
    )
};

export default RestaurantCard;