import {RupeeIcon, DeliveryIcon, DeliveryClock, StarIcon }from "../../utils/Icons";

const ResDetails = (props) => {

    const { name, cuisines, areaName, avgRating, totalRatingsString, feeDetails, costForTwoMessage, sla } = props?.resInfo;

    return (
        <div className="mx-5">
            <div className="pt-4 outline-none flex justify-between">
                <div className="mr-4">
                    <div className="">
                        <p className=" text-lg font-bold tracking-tight text-blue-950 mb-2 capitalize">{name}</p>
                        <p className=" text-xs text-gray-500 mb-1 text-ellipsis whitespace-nowrap overflow-hidden">{cuisines.slice(0,3).join(", ")}</p>
                    </div>
                    <div className="flex h-3 items-center">
                        <p className="text-xs text-gray-500" aria-hidden="true">{areaName}</p>
                        <p className="text-xs text-gray-500 mx-1" aria-hidden="true">{sla?.lastMileTravelString}</p>
                    </div>
                </div>
                <button className="border-solid border-[1px] border-[#f9f9f9] rounded-md text-center p-2 max-w-[100px] float-right" aria-hidden="true">
                    <span className="flex justify-center text-[#3d9b6d] pb-[10px] border-b border-solid border-gray-300 font-bold mb-2 " aria-hidden="true">
                        <span className=""><StarIcon/></span> 
                        <span className="ml-2">{avgRating}</span> 
                    </span>
                    <span className="text-xs text-gray-600 font-proxima-nova font-semibold" aria-hidden="true">{totalRatingsString}</span>
                </button>
            </div>
            <ul className="mb-2 border-b border-dashed border-gray-300">
                <li className="text-[#7e808c] text-xs flex justify-start">
                    <span className="mr-2"><DeliveryIcon/></span> 
                    <span className="flex-grow" aria-hidden="true">{feeDetails?.message}</span>
                </li>
            </ul>
            <div className="mx-1 outline-none" aria-hidden="true">
                <ul className="flex items-center text-sm font-bold">
                    <li className="flex mr-4">
                        <DeliveryClock/>
                        <span className="ml-2 opacity-75">{sla?.slaString}</span>
                    </li>
                    <li className="flex">
                        <RupeeIcon/>
                        <span className="ml-2 opacity-75">{costForTwoMessage}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ResDetails;