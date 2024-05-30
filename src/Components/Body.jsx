import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RES_CARD_URL } from "../utils";
import Filters from "./Filters";
import SearchBar from "./SeachBar";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () =>{

    const [restaurantList, setRestaurnatList] = useState([]);

    const [filterResList, setFilterResList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData(){
        try
        {
            const data = await fetch(RES_CARD_URL);
            const json = await data.json();
            
            setRestaurnatList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilterResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch
        {
            console.log("Unable to fetch data from API")
        }
    };

    if(restaurantList.length === 0)
    {
        return <Shimmer/>;
    }

    return (
        <div className="bg-gray-120">
            <div className="mx-28 mt-4 object-contain">
                <div className="search-filter flex justify-between align-top px-2">
                    <div className="filter">
                        <Filters restaurantList = {restaurantList} setFilterResList={setFilterResList}/>
                    </div>
                    <div className="search ">
                        <SearchBar restaurantList = {restaurantList} setFilterResList={setFilterResList}/>
                    </div>
                </div>
                {/* <div className="scroll-container "h-200"></div> */}
                <div className="grid object-contain sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {
                        filterResList.map((restaurant) =>(
                            <Link key={restaurant?.info?.id} to={"/restaurant/"+ restaurant?.info?.id} ><RestaurantCard  resData = {restaurant}/></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Body;